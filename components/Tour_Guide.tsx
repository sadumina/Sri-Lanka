import Image from "next/image";
import Link from "next/link";

export default function WhyChoose() {
  return (
    <section id="why-choose" className="relative bg-white py-16 lg:py-24">
      {/* Sri Lanka outline — large, behind the right text column */}
      {/* Removed Sri Lanka outline image */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-8 items-start">
          {/* Left — Overlapping Image Cards */}
          <div className="relative" style={{ minHeight: 600 }}>
            {/* Top Image — Safari (upper-left) — LARGER, PORTRAIT */}
            <div
              className="absolute top-0 left-0 w-[68%] rounded-2xl overflow-hidden z-20 group"
              style={{
                boxShadow: "0 20px 60px rgba(0,0,0,0.25), 0 8px 20px rgba(0,0,0,0.15)",
              }}
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src="/exclusive-safari.jpg"
                  alt="Private safari experience"
                  fill
                  sizes="(max-width: 768px) 72vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute top-5 left-5">
                  <p className="font-body text-[11px] font-extrabold text-white tracking-[0.15em] uppercase leading-tight">
                    Private Safari<br />
                    Tailor Made
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Image — Elephant Herd (overlapping, shifted right) — SMALLER */}
            <div
              className="absolute -bottom-8 left-[22%] w-[64%] rounded-2xl overflow-hidden z-30 group"
              style={{
                boxShadow: "0 20px 60px rgba(0,0,0,0.25), 0 8px 20px rgba(0,0,0,0.15)",
              }}
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src="/exclusive-herd.jpg"
                  alt="Navigating access to challenging destinations"
                  fill
                  sizes="(max-width: 768px) 72vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="font-body text-[11px] font-extrabold text-white tracking-[0.15em] uppercase leading-tight">
                    Navigating <span className="text-gold">Access</span> to<br />
                    Challenging Destinations
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Text Content */}
          <div className="flex flex-col justify-start lg:pt-0">
            {/* Eyebrow */}
            <h2 className="font-poppins font-semibold text-[32px] sm:text-[38px] lg:text-[44px] text-[#222] uppercase leading-tight mb-4">
              WHY CHOOSE <br />
              <span className="text-gold">TOUR GUIDE</span><br />
              
            </h2>

            {/* Heading */}
            {/* Remove subheading for Figma match */}

            {/* Spacer to push body text down, aligning with bottom image */}
            <div className="mt-2" />

            {/* Body */}
            <div className="space-y-3 mb-7">
              <p className="font-poppins font-semibold text-[16px] text-[#444] leading-[1.7] max-w-lg">
                Tour Guide independence allows us to remain fully dedicated to designing bespoke experiences that reflect the unique preferences of each client, free from the influence of external shareholders or corporate constraints.
              </p>
              <p className="font-poppins font-semibold text-[16px] text-[#444] leading-[1.7] max-w-lg">
                Our emphasis on personalization is complemented by long-standing relationships with trusted local partners. These enduring connections, built over decades, enable us to craft meaningful and insightful journeys that deeply resonate with our clients.
              </p>
            </div>

            {/* CTA */}
            <Link href="#newsletter" className="bg-gold text-white font-poppins font-semibold px-7 py-3 rounded-xl shadow-md hover:bg-[#b89a1c] transition w-fit text-lg">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
