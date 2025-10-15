import { Heart } from 'lucide-react';
import React from 'react'

const Product: React.FC = () => {
    const products = [
    {
      id: 1,
      category: "Laptop / Mac Air",
      image: "/assets/imgs/product1.png",
      title: "Immortal 111 In Ear TWS Earbu With Up To 40  Playtime",
      reviews: 48,
      price: 39.00,
      badges: ["NEW", "14% OFF"]
    },
    {
      id: 2,
      category: "Laptop / Mac Air",
      image: "/assets/imgs/product2.png",
      title: "Immortal 111 In Ear TWS Earbu With Up To 40  Playtime",
      reviews: 48,
      price: 39.00,
      badges: ["NEW", "14% OFF"]
    },
    {
      id: 3,
      category: "Laptop / Mac Air",
      image: "/assets/imgs/product3.png",
      title: "Immortal 111 In Ear TWS Earbu With Up To 40  Playtime",
      reviews: 48,
      price: 39.00,
      badges: ["NEW", "14% OFF"]
    },
    {
      id: 4,
      category: "Laptop / Mac Air",
      image: "/assets/imgs/product4.png",
      title: "Immortal 111 In Ear TWS Earbu With Up To 40  Playtime",
      reviews: 48,
      price: 39.00,
      badges: ["NEW", "14% OFF"]
    },
    {
      id: 5,
      category: "Laptop / Mac Air",
      image: "/assets/imgs/product5.png",
      title: "Immortal 111 In Ear TWS Earbu With Up To 40  Playtime",
      reviews: 48,
      price: 39.00,
      badges: ["NEW", "14% OFF"]
    }
  ];
  return (
    <>
    <div className="bg-white pt-12 px-6">
      <div className="">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-light text-black mb-2">100% PREMIUM QUALITY</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-semibold text-black">
            Our Best Seller Products
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((product) => (
            <a href="#0" key={product.id} className="group relative bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image Container */}
              <div className="relative p-4 aspect-square border-b border-r border-gray-200 ">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
                
                {/* Action Icons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center border-[1px] border-gray-200 hover:bg-gray-100 transition-colors">
                    <img src="/assets/imgs/repeat.png" alt="" />
                  </button>
                  <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center border-[1px] border-gray-200 hover:bg-gray-100 transition-colors">
                    <Heart className="w-4 h-4 text-black hover:text-red-700" />
                  </button>
                </div>

                {/* Category */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-light text-[#707070]">{product.category}</span>
                </div>

                {/* Pagination Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 border-b border-r border-gray-200 ">
                {/* Badges */}
                <div className="flex gap-2 mb-3">
                  {product.badges.map((badge, index) => (
                    <span
                      key={index}
                      className={`text-xs font-[400] px-2 py-1 rounded-4xl ${
                        badge === "NEW"
                          ? "bg-[#800080] text-white"
                          : "bg-[#DA4322] text-white"
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-sm font-medium text-black mb-2 line-clamp-2 min-h-[40px]">
                  {product.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-[#707070]">({product.reviews} Reviews)</span>
                </div>

                {/* Price */}
                <p className="text-md font-semibold text-black">
                  From ${product.price.toFixed(2)}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
        

      
    </div>
        <div className="bg-[#800080] text-white py-4 overflow-hidden">
          <div className="animate-scroll flex whitespace-nowrap">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="inline-flex items-center gap-6 mx-8">
                <h2 className="text-md font-semibold">Summer Sale Upto 40% Off</h2>
                <img src="/assets/imgs/leaf.png" alt="" />
              </div>
            ))}
          </div>
        </div>
        <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
      </>
  );
}

export default Product
