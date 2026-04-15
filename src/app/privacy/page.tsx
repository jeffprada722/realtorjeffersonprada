import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="pt-[120px] pb-16 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-[36px] font-heading font-normal text-black mb-8">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#777272] mb-8">Last updated: April 2026</p>

        <div className="space-y-6 text-[16px] leading-[1.7] text-[#333]">
          <section>
            <h2 className="text-[20px] font-heading mb-3">1. Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide when contacting us,
              including your name, email address, phone number, and property preferences. We also
              collect standard web analytics data such as IP address, browser type, and pages visited.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-heading mb-3">2. How We Use Your Information</h2>
            <p>
              Your information is used to respond to inquiries, provide real estate services, send
              property updates (with your consent), and improve our website experience. We do not
              sell or rent your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-heading mb-3">3. Data Protection</h2>
            <p>
              We implement reasonable security measures to protect your personal information.
              However, no method of transmission over the Internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-heading mb-3">4. Cookies</h2>
            <p>
              This website may use cookies to enhance your browsing experience and analyze site
              traffic. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-heading mb-3">5. Third-Party Services</h2>
            <p>
              We may use third-party services for analytics, property listings (MLS/IDX), and
              communication. These services have their own privacy policies governing the use of
              your information.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-heading mb-3">6. Your Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of your personal
              information. To exercise these rights, contact us at info@realtorjeffersonprada.com.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-heading mb-3">7. Contact</h2>
            <p>
              For privacy-related inquiries:<br />
              Jefferson Prada - Real Estate Agent<br />
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
