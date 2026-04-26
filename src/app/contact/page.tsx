import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppBubble } from "@/components/WhatsAppBubble";

export const metadata: Metadata = {
  title: "Contact Jefferson Prada | Miami Realtor (786) 616-6307",
  description:
    "Contact Jefferson Prada, Real Estate Sales Associate at Avanti Way Realty in Miami. Call (786) 616-6307 or send a message to start your real estate conversation today.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Jefferson Prada | Miami Realtor",
    description:
      "Schedule a free strategy call with Jefferson Prada. Buyers, sellers, and investors welcome. Miami, FL. (786) 616-6307.",
  },
};

const CONTACT_ITEMS = [
  {
    label: "Phone",
    value: "+1 (786) 616-6307",
    href: "tel:+17866166307",
  },
  {
    label: "Email",
    value: "info@realtorjeffersonprada.com",
    href: "mailto:info@realtorjeffersonprada.com",
  },
  {
    label: "Office",
    value: "8400 NW 33rd St, Unit 104, Doral, FL 33122",
    href: "https://maps.google.com/?q=8400+NW+33rd+St+Doral+FL+33122",
  },
];

const INTEREST_OPTIONS = [
  "Buying a Home",
  "Selling a Property",
  "Investment Properties",
  "Pre-Construction",
  "Market Analysis",
  "Just Exploring",
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <WhatsAppBubble />
      <main>
        {/* Page Hero */}
        <section className="bg-[#333] pt-[110px] pb-14 px-6 text-white">
          <div className="mx-auto max-w-6xl">
            <p className="text-[12px] font-sans uppercase tracking-[0.15em] text-white/50">
              Contact
            </p>
            <h1 className="mt-3 text-[44px] md:text-[56px] font-heading font-normal leading-tight">
              Let&apos;s Talk
            </h1>
            <p className="mt-3 text-[17px] text-white/70 font-sans max-w-lg">
              No pressure, no scripts. Tell me what you&apos;re working on and
              I&apos;ll tell you honestly what makes sense.
            </p>
          </div>
        </section>

        {/* Contact body */}
        <section className="py-16 px-6">
          <div className="mx-auto max-w-6xl grid md:grid-cols-[1fr_1.6fr] gap-16">
            {/* Left: contact info */}
            <div>
              <h2 className="text-[22px] font-heading font-normal text-[#333]">
                Reach Me Directly
              </h2>
              <p className="mt-3 text-[14px] font-sans text-[#666] leading-relaxed">
                I respond to every message personally. Typical response time is
                under 2 hours during business days.
              </p>

              <div className="mt-8 space-y-6">
                {CONTACT_ITEMS.map(({ label, value, href }) => (
                  <div key={label}>
                    <p className="text-[11px] font-sans uppercase tracking-widest text-[#999]">
                      {label}
                    </p>
                    <a
                      href={href}
                      target={href.startsWith("https://maps") ? "_blank" : undefined}
                      rel={href.startsWith("https://maps") ? "noopener noreferrer" : undefined}
                      className="mt-1 block text-[15px] font-sans text-[#333] hover:text-black transition-colors"
                    >
                      {value}
                    </a>
                  </div>
                ))}
              </div>

              {/* Office hours */}
              <div className="mt-10 p-6 bg-[#f5f5f5]">
                <p className="text-[12px] font-sans uppercase tracking-widest text-[#999]">
                  Availability
                </p>
                <div className="mt-3 space-y-1 text-[14px] font-sans text-[#555]">
                  <p>Mon &ndash; Fri: 9:00 AM &ndash; 7:00 PM ET</p>
                  <p>Sat: 10:00 AM &ndash; 5:00 PM ET</p>
                  <p>Sun: By appointment</p>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8">
                <p className="text-[12px] font-sans uppercase tracking-widest text-[#999]">
                  Follow Along
                </p>
                <div className="mt-3 flex gap-4 text-[14px] font-sans">
                  <a
                    href="https://www.instagram.com/realtor.jeffersonprada/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#333] hover:underline"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/realtorjeffersonprada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#333] hover:underline"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.youtube.com/@realtorjeffersonprada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#333] hover:underline"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Right: contact form */}
            <div>
              <h2 className="text-[22px] font-heading font-normal text-[#333]">
                Send a Message
              </h2>
              <p className="mt-2 text-[14px] font-sans text-[#666]">
                Fill in what you know. I&apos;ll follow up within a few hours.
              </p>

              <form
                action="https://formsubmit.co/info@realtorjeffersonprada.com"
                method="POST"
                className="mt-6 space-y-5"
              >
                {/* Formsubmit config */}
                <input type="hidden" name="_subject" value="New message from realtorjeffersonprada.com" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://realtorjeffersonprada.com/contact?sent=true" />
                <input type="text" name="_honey" className="hidden" />

                {/* Name + phone row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[12px] font-sans uppercase tracking-widest text-[#777] mb-1"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full border border-[#ddd] px-4 py-3 text-[15px] font-sans text-[#333] focus:outline-none focus:border-[#333] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[12px] font-sans uppercase tracking-widest text-[#777] mb-1"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(786) 000-0000"
                      className="w-full border border-[#ddd] px-4 py-3 text-[15px] font-sans text-[#333] focus:outline-none focus:border-[#333] transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[12px] font-sans uppercase tracking-widest text-[#777] mb-1"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                    className="w-full border border-[#ddd] px-4 py-3 text-[15px] font-sans text-[#333] focus:outline-none focus:border-[#333] transition-colors"
                  />
                </div>

                {/* Interest */}
                <div>
                  <label
                    htmlFor="interest"
                    className="block text-[12px] font-sans uppercase tracking-widest text-[#777] mb-1"
                  >
                    I&apos;m interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full border border-[#ddd] px-4 py-3 text-[15px] font-sans text-[#333] bg-white focus:outline-none focus:border-[#333] transition-colors"
                  >
                    <option value="">Select one</option>
                    {INTEREST_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[12px] font-sans uppercase tracking-widest text-[#777] mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your situation, timeline, or any questions you have."
                    className="w-full border border-[#ddd] px-4 py-3 text-[15px] font-sans text-[#333] focus:outline-none focus:border-[#333] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#333] text-white py-4 text-[15px] font-sans hover:bg-black transition-colors"
                >
                  Send Message
                </button>

                <p className="text-[12px] font-sans text-[#aaa] text-center">
                  Your information is never shared or sold.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="bg-[#f5f5f5] py-10 px-6 text-center">
          <p className="text-[16px] font-sans text-[#555]">
            Prefer to call?&nbsp;
            <a
              href="tel:+17866166307"
              className="text-[#333] font-semibold hover:underline"
            >
              (786) 616-6307
            </a>
            &nbsp; or send a quick message on&nbsp;
            <a
              href="https://wa.me/17866166307"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#333] font-semibold hover:underline"
            >
              WhatsApp
            </a>
            .
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
