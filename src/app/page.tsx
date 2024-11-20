"use client";

import Head from "next/head";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";

const HomePage = () => {
  const blogs = [
    {
      id: 1,
      title: "My Journey as a Full-Stack Developer",
      excerpt: "Learn about my experience building scalable web applications.",
      content:
        "Full-stack development has been a fascinating journey. Starting with my first website, I explored various technologies like React, Next.js, and FastAPI.",
    },
    {
      id: 2,
      title: "How I Built a Resume Builder",
      excerpt: "The challenges and triumphs of creating a functional Resume Builder.",
      content:
        "Developing the Resume Builder was a rewarding experience. It enhanced my skills in designing user-friendly interfaces and implementing backend features.",
    },
  ];

  return (
    <>
      <Head>
        <title>Portfolio - Muqaddas Fatima</title>
        <meta
          name="description"
          content="Showcasing the work, projects, and skills of Muqaddas Fatima, a Full-Stack Developer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection posts={blogs} />
      <Footer />
    </>
  );
};

export default HomePage;
