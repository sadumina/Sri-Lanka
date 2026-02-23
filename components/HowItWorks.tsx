import Image from "next/image";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <section id="about" className="pt-0 pb-16 lg:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center">
            {/* Section Label */}
            <p className="font-body text-xs text-gray-600 font-medium mb-4">
              Our Approach
            </p>

            {/* Main Heading */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D1B2A] uppercase leading-tight mb-6">
              Remote,{" "}
              <span className="text-[#C9A227]">Exclusive</span>,<br />
              Seamless
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 mb-6">
              <p className="font-body text-[14px] text-gray-600 leading-6">
                At Tour Guide, we believe direct dialogue is essential in tailoring your travel 
                experience. We favour engaging conversations over digital exchanges, 
                ensuring your travel vision is clearly understood and promptly supported.
              </p>
              <p className="font-body text-[14px] text-gray-600 leading-6">
                Our team is committed to a human-led process from start to finish, that 
                goes beyond the online realm. Whether over the phone or in person, we 
                work closely with you to develop a journey plan that is both thoughtfully 
                considered and expertly executed. Please reach out to schedule a meeting 
                or call and begin shaping your journey with us.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Link href="#contact" className="btn-gold">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.15)]">
            <Image
              src="/approach.jpg"
              alt="Ancient temple in Sri Lanka"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
