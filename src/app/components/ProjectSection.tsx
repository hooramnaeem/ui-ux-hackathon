"use client";

import { motion } from "framer-motion";
import { FaRocket, FaLaptopCode, } from "react-icons/fa";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Resume Builder",
      description:
        "A user-friendly platform to create and manage professional resumes with ease. Developed with React.js and Node.js.",
      icon: <FaLaptopCode className="text-5xl text-green-800 mb-4" />,
      link: "https://resume-builder-swart-eight.vercel.app/",
    },
    {
      title: "Space Explorer",
      description:
        "An educational website exploring space missions, technologies, and planets. Built with passion for astronomy enthusiasts.",
      icon: <FaRocket className="text-5xl text-green-800 mb-4" />,
      link: "https://space-76z7.vercel.app/",
    },

  ];

  return (
    <section id="projects" className="py-16 px-8 bg-gray-50 text-green-700">
      <h2 className="text-4xl font-bold text-center text-green-900 mb-12">
        My Projects
      </h2>
        {/* Subtle Background Shapes */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-10 left-10 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
    <div className="absolute bottom-10 right-20 w-60 h-60 bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
  </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {project.icon}
            <h3 className="text-2xl font-semibold text-green-900 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-green-900 to-green-500 text-white py-2 px-4 rounded-md hover:scale-105 transition duration-300"
            >
              Visit Website
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
