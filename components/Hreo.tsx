"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="top" className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/elephant.jpg"
        alt="Elephant safari in Sri Lanka"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="max-w-2xl">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-white/70 mb-4">
              Welcome to The Ceylon Tour Guide
            </p>
            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white leading-[0.95] uppercase mb-6 tracking-[0.02em]">
              <span className="whitespace-nowrap">JOURNEYS TO</span>
              <br />
              <span className="text-[#C9A227]">SRI LANKA</span>
            </h1>

            {/* Subheading */}
            <p className="font-body text-sm sm:text-base text-white/75 leading-relaxed max-w-lg mb-10">
              Bespoke wildlife encounters and immersive cultural expeditions crafted for discerning travelers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#journeys" className="btn-gold shadow-none hover:shadow-none text-[11px] px-6 py-3 tracking-[0.2em]">
                Plan Your Tour
              </Link>
              {/* <Link href="#about" className="btn-outline-white shadow-none hover:shadow-none text-[11px] px-6 py-3 tracking-[0.2em]">
                Our Story
              </Link> */}
            </div>
          </div>

          {/* Sri Lanka Map */}
          <div className="hidden lg:block relative w-[400px] xl:w-[480px] h-[520px]">
            <Image
              src="/sri-lanka-map.png"
              alt="Sri Lanka map outline"
              fill
              sizes="480px"
              className="object-contain opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
