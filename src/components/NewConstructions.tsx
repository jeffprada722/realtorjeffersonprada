"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

interface Development {
  title: string;
  href: string;
  image: string | null;
  location: string;
  gradientFallback?: string;
}

const developments: Development[] = [
  {
    title: "Baccarat Residences",
    location: "Brickell",
    href: "/new-development/baccarat-residences",
    image: "/images/new-constructions/baccarat-residences.jpg",
  },
  {
    title: "Cipriani Residences",
    location: "Brickell",
    href: "/new-development/cipriani-residences",
    image: "/images/new-constructions/cipriani-residences.jpg",
  },
  {
    title: "Parkside Brickell",
    location: "Brickell",
    href: "/new-development/parkside",
    image: "/images/new-constructions/parkside.webp",
  },
  {
    title: "The Residences at 1428 Brickell",
    location: "Brickell",
    href: "/new-development/1428-brickell",
    image: "/images/new-constructions/1428-brickell.jpg",
  },
  {
    title: "Waldorf Astoria Miami",
    location: "Downtown Miami",
    href: "/new-development/waldorf-astoria",
    image: "/images/new-constructions/waldorf-astoria.jpg",
  },
  {
    title: "Frida Kahlo Wynwood",
    location: "Wynwood",
    href: "/new-development/frida-kahlo",
    image: "/images/new-constructions/frida-kahlo.png",
  },
  {
    title: "NoMad Residences",
    location: "Wynwood",
    href: "/new-development/nomad-residences",
    image: "/images/new-constructions/nomad-wynwood.jpg",
  },
  {
    title: "ORA by Casa Tua",
    location: "Brickell",
    href: "/new-development/ora-casa-tua",
    image: "/images/new-constructions/ora-casa-tua.jpg",
  },
  {
    title: "Lofty Brickell",
    location: "Brickell",
    href: "/new-development/lofty-brickell",
    image: "/images/new-constructions/lofty-brickell.jpg",
  },
  {
    title: "House of Wellness Miami",
    location: "Miami",
    href: "https://houseofwellness.miami",
    image: "/images/new-constructions/house-of-wellness.jpg",
  },
  {
    title: "Shoma Bay",
    location: "North Bay Village",
    href: "/new-development/shoma-bay",
    image: "/images/new-constructions/shoma-bay.jpg",
  },
  {
    title: "The Rider Residences",
    location: "Wynwood",
    href: "/new-development/the-rider-residences",
    image: "/images/new-constructions/the-rider-residences.jpg",
  },
  {
    title: "Domus Brickell Center",
    location: "Brickell",
    href: "/new-development/domus-brickell-center",
    image: "/images/new-constructions/domus-brickell.jpg",
  },
];

const AUTO_SCROLL_INTERVAL = 4000;

function DevelopmentCard({ development }: { development: Development }) {
  const backgroundStyle = development.image
    ? {
        backgroundImage: `url(${development.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {
        background: development.gradientFallback,
      };

  return (
    <Link
      href={development.href}
      className="relative block w-full overflow-hidden group"
      style={{ aspectRatio: "3 / 4" }}
    >
      <div className="absolute inset-0" style={backgroundStyle} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span className="text-white/70 text-xs font-sans uppercase tracking-widest">
          {development.location}
        </span>
        <h3 className="text-white text-lg font-medium mt-1 transition-opacity group-hover:opacity-80">
          {development.title}
        </h3>
      </div>
    </Link>
  );
}

export function NewConstructions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const desktopVisible = 3;
  const maxDesktopIndex = developments.length - desktopVisible;
  const maxMobileIndex = developments.length - 1;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const max = maxDesktopIndex;
      if (prev >= max) return 0;
      return prev + 1;
    });
  }, [maxDesktopIndex]);

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxDesktopIndex) return 0;
        return prev + 1;
      });
    }, AUTO_SCROLL_INTERVAL);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, maxDesktopIndex]);

  const desktopIndex = Math.min(currentIndex, maxDesktopIndex);
  const mobileIndex = Math.min(currentIndex, maxMobileIndex);

  return (
    <section
      className="py-12 px-[30px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <h2 className="text-center text-[32px] font-normal text-[#333] font-heading mb-8">
        New Constructions
      </h2>

      <div className="relative mx-auto max-w-6xl">
        {/* Navigation arrows */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#3f3f3f] text-white flex items-center justify-center transition-opacity disabled:opacity-30 hover:opacity-80"
          aria-label="Previous"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex >= maxMobileIndex}
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#3f3f3f] text-white flex items-center justify-center transition-opacity disabled:opacity-30 hover:opacity-80"
          aria-label="Next"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>

        {/* Desktop carousel: 3 visible */}
        <div className="hidden md:block overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${desktopIndex * (100 / desktopVisible)}%)`,
            }}
          >
            {developments.map((dev) => (
              <div
                key={dev.href}
                className="flex-shrink-0"
                style={{ width: `calc((100% - 2rem) / 3)` }}
              >
                <DevelopmentCard development={dev} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile carousel: 1 visible */}
        <div className="block md:hidden overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${mobileIndex * 100}%)`,
            }}
          >
            {developments.map((dev) => (
              <div key={dev.href} className="flex-shrink-0 w-full">
                <DevelopmentCard development={dev} />
              </div>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxDesktopIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === desktopIndex
                  ? "bg-[#333] w-6"
                  : "bg-[#333]/30 hover:bg-[#333]/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/new-developments"
          className="inline-block bg-[#333] text-white px-6 py-4 w-[230px] border border-[#333] text-base text-center"
          style={{ fontFamily: "var(--font-button)" }}
        >
          View All
        </Link>
      </div>
    </section>
  );
}
