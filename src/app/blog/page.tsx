
import BlogSection from "../components/BlogSection";

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "My Journey as a Full-Stack Developer",
      excerpt: "Learn about my experience building scalable web applications.",
      content:
        "Full-stack development has been a fascinating journey. Starting with my first website, I explored various technologies like React, Next.js, and FastAPI. Along the way, I faced challenges, honed my skills, and discovered the joy of creating impactful projects.",
    },
    {
      id: 2,
      title: "How I Built a Resume Builder",
      excerpt: "The challenges and triumphs of creating a functional Resume Builder.",
      content:
        "Developing the Resume Builder was a rewarding experience. I learned to design user-friendly interfaces, implement backend features, and ensure the application was scalable and efficient.",
    },
  ];

  return (
    <div className="bg-gray-300 min-h-screen py-16">
      <BlogSection posts={posts} />
    </div>
  );
};

export default BlogPage;
