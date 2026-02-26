import Image from "next/image";
import Link from "next/link";

const packages = [
  {
    id: 1,
    image: "/package-wilpathu.jpg",
    location: "Where to Explore",
    title: "Wilpaththu: Safari Tour Package",
    isPrivate: true,
    priceFrom: 19,
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
    <section id="packages" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Exact Match */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-12">
          {/* Left: Heading */}
          <div className="flex-shrink-0">
            <h2 style={{ fontFamily: 'Poppins, sans-serif' }}>
              <span className="block text-[28px] lg:text-[32px] font-semibold text-[#1a2b4a] uppercase leading-none tracking-wide">
                Looking For
              </span>
              <span className="block text-[28px] lg:text-[32px] font-semibold text-[#C9A227] uppercase leading-none tracking-wide">
                Inspiration
              </span>
            </h2>
          </div>
          
          {/* Right: Description - Pushed more to center */}
          <div className="max-w-md text-right md:mr-[15%] lg:mr-[20%] mt-4 md:mt-0">
            <p 
              className="text-[12px] text-gray-400 leading-relaxed mb-3"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Sri Lanka is a small island filled with endless experiences, from golden
              beaches and misty mountains to ancient temples and vibrant wildlife.
            </p>
            <p 
              className="text-[12px] text-gray-400 leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Discover rich culture, warm hospitality, luxury stays, delicious cuisine,
              and unforgettable adventures — all in one beautiful destination.
            </p>
          </div>
        </div>

        {/* Package Cards - Horizontal Scroll */}
        <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
          <style>{`
            .scrollbar-hide::-webkit-scrollbar { display: none; }
            .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>
          <div className="flex flex-row gap-6 pb-4" style={{ width: 'max-content' }}>
            {packages.map((pkg) => (
              <article
                key={pkg.id}
                className="group relative overflow-hidden rounded-sm bg-white flex-shrink-0"
                style={{ width: '580px', height: '380px' }}
              >
                {/* Background Image */}
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  sizes="580px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay - Left to Right */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  {/* Top Section */}
                  <div>
                    {/* Location Tag */}
                    <span 
                      className="inline-block text-[11px] font-semibold text-white/90 uppercase tracking-[0.2em] mb-4"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {pkg.location}
                    </span>
                    
                    {/* Title */}
                    <h3 
                      className="text-[26px] font-semibold leading-tight text-white max-w-[240px]"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {pkg.title}
                    </h3>
                  </div>
                  
                  {/* Bottom Section */}
                  <div>
                    {/* Info Grid - 2x2 Layout */}
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-6 max-w-[280px]">
                      {/* Private/Group */}
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-[#C9A227]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span 
                          className="text-sm text-white font-medium"
                          style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                          {pkg.isPrivate ? "Private" : "Group"}
                        </span>
                      </div>
                      
                      {/* Price */}
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                          <span className="text-[#C9A227] font-bold text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>$</span>
                        </div>
                        <span 
                          className="text-sm text-white font-medium"
                          style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                          From <span className="text-[#C9A227] line-through">${pkg.priceFrom}</span>
                        </span>
                      </div>
                      
                      {/* Guests */}
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-[#C9A227]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                          </svg>
                        </div>
                        <span 
                          className="text-sm text-white font-medium"
                          style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                          {pkg.guests} <span className="text-white/80">Guests</span>
                        </span>
                      </div>
                      
                      {/* Days */}
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-[#C9A227]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span 
                          className="text-sm text-white font-medium"
                          style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                          {pkg.days} <span className="text-white/80">Days</span>
                        </span>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <Link
                      href="#newsletter"
                      className="inline-block bg-[#C9A227] text-white font-semibold text-sm px-7 py-3 rounded-lg shadow-md hover:bg-[#b89a1c] transition-colors"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      View Package
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