import React from "react";

const NewArrivals: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Product Name",
      image: "/assets/imgs/arrival-product1.png",
      price: 45.99,
      originalPrice: 50.0,
      rating: 4,
      reviews: 1,
      colors: ["#34D399", "#EC4899"],
    },
    {
      id: 2,
      name: "Product Name",
      image: "/assets/imgs/arrival-product2.png",
      price: 35.99,
      originalPrice: 50.0,
      rating: 5,
      reviews: 1,
      colors: ["#1E40AF", "#8B4513", "#34D399"],
    },
    {
      id: 3,
      name: "Product Name",
      image: "/assets/imgs/arrival-product3.png",
      price: 40.0,
      originalPrice: 50.0,
      rating: 5,
      reviews: 1,
      colors: ["#F5F5DC", "#D4A574"],
    },
    {
      id: 4,
      name: "Product Name",
      image: "/assets/imgs/arrival-product4.png",
      price: 35.99,
      originalPrice: 50.0,
      rating: 4,
      reviews: 1,
      colors: ["#22C55E", "#EC4899"],
    },
  ];
  return (
    <div className="w-full bg-white py-8 sm:py-12 md:py-16  px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-md text-black tracking-wider uppercase mb-2">
            NEW ARRIVAL
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-semibold text-black">
            Discover Our New Arrivals!
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <a
            href="#0"
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative p-6 aspect-square flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="px-4 py-0">
                {/* Color Options */}
                <div className="flex gap-2 mb-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className="w-5 h-5 rounded-full border-2 border-gray-300 hover:border-gray-500 transition-colors"
                      style={{ backgroundColor: color }}
                      title={`Color option ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <p>★★★★★</p>
                  <h2 className="text-[#a3a3a3] text-xs font-light">(3)</h2>
                </div>

                {/* Product Name */}
                <h3 className="text-sm font-md text-black">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-lg me-2 font-md text-black">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-[#a3a3a3] line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  </div>
                  <div>
                    <button className="relative border-[1px] border-[#800080] p-2 bg-[#800080] rounded-full transition-colors">
                      <img width={15} src="/assets/imgs/bag2.png" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
