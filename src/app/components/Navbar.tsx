"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center">
          <span className="ml-5 text-green-900">Muqaddas Fatima Portfolio</span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="text-green-900 block md:hidden"
          aria-label="Toggle Menu"
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
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute md:relative bg-white md:bg-transparent top-16 md:top-0 left-0 w-full md:w-auto flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-6 transition-all duration-300 ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-green-900 to-green-500 text-white py-2 px-6 rounded-full hover:scale-105 transition duration-300"
            >
            Home
          </Link>
          <Link
            href="/about"
            className="inline-block bg-gradient-to-r from-green-900 to-green-500 text-white py-2 px-6 rounded-full hover:scale-105 transition duration-300"
            >
            About
          </Link>
          <Link
            href="/projects"
            className="inline-block bg-gradient-to-r from-green-900 to-green-500 text-white py-2 px-6 rounded-full hover:scale-105 transition duration-300"
            >
            Projects
          </Link>
          <Link
            href="/blog"
            className="inline-block bg-gradient-to-r from-green-900 to-green-500 text-white py-2 px-6 rounded-full hover:scale-105 transition duration-300"
            >
            Blog
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-green-900 to-green-500 text-white py-2 px-6 rounded-full hover:scale-105 transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
