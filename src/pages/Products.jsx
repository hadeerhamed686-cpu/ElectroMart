import { useState } from "react";

import image1 from "../assets/images (1).jpeg";
import image2 from "../assets/images (2).jpeg";
import image3 from "../assets/images (3).jpeg";
import image4 from "../assets/images (4).jpeg";
import img6 from "../assets/shopping (2).webp";
import img5 from "../assets/shopping (1).webp";
import images from "../assets/images.jpeg";
import img from "../assets/download.webp";
import img8 from "../assets/images (8).jpeg";
import img9 from "../assets/images (9).jpeg";
import img10 from "../assets/images (10).jpeg";
import img11 from "../assets/images (11).jpeg";
import img12 from "../assets/images (12).jpeg";
import img13 from "../assets/images (13).jpeg";
import img14 from "../assets/images (14).jpeg";
import img15 from "../assets/images (15).jpeg";
import img16 from "../assets/images (5).jpeg";
import img17 from "../assets/download (1).webp";
import img18 from "../assets/images (6).jpeg";
import img19 from "../assets/images (7).jpeg";

const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const products = [
    { id: 1, name: "Air Conditioner", price: 7000, image: images, category: "home" },
    { id: 2, name: "Refrigerator", price: 20000, image: image2, category: "home" },
    { id: 3, name: "Blender", price: 3000, image: img, category: "kitchen" },
    { id: 4, name: "Heater", price: 12000, image: img5, category: "home" },
    { id: 5, name: "Electric Kettle", price: 400, image: image1, category: "entertainment" },
    { id: 6, name: "Vacuum Cleaner", price: 4500, image: img6, category: "home" },
    { id: 7, name: "Pedestal fan", price: 2500, image: image3, category: "kitchen" },
    { id: 8, name: "Hand blender", price: 5000, image: image4, category: "kitchen" },
    { id: 9, name: "Electric heater", price: 4000, image: img8, category: "home" },
    { id: 10, name: "Freezer", price: 12000, image: img9, category: "kitchen" },
    { id: 11, name: "Electric iron", price: 1800, image: img10, category: "home" },
    { id: 12, name: "Hair dryer", price: 2400, image: img11, category: "home" },
    { id: 13, name: "Hair straightener", price: 3000, image: img12, category: "home" },
    { id: 14, name: "Air fryer", price: 5000, image: img13, category: "kitchen" },
    { id: 15, name: "Jazz Bush", price: 8000, image: img14, category: "kitchen" },
    { id: 16, name: "Electric oven", price: 4000, image: img15, category: "kitchen" },
    { id: 17, name: "Smart TV", price: 5500, image: img16, category: "home" },
    { id: 18, name: "Microwave", price: 3000, image: img17, category: "kitchen" },
    { id: 19, name: "Washing machine", price: 20000, image: img18, category: "home" },
    { id: 20, name: "Dishwasher", price: 15000, image: img19, category: "kitchen" },
    
  ];

  // Add to Cart
  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart 🛒");
  };
  const filteredProducts = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "all" || p.category === category;

    return matchSearch && matchCategory;
  });
  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-6">
        Our Products ⚡
      </h1>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">

        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 rounded w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded w-full md:w-1/4"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="home">Home Appliances</option>
          <option value="kitchen">Kitchen</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-xl transition p-4 flex flex-col"
          >

            {/* Image */}
            <div className="bg-gray-100 rounded-lg p-3 flex justify-center">
              <img
                src={product.image}
                className="h-40 object-contain"
                alt={product.name}
              />
            </div>

            {/* Name */}
            <h2 className="text-lg font-semibold mt-3">
              {product.name}
            </h2>

            {/* Price */}
            <p className="text-gray-600">
              {product.price} EGP
            </p>

            {/* Button */}
            <button
              onClick={() => addToCart(product)}
              className="mt-auto bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Add to Cart 🛒
            </button>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Products;