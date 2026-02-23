import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/elephant.jpg"
        alt="Elephant safari in Sri Lanka"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center scale-105"
      />

      {/* Gradient Overlay - left to right dark */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between">
          {/* Text */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-[#C9A227]" />
              <span className="font-body text-[11px] font-medium text-[#C9A227] tracking-[0.35em] uppercase">
                Pearl of the Indian Ocean
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] uppercase mb-6">
              Journeys
              <br />
              <span className="italic font-light text-[#C9A227]">to</span>
              <br />
              Sri Lanka
            </h1>

            {/* Subheading */}
            <p className="font-body text-sm sm:text-base text-white/75 font-light leading-relaxed max-w-md mb-10 tracking-wide">
              Bespoke wildlife encounters and immersive cultural expeditions, 
              crafted for the discerning traveller who seeks the extraordinary 
              in every detail.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#journeys" className="btn-gold">
                Explore Journeys
              </Link>
              <Link href="#about" className="btn-outline-white">
                Our Story
              </Link>
            </div>

            {/* Stats Row */}
            <div className="flex items-center gap-8 mt-14 pt-8 border-t border-white/15">
              {[
                { value: "14+", label: "Years of Expertise" },
                { value: "400+", label: "Journeys Curated" },
                { value: "98%", label: "Guest Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display text-2xl font-bold text-[#C9A227]">
                    {stat.value}
                  </span>
                  <span className="font-body text-[10px] text-white/55 tracking-[0.15em] uppercase mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sri Lanka Map */}
          <div className="hidden lg:block relative w-[500px] h-[600px]">
            <Image
              src="/sri-lanka-map.png"
              alt="Sri Lanka map"
              fill
              sizes="500px"
              className="object-contain opacity-90"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="font-body text-[9px] text-white/40 tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>

      {/* Gold accent line - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/60 to-transparent" />
    </section>
  );
}
