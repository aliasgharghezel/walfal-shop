export type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  badge: string;
  delivery: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Noise Cancelling Headphones with 30-Hour Battery",
    price: 249,
    oldPrice: 329,
    rating: 4.6,
    reviews: 1842,
    badge: "Best Seller",
    delivery: "Free delivery by Tomorrow",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Smart Watch Fitness Tracker with Heart Rate Monitor",
    price: 179,
    oldPrice: 219,
    rating: 4.4,
    reviews: 963,
    badge: "Deal",
    delivery: "Fast delivery available",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Compact Espresso Coffee Machine for Home & Office",
    price: 399,
    oldPrice: 499,
    rating: 4.7,
    reviews: 521,
    badge: "Top Rated",
    delivery: "Free delivery this week",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Ergonomic Office Chair with Lumbar Support",
    price: 289,
    rating: 4.3,
    reviews: 734,
    badge: "New Arrival",
    delivery: "Ships in 2 days",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Everyday Skincare Essentials Gift Set, 5 Pieces",
    price: 129,
    oldPrice: 159,
    rating: 4.5,
    reviews: 1208,
    badge: "Limited Offer",
    delivery: "Free delivery over AED 100",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "4K Smart LED TV 55-inch with Streaming Apps",
    price: 1499,
    oldPrice: 1799,
    rating: 4.6,
    reviews: 412,
    badge: "Big Deal",
    delivery: "Scheduled delivery available",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    name: "Running Shoes Lightweight Breathable Sneakers",
    price: 159,
    oldPrice: 199,
    rating: 4.2,
    reviews: 648,
    badge: "Popular",
    delivery: "Free returns within 15 days",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Stainless Steel Cookware Set, 10-Piece Nonstick",
    price: 219,
    oldPrice: 279,
    rating: 4.8,
    reviews: 305,
    badge: "Kitchen Favorite",
    delivery: "Free delivery by Friday",
    image: "https://images.unsplash.com/photo-1584990347449-a2d4c2c044c9?auto=format&fit=crop&w=600&q=80",
  },
];
