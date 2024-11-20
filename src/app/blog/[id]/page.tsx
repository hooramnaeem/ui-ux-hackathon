// src/app/blog/[id]/page.tsx
"use client";

import React from "react";
import { FaCode, FaLightbulb, FaLaptopCode, FaProjectDiagram, FaBrain, FaPaintBrush, FaBug, FaRocket, FaAward} from "react-icons/fa";

const BlogPost = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Mock blog data (replace this with your actual data fetching logic)
  const blogPosts = [
    {
      id: "1",
      title: "My Journey as a Full-Stack Developer",
      content: [
        {
          title: "The Beginning 💡",
          text: "Hi, I'm Muqaddas Fatima, a student at GIAIC, passionate about coding and development. My fascination with coding began during my studies when I first encountered the world of programming. I started experimenting with HTML and CSS, and with every new discovery, my curiosity grew.",
          icon: <FaLightbulb className="text-green-700 text-4xl" />,
        },
        {
          title: "Diving Deeper into Coding 💻",
          text: "As I delved deeper, I faced obstacles: debugging, algorithm complexities, and building complete applications. Each challenge taught me resilience and persistence. I devoured online tutorials, participated in coding challenges, and sought mentorship from experienced developers to refine my skills.",
          icon: <FaLaptopCode className="text-green-700 text-4xl" />,
        },
        {
          title: "Discovering Full-Stack Development 🚀",
          text: "The moment I discovered full-stack development, a new world of possibilities opened up. I started exploring technologies like React, TypeScript, Node.js, and more. Combining front-end and back-end expertise allowed me to build projects that merge creativity with technical knowledge.",
          icon: <FaCode className="text-green-700 text-4xl" />,
        },
        {
          title: "Building Projects and Staying Updated 🔗",
          text: "I’ve worked on exciting projects, participated in hackathons, and stayed updated with industry trends. Building real-world projects taught me to collaborate, debug efficiently, and manage the full development lifecycle. My skills now span HTML, CSS, React, and Node.js.",
          icon: <FaProjectDiagram className="text-green-700 text-4xl" />,
        },
        {
          title: "The Future 🌟",
          text: "As a growing full-stack developer, I'm excited to tackle complex challenges and create innovative solutions. My journey has taught me that growth is continuous. If you're on your own journey, remember: stay focused, keep learning, and celebrate your small wins. The world needs problem solvers like you!",
          icon: <FaLightbulb className="text-green-700 text-4xl" />,
        },
      ],
    },
    {
      id: "2",
      title: "How I Built a Resume Builder",
      content: [
        {
          title: "The Idea 💡",
          text: "The idea for the Resume Builder was born out of necessity. As someone applying for internships and opportunities, I realized how important it was to have a polished resume that stood out. But creating one was tedious, especially for someone without design skills. That’s when I decided to build a Resume Builder that was easy to use and customizable for everyone.",
          icon: <FaBrain className="text-green-700 text-4xl" />,
        },
        {
          title: "Designing the Interface 🎨",
          text: "I started with designing a simple yet professional user interface using Figma. I wanted the interface to be intuitive, even for users with no technical experience. Every button, input field, and preview area was carefully placed to ensure a seamless user experience.",
          icon: <FaPaintBrush className="text-green-700 text-4xl" />,
        },
        {
          title: "The Technical Journey 🛠️",
          text: "The development process involved learning new technologies. I used React.js for the frontend, allowing me to build a dynamic and responsive interface. For the backend, I explored Node.js and integrated APIs to enable resume saving and downloading. Challenges like handling user input validation and ensuring compatibility with multiple browsers pushed me to grow as a developer.",
          icon: <FaLaptopCode className="text-green-700 text-4xl" />,
        },
        {
          title: "Overcoming Challenges 🐛",
          text: "Debugging was a significant part of this journey. I encountered issues like rendering glitches, slow previews, and layout inconsistencies. However, each bug was an opportunity to learn. I spent late nights searching for solutions, often consulting developer forums and communities to resolve these problems.",
          icon: <FaBug className="text-green-700 text-4xl" />,
        },
        {
          title: "Key Features 🚀",
          text: "The Resume Builder has some amazing features, including:\n\n- Customizable Templates: Choose from different layouts and designs.\n- Real-Time Preview: See changes to your resume instantly.\n- Download Options: Export resumes in PDF format with a single click.\n- Ease of Use: A user-friendly interface designed for non-tech users.",
          icon: <FaRocket className="text-green-700 text-4xl" />,
        },
        {
          title: "The Learning Experience 🏆",
          text: "This project wasn’t just about building a tool; it was about building myself as a developer. I learned to think critically, break down complex problems, and develop scalable solutions. Completing the Resume Builder boosted my confidence and reaffirmed my passion for full-stack development.",
          icon: <FaAward className="text-green-700 text-4xl" />,
        },
      ],
    },
  ];

  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 py-16 px-8">
      <h1 className="text-5xl font-bold text-green-800 mb-8">{post.title}</h1>
      {post.content.map((section, index) => (
        <div key={index} className="mb-12">
          <div className="flex items-center mb-4">
            {section.icon}
            <h2 className="ml-4 text-3xl font-semibold text-green-700">{section.title}</h2>
          </div>
          <p className="text-lg text-gray-800 leading-8 whitespace-pre-line">{section.text}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPost;
