// src/components/ScrollToTopButton.tsx
"use client";

import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        aria-label="Scroll to top"
        onClick={scrollToTop}
        className="inline-block bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition duration-300"
        >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;


