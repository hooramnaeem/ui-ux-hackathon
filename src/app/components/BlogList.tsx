import Link from "next/link";

const BlogList = ({ posts }: { posts: { id: string; title: string }[] }) => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-green-900">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg"
          >
            <h3 className="text-xl font-bold text-blue-400 mb-2">
              {post.title}
            </h3>
            <Link
              href={`/blog/${post.id}`}
              className="text-blue-500 hover:underline"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
