"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaReact, FaNodeJs, FaCss3Alt, FaRobot, FaVial } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-gray-100 text-gray-800 py-16 px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Profile Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/profile.jpg"
            alt="Profile"
            width={300}
            height={300}
            className="rounded-full border-4 border-green-700 shadow-[0_0_40px_10px_rgba(72,187,120,0.8)]"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-green-900">
            <span role="img" aria-label="wave">
              👋
            </span>{" "}
            About Me
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Hi, I'm <span className="font-bold">Muqaddas Fatima</span>, a passionate
            Full-Stack Developer who loves crafting scalable and visually stunning web
            applications. My expertise lies in{" "}
            <span className="text-green-700">
              <FaReact className="inline" /> React
            </span>
            ,{" "}
            <span className="text-green-700">
              <FaNodeJs className="inline" /> Next.js
            </span>
            , and{" "}
            <span className="text-green-700">
              <FaNodeJs className="inline" /> Node.js
            </span>
            . I thrive on innovation and bringing creative ideas to life.
          </p>

          {/* Key Highlights */}
          <ul className="space-y-4 text-lg">
            <li className="flex items-center">
              <FaReact className="text-green-700 mr-2" /> 💻 Expertise in Full-Stack
              Development
            </li>
            <li className="flex items-center">
              <FaCss3Alt className="text-green-700 mr-2" /> 🎨 Skilled in Tailwind CSS &
              Figma
            </li>
            <li className="flex items-center">
              <FaVial className="text-green-700 mr-2" /> 🚀 Deployment on Vercel &
              GitHub Actions
            </li>
            <li className="flex items-center">
              <FaRobot className="text-green-700 mr-2" /> 📈 Continuously Learning AI & ML
            </li>
          </ul>

          {/* Fun Fact */}
          <motion.div
            className="mt-8 p-4 bg-green-50 border-l-4 border-green-700 rounded shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-gray-800 italic">
              <span role="img" aria-label="sparkles">
                ✨
              </span>{" "}
              Fun Fact: I once built an entire app in under 24 hours during a hackathon!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
