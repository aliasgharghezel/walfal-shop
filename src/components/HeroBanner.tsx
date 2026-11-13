export default function HeroBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-6">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 p-6 text-slate-900 shadow-sm sm:p-10">
        <div className="max-w-xl">
          <p className="mb-2 inline-block rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            Walfal Deals Week
          </p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            Shop top picks inspired by Amazon.ae
          </h1>
          <p className="mt-3 text-sm sm:text-base">
            Discover electronics, fashion, home essentials, and more with
            limited-time offers and everyday low prices.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="#products"
              className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Shop featured products
            </a>
            <a
              href="#deals"
              className="rounded-md bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-white"
            >
              View today&apos;s deals
            </a>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:absolute sm:right-6 sm:top-6 sm:mt-0 sm:w-72">
          <div className="rounded-lg bg-white/80 p-3 text-center shadow-sm">
            <div className="text-xs text-gray-600">Electronics</div>
            <div className="mt-1 text-lg font-bold">Up to 40% off</div>
          </div>
          <div className="rounded-lg bg-white/80 p-3 text-center shadow-sm">
            <div className="text-xs text-gray-600">Fashion</div>
            <div className="mt-1 text-lg font-bold">New arrivals</div>
          </div>
          <div className="rounded-lg bg-white/80 p-3 text-center shadow-sm">
            <div className="text-xs text-gray-600">Home</div>
            <div className="mt-1 text-lg font-bold">Essentials</div>
          </div>
          <div className="rounded-lg bg-white/80 p-3 text-center shadow-sm">
            <div className="text-xs text-gray-600">Beauty</div>
            <div className="mt-1 text-lg font-bold">Top brands</div>
          </div>
        </div>
      </div>
    </section>
  );
}
