import Link from "next/link";

export default function AccessibilityPage() {
  return (
    <main className="pt-[120px] pb-16 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-[36px] font-heading font-normal text-black mb-8">
          Accessibility Statement
        </h1>
        <p className="text-sm text-[#777272] mb-8">Last updated: April 2026</p>

        <div className="space-y-6 text-[16px] leading-[1.7] text-[#333]">
          <section>
            <h2 className="text-[20px] font-heading mb-3">Our Commitment</h2>
            <p>
              Jefferson Prada is committed to ensuring digital accessibility for people of all
              abilities. We are continually improving the user experience for everyone and applying
              the relevant accessibility standards.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-heading mb-3">Standards</h2>
            <p>
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
              These guidelines explain how to make web content more accessible to people with
              disabilities and more user-friendly for everyone.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-heading mb-3">Measures Taken</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Semantic HTML structure for screen reader compatibility</li>
              <li>Sufficient color contrast ratios for text readability</li>
              <li>Keyboard navigation support throughout the site</li>
              <li>Alt text for all meaningful images</li>
              <li>Responsive design for all device sizes</li>
              <li>Clear and consistent navigation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-heading mb-3">Feedback</h2>
            <p>
              We welcome your feedback on the accessibility of this website. If you encounter any
              barriers or have suggestions for improvement, please contact us:
            </p>
            <p className="mt-3">
              Email: info@realtorjeffersonprada.com<br />
              Phone: +1(786) 616-6307
            </p>
            <p className="mt-3">
              We will make reasonable efforts to address accessibility concerns promptly.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-heading mb-3">Fair Housing</h2>
            <p>
              Jefferson Prada and Avanti Way are committed to complying with all federal, state,
              and local fair housing laws. We do not discriminate on the basis of race, color,
              religion, sex, handicap, familial status, national origin, sexual orientation, gender
              identity, or any other protected class.
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
