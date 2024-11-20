"use client";

import { useParams } from "next/navigation";

const BlogPostPage = () => {
  const { id } = useParams();

  // Mock data for testing (replace with real API/data fetch later)
  const posts = [
    {
      id: "1",
      title: "My Journey as a Full-Stack Developer",
      content: "Here's the detailed content of my journey as a full-stack developer...",
    },
    {
      id: "2",
      title: "How I Built a Resume Builder",
      content: "Here's how I built the resume builder project...",
    },
  ];

  // Find the post by id
  const post = posts.find((p) => p.id === id);

  // If no post is found, render a 404 message
  if (!post) {
    return <div className="text-white text-center">Post not found</div>;
  }

  return (
    <div className="container mx-auto py-16 text-white">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg">{post.content}</p>
    </div>
  );
};

export default BlogPostPage;
