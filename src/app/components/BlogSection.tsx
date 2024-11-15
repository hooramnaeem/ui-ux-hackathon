// src/components/BlogSection.tsx
"use client";

const BlogSection = ({ posts = [] }) => {
  // Check if posts is empty and display a message if so
  if (posts.length === 0) {
    return <div className="text-center text-gray-500">The cosmos is vast and full of mysteries. Our explorers are currently on a mission to bring you the latest discoveries and stories from beyond Earth. 
    Check back soon for fascinating insights into planets, black holes, and the wonders of the universe.
    Thank You!
  </div>;
  }

  return (
    <div className="container mx-auto py-16">
      {posts.map((post) => (
        <div key={post.id} className="mb-8">
          <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
          <p className="text-lg mb-2">{post.excerpt}</p>
          <div className="text-gray-300">
            {/* Display Full Content */}
            <p className="mb-4">{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSection;











