import Image from "next/image";

const destinations = [
  { title: "Sigiriya", subtitle: "Ancient rock fortress", img: "/exclusive-safari.jpg" },
  { title: "Ella", subtitle: "Tea hills & waterfalls", img: "/approach.jpg" },
  { title: "Mirissa", subtitle: "Beach & whale watching", img: "/exclusive-herd.jpg" },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D1B2A] uppercase">
              Popular Destinations
            </h2>
            <p className="mt-4 font-body text-base text-gray-600 max-w-xl">
              Discover the most loved places, carefully selected for unique scenery and culture.
            </p>
          </div>

          <button className="hidden sm:inline-flex rounded-none border border-[#C9A227] text-[#0D1B2A] font-body text-xs uppercase tracking-widest px-5 py-3 hover:bg-[#C9A227] hover:text-white transition-colors">
            View All
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((d) => (
            <div key={d.title} className="group overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100">
              <div className="relative h-56 w-full">
                <Image src={d.img} alt={d.title} fill className="object-cover group-hover:scale-[1.03] transition" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-[#0D1B2A]">{d.title}</h3>
                <p className="mt-2 font-body text-sm text-gray-600">{d.subtitle}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-body text-xs text-gray-500">Best time: All year</span>
                  <span className="font-body text-xs font-semibold text-[#C9A227] uppercase tracking-[0.15em]">
                    Explore
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}