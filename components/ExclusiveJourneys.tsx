import Image from "next/image";
import Link from "next/link";

export default function ExclusiveJourneys() {
  return (
    <section id="journeys" className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Sri Lanka map outline */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-[90%] opacity-[0.08] pointer-events-none">
        <Image
          src="/sri-lanka-outline.png"
          alt="Sri Lanka map outline"
          fill
          sizes="45vw"
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left: Overlapping Image Cards */}
          <div className="relative h-[500px] sm:h-[550px]">
            {/* Card 1 — Top safari image */}
            <div className="absolute top-0 left-0 w-[70%] h-[55%] rounded-lg overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)] z-20 group">
              <Image
                src="/exclusive-safari.jpg"
                alt="Private safari experience"
                fill
                sizes="(max-width: 768px) 70vw, 35vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute top-6 left-6">
                <p className="font-body text-xs font-semibold text-white tracking-wider uppercase leading-tight">
                  Private Safari<br />
                  Tailor Made
                </p>
              </div>
            </div>

            {/* Card 2 — Bottom elephant herd */}
            <div className="absolute bottom-0 right-0 w-[75%] h-[58%] rounded-lg overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)] z-10 group">
              <Image
                src="/exclusive-herd.jpg"
                alt="Navigating access to challenging destinations"
                fill
                sizes="(max-width: 768px) 75vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-body text-xs font-semibold text-white tracking-wider uppercase leading-tight">
                  Navigating <span className="text-[#C9A227]">Access</span> to<br />
                  Challenging Destinations
                </p>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <p className="font-body text-sm text-gray-600 mb-4">
              Why Choose <span className="text-[#C9A227] font-semibold">The Ceylon Tour Guide</span>
            </p>

            {/* Main Heading */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D1B2A] uppercase leading-tight mb-8">
              Exclusive Journeys<br />
              to the Remote<br />
              Corners of Sri Lanka
            </h2>

            {/* Description */}
            <div className="space-y-4 mb-8">
              <p className="font-body text-base text-gray-600 leading-relaxed">
                We specialize in providing curious travellers with access to regions 
                and communities that would otherwise prove challenging.
              </p>
              <p className="font-body text-base text-gray-600 leading-relaxed">
                We are committed to offering unique travel opportunities, to unusual 
                destinations, that are mutually beneficial to all involved.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Link href="#contact" className="btn-gold">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
