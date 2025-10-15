import React from 'react';
import Button2 from '../../common/Button2';

const PopularProducts: React.FC = () => {

  const products = [
    {
      id: 1,
      name: "Product Name",
      image: "/assets/imgs/popular-product1.png",
      price: 35.99,
      originalPrice: 50.00,
      rating: 5,
      colors: ['#F5E6D3', '#FFD700', '#8B4513']
    },
    {
      id: 2,
      name: "Product Name",
      image: "/assets/imgs/popular-product2.png",
      price: 35.99,
      originalPrice: 50.00,
      rating: 5,
      colors: ['#1E3A8A', '#000000', '#E5E7EB']
    },
    {
      id: 3,
      name: "Product Name",
      image: "/assets/imgs/popular-product3.png",
      price: 35.99,
      originalPrice: 50.00,
      rating: 4,
      colors: ['#FF6B6B', '#FFA500', '#1F2937']
    },
    {
      id: 4,
      name: "Product Name",
      image: "/assets/imgs/popular-product4.png",
      price: 35.99,
      originalPrice: 50.00,
      rating: 5,
      colors: ['#93C5FD', '#60A5FA', '#FBBF24']
    },
    {
      id: 5,
      name: "Product Name",
      image: "/assets/imgs/popular-product5.png",
      price: 45.99,
      originalPrice: 80.00,
      rating: 5,
      colors: ['#FBBF24', '#000000']
    },
    {
      id: 6,
      name: "Product Name",
      image: "/assets/imgs/popular-product6.png",
      price: 35.99,
      originalPrice: 50.00,
      rating: 5,
      colors: ['#EF4444', '#D1D5DB', '#10B981']
    },
    {
      id: 7,
      name: "Product Name",
      image: "/assets/imgs/popular-product7.png",
      price: 40.00,
      originalPrice: 85.00,
      rating: 4,
      colors: ['#F3F4F6', '#FFC0CB']
    },
    {
      id: 8,
      name: "Product Name",
      image: "/assets/imgs/popular-product8.png",
      price: 35.99,
      originalPrice: 50.00,
      rating: 5,
      colors: ['#BFDBFE', '#9CA3AF']
    }
  ];
  return (
    <div className="bg-white py-8 sm:py-12 md:py-16  px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs font-base text-black mb-1 tracking-wide">100% PREMIUM QUALITY</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-semibold text-black">
              Our Popular Products
            </h2>
          </div>
          <Button2 name={"View All"} />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl m-auto">
          {products.map((product) => (
            <a
            href='#0'
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
                  <h2 className='text-black text-xs font-light'>(3)</h2>
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
}

export default PopularProducts
