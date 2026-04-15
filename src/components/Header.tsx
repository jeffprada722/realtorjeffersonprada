"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  YoutubeIcon,
  InstagramIcon,
  LinkedinIcon,
  MenuIcon,
  XIcon,
  ChevronDownIcon,
} from "./icons";

/* ------------------------------------------------------------------ */
/*  Static data                                                        */
/* ------------------------------------------------------------------ */

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/realtorjeffersonprada",
    label: "Facebook",
    Icon: FacebookIcon,
  },
  {
    href: "https://www.instagram.com/realtor.jeffersonprada/",
    label: "Instagram",
    Icon: InstagramIcon,
  },
] as const;

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/featured-listings", label: "Featured Listings" },
  { href: "/search", label: "Search" },
  { href: "/new-developments", label: "New Developments" },
  { href: "/about", label: "About" },
  { href: "/the-avanti-way", label: "The Avanti Way" },
] as const;

const LANGUAGES = [
  { code: "EN", label: "English" },
  { code: "ES", label: "Espanol" },
  { code: "BR", label: "Portugues" },
] as const;

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");
  const langRef = useRef<HTMLDivElement>(null);

  // Close language dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className="fixed top-0 left-0 w-full z-[32] transition-all duration-[400ms]"
      style={{
        background: "rgb(51, 51, 51)",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 8px 6px -6px",
      }}
    >
      {/* ---- Row 1: TopBar ---- */}
      <div className="hidden md:block border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-[36px]">
          {/* Left: Social icons */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/80 hover:text-white transition-colors"
              >
                <Icon className="w-[14px] h-[14px]" />
              </a>
            ))}

            {/* Language selector */}
            <div ref={langRef} className="relative ml-3">
              <button
                type="button"
                onClick={() => setLangDropdownOpen((prev) => !prev)}
                className="flex items-center gap-1 text-white text-[13px] font-sans hover:text-white/80 transition-colors"
              >
                {currentLang}
                <ChevronDownIcon className="w-3 h-3" />
              </button>

              {langDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-[#333] border border-white/20 rounded shadow-lg z-50 min-w-[80px]">
                  {LANGUAGES.filter((l) => l.code !== currentLang).map(
                    (lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => {
                          setCurrentLang(lang.code);
                          setLangDropdownOpen(false);
                        }}
                        className="block w-full text-left px-3 py-1.5 text-white text-[13px] font-sans hover:bg-white/10 transition-colors"
                      >
                        {lang.code}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right: Contact info + Login/Register */}
          <div className="flex items-center gap-4 text-[14px] font-sans">
            <a
              href="mailto:info@realtorjeffersonprada.com"
              className="text-white hover:text-white/80 transition-colors"
            >
              info@realtorjeffersonprada.com
            </a>
            <span className="text-white/40">|</span>
            <a
              href="tel:+17866166307"
              className="text-white hover:text-white/80 transition-colors"
            >
              +1(786) 616-6307
            </a>
            <span className="text-white/40">|</span>
            <button
              type="button"
              className="text-white hover:text-white/80 transition-colors"
            >
              Login
            </button>
            <span className="text-white/40">/</span>
            <button
              type="button"
              className="text-white hover:text-white/80 transition-colors"
            >
              Register
            </button>
          </div>
        </div>
      </div>

      {/* ---- Row 2: Navbar ---- */}
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-[64px]">
        {/* Left: Brand + Avanti logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex flex-col">
            <h1 className="font-heading text-white text-[18px] font-semibold leading-tight tracking-wide">
              Jefferson Prada
            </h1>
            <span className="text-white/70 text-[12px] font-sans leading-tight">
              Real Estate Agent
            </span>
          </Link>
          <div className="hidden sm:block ml-2">
            <Image
              src="/images/logo-avanti-white.png"
              alt="Avanti Way Realty"
              width={80}
              height={32}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Center: Nav links (desktop) */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-white text-[15px] font-sans hover:text-white/70 transition-colors whitespace-nowrap"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right: Contact button (desktop) + Hamburger (mobile) */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center justify-center text-white text-[15px] font-sans border border-white rounded px-5 py-2 hover:bg-white hover:text-[#333] transition-colors whitespace-nowrap"
            style={{ background: "rgb(51, 51, 51)" }}
          >
            Contact
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden text-white p-1"
            aria-label="Open menu"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* ---- Mobile Menu Overlay ---- */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#333]/95 flex flex-col">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white p-2"
              aria-label="Close menu"
            >
              <XIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col items-center gap-6 mt-8">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-[20px] font-sans hover:text-white/70 transition-colors"
              >
                {label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 text-white text-[18px] font-sans border border-white rounded px-8 py-3 hover:bg-white hover:text-[#333] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Social links (mobile) */}
          <div className="flex items-center justify-center gap-5 mt-10">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/80 hover:text-white transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Contact info (mobile) */}
          <div className="flex flex-col items-center gap-2 mt-6 text-[14px] font-sans">
            <a
              href="mailto:ramon@avantiway.com"
              className="text-white/80 hover:text-white transition-colors"
            >
              ramon@avantiway.com
            </a>
            <a
              href="tel:+13054975435"
              className="text-white/80 hover:text-white transition-colors"
            >
              +1(305) 497-5435
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
