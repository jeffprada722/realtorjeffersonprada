import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppBubble } from "@/components/WhatsAppBubble";

export const metadata: Metadata = {
  title: "About Jefferson Prada | Miami Realtor & Financial Strategist",
  description:
    "Meet Jefferson Prada, an Economist and Real Estate Sales Associate at Avanti Way Realty. Specializing in financial analysis for Miami real estate investments in Brickell, Coral Gables, and South Florida.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Jefferson Prada | Miami Realtor & Financial Strategist",
    description:
      "Economist and Real Estate Sales Associate at Avanti Way Realty. Numbers-driven approach to buying, selling, and investing in Miami real estate.",
    images: [
      {
        url: "/images/jefferson-prada-headshot.jpg",
        width: 1024,
        height: 1024,
        alt: "Jefferson Prada - Real Estate Agent Miami",
      },
    ],
  },
};

const STATS = [
  { value: "100+", label: "Clients Served" },
  { value: "$50M+", label: "In Transactions" },
  { value: "5+", label: "Years in Miami" },
];

const SERVICES = [
  {
    title: "Buyers",
    description:
      "I run a full financial pre-analysis before you tour a single property. That means you know your real budget, the neighborhood ROI, and what a fair offer looks like before anyone negotiates.",
    items: [
      "Financial pre-analysis before offers",
      "Neighborhood-by-neighborhood value comparison",
      "Negotiation backed by comparable sales data",
      "Full guidance from contract to closing",
    ],
  },
  {
    title: "Sellers",
    description:
      "Pricing a property correctly from day one is the difference between 30 days on market and 130. I use current sales data, not optimism, to set a strategy that actually gets you to the table.",
    items: [
      "Data-driven pricing strategy",
      "Professional marketing with digital targeting",
      "Qualified buyer pre-screening",
      "Smooth coordination from listing to closing",
    ],
  },
  {
    title: "Investors",
    description:
      "I speak your language. Cap rates, cash-on-cash returns, gross rent multipliers. Whether it's a Brickell condo or a pre-construction deal, I give you the numbers before you commit.",
    items: [
      "Cap rate and cash-on-cash return analysis",
      "Pre-construction risk and reward breakdown",
      "Multi-unit and condo investment consulting",
      "Portfolio growth strategy for South Florida",
    ],
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
            <p className="mt-2 text-[17px] text-white/70 font-sans">
              Economist. Real Estate Sales Associate. Avanti Way Realty.
            </p>
          </div>
        </section>

        {/* Bio */}
        <section className="py-16 px-6">
          <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-12 items-start">
            <div className="shrink-0">
              <div className="relative w-[280px] h-[350px] md:w-[340px] md:h-[430px] overflow-hidden rounded-sm shadow-md">
                <Image
                  src="/images/jefferson-prada-headshot.jpg"
                  alt="Jefferson Prada, Real Estate Agent Miami"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 280px, 340px"
                  priority
                />
              </div>
            </div>

            <div className="max-w-2xl">
              <p className="text-[12px] font-sans uppercase tracking-[0.15em] text-[#888]">
                Real Estate Agent &nbsp;&bull;&nbsp; Avanti Way Realty
              </p>
              <h2 className="mt-3 text-[30px] font-heading font-normal text-[#222]">
                Not just another Miami realtor.
              </h2>

              <div className="mt-6 space-y-4 text-[16px] leading-[1.75] text-[#444] font-sans">
                <p>
                  I came to real estate through economics. Before I ever helped a
                  client buy a home, I spent years studying financial markets, asset
                  valuation, and investment analysis. That background changes
                  everything about how I work. When I sit across from a buyer or a
                  seller, I'm not guessing. I'm running numbers.
                </p>
                <p>
                  Miami is one of the most complex markets in the world. You have
                  international capital flowing into Brickell condos, families from
                  the Northeast looking for space in Coral Gables, and investors
                  hunting for cap rates in neighborhoods most agents don't know
                  exist. I've worked in all of those segments.
                </p>
                <p>
                  What I tell every client from day one: a home is the largest
                  financial decision most people ever make. It deserves a strategy,
                  not just a tour and a gut feeling. So that's what I provide.
                </p>
                <p>
                  I'm licensed under Avanti Way Realty, one of the most respected
                  brokerages in South Florida, with full access to the Miami MLS
                  and a network that covers everything from pre-construction
                  opportunities to off-market deals.
                </p>
                <p>
                  If you want someone who backs every recommendation with data and
                  tells you honestly when something doesn't make financial sense,
                  call me.
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

        {/* Services */}
        <section className="py-16 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-[12px] font-sans uppercase tracking-[0.15em] text-[#888]">
                How I Help
              </p>
              <h2 className="mt-3 text-[32px] font-heading font-normal text-[#222]">
                Buyers. Sellers. Investors.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {SERVICES.map(({ title, description, items }) => (
                <div
                  key={title}
                  className="border border-[#e8e8e8] p-8 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-[22px] font-heading font-normal text-[#333]">
                    {title}
                  </h3>
                  <p className="mt-3 text-[14px] font-sans text-[#666] leading-relaxed">
                    {description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-[14px] font-sans text-[#555] leading-snug"
                      >
                        <span className="text-[#999] shrink-0 mt-0.5">&#10003;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
              Neighborhoods I Know Best
            </h2>
            <p className="mt-4 text-[15px] font-sans text-white/60 max-w-xl mx-auto">
              I don't pretend to be an expert in every corner of Florida. These are
              the markets I follow daily, week after week.
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
              Ready to make a move?
            </h2>
            <p className="mt-4 text-[15px] font-sans text-[#666] leading-relaxed">
              Whether you're buying your first home, selling an investment
              property, or exploring Miami for the first time, I'm here to walk
              you through every step.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center bg-[#333] text-white px-10 py-4 text-[15px] font-sans hover:bg-black transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
