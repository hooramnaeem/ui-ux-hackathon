// src/components/ContactButton.tsx
"use client";

import Link from "next/link";

const ContactButton = () => (
  <Link href="/contact">
    <button className="bg-gradient-to-r from-green-900 to-green-500 text-white py-2 px-6 rounded-md transition duration-300 hover:scale-105">
      Contact Us
    </button>
  </Link>
);

export default ContactButton;

