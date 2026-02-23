const stats = [
  { value: "500+", label: "Destinations" },
  { value: "1200+", label: "Happy Travelers" },
  { value: "15+", label: "Years Experience" },
];

export default function Stats() {
  return (
    <section className="bg-brand-gold py-12">
      <div className="containerX">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold text-black">{s.value}</div>
              <div className="mt-2 text-sm font-semibold text-black/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}