"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HeartIcon, ChevronLeftIcon, ChevronRightIcon } from "./icons";
import type { PropertyListing } from "@/types";

const CARDS_PER_PAGE_DESKTOP = 3;

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function ListingCard({ listing }: { listing: PropertyListing }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  const images = listing.photos?.length ? listing.photos : [listing.imageUrl].filter(Boolean);

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

  const currentImage = images[imageIndex] || "";

  return (
    <div className="group cursor-pointer bg-white transition-shadow duration-300 hover:shadow-lg">
      {/* Image container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#eee]">
        {currentImage ? (
          <img
            src={currentImage}
            alt={`${listing.address}, ${listing.city}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-[#f0f0f0]">
            <span className="text-[#bbb] text-sm">No image available</span>
          </div>
        )}

        {/* Dark gradient overlay at bottom for price */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Price overlay */}
        <span className="absolute bottom-3 left-3 text-lg font-semibold text-white">
          {priceFormatter.format(listing.price)}
        </span>

        {/* Status badge (top-left) */}
        {listing.status && listing.status !== "Active" && (
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

/** Shown while the MLS feed is pending broker approval. */
function PendingApprovalPanel() {
  return (
    <div className="mx-auto max-w-2xl text-center py-16 px-6">
      <div className="w-16 h-16 bg-[#f5f5f5] border border-[#e5e5e5] flex items-center justify-center mx-auto mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 text-[#999]"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </div>
      <h2 className="text-[24px] font-heading font-normal text-[#333]">
        MLS Listings Coming Soon
      </h2>
      <p className="mt-4 text-[15px] font-sans text-[#666] leading-relaxed max-w-md mx-auto">
        Live property listings from the MIAMI MLS will appear here once the MLS
        data feed authorization is complete. In the meantime, I can personally
        pull any search for you.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-[#333] text-white px-8 py-3 text-[15px] font-sans hover:bg-black transition-colors"
        >
          Request a Property Search
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center border border-[#333] text-[#333] px-8 py-3 text-[15px] font-sans hover:bg-[#333] hover:text-white transition-colors"
        >
          Contact Jefferson
        </Link>
      </div>
    </div>
  );
}

type FeedState = "loading" | "pending" | "live";

export function FeaturedListings() {
  const [feedState, setFeedState] = useState<FeedState>("loading");
  const [listings, setListings] = useState<PropertyListing[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  // Attempt to load live MLS data from the Bridge-backed API route.
  // The route returns 503 with { listings: [], error: "MLS feed pending approval" }
  // while MLS_FEED_ENABLED is false or creds are missing. We treat any 503 / empty
  // response as "pending" and show the pending-approval panel.
  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch("/api/listings?source=avanti&limit=12");
        if (cancelled) return;
        if (res.status === 503) {
          setFeedState("pending");
          return;
        }
        if (!res.ok) {
          setFeedState("pending");
          return;
        }
        const data: { listings?: PropertyListing[] } = await res.json();
        if (cancelled) return;
        if (!data.listings || data.listings.length === 0) {
          setFeedState("pending");
          return;
        }
        setListings(data.listings);
        setFeedState("live");
      } catch {
        if (!cancelled) setFeedState("pending");
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  // Loading skeleton
  if (feedState === "loading") {
    return (
      <section className="px-4 py-[60px]">
        <h1 className="mb-10 text-center font-heading text-[32px] font-normal text-[#333]">
          Featured Listings
        </h1>
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="animate-pulse bg-[#f0f0f0] h-72" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Pending approval state
  if (feedState === "pending") {
    return (
      <section className="px-4 py-[60px]">
        <h1 className="mb-10 text-center font-heading text-[32px] font-normal text-[#333]">
          Featured Listings
        </h1>
        <div className="mx-auto max-w-6xl">
          <PendingApprovalPanel />
        </div>
      </section>
    );
  }

  // Live MLS feed
  const totalPages = Math.max(1, Math.ceil(listings.length / CARDS_PER_PAGE_DESKTOP));
  const startIndex = currentPage * CARDS_PER_PAGE_DESKTOP;
  const visibleListings = listings.slice(startIndex, startIndex + CARDS_PER_PAGE_DESKTOP);

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
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentPage(index)}
                aria-label={`Go to page ${index + 1}`}
                aria-current={currentPage === index ? "true" : undefined}
                className={`h-3 w-3 rounded-full border border-[#333] transition-colors ${
                  currentPage === index ? "bg-[#333]" : "bg-transparent"
                }`}
              />
            ))}
          </div>
        )}

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
