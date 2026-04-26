import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppBubble } from "@/components/WhatsAppBubble";

export const metadata: Metadata = {
  title: "About Jefferson Prada | Miami Real Estate Financial Strategist",
  description:
    "Jefferson Prada is an Economist and Realtor at Avanti Way Realty Miami. He brings financial analysis — ROI, Cap Rate, cash flow — to every real estate decision. No pressure, no hidden costs, no blind decisions.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Jefferson Prada | Miami Real Estate Financial Strategist",
    description:
      "Not just another Miami realtor. Jefferson Prada brings an economist's lens to every transaction — real numbers, clear strategy, no pressure.",
    images: [
      {
        url: "/images/jefferson-prada-headshot.jpg",
        width: 1024,
        height: 1024,
        alt: "Jefferson Prada - Real Estate Financial Strategist Miami",
      },
    ],
  },
};

const STATS = [
  { value: "100+", label: "Clients Served" },
  { value: "$50M+", label: "In Transactions" },
  { value: "5+", label: "Years in Miami" },
];

const METHOD = [
  {
    title: "Comparative Market Analysis",
    description:
      "Delivered in 48 hours. You know whether the price makes sense before you ever make an offer or accept one.",
  },
  {
    title: "Financial Indicators on Every Deal",
    description:
      "ROI, Cap Rate, cash flow, amortization schedule. Whether you're buying to live or buying to earn, you get the real numbers.",
  },
  {
    title: "Strategic Accompaniment",
    description:
      "From the first conversation to the closing table. I stay involved at every step so nothing slips through the cracks.",
  },
  {
    title: "Education, Not Pressure",
    description:
      "You learn what the market is actually doing, what costs are actually involved, and what the right move is for your specific situation.",
  },
  {
    title: "Full MLS Coverage",
    description:
      "Access to every active listing across Miami-Dade, Broward, and Palm Beach. No filtered feeds, no artificial limitations.",
  },
  {
    title: "Pre-Construction Analysis",
    description:
      "Risk and reward breakdown before you commit. Developer projections are marketing. My analysis is math.",
  },
];

const CLIENT_PROFILES = [
  {
    label: "First-Time Buyers",
    description:
      "You're making the largest financial decision of your life and you need someone who explains the numbers honestly, not someone who just wants to close a deal.",
  },
  {
    label: "Sellers",
    description:
      "Pricing your property correctly from day one is the difference between 30 days on market and 130. Data sets the strategy, not optimism.",
  },
  {
    label: "Pre-Construction Investors",
    description:
      "Developer projections are marketing materials. I give you an independent financial breakdown of what the deal actually looks like at closing.",
  },
  {
    label: "Renters Evaluating Options",
    description:
      "Sometimes renting is the smarter financial move. I run the rent-vs-buy analysis honestly, even if the answer is \"keep renting for now.\"",
  },
  {
    label: "Strategic Buyers",
    description:
      "You're already in Miami, you know the market is competitive, and you want a strategy — not a tour. We discard the unprofitable options first.",
  },
];

