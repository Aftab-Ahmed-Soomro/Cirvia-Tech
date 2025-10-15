import React, { useState } from "react";
import {
  ChevronDown,
  Search,
  Bookmark,
  User,
  Menu,
  X,
} from "lucide-react";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount] = useState(4);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Shop", href: "/shop" },
    { name: "Categories", href: "#categories" },
    { name: "Best Seller", href: "#bestseller" },
    { name: "Accessories", href: "#accessories" },
  ];
  return (
    <div>
      <div>
        {/* Top Banner - Responsive */}
        <div className="bg-[#800080]">
          <div className="py-1 sm:py-2 text-center max-w-6xl m-auto">
            <p className="text-white font-light text-xs sm:text-sm">
              Welcome to our online store!
            </p>
          </div>
        </div>

        <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm  px-6">
          <div className="max-w-6xl m-auto">
            <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
              {/* Logo - Responsive sizing */}
              <div className="flex-shrink-0">
                <img
                  className="w-[60px] sm:w-[80px] lg:w-[100px] xl:w-[140px] h-auto"
                  src="/assets/imgs/header.png"
                  alt="Logo"
                />
              </div>

              {/* Desktop Navigation - Hidden on mobile/tablet */}
              <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-black font-medium text-xs xl:text-sm transition-colors duration-200 hover:text-black"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Right Side Actions */}
              <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                {/* Search Bar - Desktop/Tablet */}
                <div className="hidden md:flex items-center gap-0 max-w-xs lg:max-w-md">
                  {/* Dropdown Button */}
                  <div className="flex items-center bg-[#F5F5F5] rounded-l-2xl hover:bg-[#EEEEEE]">
                    <select className="flex items-center gap-1 px-2 lg:px-3 py-1.5 lg:py-2  text-xs lg:text-sm text-black font-medium  transition-colors appearance-none pr-6">
                      <option value="all">All</option>
                      {/* Add more options here if needed */}
                    </select>
                    <ChevronDown className=" right-2 pointer-events-none text-black w-4 h-4" />
                  </div>
                  <p className="bg-[#F5F5F5] px-2 lg:px-3 py-1.5 lg:py-2 text-[#c7c1c1c5] text-sm">
                    |
                  </p>
                  {/* Search Input */}
                  <div className="relative flex-1">
                    <input
                      placeholder="Search Product"
                      className="w-full px-2 lg:px-4 py-1.5 lg:py-2 bg-[#F5F5F5] rounded-r-2xl text-xs lg:text-sm text-black placeholder-gray-400 focus:outline-none focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Icon Actions */}
                <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
                  {/* Search Icon - Mobile/Tablet */}
                  <button className="md:hidden p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  </button>

                  {/* Bookmark - Hidden on mobile */}
                  <button className="hidden sm:block border border-[#dfdcdcc5] rounded-full p-1.5 sm:p-2 hover:bg-gray-100 transition-colors">
                    <Bookmark className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  </button>

                  {/* User - Hidden on mobile */}
                  <button className="hidden sm:block border border-[#dfdcdcc5] rounded-full p-1.5 sm:p-2 hover:bg-gray-100 transition-colors">
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  </button>

                  {/* Cart with Badge - Always visible */}
                  <a href={"/cart"}>
                  <button className="relative border border-[#dfdcdcc5] p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <img width={20} src="/assets/imgs/Shopping Bag Icon.png" alt="" />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-[#800080] text-white text-xs font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </button>
                  </a>

                  {/* Mobile Menu Toggle - Hidden on desktop */}
                  <button
                    className="xl:hidden p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                    {isMobileMenuOpen ? (
                      <X className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    ) : (
                      <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu - Responsive */}
            {isMobileMenuOpen && (
              <div className="xl:hidden py-3 sm:py-4 border-t border-gray-200 bg-white">
                {/* Mobile Search - Responsive */}
                <div className="mb-3 sm:mb-4 flex items-center bg-gray-100 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-black flex-shrink-0 focus:outline-none" />
                  <input
                    type="text"
                    placeholder="Search Product"
                    className="ml-2 sm:ml-3 bg-transparent border-none outline-none text-sm sm:text-base text-black placeholder-gray-500 w-full focus:outline-none"
                  />
                </div>

                {/* Mobile Category Dropdown - Responsive */}
                <div className="mb-3 sm:mb-4">
                  <select className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-black bg-white focus:outline-none">
                    <option>All Categories</option>
                    <option>Electronics</option>
                    <option>Accessories</option>
                    <option>Gadgets</option>
                    <option>Smart Home</option>
                  </select>
                </div>

                {/* Mobile Navigation Links - Responsive */}
                <nav className="flex flex-col space-y-1 sm:space-y-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-black hover:text-black hover:bg-gray-100 font-medium text-sm sm:text-base py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>

                {/* Mobile Action Buttons - Responsive */}
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200 flex items-center justify-around">
                  <button className="flex flex-col items-center text-black hover:text-black transition-colors">
                    <Bookmark className="w-5 h-5 sm:w-6 sm:h-6 mb-1" />
                    <span className="text-xs font-medium">Saved</span>
                  </button>
                  <button className="flex flex-col items-center text-black hover:text-black transition-colors">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 mb-1" />
                    <span className="text-xs font-medium">Account</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
