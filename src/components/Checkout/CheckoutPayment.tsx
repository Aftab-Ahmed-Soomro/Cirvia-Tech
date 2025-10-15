import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { FaLocationDot } from 'react-icons/fa6';

export default function CheckoutPayment() {
  const [selectedAddress, setSelectedAddress] = useState('main');
  const [selectedPayment, setSelectedPayment] = useState('apple-pay');
  const [message, setMessage] = useState('');

  const itemList = [
    { name: 'Samsung Galaxy Z Flip5 8/256GB - Graphite x3', price: 4200 },
    { name: 'Samsung Galaxy M54 5G 8/256GB - Dark Blue x1', price: 1200 },
    { name: 'Samsung Galaxy Tab S9 FE+ Wi-Fi 8/128GB - Gray x1', price: 720 },
    { name: 'Tecno Camon 20 Premier 5G 8/512GB - Dark Welkin x2', price: 900 }
  ];

  const tax = 240;
  const shipping = 0;
  const promoDiscount = 800;
  const totalItems = 7;
  const subtotal = itemList.reduce((sum, item) => sum + item.price, 0);
  const totalPayment = subtotal + tax + shipping - promoDiscount;

  const paymentMethods = [
    { id: 'master-card', name: 'Master Card', icon: '/assets/imgs/checkout-1.png' },
    { id: 'paypal', name: 'Paypal', icon: '/assets/imgs/checkout-2.png' },
    { id: 'amazon-pay-1', name: 'Amazon Pay', icon: '/assets/imgs/checkout-3.png' },
    { id: 'apple-pay', name: 'Apple Pay', icon: '/assets/imgs/checkout-4.png' },
    { id: 'amazon-pay-2', name: 'Amazon Pay', icon: '/assets/imgs/checkout-5.png' }
  ];

  return (
    <div className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Mobile Back Button - Full Width */}
      <div className="lg:hidden mb-6">
        <button className="flex items-center gap-2 bg-black text-white px-4 sm:px-6 py-3 rounded-lg w-full sm:w-auto hover:bg-[#7E7E7E] transition-colors">
          <ArrowLeft size={20} />
          <span className="font-medium">Back</span>
        </button>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex justify-between">
        {/* Left Side - Desktop Only */}
        <div className='w-[20%]'>
          <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg mb-6 hover:bg-[#7E7E7E] transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Back</span>
          </button>
        </div>

        {/* Right Side - Desktop */}
        <div className="w-[80%]">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Left Column - Address & Payment */}
            <div className="xl:col-span-2 space-y-4 sm:space-y-6">
              {/* Select Address */}
              <div className="bg-white rounded-lg border-[#C2C2C2] border-[1px] p-3 sm:p-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                  <h2 className="text-sm font-bold">Select Address</h2>
                  <button className="text-[#7E7E7E] text-sm font-medium self-start sm:self-auto">
                    + New Address
                  </button>
                </div>

                <select
                  value={selectedAddress}
                  onChange={(e) => setSelectedAddress(e.target.value)}
                  className="w-full p-3 border border-gray-300 text-sm rounded-lg mb-4 text-[#7E7E7E] focus:outline-none focus:ring-2 focus:ring-[#800080] focus:border-transparent"
                >
                  <option value="main">At my Home (Main Address)</option>
                  <option value="office">At my Office</option>
                  <option value="other">Other Address</option>
                </select>

                <div className="rounded-lg">
                  <div className="flex items-start gap-2 mb-2">
                    <FaLocationDot size={18} className="text-[#7E7E7E] mt-1 flex-shrink-0" />
                    <h3 className="font-semibold text-[#131313]">Shipping Address</h3>
                  </div>
                  <div className="ml-7 text-sm text-[#7E7E7E] space-y-1">
                    <p>John Doe - (+31) 254 5678</p>
                    <p className="break-words">123 Main Street, Jakarta, DKI Jakarta, 12345 Indonesia</p>
                  </div>
                </div>
              </div>

              {/* Select Payment Method */}
              <div className="bg-white rounded-lg border-[#C2C2C2] border-[1px] p-3 sm:p-4">
                <h2 className="text-sm font-bold mb-4">Select Payment Method</h2>

                <select className="w-full p-3 border font-semibold text-[#7E7E7E] border-gray-300 text-sm rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#800080] focus:border-transparent">
                  <option>E-Wallet</option>
                  <option>Credit Card</option>
                  <option>Bank Transfer</option>
                </select>

                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <label
                      key={method.id}
                      className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={selectedPayment === method.id}
                        onChange={(e) => setSelectedPayment(e.target.value)}
                        className="w-5 h-5 text-[#800080] accent-[#800080]"
                      />
                      <div className="w-10 h-7 rounded flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        <img src={method.icon} alt={method.name} className="w-full h-full object-contain" />
                      </div>
                      <span className="text-[#7E7E7E] font-medium text-sm sm:text-base">{method.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Promotional Badges */}
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                <div className="flex items-center gap-2 px-3 sm:px-4 py-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#BDBDBD] rounded flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm font-bold text-[#7E7E7E]">Free Delivery</span>
                </div>
                <div className="flex items-center gap-2 px-3 sm:px-4 py-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#BDBDBD] rounded flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm font-bold text-[#7E7E7E] text-center">0% Down Payment for 24 Months</span>
                </div>
              </div>

              {/* Payment Details */}
              <div className="bg-white rounded-lg border-[#C2C2C2] border-[1px] overflow-hidden">
                <div className="bg-white border-b border-gray-200 p-3 sm:p-4">
                  <h2 className="text-sm font-bold">Payment Details</h2>
                </div>

                <div className="p-3 sm:p-4">
                  <h3 className="font-semibold mb-4">Item List</h3>
                  <div className="space-y-3">
                    {itemList.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-xs sm:text-sm">
                        <span className="text-[#7E7E7E] flex-1 pr-2 break-words">{item.name}</span>
                        <span className="font-semibold flex-shrink-0">${item.price}</span>
                      </div>
                    ))}

                    <div className="border-t border-gray-200 pt-3 mt-3 space-y-2">
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-[#7E7E7E]">Tax (3%)</span>
                        <span className="font-semibold">${tax}</span>
                      </div>
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-[#7E7E7E]">Shipping</span>
                        <span className="font-semibold">${shipping}</span>
                      </div>
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-[#7E7E7E]">Promo Code</span>
                        <span className="font-semibold text-red-500">- ${promoDiscount}</span>
                      </div>
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-[#7E7E7E]">Total Item</span>
                        <span className="font-semibold">x {totalItems}</span>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-bold">Total Payment</span>
                        <span className="text-xl sm:text-2xl font-bold text-[#800080]">${totalPayment}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Message & Order Summary */}
            <div className="space-y-4 sm:space-y-6">
              {/* Message Box */}
              <div className="bg-white rounded-lg border-[#C2C2C2] border-[1px] shadow-2xl p-3 sm:p-4">
                <h3 className="font-semibold text-sm mb-3">Message</h3>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Leave a message"
                  rows={4}
                  className="w-full p-3 font-semibold border text-[#484444] border-gray-300 rounded-lg resize-none text-sm focus:border-transparent"
                />

                <hr className='border-[0.3px] border-[#C2C2C2] my-3' />

                {/* Order Summary */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm">Total Order</span>
                    <span className="font-bold text-sm">x{totalItems} Product</span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold">Total Payment</span>
                    <h2 className="text-xl sm:text-xl font-bold text-[#800080]">${totalPayment}</h2>
                  </div>

                  <button className="w-full bg-[#800080] text-white py-3 rounded-lg font-semibold text-sm hover:bg-[#6a006a] transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="space-y-4 sm:space-y-6">
          {/* Select Address */}
          <div className="bg-white rounded-lg border-[#C2C2C2] border-[1px] p-3 sm:p-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
              <h2 className="text-sm font-bold">Select Address</h2>
              <button className="text-[#7E7E7E] text-sm font-medium self-start sm:self-auto">
                + New Address
              </button>
            </div>

            <select
              value={selectedAddress}
              onChange={(e) => setSelectedAddress(e.target.value)}
              className="w-full p-3 border border-gray-300 text-sm rounded-lg mb-4 text-[#7E7E7E] focus:outline-none focus:ring-2 focus:ring-[#800080] focus:border-transparent"
            >
              <option value="main">At my Home (Main Address)</option>
              <option value="office">At my Office</option>
              <option value="other">Other Address</option>
            </select>

            <div className="rounded-lg">
              <div className="flex items-start gap-2 mb-2">
                <FaLocationDot size={18} className="text-[#7E7E7E] mt-1 flex-shrink-0" />
                <h3 className="font-semibold text-[#131313]">Shipping Address</h3>
              </div>
              <div className="ml-7 text-sm text-[#7E7E7E] space-y-1">
                <p>John Doe - (+31) 254 5678</p>
                <p className="break-words">123 Main Street, Jakarta, DKI Jakarta, 12345 Indonesia</p>
              </div>
            </div>
          </div>

          {/* Select Payment Method */}
          <div className="bg-white rounded-lg border-[#C2C2C2] border-[1px] p-3 sm:p-4">
            <h2 className="text-sm font-bold mb-4">Select Payment Method</h2>

            <select className="w-full p-3 border font-semibold text-[#7E7E7E] border-gray-300 text-sm rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#800080] focus:border-transparent">
              <option>E-Wallet</option>
              <option>Credit Card</option>
              <option>Bank Transfer</option>
            </select>

            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <label
                  key={method.id}
                  className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method.id}
                    checked={selectedPayment === method.id}
                    onChange={(e) => setSelectedPayment(e.target.value)}
                    className="w-5 h-5 text-[#800080] accent-[#800080]"
                  />
                  <div className="w-10 h-7 rounded flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    <img src={method.icon} alt={method.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[#7E7E7E] font-medium text-sm sm:text-base">{method.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Promotional Badges */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#BDBDBD] rounded flex-shrink-0"></div>
              <span className="text-xs sm:text-sm font-bold text-[#7E7E7E]">Free Delivery</span>
            </div>
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#BDBDBD] rounded flex-shrink-0"></div>
              <span className="text-xs sm:text-sm font-bold text-[#7E7E7E] text-center">0% Down Payment for 24 Months</span>
            </div>
          </div>

          {/* Payment Details */}
          <div className="bg-white rounded-lg border-[#C2C2C2] border-[1px] overflow-hidden">
            <div className="bg-white border-b border-gray-200 p-3 sm:p-4">
              <h2 className="text-sm font-bold">Payment Details</h2>
            </div>

            <div className="p-3 sm:p-4">
              <h3 className="font-semibold mb-4">Item List</h3>
              <div className="space-y-3">
                {itemList.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-xs sm:text-sm">
                    <span className="text-[#7E7E7E] flex-1 pr-2 break-words">{item.name}</span>
                    <span className="font-semibold flex-shrink-0">${item.price}</span>
                  </div>
                ))}

                <div className="border-t border-gray-200 pt-3 mt-3 space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-[#7E7E7E]">Tax (3%)</span>
                    <span className="font-semibold">${tax}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-[#7E7E7E]">Shipping</span>
                    <span className="font-semibold">${shipping}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-[#7E7E7E]">Promo Code</span>
                    <span className="font-semibold text-red-500">- ${promoDiscount}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-[#7E7E7E]">Total Item</span>
                    <span className="font-semibold">x {totalItems}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold">Total Payment</span>
                    <span className="text-xl sm:text-2xl font-bold text-[#800080]">${totalPayment}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message Box */}
          <div className="bg-white rounded-lg border-[#C2C2C2] border-[1px] shadow-2xl p-3 sm:p-4">
            <h3 className="font-semibold text-sm mb-3">Message</h3>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Leave a message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg resize-none text-sm focus:outline-none focus:ring-2 focus:ring-[#800080] focus:border-transparent"
            />

            <hr className='border-[0.3px] border-[#C2C2C2] my-3' />

            {/* Order Summary */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm">Total Order</span>
                <span className="font-bold text-sm">x{totalItems} Product</span>
              </div>

              <div className="flex justify-between items-center text-sm">
                <span className="font-bold">Total Payment</span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#800080]">${totalPayment}</h2>
              </div>

              <button className="w-full bg-[#800080] text-white py-3 rounded-lg font-semibold text-sm hover:bg-[#6a006a] transition-colors">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}