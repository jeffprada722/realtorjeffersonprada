export interface PropertyListing {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  detailUrl?: string;
  status?: "Active" | "Pending" | "new listing" | "Active Under Contract" | "Closed";
  /** IDX compliance: name of the listing brokerage if not Avanti Way Realty */
  listingCourtesy?: string;
  /** MLS listing number */
  mlsNumber?: string;
  /** Optional gallery (Bridge Interactive Media) */
  photos?: string[];
  /** Property description from MLS */
  description?: string;
  /** Year built */
  yearBuilt?: number;
  /** Lot size in sqft */
  lotSize?: number;
  /** Property type: Residential, Condo, Townhouse, etc. */
  propertyType?: string;
  /** Latitude / Longitude (for map view) */
  latitude?: number;
  longitude?: number;
  /** ISO timestamp of when listing was last modified in MLS */
  modificationTimestamp?: string;
}

/** Filters for /api/listings query */
export interface ListingFilters {
  type?: "sale" | "rent";
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  beds?: number;
  baths?: number;
  propertyType?: string;
  keyword?: string;
  limit?: number;
  offset?: number;
}

export interface NewDevelopment {
  name: string;
  imageUrl: string;
  detailUrl: string;
}

export interface SocialLink {
  platform: "facebook" | "youtube" | "instagram" | "linkedin";
  url: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterContact {
  name: string;
  subtitle: string;
  phone: string;
  email: string;
  address: string;
}
