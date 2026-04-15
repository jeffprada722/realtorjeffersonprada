import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="pt-[120px] pb-16 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-[36px] font-heading font-normal text-black mb-8">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm text-[#777272] mb-8">Last updated: April 2026</p>

        <div className="space-y-6 text-[16px] leading-[1.7] text-[#333]">
          <section>
            <h2 className="text-[20px] font-heading mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website (realtorjeffersonprada.com), you accept and agree
              to be bound by these Terms and Conditions. If you do not agree to these terms, please
              do not use this website.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-heading mb-3">2. Services</h2>
            <p>
              Jefferson Prada is a licensed real estate agent affiliated with Avanti Way. This website
              provides information about real estate services, property listings, and new developments
              in the South Florida area. All services are subject to applicable real estate laws and
              regulations in the State of Florida.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-heading mb-3">3. Property Information</h2>
            <p>
              Property listings and information displayed on this website are obtained from sources
              deemed reliable but are not guaranteed. Prices, availability, and property details are
              subject to change without notice. All measurements and square footages are approximate.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-heading mb-3">4. Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and design elements, is the
              property of Jefferson Prada or its respective owners and is protected by copyright laws.
              Unauthorized reproduction or distribution is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-heading mb-3">5. Limitation of Liability</h2>
            <p>
              Jefferson Prada and Avanti Way shall not be held liable for any damages arising from
              the use of this website or reliance on information provided herein. This website is not
              intended to solicit properties already listed with other brokers.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-heading mb-3">6. Contact</h2>
            <p>
              For questions regarding these terms, please contact:<br />
              Email: info@realtorjeffersonprada.com<br />
              Phone: +1(786) 616-6307
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-[#333] underline hover:no-underline">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
