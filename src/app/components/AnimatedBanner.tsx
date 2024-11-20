// src/components/AnimatedBanner.tsx
"use client";

import { motion } from 'framer-motion';

const AnimatedBanner = () => (
  <motion.div
  className="inline-block bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition duration-300"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
  >
    <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
    <p className="text-lg">Discover my expertise & skils.</p>
  </motion.div>
);

export default AnimatedBanner;
