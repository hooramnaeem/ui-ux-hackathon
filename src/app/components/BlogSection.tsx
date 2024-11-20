"use client";

import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
}

const BlogSection = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <section className="bg-gray-300 text-gray-900 py-16 px-8">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-green-500/50"
          >
            <h3 className="text-2xl font-bold mb-4 text-green-800">{post.title}</h3>
            <p className="mb-4 text-gray-900">{post.excerpt}</p>
            <Link href={`/blog/${post.id}`}>
              <button className="bg-gradient-to-r from-green-900 to-green-600 text-white py-2 px-4 rounded-md font-medium hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 transition duration-300">
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
