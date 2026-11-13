const deals = [
  { title: "Wireless earbuds", off: "25% off", note: "Limited time deal" },
  { title: "Kitchen appliances", off: "Up to 35% off", note: "Top rated picks" },
  { title: "Skincare bundles", off: "Buy 2 save more", note: "Beauty offers" },
  { title: "Smart home", off: "From AED 49", note: "Everyday essentials" },
];

export default function DealsStrip() {
  return (
    <section id="deals" className="mx-auto max-w-7xl px-4 pb-8">
      <div className="rounded-xl bg-slate-900 p-5 text-white sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Today&apos;s deals</h2>
          <a href="#" className="text-sm font-medium text-amber-300 hover:underline">
            Explore all deals
          </a>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {deals.map((deal) => (
            <div key={deal.title} className="rounded-lg bg-slate-800 p-4">
              <p className="text-xs uppercase tracking-wide text-amber-300">{deal.note}</p>
              <h3 className="mt-2 text-lg font-semibold">{deal.title}</h3>
              <p className="mt-1 text-sm text-gray-200">{deal.off}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
