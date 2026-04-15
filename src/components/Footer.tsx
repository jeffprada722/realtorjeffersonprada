import { FacebookIcon, YoutubeIcon, InstagramIcon } from "./icons";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#333] text-white pt-8 pb-4">
      <div className="mx-auto max-w-6xl px-6">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Left column: branding + contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div>
                <h2 className="text-[20px] font-heading text-white">
                  Jefferson Prada
                </h2>
                <p className="text-[14px] text-white">
                  Real Estate Agent
                </p>
              </div>
              <div className="h-10 w-px bg-white/30" />
              <Image
                src="/images/logo-avanti-white.png"
                alt="Avanti Way"
                width={80}
                height={30}
                className="object-contain"
              />
            </div>

            {/* Contact info */}
            <div className="space-y-1 text-[14px]">
              <p>
                <Link href="tel:+17866166307" className="hover:underline">
                  +1(786) 616-6307
                </Link>
              </p>
              <p>
                <Link href="mailto:info@realtorjeffersonprada.com" className="hover:underline">
                  info@realtorjeffersonprada.com
                </Link>
              </p>
              <p>8400 NW 33rd St, Unit 104, Doral, FL 33139</p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/realtorjeffersonprada"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:opacity-70 transition-opacity"
              >
                <FacebookIcon className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@realtorjeffersonprada"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:opacity-70 transition-opacity"
              >
                <YoutubeIcon className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/realtor.jeffersonprada/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:opacity-70 transition-opacity"
              >
                <InstagramIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Legal text */}
        <div className="mt-8 border-t border-white/10 pt-4">
          <p className="text-[12px] text-white/60 leading-relaxed">
            Jefferson Prada is a licensed real estate agent affiliated with
            Avanti Way. Avanti Way is a licensed real estate broker and abides
            by equal housing opportunity laws. All material presented herein is
            intended for informational purposes only. Information is compiled
            from sources deemed reliable but is subject to errors, omissions,
            changes in price, condition, sale, or withdrawal without notice. All
            measurements and square footages are approximate. This is not
            intended to solicit properties already listed.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-4 border-t border-white/10 pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12px]">
          <div className="flex items-center gap-2 text-white/60 flex-wrap">
            <Link href="/terms" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
            <span>|</span>
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/accessibility" className="hover:text-white">
              Accessibility
            </Link>
            <span>|</span>
            <span>&copy; 2026 Jefferson Prada. All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
