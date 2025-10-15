import React, { useState } from 'react';
import { Search, Trash2, Heart, Minus, Plus } from 'lucide-react';

export default function ShoppingCart() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Samsung Galaxy M54 5G 8/256GB - Dark Blue', price: 630, originalPrice: 300, discount: 20, quantity: 1, selected: false, promoCode: '' },
    { id: 2, name: 'Samsung Galaxy M54 5G 8/256GB - Dark Blue', price: 630, originalPrice: 300, discount: 20, quantity: 3, selected: true, promoCode: '' },
    { id: 3, name: 'Samsung Galaxy M54 5G 8/256GB - Dark Blue', price: 630, originalPrice: null, discount: 0, quantity: 1, selected: true, promoCode: '#KK72646' },
    { id: 4, name: 'Samsung Galaxy Tab S9 FE+ Wi-Fi 8/128GB - Gray', price: 630, originalPrice: null, discount: 0, quantity: 1, selected: true, promoCode: '#KK72646' },
    { id: 5, name: 'Tecno Camon 20 Premier 5G 8/512GB - Dark Welkin', price: 630, originalPrice: 300, discount: 20, quantity: 2, selected: true, promoCode: '' }
  ]);

  const [itemList] = useState([
    { name: 'Samsung Galaxy Z Flip5 8/256GB - Graphite x3', price: 4200 },
    { name: 'Samsung Galaxy M54 5G 8/256GB - Dark Blue x1', price: 1200 },
    { name: 'Samsung Galaxy Tab S9 FE+ Wi-Fi 8/128GB - Gray x1', price: 720 },
    { name: 'Tecno Camon 20 Premier 5G 8/512GB - Dark Welkin x2', price: 900 }
  ]);

  const [selectAll, setSelectAll] = useState(false);

  const totalProducts = 44;
  const displayedProducts = products.length;
  const tax = 240;
  const shipping = 0;
  const promoDiscount = 800;

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    setProducts(products.map(p => ({ ...p, selected: !selectAll })));
  };

  const toggleProduct = (id) => {
    setProducts(products.map(p => p.id === id ? { ...p, selected: !p.selected } : p));
  };

  const updateQuantity = (id, delta) => {
    setProducts(products.map(p => {
      if (p.id === id) {
        const newQty = Math.max(1, p.quantity + delta);
        return { ...p, quantity: newQty };
      }
      return p;
    }));
  };

  const selectedTotal = products
    .filter(p => p.selected)
    .reduce((sum, p) => sum + (p.price * p.quantity), 0);

  const totalItems = products
    .filter(p => p.selected)
    .reduce((sum, p) => sum + p.quantity, 0);

  const finalTotal = selectedTotal + tax + shipping - promoDiscount;

  return (
    <div className="py-10 md:py-14 lg:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Section - Cart Items */}
          <div className="flex-1 py-4 md:py-6">
            <div className='flex justify-between items-center'>
                {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-[#800080] mb-2">Your Cart</h1>
              <p className="text-[#7E7E7E] text-sm md:text-base">
                Displaying <span className="font-semibold">1-{displayedProducts} products</span> out of a total of{' '}
                <span className="font-semibold">{totalProducts} products</span> on your cart
              </p>
            </div>

            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Keyword Product"
                  className="w-full px-4 py-2 border text-[#7E7E7E] border-gray-300 text-[8px] sm:text-[10px] md:text-[14px] bg-[#EEEEEE] rounded-lg"
                />
                <Search className="absolute right-3 top-2.5 text-black font-bold" size={15} />
              </div>
            </div>
            </div>

            {/* Select All */}
            <div className="mb-8">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={toggleSelectAll}
                  className="w-4 h-4 text-black rounded accent-[#800080]"
                />
                <span className="font-medium text-[#131313]">Select All Product</span>
              </label>
            </div>

            {/* Product List */}
            <div className="space-y-4">
              {products.map((product) => (
                <div key={product.id} className="border-b border-[#C2C2C2] pb-4 last:border-b-0">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Checkbox and Image */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={product.selected}
                        onChange={() => toggleProduct(product.id)}
                        className="mt-2 w-4 h-4 p-2 rounded accent-[#800080]"
                        style={{ accentColor: '#800080' }}
                      />
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-pink-400 rounded-lg flex-shrink-0"></div>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <div className="flex-1">
                          <h3 className="font-bold text-sm mb-2">{product.name}</h3>
                          {product.discount > 0 && (
                            <span className="inline-block px-3 py-1 bg-[#00000099] text-white text-xs rounded-full">
                              Discount to {product.discount}%
                            </span>
                          )}
                        </div>
                        <div className="text-right sm:ml-4">
                          <p className="text-sm font-bold mb-2">Item Value</p>
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2 justify-end">
                            <button
                              onClick={() => updateQuantity(product.id, -1)}
                              className="w-5 h-5 bg-black text-white rounded flex items-center justify-center hover:bg-gray-800"
                            >
                              <Minus size={10} />
                            </button>
                            <span className="w-2 text-center text-[#7E7E7E] font-medium">{product.quantity}</span>
                            <button
                              onClick={() => updateQuantity(product.id, 1)}
                              className="w-5 h-5 bg-black text-white rounded flex items-center justify-center hover:bg-gray-800"
                            >
                              <Plus size={10} />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Price and Controls */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-3">
                        <div className="flex items-center gap-2">
                          {product.originalPrice && (
                            <span className="text-black font-semibold line-through text-sm">${product.originalPrice}</span>
                          )}
                          <span className="text-[#800080] font-bold text-xl">${product.price}</span>
                        </div>

                        <div className="flex items-center gap-2 flex-wrap">
                          {/* Action Buttons */}
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <Trash2 size={18} className="text-black" />
                          </button>
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <Heart size={18} className="text-black" />
                          </button>

                          {/* Promo Code */}
                          {product.promoCode ? (
                            <span className="px-3 py-1 border border-[#800080] text-[#800080] rounded text-sm font-bold">
                              {product.promoCode}
                            </span>
                          ) : (
                            <input
                              type="text"
                              placeholder="Enter Promo Code"
                              className="px-1 py-1 border border-[#C2C2C2] text-[#323232] rounded-[10.98px] text-center text-[12px] font-semibold w-30"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Payment Summary */}
          <div className="lg:w-[25%] space-y-6">
            {/* Payment Card */}
            <div className="bg-white rounded-lg border-[1px] border-[#C2C2C2] p-6">
              <h2 className="text-medium font-semibold text-[#131313] mb-4">Payment</h2>
              
              {/* Item List */}
              <div className="mb-6">
                <h3 className="font-semibold text-sm mb-3">Item List</h3>
                <div className="space-y-2">
                  {itemList.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span className="text-[#7E7E7E] max-w-[150px]">{item.name}</span>
                      <span className="font-semibold">${item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <div className="border-t border-gray-200 pt-4 space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[#7E7E7E]">Tax (3%)</span>
                  <span className="font-semibold">${tax}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#7E7E7E]">Shipping</span>
                  <span className="font-semibold">${shipping}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#7E7E7E]">Promo Code</span>
                  <span className="font-semibold text-red-500">- ${promoDiscount}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#7E7E7E]">Total Item</span>
                  <span className="font-semibold">x {totalItems}</span>
                </div>
              </div>

              {/* Total Payment */}
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Total Payment</span>
                  <span className="text-2xl font-bold text-black">${finalTotal}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-[#800080] text-white py-3 rounded-lg font-semibold transition-colors">
                Checkout
              </button>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-lg border-[1px] border-[#C2C2C2] p-6">
              <h3 className="font-semibold mb-4">Payment Method</h3>
              <div className="grid grid-cols-4 gap-3">
                {['/assets/imgs/method-1.png', '/assets/imgs/method-2.png', '/assets/imgs/method-3.png', '/assets/imgs/method-4.png', '/assets/imgs/method-5.png', '/assets/imgs/method-6.png', '/assets/imgs/method-7.png'].map((method, idx) => (
                  <div key={idx} className="roundedflex items-center justify-center text-xs font-semibold h-10">
                    <img src={method} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}