import Image from "next/image";

const whyCards = [
  {
    image: "/why-beauty.jpg",
    category: "Timeless",
    title: "Beauty",
  },
  {
    image: "/why-experiences.jpg",
    category: "Signature",
    title: "Experiences",
  },
  {
    image: "/why-heritage.jpg",
    category: "Rich",
    title: "Heritage",
  },
  {
    image: "/why-cuisine.jpg",
    category: "Authentic",
    title: "Cuisine",
  },
];

export default function WhySection() {
  return (
    <section id="why-sri-lanka" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Corner stone image */}
        <div className="pointer-events-none absolute left-0 top-0 w-[220px] sm:w-[280px] lg:w-[320px] opacity-60">
          <div className="relative h-[140px] sm:h-[180px] lg:h-[200px]">
            <Image
              src="/pahana.png"
              alt=""
              fill
              sizes="320px"
              className="object-contain"
              priority={false}
            />
          </div>
        </div>
        {/* Section Header */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0D1B2A] uppercase leading-tight mb-6 md:mb-8">
            View{" "}
            <span className="text-[#C9A227]">Sri Lanka</span>
          </h2>
          
          <div className="max-w-4xl space-y-4">
            <p className="font-body text-base text-gray-700 leading-relaxed">
              Sri Lanka is a small island filled with endless experiences, from golden 
              beaches and misty mountains to ancient temples and vibrant wildlife.
            </p>
            <p className="font-body text-base text-gray-700 leading-relaxed">
              Discover rich culture, warm hospitality, luxury stays, delicious cuisine, 
              and unforgettable adventures — all in one beautiful destination.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyCards.map((card) => (
            <div
              key={card.title}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <Image
                src={card.image}
                alt={`${card.category} ${card.title}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="font-body text-xs tracking-[0.2em] uppercase text-white/80 mb-1">
                  {card.category}
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Tea picker testimonial */}
        <div className="mt-12 lg:mt-16 rounded-2xl overflow-hidden border border-gray-200 bg-[#F6F6F6]">
          <div className="grid lg:grid-cols-[1.2fr_1fr]">
            <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-[360px]">
              <Image
                src="/testimonial-woman.jpg"
                alt="Tea leaf picker in Sri Lanka"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-body text-xs tracking-[0.2em] uppercase">Eliva Rollen</p>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-white/80">Italy</p>
              </div>
            </div>
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <div className="text-[#C9A227] text-5xl leading-none">“</div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0D1B2A] uppercase leading-tight mt-2">
                From stunning beaches to luxury escapes and unforgettable adventures, Sri Lanka exceeded every expectation.
              </h3>
              <p className="font-body text-sm text-gray-600 mt-4">
                Eliva Rollen, Italy
              </p>
              <p className="font-body text-xs text-gray-500">
                International Travel Consultant | Luxury Travel Specialist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
