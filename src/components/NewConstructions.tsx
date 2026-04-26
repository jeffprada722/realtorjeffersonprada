"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

interface Development {
  title: string;
  location: string;
  image: string;
  status?: string;
}

const DEVELOPMENTS: Development[] = [
  {
    title: "Baccarat Residences",
    location: "Brickell",
    image: "/images/new-constructions/baccarat-residences.jpg",
    status: "Pre-Construction",
  },
  {
    title: "Cipriani Residences",
    location: "Brickell",
    image: "/images/new-constructions/cipriani-residences.jpg",
    status: "Pre-Construction",
  },
  {
    title: "Parkside Brickell",
    location: "Brickell",
    image: "/images/new-constructions/parkside.webp",
    status: "Pre-Construction",
  },
  {
    title: "The Residences at 1428 Brickell",
    location: "Brickell",
    image: "/images/new-constructions/1428-brickell.jpg",
    status: "Pre-Construction",
  },
  {
    title: "Waldorf Astoria Miami",
    location: "Downtown Miami",
    image: "/images/new-constructions/waldorf-astoria.jpg",
    status: "Under Construction",
  },
  {
    title: "Frida Kahlo Wynwood",
    location: "Wynwood",
    image: "/images/new-constructions/frida-kahlo.png",
    status: "Pre-Construction",
  },
  {
    title: "NoMad Residences",
    location: "Wynwood",
    image: "/images/new-constructions/nomad-wynwood.jpg",
    status: "Pre-Construction",
  },
  {
    title: "ORA by Casa Tua",
    location: "Brickell",
    image: "/images/new-constructions/ora-casa-tua.jpg",
    status: "Pre-Construction",
  },
  {
    title: "Lofty Brickell",
    location: "Brickell",
    image: "/images/new-constructions/lofty-brickell.jpg",
    status: "Under Construction",
  },
  {
    title: "House of Wellness Miami",
    location: "Miami",
    image: "/images/new-constructions/house-of-wellness.jpg",
    status: "Pre-Construction",
  },
  {
    title: "Shoma Bay",
    location: "North Bay Village",
    image: "/images/new-constructions/shoma-bay.jpg",
    status: "Pre-Construction",
  },
  {
    title: "Domus Brickell Center",
    location: "Brickell",
    image: "/images/new-constructions/domus-brickell.jpg",
    status: "Pre-Construction",
  },
];

const AUTO_SCROLL_INTERVAL = 4000;
const DESKTOP_VISIBLE = 3;

function DevelopmentCard({ dev }: { dev: Development }) {
  return (
    <Link
      href={`/contact?interest=Pre-Construction+Analysis&development=${encodeURIComponent(dev.title)}`}
      className="relative block w-full overflow-hidden group"
      style={{ aspectRatio: "3 / 4" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${dev.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        {dev.status && (
          <span className="text-white/60 text-[11px] font-sans uppercase tracking-widest">
            {dev.status}
          </span>
        )}
        <p className="text-white/70 text-[11px] font-sans uppercase tracking-widest mt-0.5">
          {dev.location}
        </p>
        <h3 className="text-white text-[16px] font-heading font-normal mt-1 leading-tight">
          {dev.title}
        </h3>
      </div>
    </Link>
  );
}

export function NewConstructions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const maxDesktopIndex = DEVELOPMENTS.length - DESKTOP_VISIBLE;
  const maxMobileIndex = DEVELOPMENTS.length - 1;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxDesktopIndex ? 0 : prev + 1));
  }, [maxDesktopIndex]);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxDesktopIndex ? 0 : prev + 1));
    }, AUTO_SCROLL_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, maxDesktopIndex]);

  const desktopIndex = Math.min(currentIndex, maxDesktopIndex);
  const mobileIndex = Math.min(currentIndex, maxMobileIndex);

  return (
    <section
      className="py-16 px-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-[12px] font-sans uppercase tracking-[0.15em] text-[#888]">
              Pre-Construction
            </p>
            <h2 className="mt-2 text-[30px] font-heading font-normal text-[#222]">
              New Developments
            </h2>
          </div>
          <Link
            href="/contact?interest=Pre-Construction+Analysis"
            className="hidden sm:inline-flex text-[13px] font-sans text-[#555] border-b border-[#555] hover:text-[#333] hover:border-[#333] transition-colors pb-0.5"
          >
            Request Info on Any Development
          </Link>
        </div>

        <div className="relative">
          {/* Arrows */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-[-18px] top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-[#333] text-white flex items-center justify-center disabled:opacity-30 hover:bg-black transition-colors"
            aria-label="Previous"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxMobileIndex}
            className="absolute right-[-18px] top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-[#333] text-white flex items-center justify-center disabled:opacity-30 hover:bg-black transition-colors"
            aria-label="Next"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>

          {/* Desktop: 3 visible */}
          <div className="hidden md:block overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${desktopIndex * (100 / DESKTOP_VISIBLE)}%)`,
              }}
            >
              {DEVELOPMENTS.map((dev) => (
                <div
                  key={dev.title}
                  className="flex-shrink-0"
                  style={{ width: `calc((100% - 2rem) / 3)` }}
                >
                  <DevelopmentCard dev={dev} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: 1 visible */}
          <div className="block md:hidden overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
            >
              {DEVELOPMENTS.map((dev) => (
                <div key={dev.title} className="flex-shrink-0 w-full">
                  <DevelopmentCard dev={dev} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxDesktopIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === desktopIndex
                    ? "bg-[#333] w-6"
                    : "bg-[#333]/25 hover:bg-[#333]/50 w-1.5"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/contact?interest=Pre-Construction+Analysis"
            className="text-[13px] font-sans text-[#555] border-b border-[#555] hover:text-[#333] pb-0.5"
          >
            Request Info on Any Development
          </Link>
        </div>
      </div>
    </section>
  );
}
