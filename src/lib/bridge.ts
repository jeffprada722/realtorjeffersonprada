/**
 * Bridge Interactive RESO Web API client.
 *
 * Provides server-side access to MLS listings via Bridge Interactive
 * (https://bridgeinteractive.com). Used as the data source for the
 * realtor-website featured listings and property search.
 *
 * IDX compliance (Miami Realtors / SEFMLS agreement):
 *   - Data refreshed at minimum every 24 hours (Schedule A point 5)
 *   - No AI/ML training on retrieved data (III.B.4)
 *   - No redistribution to third parties
 *   - Listing attribution (ListOfficeName) preserved per listing
 *   - SEFMLS copyright displayed on every page that renders MLS data
 *
 * Auth: Bearer token (server token) — server-side only. Never expose
 * BRIDGE_SERVER_TOKEN to the client.
 */

import type { PropertyListing, ListingFilters } from "@/types";

const BRIDGE_BASE_URL = "https://api.bridgedataoutput.com/api/v2";
const BRIDGE_SERVER_TOKEN = process.env.BRIDGE_SERVER_TOKEN;
/**
 * Bridge dataset identifier. Each MLS has its own dataset key in Bridge.
 * Look it up in Bridge portal → Data Access tab. For Miami Realtors
 * (SEFMLS) the dataset is typically "mlspin" or a Miami-specific key —
 * verify after agreement is fully executed.
 *
 * Default "miamire" is a placeholder. Override via BRIDGE_DATASET env var.
 */
const BRIDGE_DATASET = process.env.BRIDGE_DATASET || "miamire";

/**
 * Cache duration in seconds. Per IDX agreement (Schedule A.5),
 * data must be refreshed AT MINIMUM every 24 hours. We refresh
 * every 6 hours to give a fresher experience while staying compliant.
 */
const CACHE_TTL_SECONDS = 60 * 60 * 6; // 6 hours

/** Avanti Way Realty office identifier — Jefferson's brokerage */
const AVANTI_WAY_OFFICE_NAME = "Avanti Way Realty LLC";

/** Whether the Bridge integration is configured and ready to call. */
export function isBridgeConfigured(): boolean {
  return Boolean(BRIDGE_SERVER_TOKEN && BRIDGE_DATASET);
}

/** RESO Web API Property record (subset of fields we use). */
interface ResoProperty {
  ListingKey: string;
  ListingId?: string;
  UnparsedAddress?: string;
  StreetNumber?: string;
  StreetName?: string;
  StreetSuffix?: string;
  City?: string;
  StateOrProvince?: string;
  PostalCode?: string;
  ListPrice?: number;
  BedroomsTotal?: number;
  BathroomsTotalInteger?: number;
  BathroomsFull?: number;
  LivingArea?: number;
  LotSizeSquareFeet?: number;
  YearBuilt?: number;
  PublicRemarks?: string;
  PropertyType?: string;
  PropertySubType?: string;
  StandardStatus?: string;
  MlsStatus?: string;
  ListAgentFullName?: string;
  ListOfficeName?: string;
  Latitude?: number;
  Longitude?: number;
  ModificationTimestamp?: string;
  Media?: Array<{ MediaURL?: string; Order?: number }>;
}

interface ResoCollectionResponse {
  "@odata.context"?: string;
  "@odata.count"?: number;
  value: ResoProperty[];
}

/** Map RESO StandardStatus → our internal status enum. */
function mapStatus(status?: string): PropertyListing["status"] {
  if (!status) return "Active";
  const s = status.toLowerCase();
  if (s.includes("active under contract")) return "Active Under Contract";
  if (s.includes("pending")) return "Pending";
  if (s.includes("closed")) return "Closed";
  if (s.includes("active")) return "Active";
  return "Active";
}

/**
 * Format a RESO Property record into our PropertyListing shape.
 * Sets `listingCourtesy` only when the office is NOT Avanti Way Realty,
 * per the IDX agreement attribution rule (Schedule A point 9).
 */
function toPropertyListing(p: ResoProperty): PropertyListing {
  const sortedMedia = (p.Media || [])
    .filter((m) => Boolean(m.MediaURL))
    .sort((a, b) => (a.Order ?? 0) - (b.Order ?? 0))
    .map((m) => m.MediaURL as string);

  const address =
    p.UnparsedAddress ||
    [p.StreetNumber, p.StreetName, p.StreetSuffix].filter(Boolean).join(" ");

  const isAvantiWay =
    p.ListOfficeName?.toLowerCase().includes("avanti way") ?? false;

  return {
    id: p.ListingKey,
    mlsNumber: p.ListingId,
    address: address || "Address available on request",
    city: p.City || "",
    state: p.StateOrProvince || "FL",
    zip: p.PostalCode || "",
    price: p.ListPrice ?? 0,
    beds: p.BedroomsTotal ?? 0,
    baths: p.BathroomsTotalInteger ?? p.BathroomsFull ?? 0,
    sqft: p.LivingArea ?? 0,
    imageUrl: sortedMedia[0] || "",
    photos: sortedMedia,
    description: p.PublicRemarks,
    yearBuilt: p.YearBuilt,
    lotSize: p.LotSizeSquareFeet,
    propertyType: p.PropertySubType || p.PropertyType,
    status: mapStatus(p.StandardStatus || p.MlsStatus),
    listingCourtesy: isAvantiWay ? undefined : p.ListOfficeName,
    latitude: p.Latitude,
    longitude: p.Longitude,
    modificationTimestamp: p.ModificationTimestamp,
  };
}

