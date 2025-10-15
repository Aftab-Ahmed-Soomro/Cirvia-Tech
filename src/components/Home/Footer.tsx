import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
    const categories = [
    { name: 'Supplement', href: '#' },
    { name: 'Beauty Product', href: '#' },
    { name: 'Electronics', href: '#' },
    { name: 'Furnitures', href: '#' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'Best Seller', href: '#' },
    { name: 'Accesssories', href: '#' }
  ];

  const support = [
    { name: 'Track Your Order', href: '#' },
    { name: 'Shipping & Returns', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Condition', href: '#' },
    { name: 'Delivery Information', href: '#' }
  ];
  
  return (
    <>
    <footer className="bg-black text-white  px-6">
      <div className="max-w-6xl m-auto py-6 xs:py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
          
          {/* Brand Section */}
          <div className="xs:col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 max-w-3xl">
            {/* Logo */}
            <div className="mb-3 xs:mb-4 sm:mb-5 md:mb-6">
              <img src="/assets/imgs/Mask group.png" alt="" className="h-8 xs:h-10 sm:h-12 md:h-14 lg:h-16" />
            </div>

            {/* Description */}
            <p className="text-xs xs:text-sm sm:text-sm md:text-base leading-relaxed mb-3 xs:mb-4 sm:mb-5 md:mb-6 font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            </p>

            {/* Payment Methods */}
            <div className="mt-3 xs:mt-4 sm:mt-5 md:mt-6">
              <p className="text-xs xs:text-sm sm:text-sm md:text-base mb-2 xs:mb-2 sm:mb-3 md:mb-3 font-semibold">Payment Accepted</p>
              <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 flex-wrap">
                <div className=" bg-black rounded flex items-center justify-center">
                  <img src="/assets/imgs/mastercard.png" alt="" />
                </div>
                <div className="bg-white rounded flex items-center justify-center">
                  <div className="flex gap-0.5 xs:gap-0.5 sm:gap-0.5 md:gap-1">
                    <img src="/assets/imgs/Maestro.png" alt="" />
                  </div>
                </div>
                <div className=" bg-white rounded flex items-center justify-center">
                  <img src="/assets/imgs/Visa.png" alt="" />
                </div>
                <div className=" bg-white rounded flex items-center justify-center">
                  <img src="/assets/imgs/Discover.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Our Category */}
          <div>
            <h3 className="text-sm xs:text-base sm:text-base md:text-lg font-semibold mb-2 xs:mb-3 sm:mb-3 md:mb-4">Our Catagory</h3>
            <ul className="space-y-1.5 xs:space-y-2 sm:space-y-2.5 md:space-y-3">
              {categories.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-xs xs:text-sm sm:text-sm md:text-sm font-light hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm xs:text-base sm:text-base md:text-lg font-semibold mb-2 xs:mb-3 sm:mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 xs:space-y-2 sm:space-y-2.5 md:space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-xs xs:text-sm sm:text-sm md:text-sm font-light hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-sm xs:text-base sm:text-base md:text-lg font-semibold mb-2 xs:mb-3 sm:mb-3 md:mb-4">Customer Support</h3>
            <ul className="space-y-1.5 xs:space-y-2 sm:space-y-2.5 md:space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-xs xs:text-sm sm:text-sm md:text-sm font-light hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="xs:col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
            <h3 className="text-sm xs:text-base sm:text-base md:text-lg font-semibold mb-2 xs:mb-3 sm:mb-3 md:mb-4">Contact us</h3>
            <div className="space-y-2.5 xs:space-y-3 sm:space-y-3.5 md:space-y-4">
              {/* Phone */}
              <div className="flex items-start gap-2 xs:gap-2.5 sm:gap-3 md:gap-3">
                <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#FEFEFE33] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
                </div>
                <div className="pt-1 xs:pt-1.5 sm:pt-2 md:pt-2">
                  <p className="text-xs xs:text-sm sm:text-sm md:text-sm font-light">+1(222) 380-6677</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2 xs:gap-2.5 sm:gap-3 md:gap-3">
                <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#FEFEFE33] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
                </div>
                <div className="pt-1 xs:pt-1.5 sm:pt-2 md:pt-2">
                  <p className="text-xs xs:text-sm sm:text-sm md:text-sm font-light">Cirvia@gmail.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2 xs:gap-2.5 sm:gap-3 md:gap-3">
                <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#FEFEFE33] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
                </div>
                <div className="pt-1 xs:pt-1.5 sm:pt-2 md:pt-2">
                  <p className="text-xs xs:text-sm sm:text-sm md:text-sm font-light leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
    <div className="w-full bg-white border-t border-gray-200  px-6">
      <div className="max-w-6xl m-auto py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Copyright Text */}
          <div className="text-xs sm:text-sm text-black font-medium text-center sm:text-left">
            Copyright @2025 CirviaTech. All Right Reserved.
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className='bg-[#800080] p-2 rounded-full'>
            <img src="/assets/imgs/x.png" alt="" />
            </div>
            <div className='bg-[#800080] p-2 rounded-full'>
            <img src="/assets/imgs/fb.png" alt="" />
            </div>
            <div className='bg-[#800080] p-2 rounded-full'>
            <img src="/assets/imgs/pintrest.png" alt="" />
            </div>
            <div className='bg-[#800080] p-2 rounded-full'>
            <img src="/assets/imgs/tiktok.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer
