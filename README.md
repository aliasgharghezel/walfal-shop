# Walfal Shop

A Next.js + Tailwind CSS storefront homepage inspired by Amazon.ae, built for **walfal.ir**.

## Tech stack

- Next.js 13+ (App Router)
- TypeScript
- Tailwind CSS

## Homepage sections

The homepage is composed of modular components under `src/components/`:

- **Header** — Walfal logo, category-aware search bar, account/cart placeholders
- **CategoryNav** — horizontal category navigation bar
- **HeroBanner** — promotional hero with category callouts
- **CategoryTiles** — clickable category cards
- **DealsStrip** — today's deals strip
- **ProductGrid** — featured products grid with ratings, prices, and add-to-cart
- **Footer** — multi-column footer with brand info

## Sample data

Product data lives in `src/data/products.ts` and is imported by `ProductGrid`.

## Running locally


npm install
npm run dev


Then open http://localhost:3000

## Repository

https://github.com/aliasgharghezel/walfal-shop
