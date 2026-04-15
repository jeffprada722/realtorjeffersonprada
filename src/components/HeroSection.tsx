"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { SearchIcon } from "./icons";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure autoplay works across browsers
    video.play().catch(() => {
      // Autoplay may be blocked by browser policy; video will show first frame
    });
  }, []);

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden -mt-[100px]"
      style={{
        height: "950px",
        minHeight: "950px",
        padding: "135px 0 75px",
        "--ibc-heading-color": "rgba(255,255,255,1)",
        "--ibc-section-height-desktop": "850px",
      } as React.CSSProperties}
    >
      {/* Video background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/video-bg-home.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center px-4 pt-[100px] text-center">
        {/* Headings */}
        <div className="mb-8">
          <h4 className="hero-heading font-heading font-normal text-white">
            A fresh take on
          </h4>
          <h4 className="hero-heading font-heading font-normal text-white">
            your real estate journey
          </h4>
        </div>

        {/* Search bar */}
        <div
          className="flex w-full max-w-[650px] items-stretch bg-white"
          style={{
            height: "50px",
            borderRadius: "2px",
          }}
        >
          {/* Property type select */}
          <div className="flex items-center border-r border-gray-200">
            <select
              className="h-full w-[130px] appearance-none bg-white px-3 text-[14px] text-black outline-none"
              defaultValue="for-sale"
              aria-label="Property type"
            >
              <option value="for-sale">For Sale</option>
              <option value="for-rent">For Rent</option>
            </select>
          </div>

          {/* Search input */}
          <input
            type="text"
            placeholder="Enter an address, city, zip code or MLS number"
            className="min-w-0 flex-1 bg-white px-3 text-[14px] text-black placeholder:text-gray-400 outline-none"
            aria-label="Search properties"
          />

          {/* Search button */}
          <button
            type="button"
            className="flex w-[40px] items-center justify-center bg-white text-black hover:bg-gray-50"
            style={{ height: "50px" }}
            aria-label="Search"
          >
            <SearchIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Advanced search link */}
        <Link
          href="/search"
          className="mt-4 text-[14px] text-white hover:underline"
        >
          + Advanced search options
        </Link>
      </div>
    </section>
  );
}
