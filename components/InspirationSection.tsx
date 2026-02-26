import Image from "next/image";

export default function InspirationSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Heading & Description */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy mb-4">
              LOOKING FOR <span className="text-gold">INSPIRATION</span>
            </h2>
            <p className="font-body text-base text-gray-700 mb-2">
              Sri Lanka is a small island filled with endless experiences, from golden beaches and misty mountains to ancient temples and vibrant wildlife.
            </p>
            <p className="font-body text-base text-gray-700">
              Discover rich culture, warm hospitality, luxury stays, delicious cuisine, and unforgettable adventures — all in one beautiful destination.
            </p>
          </div>

          {/* Right: Tiger Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-80 w-full">
              <Image
                src="/package-wilpathu.jpg"
                alt="Wilpaththu Safari Tour Package"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute left-0 top-0 p-6 z-10">
                <p className="font-body text-xs text-white/80 uppercase mb-2">WHERE TO EXPLORE</p>
                <h3 className="font-display text-2xl font-bold text-white mb-4">Wilpaththu:<br />Safari Tour Package</h3>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-gold rounded-full w-8 h-8 flex items-center justify-center text-white text-lg">&#128222;</span>
                    <span className="text-white text-sm">Private</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-gold rounded-full w-8 h-8 flex items-center justify-center text-white text-lg">$</span>
                    <span className="text-white text-sm">From $19,825</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-gold rounded-full w-8 h-8 flex items-center justify-center text-white text-lg">👥</span>
                    <span className="text-white text-sm">4 Guests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-gold rounded-full w-8 h-8 flex items-center justify-center text-white text-lg">⏳</span>
                    <span className="text-white text-sm">11 Days</span>
                  </div>
                </div>
                <button className="bg-gold text-white font-semibold px-6 py-2 rounded-lg mt-2 shadow-md hover:bg-[#b89a1c] transition">View Package</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
