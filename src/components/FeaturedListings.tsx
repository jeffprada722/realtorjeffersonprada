"use client";

import { useState } from "react";
import Link from "next/link";
import { HeartIcon, ChevronLeftIcon, ChevronRightIcon } from "./icons";
import type { PropertyListing } from "@/types";

const LISTINGS: PropertyListing[] = [
  {
    id: "1",
    address: "16479 NE 30th Ave",
    city: "North Miami Beach",
    state: "FL",
    zip: "33160",
    price: 20500000,
    beds: 5,
    baths: 6,
    sqft: 7843,
    imageUrl: "https://placehold.co/600x400/333/fff?text=Property+1",
  },
  {
    id: "2",
    address: "610 Harbor Cir",
    city: "Key Biscayne",
    state: "FL",
    zip: "33149",
    price: 11300000,
    beds: 6,
    baths: 6,
    sqft: 5216,
    imageUrl: "https://placehold.co/600x400/333/fff?text=Property+2",
  },
  {
    id: "3",
    address: "848 Harbour Isle Pl",
    city: "North Palm Beach",
    state: "FL",
    zip: "33410",
    price: 8750000,
    beds: 5,
    baths: 5,
    sqft: 4611,
    imageUrl: "https://placehold.co/600x400/333/fff?text=Property+3",
  },
  {
    id: "4",
    address: "833 Harbour Isle Pl",
    city: "North Palm Beach",
    state: "FL",
    zip: "33410",
    price: 6995000,
    beds: 4,
    baths: 6,
    sqft: 6777,
    imageUrl: "https://placehold.co/600x400/333/fff?text=Property+4",
  },
  {
    id: "5",
    address: "79 W Shore Dr",
    city: "Miami",
    state: "FL",
    zip: "33133",
    price: 4350000,
    beds: 4,
    baths: 4,
    sqft: 3718,
    imageUrl: "https://placehold.co/600x400/333/fff?text=Property+5",
  },
  {
    id: "6",
    address: "19950 Beach Rd #4S",
    city: "Jupiter",
    state: "FL",
    zip: "33469",
    price: 3995000,
    beds: 3,
    baths: 3,
    sqft: 3500,
    imageUrl: "https://placehold.co/600x400/333/fff?text=Property+6",
    status: "Pending",
  },
  {
    id: "7",
    address: "3752 NE 199th St",
    city: "Aventura",
    state: "FL",
    zip: "33180",
    price: 3995000,
    beds: 5,
    baths: 6,
    sqft: 5218,
    imageUrl: "https://placehold.co/600x400/333/fff?text=Property+7",
    status: "new listing",
  },
  {
    id: "8",
    address: "4286 S Douglas Rd",
    city: "Miami",
    state: "FL",
    zip: "33133",
    price: 3700000,
    beds: 5,
    baths: 5,
    sqft: 2700,
    imageUrl: "https://placehold.co/600x400/333/fff?text=Property+8",
    status: "Active Under Contract",
  },
  {
    id: "9",
    address: "151 Crandon Blvd #1222",
    city: "Key Biscayne",
    state: "FL",
    zip: "33149",
    price: 3400000,
    beds: 4,
    baths: 3,
    sqft: 3127,
    imageUrl: "https://placehold.co/600x400/333/fff?text=Property+9",
  },
  {
    id: "10",
    address: "17001 Collins Ave #3808",
    city: "Sunny Isles Beach",
    state: "FL",
    zip: "33160",
    price: 3390000,
    beds: 4,
    baths: 4,
    sqft: 2394,
    imageUrl: "https://placehold.co/600x400/333/fff?text=Property+10",
  },
  {
    id: "11",
    address: "19955 NE 38th Ct #1002",
    city: "Aventura",
    state: "FL",
    zip: "33180",
    price: 3300000,
    beds: 3,
    baths: 4,
    sqft: 2890,
    imageUrl: "https://placehold.co/600x400/333/fff?text=Property+11",
  },
  {
    id: "12",
    address: "12510 Ramiro St",
    city: "Coral Gables",
    state: "FL",
    zip: "33156",
    price: 3249000,
    beds: 6,
    baths: 3,
    sqft: 3350,
    imageUrl: "https://placehold.co/600x400/333/fff?text=Property+12",
  },
];

