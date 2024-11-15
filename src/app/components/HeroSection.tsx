// src/components/HeroSection.tsx
"use client";

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/missions');
  };

  return (

      <motion.div
        className="z-20 max-w-xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Explore the Universe
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          Discover planets, missions, and technologies beyond Earth.
        </motion.p>
        <button
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-md hover:scale-105 transition duration-300"
          onClick={handleButtonClick}
        >
          Start Your Journey
        </button>
      </motion.div>


  );
};

export default HeroSection;







