import React from 'react'

const ProductCategoryGrid: React.FC = () => {
    const categories = [
    {
      id: 1,
      title: 'Tech Gadgets',
      image: '/assets/imgs/gadget1.jpg',
      gradient: 'from-green-500/30 via-purple-500/30 to-black/50'
    },
    {
      id: 2,
      title: 'Headphone',
      image: '/assets/imgs/gadget2.jpg',
      gradient: 'from-pink-300/40 via-purple-400/40 to-purple-600/50'
    },
    {
      id: 3,
      title: 'Laptops',
      image: '/assets/imgs/gadget3.jpg',
      gradient: 'from-gray-200/30 via-gray-300/30 to-gray-400/40'
    },
    {
      id: 4,
      title: 'More',
      image: '/assets/imgs/gadget4.jpg',
      gradient: 'from-gray-300/30 via-gray-400/30 to-gray-500/40'
    }
  ];
  return (
    <div className="w-full bg-white py-8">
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative h-130 overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-b ${category.gradient} transition-opacity duration-500 group-hover:opacity-80`} />
              
              {/* Content */}
              <div className="absolute inset-0 flex items-end p-6 sm:p-8">
                <h3 className="text-white text-3xl font-semibold tracking-tight drop-shadow-lg transition-transform duration-300 group-hover:translate-y-[-8px]">
                  {category.title}
                </h3>
              </div>
              
              {/* Hover Overlay Effect */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCategoryGrid
