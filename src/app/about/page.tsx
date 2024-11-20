"use client";

import { FaLaptopCode, FaHandsHelping, FaLightbulb, FaRocket, FaGraduationCap } from "react-icons/fa";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen py-16 px-8">
      {/* Main Container */}
      <div className="container mx-auto max-w-4xl">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-12">
          <Image
            src="/images/profile.jpg" // Replace with your actual profile image path
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full border-4 border-green-700 shadow-[0_0_20px_rgba(72,187,120,0.8)] mb-4"
          />
          <h1 className="text-5xl font-bold text-green-900 mb-4">
            About Me <FaLightbulb className="inline-block text-yellow-500 ml-2" />
          </h1>
          <p className="text-lg text-gray-700 text-center">
            Hi, I'm <span className="font-bold text-green-900">Muqaddas Fatima</span>, a passionate{" "}
            <span className="text-green-700 font-semibold">
              Student of IT, Cloud Computing, Gen AI, Web 3.0, and Full Stack Development at GIAIC Karachi.
            </span>{" "}
            Dedicated to building <span className="italic">scalable</span>,{" "}
            <span className="italic">efficient</span>, and{" "}
            <span className="italic">visually appealing web applications</span>. 🚀
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-green-900 mb-6">
            Experience <FaGraduationCap className="inline-block ml-2" />
          </h2>
          <div className="space-y-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                Senior Student at GIAIC{" "}
                <span role="img" aria-label="medal">
                  🏆
                </span>
              </h3>
              <p className="text-gray-700">
                Recognized as a top-performing student among 1,500 peers for academic excellence and leadership
                in IT, cloud computing, and software development. I have consistently been involved in mentoring
                and guiding fellow students on innovative projects.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                Full-Stack Developer Intern{" "}
                <span role="img" aria-label="laptop">
                  💻
                </span>
              </h3>
              <p className="text-gray-700">
                Collaborated on building dynamic web applications and participated in end-to-end development
                cycles, leveraging modern technologies like React, Node.js, and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-green-900 mb-4">
            What I Do <FaLaptopCode className="inline-block ml-2" />
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-800">
            <li>
              <span className="text-green-700 font-bold">Front-End Development:</span> Crafting user-friendly
              interfaces using technologies like React, Next.js, and Tailwind CSS. 🎨
            </li>
            <li>
              <span className="text-green-700 font-bold">Back-End Development:</span> Building robust APIs and
              scalable systems with Node.js, FastAPI, and SQL. ⚙️
            </li>
            <li>
              <span className="text-green-700 font-bold">Team Collaboration:</span> Thriving in collaborative
              environments and always eager to learn from my peers. 🤝
            </li>
            <li>
              <span className="text-green-700 font-bold">Creative Problem Solving:</span> Approaching challenges
              with an innovative mindset and delivering efficient solutions. 💡
            </li>
          </ul>
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-green-900 mb-4">
            My Values <FaHandsHelping className="inline-block ml-2" />
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            I believe in the power of <span className="font-bold text-green-900">collaboration</span> and
            innovation to create solutions that make a positive impact. My work is guided by:
          </p>
          <ul className="list-disc list-inside space-y-4 text-gray-800 mt-4">
            <li>
              <span className="text-green-700 font-bold">Integrity:</span> Staying true to my principles and
              maintaining transparency in all my endeavors. 🙌
            </li>
            <li>
              <span className="text-green-700 font-bold">Continuous Learning:</span> Exploring new technologies
              and trends to stay ahead in the tech world. 📚
            </li>
            <li>
              <span className="text-green-700 font-bold">Empathy:</span> Designing solutions that prioritize user
              needs and deliver exceptional experiences. 💖
            </li>
          </ul>
        </div>

        {/* Fun Facts Section */}
        <div>
          <h2 className="text-3xl font-bold text-green-900 mb-4">
            Fun Facts About Me <FaRocket className="inline-block ml-2" />
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-800">
            <li>
              🌍 I love traveling and exploring different cultures. Every journey inspires my creativity!
            </li>
            <li>☕ I'm a coffee enthusiast who believes that great ideas are brewed over a good cup of coffee.</li>
            <li>🎨 When not coding, I enjoy sketching and experimenting with digital art.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
