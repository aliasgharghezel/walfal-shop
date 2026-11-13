const footerColumns = [
  {
    title: "Get to Know Us",
    links: ["About Walfal", "Careers", "Press Releases", "Walfal Science"],
  },
  {
    title: "Shop with Us",
    links: ["Your Account", "Your Orders", "Your Addresses", "Your Lists"],
  },
  {
    title: "Make Money with Us",
    links: ["Sell on Walfal", "Advertise Your Products", "Become an Affiliate"],
  },
  {
    title: "Let Us Help You",
    links: ["Help Center", "Shipping & Delivery", "Returns & Replacements", "Contact Us"],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-slate-900 text-gray-200">
      <div className="bg-slate-800 py-3 text-center text-sm">
        <a href="#" className="font-medium hover:underline">
          Back to top
        </a>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-10 md:grid-cols-4">
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-3 text-sm font-bold text-white">{col.title}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-700 px-4 py-6 text-center text-sm text-gray-400">
        <p className="font-semibold text-white">Walfal</p>
        <p className="mt-1">© {new Date().getFullYear()} Walfal. Sample storefront UI for walfal.ir.</p>
      </div>
    </footer>
  );
}
