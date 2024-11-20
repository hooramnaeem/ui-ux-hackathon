"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white text-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold flex items-center">
          <img
            src="/images/MF-logo.png" // Add your logo path here
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="ml-2">Muqaddas Portfolio</span>
        </Link>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="block md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute md:relative bg-white md:bg-transparent top-16 md:top-0 left-0 w-full md:w-auto flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-6 transition-all duration-300 ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          <Link
            href="#about"
            className="hover:text-green-500 transition duration-300"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="hover:text-green-500 transition duration-300"
          >
            Projects
          </Link>
          <Link
            href="#blog"
            className="hover:text-green-500 transition duration-300"
          >
            Blog
          </Link>
          <Link
            href="#contact"
            className="hover:text-green-500 transition duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;


