import Image from "next/image";
import Link from "next/link";

export default function WhyChoose() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Sri Lanka map outline */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-[0.03] pointer-events-none">
        <Image
          src="/sri-lanka-outline.png"
          alt="Sri Lanka map outline"
          fill
          sizes="33vw"
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
            {/* Main Heading */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] uppercase leading-tight mb-6">
              Why Choose <span className="text-[#C9A227]">Tour Guide</span>
            </h2>

            {/* Description */}
            <div className="space-y-5 mb-8">
              <p className="font-body text-base text-gray-600 leading-relaxed">
                Tour Guide independence affords us to remain fully dedicated 
                to designing bespoke experiences that reflect the unique 
                preferences of each client, free from the influence of external 
                stakeholders or corporate constraints.
              </p>
              <p className="font-body text-base text-gray-600 leading-relaxed">
                Our emphasis on personalization is complemented by long-standing relationships with trusted local partners. These 
                connections have enabled us to create itineraries that are 
                meaningful and insightful African journeys that deeply 
                resonate with our clients.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Link href="#about" className="btn-gold">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
