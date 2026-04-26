import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "DMCA Notice | Jefferson Prada Realtor",
  description:
    "Digital Millennium Copyright Act (DMCA) notice and designated agent for realtorjeffersonprada.com. Procedure for reporting alleged copyright infringement.",
  alternates: { canonical: "/dmca" },
  robots: { index: true, follow: true },
};

export default function DMCAPage() {
  return (
    <>
      <Header />
      <main className="pt-[120px] pb-16 px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-[36px] font-heading font-normal text-black mb-2">
            Digital Millennium Copyright Act (DMCA) Notice
          </h1>
          <p className="text-sm text-[#777] mb-10">
            Last updated: April 26, 2026
          </p>

          <div className="space-y-6 text-[16px] leading-[1.7] text-[#333]">
            <p>
              Realtorjeffersonprada.com (the &ldquo;Site&rdquo;) respects the
              intellectual property rights of others and expects users of the
              Site to do the same. In accordance with the Digital Millennium
              Copyright Act of 1998 (the &ldquo;DMCA&rdquo;), the text of which
              may be found on the U.S. Copyright Office website at{" "}
              <Link
                href="https://www.copyright.gov/legislation/dmca.pdf"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                copyright.gov/legislation/dmca.pdf
              </Link>
              , we will respond expeditiously to claims of copyright
              infringement committed using the Site that are reported to our
              Designated Copyright Agent identified below.
            </p>

            <h2 className="text-[22px] font-heading mt-10">
              Reporting Copyright Infringement
            </h2>
            <p>
              If you are a copyright owner, or authorized on behalf of one, and
              you believe that copyrighted work has been copied in a way that
              constitutes copyright infringement that is taking place through
              the Site, please submit your claim via email to our Designated
              Copyright Agent. Your written notification (per 17 U.S.C. §
              512(c)(3)) must include substantially the following:
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>
                A physical or electronic signature of the copyright owner or a
                person authorized to act on their behalf.
              </li>
              <li>
                Identification of the copyrighted work claimed to have been
                infringed.
              </li>
              <li>
                Identification of the material claimed to be infringing or to
                be the subject of infringing activity, with information
                reasonably sufficient to permit us to locate the material.
              </li>
              <li>
                Information reasonably sufficient to allow us to contact you,
                including an address, telephone number, and email address.
              </li>
              <li>
                A statement that you have a good-faith belief that the use of
                the material is not authorized by the copyright owner, its
                agent, or the law.
              </li>
              <li>
                A statement that the information in the notification is
                accurate, and under penalty of perjury, that you are authorized
                to act on behalf of the copyright owner.
              </li>
            </ol>

            <h2 className="text-[22px] font-heading mt-10">
              Designated Copyright Agent
            </h2>
            <p>
              Jefferson Alberto Prada Camacho is registered as the Designated
              Copyright Agent in the U.S. Copyright Office DMCA Designated
              Agent Directory (registration number DMCA-1071960, effective
              April 26, 2026).
            </p>
            <div className="bg-[#f5f5f5] border border-[#e5e5e5] p-6 rounded-sm">
              <p className="font-semibold text-[#333]">Jefferson Prada</p>
              <p>Attn: DMCA Agent</p>
              <p>Avanti Way Realty LLC</p>
              <p>8400 NW 33rd St, Unit 104</p>
              <p>Doral, FL 33139</p>
              <p className="mt-3">
                Email:{" "}
                <Link
                  href="mailto:info@realtorjeffersonprada.com"
                  className="underline"
                >
                  info@realtorjeffersonprada.com
                </Link>
              </p>
              <p>
                Phone:{" "}
                <Link href="tel:+17866166307" className="underline">
                  +1 (786) 616-6307
                </Link>
              </p>
            </div>

            <h2 className="text-[22px] font-heading mt-10">
              Counter-Notification
            </h2>
            <p>
              If you believe that material posted by you was removed or access
              to it was disabled by mistake or misidentification, you may file
              a counter-notification (per 17 U.S.C. § 512(g)) by submitting
              written notification to our Designated Copyright Agent identified
              above. Pursuant to the DMCA, the counter-notification must
              include substantially the following:
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Your physical or electronic signature.</li>
              <li>
                Identification of the material that has been removed or to
                which access has been disabled, and the location at which the
                material appeared before it was removed or access to it was
                disabled.
              </li>
              <li>
                A statement under penalty of perjury that you have a good-faith
                belief that the material was removed or disabled as a result of
                mistake or misidentification.
              </li>
              <li>
                Your name, address, telephone number, and a statement that you
                consent to the jurisdiction of the federal court for the
                judicial district in which your address is located, and that
                you will accept service of process from the person who provided
                notification of the alleged infringement.
              </li>
            </ol>

            <h2 className="text-[22px] font-heading mt-10">Repeat Infringers</h2>
            <p>
              In accordance with the DMCA and other applicable law, we have
              adopted a policy of terminating, in appropriate circumstances and
              at our sole discretion, the access of users who are deemed to be
              repeat infringers.
            </p>

            <h2 className="text-[22px] font-heading mt-10">MLS Data</h2>
            <p>
              Listing information displayed on the Site is provided under
              license from the Miami Association of REALTORS® and Southeast
              Florida MLS (SEFMLS) for use in this Internet Data Exchange (IDX)
              display. Copyright Southeast Florida MLS a/k/a SEFMLS &copy;{" "}
              {new Date().getFullYear()}. Use of MLS data is restricted to
              non-commercial, personal use solely to identify potential
              properties for purchase. All other use is strictly prohibited.
            </p>
          </div>

          <div className="mt-12 flex gap-6">
            <Link href="/" className="text-[#333] underline hover:no-underline">
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="text-[#333] underline hover:no-underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
