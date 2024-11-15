// src/components/NasaButton.tsx

"use client";

import { motion } from 'framer-motion';

const NasaButton = () => (
  <div className="flex justify-center mt-8">
    <motion.button
      onClick={() => window.open('https://www.nasa.gov', '_blank')}
      className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-md hover:scale-105 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Visit NASA's Website"
    >
      Visit NASA's Website
    </motion.button>
  </div>
);

export default NasaButton;
