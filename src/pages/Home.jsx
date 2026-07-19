import { useState } from "react";
import { Link } from "react-router-dom";

import img from "../assets/download.webp";
import image1 from "../assets/images (1).jpeg";
import image2 from "../assets/images (2).jpeg";
import image3 from "../assets/images (3).jpeg";
import image4 from "../assets/images (4).jpeg";
import images from "../assets/images.jpeg";
import img5 from "../assets/shopping (1).webp";
import img6 from "../assets/shopping (2).webp";
import img7 from "../assets/images (8).jpeg";

/* ================= PRODUCTS ================= */
const products = [
  { id: 1, name: "Blender", price: 3000, image: img },
  { id: 2, name: "Kitchen Mixer", price: 400, image: image1 },
  { id: 3, name: "Refrigerator", price: 20000, image: image2 },
  { id: 4, name: "Pedestal fan", price: 2500, image: image3 },
  { id: 5, name: "Air Conditioner", price: 7000, image: images },
  { id: 6, name: "Hand Blender", price: 5000, image: image4 },
  { id: 7, name: "Heater", price: 12000, image: img5 },
  { id: 8, name: "Vacuum Cleaner", price: 4500, image: img6 },
  { id: 9, name: "Electric heater", price: 4000, image: img7 },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.qty = (existing.qty || 1) + 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <Navbar setSearch={setSearch} />
      {/* Products Grid */}
      <div className="p-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {filtered.map((product) => (
          <div
            key={product.id}
            className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-blue-500/20 transition duration-300"
          >

            {/* Image */}
            <div className="h-56 w-full bg-white flex items-center justify-center p-4">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Info */}
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-400">{product.price}EGP</p>

              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 font-medium transition"
              >
                Add to Cart 🛒
              </button>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

/* ================= NAVBAR ================= */
function Navbar({ setSearch }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-8 py-4 border-b border-white/10">

      <h1 className="text-2xl font-bold text-blue-500">
        ⚡ ElectroMart
      </h1>

      <ul className="flex gap-6 text-sm md:text-base">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cart" className="text-yellow-400">🛒 Cart</Link></li>
      </ul>

      <input
        type="text"
        placeholder="Search products..."
        className="w-full md:w-80 px-4 py-2 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-blue-500"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}