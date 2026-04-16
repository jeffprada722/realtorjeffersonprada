"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Connect to newsletter service (GHL, Mailchimp, etc.)
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header bar */}
      <div className="bg-[#333] py-4 px-6">
        <Link href="/" className="flex items-center gap-3">
          <h1 className="font-heading text-white text-[22px] font-semibold leading-tight tracking-wide">
            Jefferson Prada
          </h1>
          <div className="hidden sm:flex items-center ml-3">
            <div className="h-8 w-px bg-white/30 mr-3" />
            <Image
              src="/images/logo-avanti-white.png"
              alt="Avanti Way Realty"
              width={110}
              height={40}
              className="object-contain"
            />
          </div>
        </Link>
      </div>

      {/* Hero / Landing section */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left: Image / visual */}
        <div
          className="hidden lg:block lg:w-1/2 relative"
          style={{
            backgroundImage: "url(/images/new-constructions/baccarat-residences.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          <div className="absolute bottom-12 left-12 right-12">
            <p className="text-white/80 text-sm font-sans uppercase tracking-widest mb-2">
              Stay Informed
            </p>
            <h2 className="text-white text-4xl font-heading font-semibold leading-tight">
              Miami Real Estate<br />
              Market Intelligence
            </h2>
            <p className="text-white/70 text-base font-sans mt-4 max-w-md">
              Weekly insights on pre-constructions, market trends, and investment
              opportunities in South Florida.
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="flex-1 flex items-center justify-center px-6 py-16 lg:py-0 bg-[#f9f9f9]">
          <div className="w-full max-w-md">
            {!submitted ? (
              <>
                {/* Mobile heading (hidden on desktop where image side shows it) */}
                <div className="lg:hidden mb-8 text-center">
                  <p className="text-[#333]/60 text-sm font-sans uppercase tracking-widest mb-2">
                    Stay Informed
                  </p>
                  <h2 className="text-[#333] text-3xl font-heading font-semibold leading-tight">
                    Miami Real Estate<br />
                    Market Intelligence
                  </h2>
                  <p className="text-[#333]/60 text-base font-sans mt-3">
                    Weekly insights on pre-constructions, market trends, and
                    investment opportunities in South Florida.
                  </p>
                </div>

                <div className="hidden lg:block mb-8">
                  <h2 className="text-[#333] text-2xl font-heading font-semibold">
                    Join the Newsletter
                  </h2>
                  <p className="text-[#333]/60 text-sm font-sans mt-2">
                    Get exclusive market reports, new development alerts, and
                    financial analysis delivered to your inbox.
                  </p>
                </div>

                {/* Benefits */}
                <div className="mb-8 space-y-3">
                  {[
                    "Pre-construction alerts before public release",
                    "Monthly market trend analysis with real data",
                    "Investment ROI breakdowns for new developments",
                    "Price per sq ft comparisons across neighborhoods",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#333] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="text-[#333]/80 text-sm font-sans">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[#333] text-sm font-sans font-medium mb-1"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-[#333]/20 bg-white text-[#333] text-sm font-sans placeholder:text-[#333]/40 focus:outline-none focus:border-[#333] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[#333] text-sm font-sans font-medium mb-1"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-[#333]/20 bg-white text-[#333] text-sm font-sans placeholder:text-[#333]/40 focus:outline-none focus:border-[#333] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#333] text-white py-4 text-base font-sans font-medium hover:bg-[#555] transition-colors"
                  >
                    Subscribe to Newsletter
                  </button>

                  <p className="text-[#333]/40 text-xs font-sans text-center mt-3">
                    No spam. Unsubscribe anytime. Your data stays private.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#333] flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-[#333] text-2xl font-heading font-semibold mb-3">
                  Welcome, {name}!
                </h2>
                <p className="text-[#333]/60 text-base font-sans mb-8 max-w-sm mx-auto">
                  You are now subscribed to receive exclusive Miami real estate
                  market insights and new development alerts.
                </p>
                <Link
                  href="/"
                  className="inline-block bg-[#333] text-white px-8 py-3 text-base font-sans hover:bg-[#555] transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
