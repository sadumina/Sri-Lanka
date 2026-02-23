import Image from "next/image";
import Link from "next/link";

export default function WhyChoose() {
  return (
    <section id="why-choose" className="bg-[#F4F4F4] pt-16 pb-0 lg:pt-20 lg:pb-0">
      <div className="w-full px-0">
        <div className="bg-white rounded-none shadow-[0_16px_40px_rgba(0,0,0,0.12)] px-6 sm:px-10 lg:px-12 py-6 sm:py-10 lg:py-12">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
            <div className="relative min-h-[360px] sm:min-h-[420px]">
              <div className="absolute top-0 left-0 w-[72%] h-[64%] rounded-lg overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.2)] z-20 group">
                <Image
                  src="/exclusive-safari.jpg"
                  alt="Private safari experience"
                  fill
                  sizes="(max-width: 768px) 80vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-5 left-5">
                  <p className="font-body text-[11px] font-semibold text-white tracking-widest uppercase leading-snug">
                    Private Safari<br />
                    Tailor Made
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[58%] h-[46%] rounded-lg overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.25)] z-10 group">
                <Image
                  src="/exclusive-herd.jpg"
                  alt="Navigating access to challenging destinations"
                  fill
                  sizes="(max-width: 768px) 70vw, 32vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-body text-[10px] font-semibold text-white tracking-widest uppercase leading-snug">
                    Navigating <span className="text-[#C9A227]">Access</span> to<br />
                    Challenging Destinations
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="font-display text-[28px] sm:text-[32px] lg:text-[36px] font-extrabold text-[#2C2C2C] uppercase leading-tight">
                Why Choose<br />
                <span className="text-[#C9A227]">Tour Guide</span>
              </h2>

              <div className="mt-4 space-y-4">
                <p className="font-body text-[14px] sm:text-[15px] text-[#6B6B6B] leading-6">
                  Tour Guide independence allows us to remain fully dedicated to
                  designing bespoke experiences that reflect the unique preferences
                  of each client, free from the influence of external stakeholders
                  or corporate constraints.
                </p>
                <p className="font-body text-[14px] sm:text-[15px] text-[#6B6B6B] leading-6">
                  Our emphasis on personalization is complemented by long-standing
                  relationships with trusted local partners. These connections have
                  enabled us to create itineraries that are meaningful and insightful
                  journeys that deeply resonate with our clients.
                </p>
              </div>

              <div className="mt-6">
                <Link href="#about" className="btn-gold">
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
