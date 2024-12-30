'use client';
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaUser } from 'react-icons/fa';
import { useState } from 'react';
import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/24/outline";

const TopBar = () => {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);

  return (
    <div className="bg-violet-700 text-white py-2 text-sm">
      <div className="w-full  max-w-[1200px] mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Section */}
        <div className="flex flex-wrap items-center gap-4 lg:ml-32 sm:ml-0 sm:gap-6">
          {/* Email */}
          <a
            href="mailto:mhhasanul@gmail.com"
            className="flex items-center gap-2 hover:text-gray-200 text-xs sm:text-sm"
          >
            <FaEnvelope />
            <span>mhhasanul@gmail.com</span>
          </a>
          {/* Phone */}
          <a
            href="tel:1234567890"
            className="flex items-center gap-2 hover:text-gray-200 text-xs sm:text-sm"
          >
            <FaPhoneAlt />
            <span>(12345)67890</span>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap items-center gap-4 mt-2 sm:mt-0">
          {/* Language Selector */}
          <div
            className="relative cursor-pointer flex items-center gap-1 text-xs sm:text-sm"
            onMouseEnter={() => setLanguageDropdown(true)}
            onMouseLeave={() => setLanguageDropdown(false)}
          >
            <span>English</span>
            <span className="text-xs">▼</span>
            {languageDropdown && (
              <div className="absolute top-8 bg-white text-black rounded shadow-md p-2 z-50">
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">English</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">Spanish</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">French</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">German</div>
              </div>
            )}
          </div>

          {/* Currency Selector */}
          <div
            className="relative cursor-pointer flex items-center gap-1 text-xs sm:text-sm"
            onMouseEnter={() => setCurrencyDropdown(true)}
            onMouseLeave={() => setCurrencyDropdown(false)}
          >
            <span>USD</span>
            <span className="text-xs">▼</span>
            {currencyDropdown && (
              <div className="absolute top-8 bg-white text-black rounded shadow-md p-2 z-50">
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">USD</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">EUR</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">GBP</div>
              </div>
            )}
          </div>

          {/* Login */}
          <Link href="/account" className="flex items-center gap-2 hover:text-gray-200 text-xs sm:text-sm">
            <FaUser />
          </Link>

          {/* Wishlist and Cart */}
          <div className="flex gap-4">
            <Link href="#" className="flex items-center gap-1 text-xs sm:text-sm hover:text-[#FB2E86]">
              <span>Wishlist</span>
              <HeartIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link href="/cart" className="flex items-center gap-1 text-xs sm:text-sm hover:text-[#FB2E86]">
              <ShoppingCartIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-36" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

