"use client";

import { motion } from "framer-motion";
import Link from "next/link"; // Import Link for navigation
import { FaCode, FaLaptop, FaRocket, FaAward } from "react-icons/fa";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-gray-900">
      {/* Hero Section */}
      <section className="text-center px-4 py-16">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-green-800">Muqaddas Fatima!</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-green-900 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          A passionate student of IT, Gen AI, Web 3.0 & Full Stack Developer at GIAIC Karachi. Dedicated to building beautiful,
          responsive, and scalable web applications. 
          I thrive on solving complex problems and delivering impactful solutions.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/contact">
            <button className="bg-gradient-to-r from-green-900 to-green-600 text-white py-2 px-6 rounded-md hover:scale-105 transition duration-300">
              Let’s Connect
            </button>
          </Link>
        </motion.div>
      </section>

      {/* About Highlights */}
      <section className="py-16 px-8 bg-white text-gray-900">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
          Why Work With Me?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <FaCode className="text-5xl text-green-700 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Creative Problem-Solving</h3>
            <p className="text-green-900">
              I approach every challenge with innovation and find efficient solutions.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaLaptop className="text-5xl text-green-700 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">End-to-End Development</h3>
            <p className="text-green-900">
              From brainstorming to deployment, I manage the entire lifecycle of applications.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaRocket className="text-5xl text-green-700 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Scalable Solutions</h3>
            <p className="text-green-900">
              I create robust, scalable, and secure solutions to meet your business needs.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaAward className="text-5xl text-green-700 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Continuous Growth</h3>
            <p className="text-green-900">
              I believe in continuous learning and keeping up with the latest trends.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

