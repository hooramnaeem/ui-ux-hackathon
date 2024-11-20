"use client";

import { motion } from "framer-motion";
import { FaLaptopCode, FaRocket } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Resume Builder Website",
      description:
        "A user-friendly platform to create and manage professional resumes.",
      link: "https://resume-builder-swart-eight.vercel.app",
      icon: <FaLaptopCode className="text-green-700 text-5xl" />,
    },
    {
      id: 2,
      title: "Space Explorer Website",
      description:
        "An educational website exploring space missions, technologies, and planets.",
      link: "https://space-76z7.vercel.app",
      icon: <FaRocket className="text-green-700 text-5xl" />,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 py-16 px-8"
    >
      {/* Section Heading */}
      <motion.h2
        className="text-4xl font-bold text-green-900 mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>

      {/* Subheading */}
      <motion.p
        className="text-lg text-gray-700 mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        A showcase of my most significant projects, demonstrating my expertise in
        web development and design.
      </motion.p>

      {/* Project Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-center mb-4">{project.icon}</div>
            <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">
              {project.title}
            </h3>
            <p className="text-gray-700 mb-4 text-center">
              {project.description}
            </p>
            <div className="text-center">
            <motion.a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-gradient-to-r from-green-900 to-green-500 text-white py-2 px-6 rounded-md hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 transition duration-300"
  whileHover={{ scale: 1.1 }}
>
  Visit Website
</motion.a>

            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
