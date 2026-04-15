import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="pt-[120px] pb-16 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-[36px] font-heading font-normal text-black mb-4">
          Terms &amp; Conditions
        </h1>

        <div className="flex gap-4 mb-8 text-sm">
          <span className="font-semibold">Terms of Service</span>
          <Link href="/privacy" className="text-[#333] underline">Privacy Policy</Link>
        </div>

        <div className="space-y-6 text-[16px] leading-[1.7] text-[#333]">
          <p className="text-sm text-[#777272]">Last updated: 04/15/2026</p>

          <p>
            Please read these Terms of Use (&quot;Terms&quot;, &quot;Terms of Use&quot;) carefully before using the
            realtorjeffersonprada.com website (the &quot;Service&quot;) operated by Jefferson Prada (&quot;us&quot;,
            &quot;we&quot;, or &quot;our&quot;).
          </p>
          <p>
            Your access to and use of the Service is conditioned on your acceptance of and compliance
            with these Terms. These Terms apply to all visitors, users and others who access or use
            the Service.
          </p>
          <p>
            By accessing or using the Service you agree to be bound by these Terms. If you disagree
            with any part of the terms then you may not be granted or access the Service.
          </p>

          <h2 className="text-[20px] font-heading mt-8">Accounts</h2>
          <p>
            When you create an account with us, you must provide us information that is accurate,
            complete, and up to date at all times. Failure to do so constitutes a breach of the
            Terms, which may result in immediate termination of your account on our Service.
          </p>
          <p>
            You are responsible for safeguarding the password that you use to access the Service and
            for any activities or actions under your password, whether your password is with our
            Service or a third-party service.
          </p>
          <p>
            You agree not to disclose your password to any third party. You must notify us
            immediately upon becoming aware of any breach of security or unauthorized use of your
            account.
          </p>

          <h2 className="text-[20px] font-heading mt-8">Intellectual Property</h2>
          <p>
            The Service and its original content, features and functionality are and will remain the
            exclusive property of Jefferson Prada and its licensors.
          </p>

          <h2 className="text-[20px] font-heading mt-8">Links To Other Websites</h2>
          <p>
            Our Service may contain links to third-party websites or services that are not owned or
            controlled by Jefferson Prada.
          </p>
          <p>
            Jefferson Prada has no control over, and assumes no responsibility for, the content,
            privacy policies, or practices of any third party websites or services. You further
            acknowledge and agree that Jefferson Prada shall not be responsible or liable, directly
            or indirectly, for any damage or loss caused or alleged to be caused by or in connection
            with use of or reliance on any such content, goods or services available on or through
            any such websites or services.
          </p>
          <p>
            We strongly advise you to read the terms and conditions and privacy policies of any
            third-party websites or services that you visit.
          </p>

          <h2 className="text-[20px] font-heading mt-8">IDX or MLS Listing Images</h2>
          <p>
            Jefferson Prada shall hold no liability or responsibility with respect to images and
            content on the Jefferson Prada website, and shall be released and held harmless with
            respect to any problem that may arise from images that are outside the control of
            Jefferson Prada. In the event of an issue or problem with images or content placed on
            the Jefferson Prada website, which appear as a result of MLS/IDX listings or via any
            third party, any IDX or MLS LISTING IMAGE legal matters should be dealt with the third
            party that placed such image or content on the IDX or MLS system. As such, anyone that
            is looking for legal compensation shall indemnify and hold Jefferson Prada and its
            affiliates harmless from and against any and all losses, liabilities, claims, charges,
            actions, proceedings, demands, judgments, settlements, costs and expenses (including,
            without limitation, fees and expenses of counsel) which any of Jefferson Prada or its
            affiliates may incur as a result of or arising in any way out of Jefferson Prada&apos;s use of
            the IDX/MLS listings.
          </p>

          <h2 className="text-[20px] font-heading mt-8">Termination</h2>
          <p>
            We may terminate or suspend your account immediately, without prior notice or liability,
            for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
          <p>
            Upon termination, your right to use the Service will immediately cease. If you wish to
            terminate your account, you may simply discontinue using the Service.
          </p>
          <p>
            All provisions of the Terms which by their nature should survive termination shall
            survive termination, including, without limitation, ownership provisions, warranty
            disclaimers, indemnity and limitations of liability.
          </p>

          <h2 className="text-[20px] font-heading mt-8">Disclaimer</h2>
          <p>
            Your use of the Service is at your sole risk. The Service is provided on an &quot;AS IS&quot; and
            &quot;AS AVAILABLE&quot; basis. The Service is provided without warranties of any kind, whether
            express or implied, including, but not limited to, implied warranties of
            merchantability, fitness for a particular purpose, non-infringement or course of
            performance.
          </p>

          <h2 className="text-[20px] font-heading mt-8">Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of FL, USA
            without regard to its conflict of law provisions.
          </p>
          <p>
            Our failure to enforce any right or provision of these Terms will not be considered a
            waiver of those rights. If any provision of these Terms is held to be invalid or
            unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            These Terms constitute the entire agreement between us regarding our Service, and
            supersede and replace any prior agreements we might have between us regarding the
            Service.
          </p>

          <h2 className="text-[20px] font-heading mt-8">Changes</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any
            time. If a revision is material we will try to provide at least 15 days notice prior to
            any new terms taking effect. What constitutes a material change will be determined at
            our sole discretion.
          </p>
          <p>
            By continuing to access or use our Service after those revisions become effective, you
            agree to be bound by the revised terms. If you do not agree to the new terms, please
            refrain from using the Service.
          </p>

          <h2 className="text-[20px] font-heading mt-8">Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <Link href="mailto:info@realtorjeffersonprada.com" className="underline">
              info@realtorjeffersonprada.com
            </Link>{" "}
            or call{" "}
            <Link href="tel:+17866166307" className="underline">
              +1(786) 616-6307
            </Link>.
          </p>
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
