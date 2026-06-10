import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppBubble } from "@/components/WhatsAppBubble";

export const metadata: Metadata = {
  title: "Search Properties Miami | Jefferson Prada Realtor",
  description:
    "Search homes, condos, and investment properties for sale and for rent in Miami, Brickell, Coral Gables, Coconut Grove, and South Florida. Jefferson Prada, Avanti Way Realty.",
  alternates: { canonical: "/search" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Search Properties Miami | Jefferson Prada Realtor",
    description:
      "Find your next property in Miami. Search by neighborhood, price, property type, and bedrooms. Jefferson Prada, Avanti Way Realty.",
  },
};

const PROPERTY_TYPES = [
  "Single Family Home",
  "Condo / Apartment",
  "Townhouse",
  "Multi-Family",
  "Land",
  "Commercial",
];

const NEIGHBORHOODS = [
  "Brickell",
  "Coral Gables",
  "Coconut Grove",
  "Pinecrest",
  "Sunny Isles Beach",
  "Aventura",
  "Miami Beach",
  "Key Biscayne",
  "Doral",
  "Wynwood",
  "South Beach",
  "North Miami",
];

const PRICE_RANGES = [
  { label: "Under $500K", value: "0-500000" },
  { label: "$500K - $1M", value: "500000-1000000" },
  { label: "$1M - $2M", value: "1000000-2000000" },
  { label: "$2M - $5M", value: "2000000-5000000" },
  { label: "$5M+", value: "5000000-99999999" },
];

