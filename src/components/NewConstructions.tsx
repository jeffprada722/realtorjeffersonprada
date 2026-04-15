"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

interface Development {
  title: string;
  href: string;
  image: string | null;
  gradientFallback?: string;
}

const developments: Development[] = [
  {
    title: "Mercedes-Benz Places Miami",
    href: "/new-development/mercedes-benz-places-miami",
    image: "/images/new-constructions/mercedes-benz-places.jpg",
  },
  {
    title: "Parkside Brickell",
    href: "/new-development/parkside",
    image: "/images/new-constructions/parkside.webp",
  },
  {
    title: "Frida Kahlo Wynwood",
    href: "/new-development/frida-kahlo",
    image: "/images/new-constructions/frida-kahlo.png",
  },
  {
    title: "House of Wellness Miami",
    href: "https://houseofwellness.miami",
    image: "/images/new-constructions/house-of-wellness.jpg",
  },
  {
    title: "Shoma Bay",
    href: "/new-development/shoma-bay",
    image: "/images/new-constructions/shoma-bay.jpg",
  },
  {
    title: "The Rider Residences",
    href: "/new-development/the-rider-residences",
    image: "/images/new-constructions/the-rider-residences.jpg",
  },
  {
    title: "Domus Brickell Center",
    href: "/new-development/domus-brickell-center",
    image: "/images/new-constructions/domus-brickell.jpg",
  },
];

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
      className="relative block w-full aspect-[4/3] overflow-hidden group"
    >
      <div className="absolute inset-0" style={backgroundStyle} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white text-lg font-medium transition-opacity group-hover:opacity-80">
          {development.title}
        </h3>
      </div>
    </Link>
  );
}

export function NewConstructions() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const desktopVisible = 3;
  const maxDesktopIndex = developments.length - desktopVisible;
  const maxMobileIndex = developments.length - 1;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      // We check both mobile and desktop max in the render
      return prev + 1;
    });
  }, []);

  // Clamp index based on viewport (we use CSS to show/hide)
  const desktopIndex = Math.min(currentIndex, maxDesktopIndex);
  const mobileIndex = Math.min(currentIndex, maxMobileIndex);

  return (
    <section className="py-12 px-[30px]">
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
            className="flex gap-4 transition-transform duration-300 ease-in-out"
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
            className="flex transition-transform duration-300 ease-in-out"
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
