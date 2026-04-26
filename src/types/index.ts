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
  status?: "Pending" | "new listing" | "Active Under Contract";
  /** IDX compliance: name of the listing brokerage if not Avanti Way Realty */
  listingCourtesy?: string;
  /** MLS listing number */
  mlsNumber?: string;
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
