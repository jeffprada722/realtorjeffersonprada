import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppBubble } from "@/components/WhatsAppBubble";
import { FeaturedListings } from "@/components/FeaturedListings";

export const metadata: Metadata = {
  title: "Featured Listings Miami | Jefferson Prada Realtor",
  description:
    "Browse featured property listings in Miami, Brickell, Coral Gables, Key Biscayne, Aventura, and South Florida. Jefferson Prada, Avanti Way Realty. Call (786) 616-6307.",
  alternates: { canonical: "/featured-listings" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Featured Listings Miami | Jefferson Prada Realtor",
    description:
      "Curated property listings in Miami and South Florida. Luxury homes, condos, and investment properties. Jefferson Prada, Avanti Way Realty.",
  },
};

export default function FeaturedListingsPage() {
  return (
    <>
      <Header />
      <WhatsAppBubble />
      <main>
        {/* Page Hero */}
        <section className="bg-[#333] pt-[110px] pb-14 px-6 text-white">
          <div className="mx-auto max-w-6xl">
            <p className="text-[12px] font-sans uppercase tracking-[0.15em] text-white/50">
              Properties
            </p>
            <h1 className="mt-3 text-[44px] md:text-[56px] font-heading font-normal leading-tight">
              Featured Listings
            </h1>
            <p className="mt-3 text-[17px] text-white/70 font-sans max-w-xl">
              A curated selection of properties across Miami and South Florida.
              Updated regularly from the MIAMI MLS.
            </p>
          </div>
        </section>

        {/* IDX note */}
        <div className="bg-blue-50 border-b border-blue-100 px-6 py-3">
          <p className="mx-auto max-w-6xl text-[13px] font-sans text-blue-700 text-center">
            Looking for a specific property or neighborhood?&nbsp;
            <Link href="/search" className="font-semibold underline">
              Use the full property search
            </Link>
            &nbsp;or&nbsp;
            <Link href="/contact" className="font-semibold underline">
              contact me directly
            </Link>
            &nbsp;for off-market opportunities.
          </p>
        </div>

        {/* Listings */}
        <FeaturedListings />

        {/* SEFMLS IDX Disclaimer — exact text required by Miami Realtors IDX Agreement */}
        <section className="px-6 pb-8">
          <div className="mx-auto max-w-6xl border-t border-[#eee] pt-6">
            <p className="text-[11px] font-sans text-[#aaa] leading-relaxed">
              Copyright Southeast Florida MLS a/k/a SEFMLS &copy; {new Date().getFullYear()}.
              Accuracy of listing information is not guaranteed. Listing information
              is provided for personal consumer, non-commercial use, solely to identify
              potential properties for potential purchase. All other use is strictly
              prohibited and may be a violation of federal and state law.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#333] py-14 px-6 text-white text-center">
          <div className="mx-auto max-w-xl">
            <h2 className="text-[28px] font-heading font-normal">
              Don&apos;t see what you&apos;re looking for?
            </h2>
            <p className="mt-3 text-[15px] font-sans text-white/70">
              I have access to the full Miami MLS and off-market opportunities
              that never hit public listings. Tell me what you need.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center border border-white text-white px-10 py-3 text-[15px] font-sans hover:bg-white hover:text-[#333] transition-colors"
            >
              Contact Jefferson
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
