import { useEffect, useRef, useState } from 'react';
import { MoveRight } from 'lucide-react';

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
    },
    {
      id: 9,
      name: "Product Name",
      image: "/assets/imgs/popular-product1.png",
      price: 35.99,
      originalPrice: 50.00,
      rating: 5,
      colors: ['#F5E6D3', '#FFD700', '#8B4513']
    },
    {
      id: 10,
      name: "Product Name",
      image: "/assets/imgs/popular-product2.png",
      price: 35.99,
      originalPrice: 50.00,
      rating: 5,
      colors: ['#1E3A8A', '#000000', '#E5E7EB']
    },
    {
      id: 11,
      name: "Product Name",
      image: "/assets/imgs/popular-product3.png",
      price: 35.99,
      originalPrice: 50.00,
      rating: 4,
      colors: ['#FF6B6B', '#FFA500', '#1F2937']
    },
    {
      id: 12,
      name: "Product Name",
      image: "/assets/imgs/popular-product4.png",
      price: 35.99,
      originalPrice: 50.00,
      rating: 5,
      colors: ['#93C5FD', '#60A5FA', '#FBBF24']
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);

  const categories = [
    'Tv & Audio',
    'Controllers',
    'Home solution',
    'Mobile phones',
    'Sound & Audio',
    'watches & Eyewear'
  ];

  const tags = [
    'CONSOLE',
    'DESKTOP',
    'LAPTOPS',
    'MOBILE PHONES',
    'ACCESSORIES',
    'AUDIO',
    'HEADPHONES'
  ];

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(6969);
  const [activeHandle, setActiveHandle] = useState<"min" | "max" | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const MIN = 0;
  const MAX = 10000;

  const minPercent = ((minVal - MIN) / (MAX - MIN)) * 100;
  const maxPercent = ((maxVal - MIN) / (MAX - MIN)) * 100;

  const getValueFromPosition = (clientX: number): number => {
    if (!sliderRef.current) return MIN;
    const rect = sliderRef.current.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    return Math.round(MIN + percent * (MAX - MIN));
  };

  const handleMove = (e: MouseEvent | TouchEvent): void => {
    if (!activeHandle) return;

    const clientX = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
    const value = getValueFromPosition(clientX);

    if (activeHandle === 'min') {
      setMinVal(Math.min(value, maxVal - 100));
    } else {
      setMaxVal(Math.max(value, minVal + 100));
    }
  };

  const handleEnd = (): void => {
    setActiveHandle(null);
  };

  useEffect(() => {
    if (activeHandle) {
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleMove);
      document.addEventListener('touchend', handleEnd);

      return () => {
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleEnd);
        document.removeEventListener('touchmove', handleMove);
        document.removeEventListener('touchend', handleEnd);
      };
    }
  }, [activeHandle, minVal, maxVal]);

  const FilterSection = () => (
    <div className="w-full bg-white p-4 lg:p-6 space-y-6 lg:space-y-8 rounded-lg border border-gray-200 lg:border-0 lg:rounded-none">
      {/* Category Section */}
      <div className='rounded-[20px] lg:rounded-[30px] border border-[#00000017] px-4 py-3 lg:px-8 lg:py-4'>
        <h2 className="text-lg lg:text-2xl font-bold mb-4 lg:mb-6">Category</h2>
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="relative flex justify-center items-center">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-5 h-5 appearance-none border-2 border-gray-300 rounded-full cursor-pointer checked:border-[#800080] checked:border-8 transition-all"
                />
              </div>
              <span className="text-sm lg:text-base text-[#707070] transition-colors">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Tags Section */}
      <div className='rounded-[20px] lg:rounded-[30px] border border-[#00000017] px-4 py-3 lg:px-8 lg:py-4'>
        <h2 className="text-lg lg:text-2xl font-bold mb-4 lg:mb-6">Tags</h2>
        <div className="flex flex-wrap gap-2 lg:gap-3">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-2 py-1 rounded-full border-2 text-[8px] lg:text-[10px] font-medium transition-all hover:border-gray-400 ${
                selectedTags.includes(tag)
                  ? 'bg-[#800080] text-white border-[#800080]'
                  : 'bg-white text-[#707070] border-gray-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Prices Section */}
      <div className='rounded-[20px] lg:rounded-[30px] border border-[#00000017] px-4 py-3 lg:px-8 lg:py-4'>
        <h2 className="text-lg lg:text-2xl font-bold mb-4 lg:mb-6">Prices</h2>
        <div className="flex items-center justify-center p-5">
          <div className="w-full max-w-2xl">
            {/* Slider */}
            <div className="relative mb-16" ref={sliderRef}>
              {/* Track */}
              <div className="relative h-[1px] bg-gray-800 rounded-full">
                {/* Range highlight */}
                <div
                  className="absolute h-full bg-gray-800 rounded-full"
                  style={{
                    left: `${minPercent}%`,
                    width: `${maxPercent - minPercent}%`
                  }}
                />
              </div>

              {/* Min Handle */}
              <div
                className="absolute top-1/2 w-8 h-8 bg-[#800080] rounded-[13px] cursor-pointer transition-transform active:scale-95 border-[#F8F8F8] border-6"
                style={{
                  left: `${minPercent}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onMouseDown={() => setActiveHandle('min')}
                onTouchStart={() => setActiveHandle('min')}
              />

              {/* Max Handle */}
              <div
                className="absolute top-1/2 w-8 h-8 bg-[#800080] rounded-[13px] cursor-pointer transition-transform active:scale-95 border-[#F8F8F8] border-6"
                style={{
                  left: `${maxPercent}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onMouseDown={() => setActiveHandle('max')}
                onTouchStart={() => setActiveHandle('max')}
              />
            </div>

            {/* Value Display */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <div className="bg-gray-200 px-2 py-2 rounded-full text-[12px] lg:text-[12px] font-semibold text-black min-w-[80px] lg:min-w-[80px] text-center">
                ${minVal.toLocaleString()}
              </div>
              <div className="text-lg text-black">—</div>
              <div className="bg-gray-200 px-2 py-2 rounded-full text-[12px] lg:text-[12px] font-semibold text-black min-w-[80px] lg:min-w-[80px] text-center">
                ${maxVal.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Super Sale Image - Only show on desktop */}
      <div className="hidden lg:block">
        <img className='rounded-[20px] lg:rounded-[30px] w-full' src="/assets/imgs/super-sale.jpg" alt="Super sale" />
      </div>
    </div>
  );

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="w-full bg-[#800080] text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 mt-12"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filters
        </button>
      </div>

      <div className='flex flex-col lg:flex-row'>
        {/* Mobile Filters - Collapsible */}
        {showMobileFilters && (
          <div className='lg:hidden w-full mb-6'>
            <FilterSection />
          </div>
        )}

        {/* Desktop Sidebar */}
        <div className='hidden lg:block w-full lg:w-[35%] xl:w-[30%] lg:pr-6'>
          <div className="top-4 mt-10">
            <FilterSection />
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-[65%] xl:w-[70%] py-6 sm:py-8 lg:py-12 xl:py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
              <div>
                <p className="text-xs font-base text-black mb-1 tracking-wide">100% PREMIUM QUALITY</p>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight font-semibold text-black">
                  Our Popular Products
                </h2>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {products.map((product) => (
                <a
                  href="#0"
                  key={product.id}
                  className="group bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 shadow-sm"
                >
                  {/* Image */}
                  <div className="relative p-4 sm:p-6 aspect-square flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="px-3 sm:px-4 py-0">
                    {/* Colors */}
                    <div className="flex gap-1 sm:gap-2 mb-2 sm:mb-3">
                      {product.colors.map((color, index) => (
                        <button
                          key={index}
                          className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-gray-300 hover:border-gray-500 transition-colors"
                          style={{ backgroundColor: color }}
                          title={`Color option ${index + 1}`}
                        />
                      ))}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-2">
                      <p className="text-sm sm:text-base">★★★★★</p>
                      <h2 className='text-[#a3a3a3] text-xs font-light'>(3)</h2>
                    </div>

                    {/* Name */}
                    <h3 className="text-xs sm:text-sm font-md text-black mb-2">
                      {product.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div>
                        <span className="text-sm sm:text-lg me-2 font-md text-black">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="text-xs sm:text-sm text-[#a3a3a3] line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      </div>
                      <div>
                        <button className="relative border-[1px] border-[#800080] p-1.5 sm:p-2 bg-[#800080] rounded-full transition-colors">
                          <img width={12} className="sm:w-[15px]" src="/assets/imgs/bag2.png" alt="Add to bag" />
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Pagination */}
            <div className='flex justify-end mt-10 gap-2'>
              <p className='text-white rounded-[12px] border bg-[#800080] py-2 px-4 cursor-pointer transition-all 
                hover:bg-[#6b006b] hover:border-[#6b006b]'>
                1
              </p>
              <p className='text-black rounded-[12px] border border-[#00000017] py-2 px-4 cursor-pointer transition-all
                hover:bg-[#f2e6f2] hover:border-[#800080]'>
                2
              </p>
              <p className='text-black rounded-[12px] border border-[#00000017] py-2 px-4 cursor-pointer transition-all
                hover:bg-[#f2e6f2] hover:border-[#800080]'>
                3
              </p>
              <p className='text-black rounded-[12px] border border-[#00000017] py-2 px-4 cursor-pointer transition-all
                hover:bg-[#f2e6f2] hover:border-[#800080]'>
                4
              </p>
              <p className='text-black rounded-[12px] border border-[#00000017] py-2 px-4 cursor-pointer transition-all
                hover:bg-[#f2e6f2] hover:border-[#800080] flex items-center gap-2'>
                Next <MoveRight size={16} />
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
