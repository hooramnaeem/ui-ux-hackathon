"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 shadow-md py-4 px-6 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-green-900 font-bold text-xl">
          Muqaddas Fatima Portfolio
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden bg-green-900 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className={`md:flex ${isOpen ? "block" : "hidden"}`}>
          <ul className="md:flex space-x-6">
            <li>
              <Link
                href="/"
                className="text-green-900 hover:text-green-700 font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-green-900 hover:text-green-700 font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-green-900 hover:text-green-700 font-medium"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-green-900 hover:text-green-700 font-medium"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-green-900 hover:text-green-700 font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="bg-gray-100 md:hidden mt-4 p-4 rounded-md shadow-md">
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="block text-green-900 hover:text-green-700 font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-green-900 hover:text-green-700 font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="block text-green-900 hover:text-green-700 font-medium"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block text-green-900 hover:text-green-700 font-medium"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-green-900 hover:text-green-700 font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