/**
 * Build an OData $filter string from our ListingFilters.
 * RESO Web API uses OData filter syntax.
 */
function buildFilter(f: ListingFilters): string {
  const parts: string[] = ["StandardStatus eq 'Active'"];

  if (f.city) {
    parts.push(`City eq '${escapeOData(f.city)}'`);
  }
  if (typeof f.minPrice === "number") {
    parts.push(`ListPrice ge ${f.minPrice}`);
  }
  if (typeof f.maxPrice === "number") {
    parts.push(`ListPrice le ${f.maxPrice}`);
  }
  if (typeof f.beds === "number") {
    parts.push(`BedroomsTotal ge ${f.beds}`);
  }
  if (typeof f.baths === "number") {
    parts.push(`BathroomsTotalInteger ge ${f.baths}`);
  }
  if (f.propertyType) {
    parts.push(`PropertySubType eq '${escapeOData(f.propertyType)}'`);
  }
  if (f.keyword) {
    parts.push(
      `(contains(UnparsedAddress, '${escapeOData(f.keyword)}') or contains(PublicRemarks, '${escapeOData(f.keyword)}'))`
    );
  }

  return parts.join(" and ");
}

function escapeOData(value: string): string {
  return value.replace(/'/g, "''");
}

/** Custom error class for Bridge API failures. */
export class BridgeApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly endpoint: string
  ) {
    super(message);
    this.name = "BridgeApiError";
  }
}

/**
 * Internal fetch wrapper. Adds Bearer auth, sets cache headers
 * compliant with the IDX agreement, and parses RESO responses.
 */
async function bridgeFetch<T>(path: string, init: RequestInit = {}): Promise<T> {
  if (!isBridgeConfigured()) {
    throw new BridgeApiError(
      "Bridge Interactive not configured. Set BRIDGE_SERVER_TOKEN and BRIDGE_DATASET env vars.",
      500,
      path
    );
  }

  const url = `${BRIDGE_BASE_URL}/${BRIDGE_DATASET}${path}`;

  const response = await fetch(url, {
    ...init,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${BRIDGE_SERVER_TOKEN}`,
      ...init.headers,
    },
    next: { revalidate: CACHE_TTL_SECONDS },
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new BridgeApiError(
      `Bridge API ${response.status}: ${body || response.statusText}`,
      response.status,
      url
    );
  }

  return (await response.json()) as T;
}

/**
 * Fetch active listings from the MLS via Bridge Interactive.
 * Returns at most `limit` results (default 12, max 100).
 */
export async function fetchListings(
  filters: ListingFilters = {}
): Promise<PropertyListing[]> {
  const limit = Math.min(filters.limit ?? 12, 100);
  const offset = filters.offset ?? 0;

  const params = new URLSearchParams({
    $filter: buildFilter(filters),
    $top: String(limit),
    $skip: String(offset),
    $orderby: "ListPrice desc",
  });

  const data = await bridgeFetch<ResoCollectionResponse>(
    `/Property?${params.toString()}`
  );

  return data.value.map(toPropertyListing);
}

/**
 * Fetch listings courtesy of Avanti Way Realty only — used for the
 * "Featured Listings" section since Jefferson is an Avanti Way agent.
 */
export async function fetchAvantiWayListings(
  limit = 12
): Promise<PropertyListing[]> {
  const params = new URLSearchParams({
    $filter: `StandardStatus eq 'Active' and ListOfficeName eq '${escapeOData(AVANTI_WAY_OFFICE_NAME)}'`,
    $top: String(limit),
    $orderby: "ModificationTimestamp desc",
  });

  const data = await bridgeFetch<ResoCollectionResponse>(
    `/Property?${params.toString()}`
  );

  return data.value.map(toPropertyListing);
}

/** Fetch a single listing by ListingKey. Returns null if not found. */
export async function fetchListingById(
  id: string
): Promise<PropertyListing | null> {
  try {
    const data = await bridgeFetch<ResoProperty>(`/Property/${encodeURIComponent(id)}`);
    return toPropertyListing(data);
  } catch (err) {
    if (err instanceof BridgeApiError && err.status === 404) {
      return null;
    }
    throw err;
  }
}
