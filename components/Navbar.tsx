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
        <div className="flex items-center h-20 bg-transparent rounded-md">
          {/* Centered Nav */}
          <nav className="flex-1 flex justify-center items-center gap-8">
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
          {/* Contact Us Button remains right-aligned */}
          <Link
            href="#newsletter"
            className="btn-gold text-[10px] py-3 px-6"
          >
            Contact Us
          </Link>
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
