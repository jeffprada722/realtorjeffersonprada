import Link from "next/link";

export default function AccessibilityPage() {
  return (
    <main className="pt-[120px] pb-16 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-[36px] font-heading font-normal text-black mb-8">
          Accessibility
        </h1>

        <div className="space-y-6 text-[16px] leading-[1.7] text-[#333]">
          <p>
            Jefferson Prada is committed to providing an accessible website. If you have difficulty
            accessing content, have difficulty viewing a file on the website, or notice any
            accessibility problems, please contact us at{" "}
            <Link href="mailto:info@realtorjeffersonprada.com" className="underline">
              info@realtorjeffersonprada.com
            </Link>{" "}
            or call{" "}
            <Link href="tel:+17866166307" className="underline">
              +1(786) 616-6307
            </Link>{" "}
            to specify the nature of the accessibility issue and any assistive technology you use.
            We will strive to provide the content you need in the format you require.
          </p>
          <p>
            Jefferson Prada welcomes your suggestions and comments about improving ongoing efforts
            to increase the accessibility of this website.
          </p>

          <h2 className="text-[20px] font-heading mt-8">
            Accessibility Resources for Developers, Document Authors, and Contractors
          </h2>
          <p>
            We use a variety of accessibility guides and training materials to make the content
            provided on our website accessible. These resources are available as a public service
            to assist anyone interested in developing and authoring accessible electronic content.
          </p>

          <h3 className="text-[18px] font-heading mt-6">ANDI - Web Content Accessibility Test Tool</h3>
          <p>
            ANDI, the Accessible Name &amp; Description Inspector is a lightweight accessibility
            tool you can use to check for 508 compliance as you design and develop web applications.
            Installation is as easy as adding a favorite or bookmark.
          </p>
          <p>ANDI is a simple interface that:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Automatically detects potential accessibility issues</li>
            <li>Discovers what a screen reader should say</li>
            <li>Suggests ways to improve accessibility</li>
            <li>Uses a design method that simplifies complex W3C specifications</li>
          </ul>

          <h3 className="text-[18px] font-heading mt-6">Alternative Text Guide</h3>
          <p>
            Alternative text can be applied to images, charts, diagrams, buttons, and other
            interface elements to convey information and purpose textually. Problems occur when
            alternative text is written incorrectly, confuses users, or does not provide the
            correct context. We strive to provide meaningful alternative text by following
            practical guidance contained in comprehensive reference guides.
          </p>

          <h3 className="text-[18px] font-heading mt-6">Accessible Document Authoring &amp; Testing</h3>
          <p>
            We aim to provide an accessible HTML equivalent of all electronic documents provided on
            the site. In situations where this is not possible, our goal is to provide each
            electronic document in an accessible format. We use the following guides to author and
            test documents for accessibility:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Word - Accessibility Checklist</li>
            <li>PDF - Accessibility Checklist</li>
            <li>PowerPoint - Accessibility Checklist</li>
            <li>Excel - Accessibility Checklist</li>
            <li>Outlook - Accessibility Checklist</li>
          </ul>

          <h2 className="text-[20px] font-heading mt-8">Fair Housing</h2>
          <p>
            Jefferson Prada and Avanti Way are committed to complying with all federal, state,
            and local fair housing laws. We do not discriminate on the basis of race, color,
            religion, sex, handicap, familial status, national origin, sexual orientation, gender
            identity, or any other protected class.
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
