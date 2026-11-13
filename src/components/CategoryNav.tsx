const categories = [
  "All",
  "Today's Deals",
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty",
  "Grocery",
  "Toys",
  "Sports",
];

export default function CategoryNav() {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mx-auto flex max-w-7xl items-center gap-4 overflow-x-auto px-4 py-2 text-sm">
        {categories.map((category) => (
          <a
            key={category}
            href="#"
            className="whitespace-nowrap rounded px-2 py-1 hover:bg-slate-700"
          >
            {category}
          </a>
        ))}
      </div>
    </nav>
  );
}
