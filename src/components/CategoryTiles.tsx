const tiles = [
  { title: "Mobiles & Accessories", subtitle: "Latest picks", color: "bg-blue-100" },
  { title: "Laptops & Tablets", subtitle: "Work & play", color: "bg-indigo-100" },
  { title: "Home & Kitchen", subtitle: "Refresh your space", color: "bg-emerald-100" },
  { title: "Fashion", subtitle: "Styles for everyone", color: "bg-rose-100" },
  { title: "Beauty & Care", subtitle: "Daily essentials", color: "bg-pink-100" },
  { title: "Sports & Outdoors", subtitle: "Gear up", color: "bg-amber-100" },
];

export default function CategoryTiles() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900">Shop by category</h2>
        <a href="#" className="text-sm font-medium text-blue-700 hover:underline">
          See more
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {tiles.map((tile) => (
          <a
            key={tile.title}
            href="#"
            className="rounded-lg bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className={`mb-3 h-24 rounded-md ${tile.color}`} />
            <h3 className="text-sm font-semibold text-slate-900">{tile.title}</h3>
            <p className="mt-1 text-xs text-gray-600">{tile.subtitle}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
