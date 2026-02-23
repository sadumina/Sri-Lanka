import Image from "next/image";
import Link from "next/link";

const packages = [
  {
    id: 1,
    image: "/package-wilpathu.jpg",
    location: "Where to Explore",
    title: "Wilpaththu: Safari Tour Package",
    isPrivate: true,
    priceFrom: 500,
    guests: 4,
    days: 11,
  },
  {
    id: 2,
    image: "/package-wilpathu.jpg",
    location: "Where to Explore",
    title: "Yala National Park Safari",
    isPrivate: true,
    priceFrom: 650,
    guests: 6,
    days: 8,
  },
  {
    id: 3,
    image: "/package-wilpathu.jpg",
    location: "Where to Explore",
    title: "Cultural Triangle Tour",
    isPrivate: false,
    priceFrom: 450,
    guests: 8,
    days: 9,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Left: Heading */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D1B2A] uppercase leading-tight">
              Looking for{" "}
              <span className="text-[#C9A227]">Inspiration</span>
            </h2>
          </div>

          {/* Right: Description */}
          <div className="flex flex-col justify-center space-y-4">
            <p className="font-body text-base text-gray-600 leading-relaxed">
              Sri Lanka is a small island filled with endless experiences, from golden 
              beaches and misty mountains to ancient temples and vibrant wildlife.
            </p>
            <p className="font-body text-base text-gray-600 leading-relaxed">
              Discover rich culture, warm hospitality, luxury stays, delicious cuisine, 
              and unforgettable adventures — all in one beautiful destination.
            </p>
          </div>
        </div>

        {/* Package Cards - Horizontal Scroll */}
        <div className="relative -mx-4 sm:mx-0">
          <div className="flex gap-6 overflow-x-auto px-4 sm:px-0 pb-4 snap-x snap-mandatory scrollbar-hide">
            {packages.map((pkg) => (
              <article
                key={pkg.id}
                className="group relative flex-shrink-0 w-[320px] sm:w-[380px] h-[500px] rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-500 snap-start"
              >
                {/* Background Image */}
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-8">
                  {/* Top: Location Label */}
                  <div>
                    <span className="inline-block font-body text-xs font-semibold text-white uppercase tracking-wider px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full">
                      {pkg.location}
                    </span>
                  </div>

                  {/* Bottom: Details */}
                  <div>
                    {/* Package Title */}
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
                      {pkg.title}
                    </h3>

                    {/* Package Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {/* Private */}
                      <div className="flex items-center gap-2 text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <span className="font-body text-sm">{pkg.isPrivate ? "Private" : "Group"}</span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-2 text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-body text-sm">From ${pkg.priceFrom}</span>
                      </div>

                      {/* Guests */}
                      <div className="flex items-center gap-2 text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="font-body text-sm">{pkg.guests} Guests</span>
                      </div>

                      {/* Days */}
                      <div className="flex items-center gap-2 text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-body text-sm">{pkg.days} Days</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href="#contact"
                      className="block w-full text-center btn-gold"
                    >
                      Visit Packages
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}