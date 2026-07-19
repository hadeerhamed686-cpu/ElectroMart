import { useState, useEffect } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  // تحميل السلة من localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // حذف منتج من السلة
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // حساب الإجمالي (بدون replace لأن السعر رقم)
  const total = cart.reduce(
    (acc, item) => acc + item.price * (item.qty || 1),
    0
  );
  return (
    <div className="min-h-screen bg-black text-white p-8">

      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-500 mb-8">
        🛒 Your Cart
      </h1>

      {/* Empty State */}
      {cart.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="grid gap-6">

          {/* Products */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white/5 border border-white/10 p-4 rounded-xl"
            >

              {/* Product Info */}
              <div className="flex items-center gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-contain bg-white rounded-lg p-2"
                />

                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-400">${item.price}</p>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.qty || 1}
                  </p>
                </div>

              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
              >
                Remove
              </button>

            </div>
          ))}

          {/* Total */}
          <div className="text-right mt-6 text-xl font-bold">
            Total: ${total}
          </div>

        </div>
      )}

    </div>
  );
}