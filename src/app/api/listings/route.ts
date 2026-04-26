/**
 * GET /api/listings
 *
 * Server-side proxy to Bridge Interactive RESO Web API.
 * Returns active MLS listings, optionally filtered.
 *
 * Query params:
 *   - city: string (e.g. "Brickell")
 *   - minPrice / maxPrice: number
 *   - beds / baths: number (minimum)
 *   - propertyType: string (e.g. "Condominium")
 *   - keyword: string (matched against address + remarks)
 *   - limit: number (max 100, default 12)
 *   - offset: number
 *   - source: "all" | "avanti" (default "avanti" for Featured Listings)
 *
 * IDX compliance:
 *   - Server-side only — never exposes BRIDGE_SERVER_TOKEN to the browser
 *   - Cache revalidates every 6h (well under the 24h IDX agreement minimum)
 *   - X-Robots-Tag header blocks indexing of raw JSON
 */

import { NextResponse, type NextRequest } from "next/server";
import {
  fetchListings,
  fetchAvantiWayListings,
  isBridgeConfigured,
  BridgeApiError,
} from "@/lib/bridge";
import type { ListingFilters } from "@/types";

export const runtime = "nodejs";

function parseNumber(value: string | null): number | undefined {
  if (!value) return undefined;
  const n = Number(value);
  return Number.isFinite(n) ? n : undefined;
}

export async function GET(request: NextRequest) {
  if (!isBridgeConfigured()) {
    return NextResponse.json(
      {
        error: "Bridge Interactive integration is not yet active.",
        reason:
          "The Member Data License Agreement is pending broker signature. Listings will appear once the agreement is fully executed.",
        listings: [],
      },
      {
        status: 503,
        headers: {
          "X-Robots-Tag": "noindex",
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      }
    );
  }

  const params = request.nextUrl.searchParams;
  const source = params.get("source") || "avanti";

  const filters: ListingFilters = {
    city: params.get("city") || undefined,
    minPrice: parseNumber(params.get("minPrice")),
    maxPrice: parseNumber(params.get("maxPrice")),
    beds: parseNumber(params.get("beds")),
    baths: parseNumber(params.get("baths")),
    propertyType: params.get("propertyType") || undefined,
    keyword: params.get("keyword") || undefined,
    limit: parseNumber(params.get("limit")) ?? 12,
    offset: parseNumber(params.get("offset")) ?? 0,
  };

  try {
    const listings =
      source === "avanti"
        ? await fetchAvantiWayListings(filters.limit ?? 12)
        : await fetchListings(filters);

    return NextResponse.json(
      { listings, count: listings.length },
      {
        headers: {
          "X-Robots-Tag": "noindex",
          "Cache-Control": "public, s-maxage=21600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (err) {
    const status = err instanceof BridgeApiError ? err.status : 500;
    const message =
      err instanceof Error ? err.message : "Unknown error fetching listings";

    return NextResponse.json(
      { error: message, listings: [] },
      {
        status,
        headers: { "X-Robots-Tag": "noindex" },
      }
    );
  }
}