const NEIGHBORHOODS = [
  "Brickell",
  "Coral Gables",
  "Coconut Grove",
  "Pinecrest",
  "Sunny Isles Beach",
  "Doral",
  "Aventura",
  "Miami Beach",
  "Key Biscayne",
  "Wynwood",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <WhatsAppBubble />
      <main>
        {/* Page Hero */}
        <section className="bg-[#333] pt-[110px] pb-16 px-6 text-white">
          <div className="mx-auto max-w-6xl">
            <p className="text-[12px] font-sans uppercase tracking-[0.15em] text-white/50">
              About
            </p>
            <h1 className="mt-3 text-[44px] md:text-[58px] font-heading font-normal leading-tight">
              Jefferson Prada
            </h1>
            <p className="mt-2 text-[18px] text-white/70 font-sans">
              Estratega Financiero Inmobiliario
            </p>
            <p className="mt-1 text-[14px] text-white/40 font-sans">
              Economist &nbsp;&bull;&nbsp; Real Estate Sales Associate &nbsp;&bull;&nbsp; Avanti Way Realty
            </p>
          </div>
        </section>

        {/* Bio */}
        <section className="py-16 px-6">
          <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-12 items-start">
            <div className="shrink-0">
              <div className="relative w-[280px] h-[350px] md:w-[320px] md:h-[400px] overflow-hidden shadow-md">
                <Image
                  src="/images/jefferson-prada-headshot.jpg"
                  alt="Jefferson Prada, Real Estate Financial Strategist Miami"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 280px, 320px"
                  priority
                />
              </div>
            </div>

            <div className="max-w-2xl">
              <p className="text-[12px] font-sans uppercase tracking-[0.15em] text-[#888]">
                Real Estate Sales Associate &nbsp;&bull;&nbsp; Avanti Way Realty
              </p>
              <h2 className="mt-3 text-[30px] font-heading font-normal text-[#222]">
                Not a property shower. A financial strategist.
              </h2>

              <div className="mt-6 space-y-4 text-[16px] leading-[1.75] text-[#444] font-sans">
                <p>
                  I came to real estate through economics. Before I ever helped a
                  client buy a home, I spent years studying financial markets, asset
                  valuation, and investment analysis. That background changes
                  everything about how I work. When I sit across from a buyer or a
                  seller, I&apos;m not guessing. I&apos;m running numbers.
                </p>
                <p>
                  Most agents show properties. That&apos;s not my job. My job is to
                  make sure every real estate decision you make has financial logic
                  behind it: the right price, the real costs, the actual return.
                  No pressure, no hidden costs, no decisions made in the dark.
                </p>
                <p>
                  Miami is one of the most complex markets in the world. International
                  capital flowing into Brickell condos, families from the Northeast
                  looking for space in Coral Gables, investors hunting for cap rates
                  in neighborhoods most agents don&apos;t follow. I&apos;ve worked
                  in all of those segments.
                </p>
                <p>
                  What I tell every client from day one: a home is the largest
                  financial decision most people ever make. It deserves a strategy,
                  not just a tour and a gut feeling.
                </p>
              </div>

              <div className="mt-8 flex gap-4 flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#333] text-white px-8 py-3 text-[15px] font-sans hover:bg-black transition-colors"
                >
                  Schedule a Call
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center border border-[#333] text-[#333] px-8 py-3 text-[15px] font-sans hover:bg-[#333] hover:text-white transition-colors"
                >
                  Read Market Insights
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#f5f5f5] py-12 px-6">
          <div className="mx-auto max-w-6xl grid grid-cols-3 divide-x divide-[#ddd] text-center">
            {STATS.map(({ value, label }) => (
              <div key={label} className="py-6 px-4">
                <p className="text-[42px] font-heading font-normal text-[#333]">
                  {value}
                </p>
                <p className="mt-1 text-[13px] font-sans text-[#888] uppercase tracking-widest">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Method */}
        <section className="py-16 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-[12px] font-sans uppercase tracking-[0.15em] text-[#888]">
                How I Work
              </p>
              <h2 className="mt-3 text-[32px] font-heading font-normal text-[#222]">
                What you get on every transaction
              </h2>
              <p className="mt-3 text-[15px] font-sans text-[#666] max-w-lg mx-auto">
                Six things I deliver that most agents don&apos;t offer, and that make
                the difference between a confident decision and an expensive mistake.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {METHOD.map(({ title, description }) => (
                <div
                  key={title}
                  className="border border-[#e8e8e8] p-7 hover:shadow-sm transition-shadow"
                >
                  <h3 className="text-[16px] font-heading font-normal text-[#333]">
                    {title}
                  </h3>
                  <p className="mt-3 text-[14px] font-sans text-[#666] leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who I Work With */}
        <section className="bg-[#f5f5f5] py-16 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-[12px] font-sans uppercase tracking-[0.15em] text-[#888]">
                Clients
              </p>
              <h2 className="mt-3 text-[32px] font-heading font-normal text-[#222]">
                Who I work with
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {CLIENT_PROFILES.map(({ label, description }) => (
                <div
                  key={label}
                  className="bg-white border border-[#e8e8e8] p-7"
                >
                  <h3 className="text-[15px] font-sans font-semibold text-[#333]">
                    {label}
                  </h3>
                  <p className="mt-2 text-[14px] font-sans text-[#666] leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}

              {/* CTA card */}
              <div className="bg-[#333] p-7 flex flex-col justify-between">
                <p className="text-[14px] font-sans text-white/80 leading-relaxed">
                  Not sure which category fits you? Tell me where you are and
                  I&apos;ll tell you what makes sense.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center justify-center border border-white text-white px-6 py-2.5 text-[14px] font-sans hover:bg-white hover:text-[#333] transition-colors"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="bg-[#333] py-14 px-6 text-white">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-[12px] font-sans uppercase tracking-[0.15em] text-white/50">
              Coverage
            </p>
            <h2 className="mt-3 text-[30px] font-heading font-normal">
              Neighborhoods I know best
            </h2>
            <p className="mt-4 text-[15px] font-sans text-white/60 max-w-xl mx-auto">
              I don&apos;t pretend to be an expert in every corner of Florida. These
              are the markets I follow daily, week after week.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {NEIGHBORHOODS.map((n) => (
                <span
                  key={n}
                  className="border border-white/30 px-4 py-2 text-[14px] font-sans text-white/80 hover:border-white/60 transition-colors"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Affiliations */}
        <section className="py-12 px-6 border-b border-[#eee]">
          <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-center gap-10">
            <Image
              src="/images/logo-avanti-white.png"
              alt="Avanti Way Realty"
              width={120}
              height={44}
              className="object-contain opacity-60 invert"
            />
            <div className="hidden md:block h-10 w-px bg-[#ddd]" />
            <p className="text-[14px] font-sans text-[#777] text-center max-w-sm">
              Licensed Real Estate Sales Associate at Avanti Way Realty. Member
              of the MIAMI Association of Realtors.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 text-center">
          <div className="mx-auto max-w-xl">
            <h2 className="text-[30px] font-heading font-normal text-[#333]">
              Ready to make a move that makes sense?
            </h2>
            <p className="mt-4 text-[15px] font-sans text-[#666] leading-relaxed">
              First session, we go through your situation, run the numbers, and
              discard the options that don&apos;t work. No obligation, no pitch.
              Just clarity.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center bg-[#333] text-white px-10 py-4 text-[15px] font-sans hover:bg-black transition-colors"
            >
              Schedule a Free Strategy Call
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
