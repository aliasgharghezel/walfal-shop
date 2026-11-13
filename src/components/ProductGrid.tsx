import { products } from "@/data/products";

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className="flex items-center gap-1 text-amber-500" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full || (i === full && half);
        return (
          <span key={i} className={filled ? "text-amber-500" : "text-gray-300"}>
            ★
          </span>
        );
      })}
      <span className="ml-1 text-xs text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-4 pb-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900">Featured products</h2>
        <a href="#" className="text-sm font-medium text-blue-700 hover:underline">
          View more
        </a>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <article
            key={product.id}
            className="flex h-full flex-col rounded-lg bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <div className="mb-3 flex h-44 items-center justify-center overflow-hidden rounded-md bg-gray-50">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-700">
              {product.badge}
            </p>
            <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-slate-900">
              {product.name}
            </h3>
            <div className="mt-2">
              <Stars rating={product.rating} />
              <p className="text-xs text-gray-500">{product.reviews.toLocaleString()} reviews</p>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-lg font-bold text-slate-900">AED {product.price}</span>
              {product.oldPrice && (
                <span className="text-sm text-gray-500 line-through">AED {product.oldPrice}</span>
              )}
            </div>
            <p className="mt-1 text-xs text-gray-600">{product.delivery}</p>
            <button className="mt-4 w-full rounded-md bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-500">
              Add to cart
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