const CARDS_PER_PAGE_DESKTOP = 3;
const TOTAL_PAGES = Math.ceil(LISTINGS.length / CARDS_PER_PAGE_DESKTOP);

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function ListingCard({ listing }: { listing: PropertyListing }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  // Simulate multiple images per listing (in production these would be real)
  const images = [listing.imageUrl];

  function handlePrevImage(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function handleNextImage(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  function handleFavorite(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorited((prev) => !prev);
  }

  return (
    <div className="group cursor-pointer bg-white transition-shadow duration-300 hover:shadow-lg">
      {/* Image container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={images[imageIndex]}
          alt={`${listing.address}, ${listing.city}`}
          className="h-full w-full object-cover"
        />

        {/* Dark gradient overlay at bottom for price */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Price overlay */}
        <span className="absolute bottom-3 left-3 text-lg font-semibold text-white">
          {priceFormatter.format(listing.price)}
        </span>

        {/* Status badge (top-left) */}
        {listing.status && (
          <span className="absolute top-3 left-3 bg-black px-3 py-1 text-xs font-medium uppercase tracking-wide text-white">
            {listing.status}
          </span>
        )}

        {/* Favorite heart (top-right) */}
        <button
          type="button"
          onClick={handleFavorite}
          aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 transition-colors hover:bg-white"
        >
          <HeartIcon
            className={`h-4 w-4 ${
              isFavorited
                ? "fill-red-500 stroke-red-500"
                : "fill-none stroke-[#333]"
            }`}
          />
        </button>

        {/* Image nav arrows (visible on hover) */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrevImage}
              aria-label="Previous image"
              className="absolute top-1/2 left-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-white"
            >
              <ChevronLeftIcon className="h-4 w-4 text-[#333]" />
            </button>
            <button
              type="button"
              onClick={handleNextImage}
              aria-label="Next image"
              className="absolute top-1/2 right-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-white"
            >
              <ChevronRightIcon className="h-4 w-4 text-[#333]" />
            </button>
          </>
        )}
      </div>

      {/* Card details */}
      <div className="px-3 py-4">
        <h2 className="text-base font-normal leading-snug text-[#333]">
          {listing.address}
        </h2>
        <p className="mt-0.5 text-base font-normal text-[#333]">
          {listing.city}, {listing.state} {listing.zip}
        </p>
        <p className="mt-2 text-sm text-[#777272]">
          {listing.beds} Beds &middot; {listing.baths} Baths &middot;{" "}
          {listing.sqft.toLocaleString("en-US")} Sq.Ft.
        </p>
        {/* IDX compliance: listing attribution (required by SEFMLS agreement) */}
        {listing.listingCourtesy && (
          <p className="mt-2 text-[11px] text-[#aaa] leading-snug">
            This listing is courtesy of {listing.listingCourtesy}
          </p>
        )}
        {listing.mlsNumber && (
          <p className="mt-0.5 text-[11px] text-[#bbb]">
            MLS# {listing.mlsNumber}
          </p>
        )}
      </div>
    </div>
  );
}

export function FeaturedListings() {
  const [currentPage, setCurrentPage] = useState(0);

  function goToPage(page: number) {
    setCurrentPage(page);
  }

  // Get listings for current page (desktop: 3 per page)
  const startIndex = currentPage * CARDS_PER_PAGE_DESKTOP;
  const visibleListings = LISTINGS.slice(
    startIndex,
    startIndex + CARDS_PER_PAGE_DESKTOP
  );

  return (
    <section className="px-4 py-[60px]">
      {/* Section heading */}
      <h1 className="mb-10 text-center font-heading text-[32px] font-normal text-[#333]">
        Featured Listings
      </h1>

      {/* Carousel container */}
      <div className="mx-auto max-w-6xl">
        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {visibleListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>

        {/* Pagination dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: TOTAL_PAGES }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToPage(index)}
              aria-label={`Go to page ${index + 1}`}
              aria-current={currentPage === index ? "true" : undefined}
              className={`h-3 w-3 rounded-full border border-[#333] transition-colors ${
                currentPage === index ? "bg-[#333]" : "bg-transparent"
              }`}
            />
          ))}
        </div>

        {/* View All button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/featured-listings"
            className="inline-block w-[230px] bg-[#333] px-6 py-4 text-center font-button text-base text-white transition-colors hover:bg-[#444]"
            style={{ border: "1px solid #333" }}
          >
            View All
          </Link>
        </div>

        {/* SEFMLS Copyright Disclaimer — required by IDX Agreement */}
        <p className="mt-8 text-[11px] text-[#aaa] leading-relaxed text-center max-w-3xl mx-auto">
          Copyright Southeast Florida MLS a/k/a SEFMLS &copy; {new Date().getFullYear()}. Accuracy of listing
          information is not guaranteed. Listing information is provided for personal consumer,
          non-commercial use, solely to identify potential properties for potential purchase.
          All other use is strictly prohibited and may be a violation of federal and state law.
        </p>
      </div>
    </section>
  );
}
