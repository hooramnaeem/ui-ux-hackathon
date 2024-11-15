// src/components/Navbar.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import ContactButton from './ContactButton';
import SearchBar from './SearchBar';

const Navbar = () => (
  <nav className="bg-black py-4 px-6 shadow-md fixed top-0 w-full z-50 flex justify-between items-center backdrop-filter backdrop-blur-lg">
    {/* Logo */}
    <div className="flex items-center space-x-4">
      <Image
        src="/images/MF-logo.png"
        alt="Logo"
        width={40}
        height={40}
        className="rounded-full"
      />
      <Link href="/" className="text-white text-xl font-bold">
        Space Explorer
      </Link>
    </div>

    {/* Navigation Links with added spacing */}
    <div className="flex space-x-8 text-white">
      <Link href="/" className="hover:text-blue-500">Home</Link>
      <Link href="/about" className="hover:text-blue-500">About</Link>
      <Link href="/missions" className="hover:text-blue-500">Missions</Link>
      <Link href="/contact" className="hover:text-blue-500">Contact</Link>
      <Link href="/blog" className="hover:text-blue-500">Blog</Link>
    </div>

    {/* Right Side: Search Bar and Contact Button */}
    <div className="flex items-center space-x-4">
      <SearchBar />
      <ContactButton />
    </div>
  </nav>
);

export default Navbar;














