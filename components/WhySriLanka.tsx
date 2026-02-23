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
    <section id="wildlife" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 lg:mb-20">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0D1B2A] uppercase leading-tight mb-8">
            Why{" "}
            <span className="text-[#C9A227]">SriLanka</span>
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
      </div>
    </section>
  );
}