export default function SearchPage() {
  return (
    <>
      <Header />
      <WhatsAppBubble />
      <main>
        {/* Page Hero */}
        <section className="bg-[#333] pt-[110px] pb-14 px-6 text-white">
          <div className="mx-auto max-w-6xl">
            <p className="text-[12px] font-sans uppercase tracking-[0.15em] text-white/50">
              Property Search
            </p>
            <h1 className="mt-3 text-[44px] md:text-[56px] font-heading font-normal leading-tight">
              Find Your Property
            </h1>
            <p className="mt-3 text-[17px] text-white/70 font-sans max-w-lg">
              Tell me what you&apos;re looking for and I&apos;ll search the full
              MIAMI MLS personally. Filter by neighborhood, price, type, and more.
            </p>
          </div>
        </section>

        {/* Search Form */}
        <section className="py-12 px-6 bg-[#f5f5f5] border-b border-[#e5e5e5]">
          <div className="mx-auto max-w-5xl">
            <form
              action="/search/results"
              method="GET"
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {/* Transaction type */}
              <div>
                <label
                  htmlFor="type"
                  className="block text-[11px] font-sans uppercase tracking-widest text-[#888] mb-1"
                >
                  For Sale / For Rent
                </label>
                <select
                  id="type"
                  name="type"
                  className="w-full border border-[#ddd] bg-white px-3 py-3 text-[14px] font-sans text-[#333] focus:outline-none focus:border-[#333]"
                >
                  <option value="sale">For Sale</option>
                  <option value="rent">For Rent</option>
                </select>
              </div>

              {/* Neighborhood */}
              <div>
                <label
                  htmlFor="neighborhood"
                  className="block text-[11px] font-sans uppercase tracking-widest text-[#888] mb-1"
                >
                  Neighborhood
                </label>
                <select
                  id="neighborhood"
                  name="neighborhood"
                  className="w-full border border-[#ddd] bg-white px-3 py-3 text-[14px] font-sans text-[#333] focus:outline-none focus:border-[#333]"
                >
                  <option value="">Any</option>
                  {NEIGHBORHOODS.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price range */}
              <div>
                <label
                  htmlFor="price"
                  className="block text-[11px] font-sans uppercase tracking-widest text-[#888] mb-1"
                >
                  Price Range
                </label>
                <select
                  id="price"
                  name="price"
                  className="w-full border border-[#ddd] bg-white px-3 py-3 text-[14px] font-sans text-[#333] focus:outline-none focus:border-[#333]"
                >
                  <option value="">Any Price</option>
                  {PRICE_RANGES.map(({ label, value }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Property type */}
              <div>
                <label
                  htmlFor="property_type"
                  className="block text-[11px] font-sans uppercase tracking-widest text-[#888] mb-1"
                >
                  Property Type
                </label>
                <select
                  id="property_type"
                  name="property_type"
                  className="w-full border border-[#ddd] bg-white px-3 py-3 text-[14px] font-sans text-[#333] focus:outline-none focus:border-[#333]"
                >
                  <option value="">Any Type</option>
                  {PROPERTY_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Bedrooms */}
              <div>
                <label
                  htmlFor="beds"
                  className="block text-[11px] font-sans uppercase tracking-widest text-[#888] mb-1"
                >
                  Min Bedrooms
                </label>
                <select
                  id="beds"
                  name="beds"
                  className="w-full border border-[#ddd] bg-white px-3 py-3 text-[14px] font-sans text-[#333] focus:outline-none focus:border-[#333]"
                >
                  <option value="">Any</option>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n}+
                    </option>
                  ))}
                </select>
              </div>

              {/* Bathrooms */}
              <div>
                <label
                  htmlFor="baths"
                  className="block text-[11px] font-sans uppercase tracking-widest text-[#888] mb-1"
                >
                  Min Bathrooms
                </label>
                <select
                  id="baths"
                  name="baths"
                  className="w-full border border-[#ddd] bg-white px-3 py-3 text-[14px] font-sans text-[#333] focus:outline-none focus:border-[#333]"
                >
                  <option value="">Any</option>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n}+
                    </option>
                  ))}
                </select>
              </div>

              {/* Keyword */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="keyword"
                  className="block text-[11px] font-sans uppercase tracking-widest text-[#888] mb-1"
                >
                  Keyword or Address
                </label>
                <input
                  id="keyword"
                  name="keyword"
                  type="text"
                  placeholder="e.g. waterfront, pool, Brickell, MLS#..."
                  className="w-full border border-[#ddd] bg-white px-3 py-3 text-[14px] font-sans text-[#333] focus:outline-none focus:border-[#333]"
                />
              </div>

              {/* Submit */}
              <div className="sm:col-span-2 lg:col-span-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <p className="text-[12px] text-[#999] font-sans">
                  Your criteria will be sent to Jefferson, who will run a full MLS search personally.
                </p>
                <Link
                  href="/contact"
                  className="flex-shrink-0 bg-[#333] text-white px-10 py-3 text-[15px] font-sans hover:bg-black transition-colors"
                >
                  Request a Property Search
                </Link>
              </div>
            </form>
          </div>
        </section>

        {/* IDX Coming Soon */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="w-16 h-16 bg-[#f5f5f5] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-[28px]">🏠</span>
            </div>
            <h2 className="text-[28px] font-heading font-normal text-[#333]">
              Full MLS Search Coming Soon
            </h2>
            <p className="mt-4 text-[15px] font-sans text-[#666] leading-relaxed max-w-lg mx-auto">
              I&apos;m integrating direct MIAMI MLS access so you can search
              every active listing from this page. In the meantime, I can pull
              any search for you personally. Just tell me what you&apos;re
              looking for.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#333] text-white px-8 py-3 text-[15px] font-sans hover:bg-black transition-colors"
              >
                Request a Property Search
              </Link>
              <Link
                href="/featured-listings"
                className="inline-flex items-center justify-center border border-[#333] text-[#333] px-8 py-3 text-[15px] font-sans hover:bg-[#333] hover:text-white transition-colors"
              >
                View Featured Listings
              </Link>
            </div>
          </div>
        </section>

        {/* Neighborhood grid */}
        <section className="bg-[#f5f5f5] py-14 px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-[24px] font-heading font-normal text-[#333] text-center mb-8">
              Browse by Neighborhood
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {NEIGHBORHOODS.map((n) => (
                <Link
                  key={n}
                  href={`/contact?neighborhood=${encodeURIComponent(n)}`}
                  className="bg-white border border-[#e5e5e5] px-4 py-3 text-[14px] font-sans text-[#444] text-center hover:border-[#333] hover:text-[#333] transition-colors"
                >
                  {n}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SEFMLS IDX Disclaimer — required by Miami Realtors IDX Agreement */}
        <section className="px-6 py-6 border-t border-[#eee]">
          <p className="mx-auto max-w-6xl text-[11px] font-sans text-[#aaa] leading-relaxed">
            Copyright Southeast Florida MLS a/k/a SEFMLS &copy; {new Date().getFullYear()}.
            Accuracy of listing information is not guaranteed. Listing information is provided
            for personal consumer, non-commercial use, solely to identify potential properties
            for potential purchase. All other use is strictly prohibited and may be a violation
            of federal and state law.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
