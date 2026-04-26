import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fair Housing Notice | Jefferson Prada Realtor",
  description:
    "Equal Housing Opportunity. Jefferson Prada and Avanti Way Realty comply with the Federal Fair Housing Act, Florida Fair Housing Act, and Americans with Disabilities Act.",
  alternates: { canonical: "/fair-housing" },
  robots: { index: true, follow: true },
};

export default function FairHousingPage() {
  return (
    <>
      <Header />
      <main className="pt-[120px] pb-16 px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-[36px] font-heading font-normal text-black mb-2">
            Fair Housing Notice
          </h1>
          <p className="text-sm text-[#777] mb-10">
            Equal Housing Opportunity
          </p>

          <div className="space-y-6 text-[16px] leading-[1.7] text-[#333]">
            <p className="text-[18px] font-medium">
              Jefferson Prada and Avanti Way Realty LLC are committed to
              providing equal housing opportunity to all individuals.
            </p>

            <h2 className="text-[22px] font-heading mt-10">
              Federal Fair Housing Act
            </h2>
            <p>
              Under the Federal Fair Housing Act (Title VIII of the Civil
              Rights Act of 1968, as amended), it is illegal to discriminate in
              the sale, rental, advertising, or financing of housing on the
              basis of:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Race</li>
              <li>Color</li>
              <li>National origin</li>
              <li>Religion</li>
              <li>Sex (including gender identity and sexual orientation)</li>
              <li>Familial status (presence of children under 18, or pregnant women)</li>
              <li>Disability</li>
            </ul>

            <h2 className="text-[22px] font-heading mt-10">
              Florida Fair Housing Act
            </h2>
            <p>
              The Florida Fair Housing Act (Chapter 760, Florida Statutes)
              extends protection at the state level and prohibits the same
              forms of discrimination, with enforcement by the Florida
              Commission on Human Relations.
            </p>

            <h2 className="text-[22px] font-heading mt-10">
              Americans with Disabilities Act (ADA)
            </h2>
            <p>
              We are committed to making this website and our services
              accessible to all users, including individuals with disabilities,
              in compliance with the Americans with Disabilities Act and
              Section 508 of the Rehabilitation Act. If you experience any
              accessibility barrier on this website, please contact us
              immediately so we can address it.
            </p>
            <p>
              See our{" "}
              <Link href="/accessibility" className="underline">
                Accessibility Statement
              </Link>{" "}
              for more details on our ongoing accessibility efforts.
            </p>

            <h2 className="text-[22px] font-heading mt-10">
              Reporting Housing Discrimination
            </h2>
            <p>
              If you believe you have been a victim of housing discrimination,
              you can file a complaint with:
            </p>
            <div className="space-y-4 mt-4">
              <div className="border-l-4 border-[#0B1F33] bg-[#f9fafb] p-4">
                <p className="font-semibold">
                  U.S. Department of Housing and Urban Development (HUD)
                </p>
                <p>1-800-669-9777 (Voice)</p>
                <p>1-800-927-9275 (TTY)</p>
                <p>
                  <Link
                    href="https://www.hud.gov/program_offices/fair_housing_equal_opp"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    hud.gov/fair_housing
                  </Link>
                </p>
              </div>
              <div className="border-l-4 border-[#0B1F33] bg-[#f9fafb] p-4">
                <p className="font-semibold">
                  Florida Commission on Human Relations
                </p>
                <p>1-800-342-8170</p>
                <p>
                  <Link
                    href="https://fchr.myflorida.com"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    fchr.myflorida.com
                  </Link>
                </p>
              </div>
            </div>

            <h2 className="text-[22px] font-heading mt-10">Contact Jefferson</h2>
            <p>
              If you have questions about this Fair Housing notice or believe
              you have experienced discriminatory treatment in connection with
              services from this website, please contact:
            </p>
            <div className="bg-[#f5f5f5] border border-[#e5e5e5] p-6 rounded-sm">
              <p className="font-semibold text-[#333]">Jefferson Prada</p>
              <p>Avanti Way Realty LLC</p>
              <p>8400 NW 33rd St, Unit 104, Doral, FL 33139</p>
              <p>
                <Link href="tel:+17866166307" className="underline">
                  +1 (786) 616-6307
                </Link>
              </p>
              <p>
                <Link
                  href="mailto:info@realtorjeffersonprada.com"
                  className="underline"
                >
                  info@realtorjeffersonprada.com
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-12 flex gap-6 flex-wrap">
            <Link href="/" className="text-[#333] underline hover:no-underline">
              Back to Home
            </Link>
            <Link
              href="/accessibility"
              className="text-[#333] underline hover:no-underline"
            >
              Accessibility
            </Link>
            <Link
              href="/dmca"
              className="text-[#333] underline hover:no-underline"
            >
              DMCA Notice
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
