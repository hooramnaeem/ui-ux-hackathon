// src/pages/blog/[slug].tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const posts = [
  {
    id: 1,
    title: "The Mysteries of Black Holes",
    slug: "black-holes",
    content: "An exploration into the enigmatic black holes...",
  },
  {
    id: 2,
    title: "Mars Missions: Past, Present, and Future",
    slug: "mars-missions",
    content: "Discover the fascinating history of Mars missions...",
  },
];

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (slug) {
      const foundPost = posts.find((p) => p.slug === slug);
      if (foundPost) {
        setPost(foundPost);
      }
    }
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">{post.content}</p>
    </div>
  );
};

export default BlogPost;


