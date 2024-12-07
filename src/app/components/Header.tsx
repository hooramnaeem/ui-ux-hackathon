'use client';

import Link from "next/link";
import { MagnifyingGlassIcon, HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import TopBar from "./TopBar"; // Import the TopBar

function Header() {
  return (
    <>
      {/* Top Bar */}
      <TopBar />

      {/* Main Header */}
      <div className="w-full h-[80px] flex justify-center items-center border-b-2">
        <div className="w-[90%] max-w-[1200px] h-full flex justify-between items-center">
          {/* Left Side */}
          <div>
            {/* Logo */}
            <h1 className="text-3xl font-bold">Exclusive</h1>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-x-2">
            {/* Navigation Links */}
            <ul className="hidden md:flex gap-x-4">
              <li>
                <Link className="hover:underline" href={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href={"/about"}>
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href={"/contact"}>
                  Contact
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href={"/signup"}>
                  Sign Up
                </Link>
              </li>
            </ul>

            {/* Search Bar */}
            <div className="hidden md:flex items-center border rounded-md overflow-hidden bg-gray-100">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-60 px-3 py-2 text-sm outline-none bg-transparent"
              />
              <button className="p-2 text-black hover:text-gray-500 transition-colors">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Wishlist and Cart Buttons */}
            <div className="flex items-center gap-x-2">
              {/* Wishlist Icon */}
              <button
                className="hover:text-gray-500 transition-colors relative"
                aria-label="Wishlist"
              >
                <HeartIcon className="w-6 h-6" />
                <div className="absolute top-[-5px] right-[-5px] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                </div>
              </button>

              {/* Cart Icon */}
              <button
                className="hover:text-gray-500 transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingCartIcon className="w-6 h-6" />
                <div className="absolute top-[-5px] right-[-5px]  text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search and Navigation */}
        <div className="w-full md:hidden flex flex-col px-5 py-2 gap-y-2">
          {/* Search Bar */}
          <div className="flex items-center border rounded-md overflow-hidden bg-gray-100">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-3 py-2 text-sm outline-none bg-transparent"
            />
            <button className="p-2 text-black hover:text-gray-500 transition-colors">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <ul className="flex justify-around text-sm">
            <li>
              <Link className="hover:underline" href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={"/contact"}>
                Contact
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={"/signup"}>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
