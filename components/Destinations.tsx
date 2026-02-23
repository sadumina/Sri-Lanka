import Image from "next/image";

const destinations = [
  { title: "Sigiriya", subtitle: "Ancient rock fortress", img: "/images/dest1.jpg" },
  { title: "Ella", subtitle: "Tea hills & waterfalls", img: "/images/dest2.jpg" },
  { title: "Mirissa", subtitle: "Beach & whale watching", img: "/images/dest3.jpg" },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-16 sm:py-20 bg-white">
      <div className="containerX">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500">Popular</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold">Top Destinations</h2>
            <p className="mt-2 text-slate-600 max-w-xl">
              Discover the most loved places, carefully selected for unique scenery and culture.
            </p>
          </div>

          <button className="hidden sm:inline-flex rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold hover:bg-slate-50">
            View All
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.map((d) => (
            <div key={d.title} className="group overflow-hidden rounded-2xl bg-white shadow-soft border border-slate-100">
              <div className="relative h-56 w-full">
                <Image src={d.img} alt={d.title} fill className="object-cover group-hover:scale-[1.03] transition" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg">{d.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{d.subtitle}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Best time: All year</span>
                  <span className="text-sm font-semibold text-brand-gold">Explore →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}