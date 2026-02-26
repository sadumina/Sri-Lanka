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
    <section id="why-sri-lanka" className="relative py-28 lg:py-36 bg-white overflow-hidden">
      {/* Corner stone image — pinned to section's top-left corner */}
      <div className="pointer-events-none absolute -left-4 -top-4 w-60 sm:w-80 lg:w-96 opacity-20">
        <div className="relative h-40 sm:h-52 lg:h-60">
          <Image
            src="/pahana.png"
            alt=""
            fill
            sizes="384px"
            className="object-contain"
            priority={false}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header — heading left, paragraphs right */}
        <div className="mb-16 md:mb-20 lg:mb-24 grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-start">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy uppercase leading-tight whitespace-nowrap">
            WHY{" "}
            <span className="text-gold">SRILANKA</span>
          </h2>
          
          <div className="space-y-5">
            <p className="font-body text-sm md:text-base text-gray-700 leading-relaxed">
              Sri Lanka is a small island filled with endless experiences, from golden 
              beaches and misty mountains to ancient temples and vibrant wildlife.
            </p>
            <p className="font-body text-sm md:text-base text-gray-700 leading-relaxed">
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
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
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
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

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

      {/* Tea picker testimonial — full width */}
      <div className="relative mt-16 lg:mt-24 bg-[#EAEAEA]">
        {/* Sri Lanka outline watermark — overlapping between image and text */}
        <div
          className="hidden lg:block absolute pointer-events-none z-1"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            height: 1000,
            opacity: 0.14,
          }}
        >
          <Image
            src="/sri-lanka-outline.png"
            alt=""
            fill
            sizes="520px"
            className="object-contain"
          />
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 items-stretch">
          {/* Image — flush left, straight edge, matching Figma proportions */}
          <div className="relative min-h-48 sm:min-h-52 lg:min-h-130">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[400px] overflow-hidden shadow-lg rounded-tr-xl rounded-br-xl">
              <Image
                src="/testimonial-woman.jpg"
                alt="Tea leaf picker in Sri Lanka"
                fill
                sizes="600px"
                className="object-cover object-center rounded-tr-xl rounded-br-xl"
              />
              {/* Dark gradient overlay at bottom for text readability */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/60 to-transparent rounded-br-xl" />
              <div className="absolute bottom-4 left-5 text-white z-10">
                <p className="font-body text-[10px] tracking-[0.25em] uppercase font-semibold">Eliva Rollen</p>
                <p className="font-body text-[9px] tracking-[0.2em] uppercase text-white/70 mt-0.5">Italy</p>
              </div>
            </div>
            <div className="h-[400px]" />
          </div>

          {/* Quote content — Figma: 666×192 hug, font 36px/48px semibold -4% */}
          <div className="px-6 sm:px-8 lg:px-10 xl:px-14 py-6 lg:py-8 flex flex-col justify-center">
            {/* Decorative double-quote marks */}
            <div className="flex gap-2 mb-4 select-none">
              <span className="text-gold text-4xl lg:text-5xl leading-none font-display font-semibold">&ldquo;</span>
              <span className="text-gold text-4xl lg:text-5xl leading-none font-display font-semibold">&rdquo;</span>
            </div>
            <h3
              className="font-poppins font-semibold text-navy uppercase"
              style={{ fontSize: "32px", lineHeight: "44px", letterSpacing: "-0.04em" }}
            >
              FROM STUNNING BEACHES TO LUXURY ESCAPES AND <span className="text-gold font-poppins font-semibold">UNFORGETTABLE</span> ADVENTURES, SRI LANKA EXCEEDED <span className="text-gold font-poppins font-semibold">EVERY EXPECTATION.</span>
            </h3>
            <div className="mt-4">
              <p className="font-body text-sm font-semibold text-navy tracking-wide uppercase">
                Eliva Rollen, Italy
              </p>
              <p className="font-body text-xs text-gray-500 mt-0.5 tracking-wide">
                International Travel Consultant | Luxury Travel Specialist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
