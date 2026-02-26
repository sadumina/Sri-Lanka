import Image from "next/image";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <section id="about" className="pt-0 pb-12 sm:pb-16 lg:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1 mt-8 lg:mt-0">
            {/* Section Label */}
            <p className="font-body text-xs text-gray-600 font-medium mb-3 sm:mb-4">
              Our Approach
            </p>

            {/* Main Heading */}
            <h2 className="font-poppins font-semibold text-3xl sm:text-4xl md:text-5xl text-[#0D1B2A] uppercase leading-tight mb-4 sm:mb-6">
              REMOTE, <span className="text-gold font-poppins font-semibold">EXCLUSIVE</span>,<br />
              SEAMLESS
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
              <p className="font-body text-[13px] sm:text-[14px] md:text-base text-gray-600 leading-6">
                At Tour Guide, we believe direct dialogue is essential in tailoring your travel 
                experience. We favour engaging conversations over digital exchanges, 
                ensuring your travel vision is clearly understood and promptly supported.
              </p>
              <p className="font-body text-[13px] sm:text-[14px] md:text-base text-gray-600 leading-6">
                Our team is committed to a human-led process from start to finish, that 
                goes beyond the online realm. Whether over the phone or in person, we 
                work closely with you to develop a journey plan that is both thoughtfully 
                considered and expertly executed. Please reach out to schedule a meeting 
                or call and begin shaping your journey with us.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Link href="#contact" className="btn-gold w-full sm:w-auto text-center">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-[220px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.15)] order-1 lg:order-2">
            <Image
              src="/temple.jpg"
              alt="Ancient temple in Sri Lanka"
              fill
              sizes="(max-width: 868px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
