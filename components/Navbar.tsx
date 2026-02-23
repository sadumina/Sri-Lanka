"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Why Sri Lanka", href: "#why-sri-lanka" },
  { label: "Culture", href: "#packages" },
  // { label: "Contact Us", href: "#newsletter" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="font-display text-xl font-bold text-white tracking-wider group-hover:text-[#C9A227] transition-colors duration-300">
              CEYLON
            </span>
            <span className="font-body text-[10px] font-light text-[#C9A227] tracking-[0.3em] uppercase">
              Luxury Travels
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-[11px] font-medium text-white/80 tracking-[0.2em] uppercase hover:text-[#C9A227] transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A227] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="#newsletter"
              className="hidden sm:inline-flex items-center btn-gold text-[10px] py-3 px-6"
            >
              Contact Us
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-[5px] p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-px bg-white transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`block w-6 h-px bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-px bg-white transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-4 pt-2 border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-[11px] font-medium text-white/80 tracking-[0.2em] uppercase hover:text-[#C9A227] transition-colors duration-300 py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#newsletter"
              onClick={() => setMenuOpen(false)}
              className="btn-gold text-[10px] py-3 px-6 text-center mt-2"
            >
              Plan My Journey
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
