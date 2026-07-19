export default function About() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl font-bold text-blue-500 text-center mb-6">
          About ElectroMart ⚡
        </h1>

        {/* Intro */}
        <p className="text-gray-300 text-center leading-relaxed mb-10">
          ElectroMart is a modern e-commerce platform for home appliances and electronics.
          We provide high-quality products with the best prices and a smooth shopping experience.
        </p>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-blue-400 mb-3">
              🎯 Our Mission
            </h2>
            <p className="text-gray-400 text-sm">
              To provide customers with reliable, affordable, and modern electronic products.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-blue-400 mb-3">
              ⚡ Why Choose Us
            </h2>
            <p className="text-gray-400 text-sm">
              Fast delivery, trusted brands, secure checkout, and excellent customer support.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-blue-400 mb-3">
              🛒 Our Products
            </h2>
            <p className="text-gray-400 text-sm">
              We offer kitchen appliances, TVs, refrigerators, washing machines and more.
            </p>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Built with ❤️ using React + Tailwind CSS
          </p>

          <p className="text-gray-500 text-sm mt-2">
            © 2026 ElectroMart. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  );
}