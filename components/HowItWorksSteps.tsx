import Image from "next/image";

const steps = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Step 1:",
    subtitle: "Contact",
    description: "We believe meaningful travel begins with genuine connections. We take the time to understand each client's interests and may invite wealthiest base partnerships to create unique, carefully curated experiences."
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Step 2:",
    subtitle: "Plan",
    description: "Our team designs each itinerary with care, selecting destinations that blend seamlessly with your preferences. Every detail is thoughtfully considered to ensure a rich and rewarding experience."
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Step 3:",
    subtitle: "Explore",
    description: "Embark on your thoughtfully crafted journey with full support from our dedicated team. From arrival to departure, we ensure every moment unfolds smoothly and memorably."
  }
];

export default function HowItWorksSteps() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/how-it-works-bg.jpg"
        alt="Stilt fishermen at sunset in Sri Lanka"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority={false}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/75 to-navy/55" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Box */}
        <div className="bg-white rounded-2xl px-8 py-10 sm:px-12 sm:py-14 max-w-2xl mb-16 shadow-xl">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy uppercase leading-tight mb-4">
            How it <span className="text-gold">Works</span>
          </h2>
          <p className="font-body text-base text-gray-600 leading-relaxed">
            We believe meaningful travel begins with genuine connections. We take the time to 
            understand each client's interests and may invite wealthiest base partnerships to 
            create private, carefully curated explorations.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon Circle */}
              <div className="w-24 h-24 rounded-full bg-gold flex items-center justify-center mb-6 shadow-[0_10px_40px_rgba(201,162,39,0.4)] text-white">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="font-body text-sm font-semibold text-white uppercase tracking-wider mb-2">
                {step.title}
              </h3>
              <p className="font-display text-2xl font-bold text-white mb-4">
                {step.subtitle}
              </p>

              {/* Description */}
              <p className="font-body text-sm text-white/80 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
