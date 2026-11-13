export default function Header() {
  return (
    <header className="bg-slate-900 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center">
        <div className="flex items-center justify-between gap-4">
          <a href="#" className="text-2xl font-bold tracking-tight text-white">
            <span className="text-amber-400">W</span>alfal
          </a>
          <div className="flex items-center gap-4 text-sm sm:hidden">
            <button className="hover:text-amber-300">Account</button>
            <button className="hover:text-amber-300">Cart (0)</button>
          </div>
        </div>

        <div className="flex w-full flex-1 overflow-hidden rounded-md bg-white text-gray-900">
          <select
            className="hidden border-r border-gray-200 bg-gray-100 px-3 text-sm text-gray-700 sm:block"
            aria-label="Search category"
            defaultValue="all"
          >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
            <option value="beauty">Beauty</option>
          </select>
          <input
            type="text"
            placeholder="Search Walfal"
            className="w-full px-3 py-2 text-sm outline-none"
          />
          <button className="bg-amber-400 px-4 text-sm font-semibold text-slate-900 hover:bg-amber-500">
            Search
          </button>
        </div>

        <div className="hidden items-center gap-6 text-sm sm:flex">
          <button className="text-left hover:text-amber-300">
            <div className="text-xs text-gray-300">Hello, sign in</div>
            <div className="font-semibold">Account &amp; Lists</div>
          </button>
          <button className="text-left hover:text-amber-300">
            <div className="text-xs text-gray-300">Returns</div>
            <div className="font-semibold">&amp; Orders</div>
          </button>
          <button className="flex items-center gap-2 font-semibold hover:text-amber-300">
            <span className="rounded bg-amber-400 px-2 py-0.5 text-xs text-slate-900">
              0
            </span>
            Cart
          </button>
        </div>
      </div>
    </header>
  );
}
