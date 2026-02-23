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
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0D1B2A] uppercase leading-tight">
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

        {/* Package Cards - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className="group relative h-[260px] sm:h-[280px] lg:h-[300px] rounded-xl overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
            >
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />

              <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <span className="inline-block font-body text-[10px] font-semibold text-white uppercase tracking-widest px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded-full">
                    {pkg.location}
                  </span>
                </div>

                <div className="text-white">
                  <h3 className="font-display text-lg sm:text-xl font-extrabold leading-snug">
                    {pkg.title}
                  </h3>

                  <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-white/90">
                    <span className="font-body flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      {pkg.isPrivate ? "Private" : "Group"}
                    </span>
                    <span className="font-body flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      From ${pkg.priceFrom}
                    </span>
                    <span className="font-body flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {pkg.guests} Guests
                    </span>
                    <span className="font-body flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {pkg.days} Days
                    </span>
                  </div>

                  <div className="mt-4">
                    <Link href="#newsletter" className="btn-gold">
                      View Packages
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}