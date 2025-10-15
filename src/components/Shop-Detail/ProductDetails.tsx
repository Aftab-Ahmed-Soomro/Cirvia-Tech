import { useState } from 'react';

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('space-grey');
  const [selectedStorage, setSelectedStorage] = useState('512gb');
  const [quantity, setQuantity] = useState(2);

  const images = [
    'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=800&q=80',
    '/assets/imgs/rocket.png',
    'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=800&q=80',
    'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=800&q=80'
  ];

  const colors = [
    { name: 'space-grey', class: 'bg-[#B7AEE5]', label: 'Space Grey' },
    { name: 'green', class: 'bg-[#B9E5AE]', label: 'Green' },
    { name: 'pink', class: 'bg-[#E5AEB1]', label: 'Pink' },
    { name: 'gold', class: 'bg-[#E5C8AE]', label: 'Gold' },
    { name: 'blue', class: 'bg-[#AEDEE5]', label: 'Blue' }
  ];

  const storageOptions = ['64 GB', '128 GB', '256 GB', '512 GB', '1 TB'];

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Images */}
          <div className="flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnail Images */}
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-[24px] overflow-hidden border-[1px] transition-all ${
                    selectedImage === idx ? 'border-gray-900' : 'border-[#00000017]'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Product ${idx + 1}`}
                    className="w-full p-4 h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 rounded-2xl overflow-hidden aspect-square">
              <img
                src={images[selectedImage]}
                alt="iPhone 16 Pro Max"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="flex flex-col">
            {/* Badge */}
            <div className="mb-2">
              <span className="inline-block px-4 py-1.5 text-sm font-medium text-[#800080] border border-[#800080] rounded-full">
                MASTER & DYNAMIC
              </span>
            </div>

            {/* Product Title */}
            <h1 className="text-3xl font-bold text-black mb-2">
              New Phone 16 Pro Max
            </h1>

            {/* Description */}
            <p className="text-[#707070] text-sm sm:text-base mb-4">
              Vestibulum nulla tortor, eleifend a gravida ac, tincidunt eu odio.
              Maecenas eget est et elit scels sem, vehicula vel hendrerit.
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold">(48 Reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-xl font-bold text-black">$399.99</h2>
              <span className="text-xl text-[#707070] font-semibold line-through">
                $599.99
              </span>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-green-600 font-medium text-sm">In Stock</span>
              <span className="text-[#707070] text-sm">
                , In stock, ready to be shipped.
              </span>
            </div>

            {/* Color Selection */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-black">Color:</span>
                <span className="text-sm text-[#707070] capitalize">
                  {selectedColor.replace('-', ' ')}
                </span>
              </div>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full ${color.class} border-2 transition-all ${
                      selectedColor === color.name
                        ? 'border-gray-900 scale-110'
                        : 'border-gray-200'
                    }`}
                    aria-label={color.label}
                  />
                ))}
              </div>
            </div>

            {/* Storage Selection */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-black">Storage:</span>
                <span className="text-sm text-[#707070] uppercase">
                  {selectedStorage}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {storageOptions.map((storage) => (
                  <button
                    key={storage}
                    onClick={() =>
                      setSelectedStorage(storage.toLowerCase().replace(' ', ''))
                    }
                    className={`px-4 py-2 rounded-full text-[12px] font-medium transition-all ${
                      selectedStorage === storage.toLowerCase().replace(' ', '')
                        ? 'bg-black text-white'
                        : 'bg-white text-[#707070] border border-[#707070]'
                    }`}
                  >
                    {storage}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              {/* Quantity Selector */}
              <div className="flex items-center border border-[#707070] rounded-full px-5 py-2 w-full sm:w-28">
                <button onClick={decreaseQuantity} className="font-medium text-lg">
                  −
                </button>
                <span className="flex-1 text-center font-medium">{quantity}</span>
                <button onClick={increaseQuantity} className="font-medium text-lg">
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className="flex-1 bg-white border border-[#707070] rounded-full py-3 px-6 font-medium hover:bg-gray-50 transition-colors text-sm">
                Add To Cart
              </button>
            </div>

            {/* Buy Now Button */}
            <button className="w-full bg-[#800080] text-white rounded-full py-3 px-6 font-medium transition-colors text-sm">
              Buy It Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
