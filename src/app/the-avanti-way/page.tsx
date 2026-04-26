import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppBubble } from "@/components/WhatsAppBubble";

export const metadata: Metadata = {
  title: "The Avanti Way | Jefferson Prada Realtor Miami",
  description:
    "Learn about Avanti Way Realty and why Jefferson Prada chose this brokerage to serve Miami real estate clients. Innovation, technology, and agent support in South Florida.",
  alternates: { canonical: "/the-avanti-way" },
  openGraph: {
    title: "The Avanti Way | Jefferson Prada Realtor Miami",
    description:
      "Avanti Way is one of South Florida's most innovative real estate brokerages. Learn what it means for your transaction.",
  },
};

const PILLARS = [
  {
    title: "Technology First",
    description:
      "Avanti Way built its own proprietary tech stack. That means faster transactions, real-time market data, and digital tools that actually work in a competitive market like Miami.",
  },
  {
    title: "Agent-Centric Model",
    description:
      "The brokerage is structured to give agents more resources and time to focus on clients instead of paperwork. That translates directly to better service for buyers and sellers.",
  },
  {
    title: "Full MLS Access",
    description:
      "Full access to the MIAMI Association of Realtors MLS. Every active listing in Broward, Miami-Dade, and Palm Beach Counties. No filtered feeds. No delays.",
  },
  {
    title: "Training and Standards",
    description:
      "Avanti Way agents go through ongoing training in negotiation, contracts, and market analysis. It's not a revolving door of part-time agents. The bar is higher here.",
  },
];

const WHY_ITEMS = [
  {
    q: "Why did you choose Avanti Way over other brokerages?",
    a: "I chose Avanti Way because of how seriously they take technology and agent development. As an economist, I need tools that give me real data, not marketing-friendly summaries. Avanti Way's internal systems let me pull market analytics that most agents at other brokerages don't have access to.",
  },
  {
    q: "What does being at Avanti Way mean for my transaction?",
    a: "It means you're working with a team that has the infrastructure of a large brokerage with the personal attention of a boutique firm. I have transaction coordinators, legal support, and a full back-office team behind every deal I work on.",
  },
  {
    q: "Is Avanti Way only in Miami?",
    a: "Avanti Way operates across South Florida, covering Miami-Dade, Broward, and Palm Beach Counties. If you're looking outside those areas, I can refer you to a trusted agent in the Avanti Way network.",
  },
];

export default function TheAvantiWayPage() {
  return (
    <>
      <Header />
      <WhatsAppBubble />
      <main>
        {/* Page Hero */}
        <section className="bg-[#333] pt-[110px] pb-14 px-6 text-white">
          <div className="mx-auto max-w-6xl">
            <p className="text-[12px] font-sans uppercase tracking-[0.15em] text-white/50">
              Brokerage
            </p>
            <h1 className="mt-3 text-[44px] md:text-[56px] font-heading font-normal leading-tight">
              The Avanti Way
            </h1>
            <p className="mt-3 text-[17px] text-white/70 font-sans max-w-lg">
              Why I chose one of South Florida&apos;s most innovative
              brokerages and what it means for you.
            </p>
          </div>
        </section>

        {/* What is Avanti Way */}
        <section className="py-16 px-6">
          <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-12 items-start">
            <div className="max-w-xl">
              <p className="text-[12px] font-sans uppercase tracking-[0.15em] text-[#888]">
                About the Brokerage
              </p>
              <h2 className="mt-3 text-[32px] font-heading font-normal text-[#222]">
                What is Avanti Way Realty?
              </h2>
              <div className="mt-6 space-y-4 text-[16px] leading-[1.75] text-[#444] font-sans">
                <p>
                  Avanti Way Realty is one of South Florida&apos;s fastest-growing
                  real estate brokerages, built on a foundation of technology,
                  agent development, and data-driven practice. Founded in Miami,
                  the company serves clients across Miami-Dade, Broward, and Palm
                  Beach Counties.
                </p>
                <p>
                  Unlike traditional brokerages that rely on legacy systems and
                  third-party platforms, Avanti Way built its own proprietary
                  technology infrastructure. That means faster closings, better
                  communication, and tools that keep every transaction on track.
                </p>
                <p>
                  As a member of the MIAMI Association of Realtors, every Avanti
                  Way agent has access to the full MLS, giving clients a complete
                  picture of the market at any price point.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex flex-col items-center justify-center gap-6 bg-[#f5f5f5] p-10 md:min-w-[280px]">
              <Image
                src="/images/logo-avanti-white.png"
                alt="Avanti Way Realty"
                width={160}
                height={60}
                className="object-contain invert"
              />
              <div className="text-center">
                <p className="text-[13px] font-sans text-[#555]">
                  Licensed Real Estate Broker
                </p>
                <p className="text-[13px] font-sans text-[#555]">
                  South Florida
                </p>
                <p className="text-[13px] font-sans text-[#555] mt-2">
                  MIAMI Association of Realtors Member
                </p>
              </div>
              <Link
                href="https://avantiway.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-sans text-[#333] underline hover:no-underline"
              >
                Visit avantiway.com
              </Link>
            </div>
          </div>
        </section>

        {/* Four pillars */}
        <section className="bg-[#f5f5f5] py-16 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-[12px] font-sans uppercase tracking-[0.15em] text-[#888]">
                What Sets Them Apart
              </p>
              <h2 className="mt-3 text-[30px] font-heading font-normal text-[#222]">
                Four Reasons Avanti Way Works
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {PILLARS.map(({ title, description }) => (
                <div
                  key={title}
                  className="bg-white p-8 border border-[#e8e8e8] hover:shadow-sm transition-shadow"
                >
                  <h3 className="text-[18px] font-heading font-normal text-[#333]">
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

        {/* Jefferson + Avanti Way */}
        <section className="py-16 px-6">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-[12px] font-sans uppercase tracking-[0.15em] text-[#888]">
              My Perspective
            </p>
            <h2 className="mt-3 text-[30px] font-heading font-normal text-[#222]">
              Why I Work Here
            </h2>
            <div className="mt-8 space-y-8 text-left max-w-2xl mx-auto">
              {WHY_ITEMS.map(({ q, a }) => (
                <div key={q} className="border-l-2 border-[#333] pl-6">
                  <p className="text-[15px] font-sans font-semibold text-[#333]">
                    {q}
                  </p>
                  <p className="mt-2 text-[14px] font-sans text-[#666] leading-relaxed">
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Office info */}
        <section className="bg-[#333] py-14 px-6 text-white">
          <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[12px] font-sans uppercase tracking-[0.15em] text-white/50">
                Office Location
              </p>
              <h2 className="mt-2 text-[24px] font-heading font-normal">
                Avanti Way Realty &mdash; Doral
              </h2>
              <p className="mt-2 text-[15px] font-sans text-white/70">
                8400 NW 33rd St, Unit 104, Doral, FL 33122
              </p>
              <div className="mt-4 flex flex-col gap-1 text-[14px] font-sans text-white/70">
                <a href="tel:+17866166307" className="hover:text-white transition-colors">
                  Jefferson: +1 (786) 616-6307
                </a>
                <a
                  href="mailto:info@realtorjeffersonprada.com"
                  className="hover:text-white transition-colors"
                >
                  info@realtorjeffersonprada.com
                </a>
              </div>
            </div>
            <Link
              href="/contact"
              className="shrink-0 border border-white text-white px-10 py-3 text-[15px] font-sans hover:bg-white hover:text-[#333] transition-colors"
            >
              Schedule a Meeting
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
