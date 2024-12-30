'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function BlogSection() {
  // Define the type for hoveredBlogId as number or null
  const [hoveredBlogId, setHoveredBlogId] = useState<number | null>(null);

  const blogs = [
    {
      id: 1,
      img: '/images/sofa4.png',
      author: 'Saber Ali',
      date: '21 August, 2020',
      title: 'Top Essential Trends in 2020',
      description:
        'More off this less hello samlande lied much over tightly circa horse taped mightly.',
      titleColor: '#151875',
    },
    {
      id: 2,
      img: '/images/sofa5.png',
      author: 'Surfauxion',
      date: '21 August, 2020',
      title: 'Top Essential Trends in 2020',
      description:
        'More off this less hello samlande lied much over tightly circa horse taped mightly.',
      titleColor: '#151875',
    },
    {
      id: 3,
      img: '/images/sofa6.png',
      author: 'Saber Ali',
      date: '21 August, 2020',
      title: 'Top Essential Trends in 2020',
      description:
        'More off this less hello samlande lied much over tightly circa horse taped mightly.',
      titleColor: '#151875',
    },
  ];

  return (
    <div className="w-full bg-white py-20">
      {/* Heading */}
      <h2 className="text-center text-[#151875] font-josefin text-3xl font-bold mb-12">
        Latest Blog
      </h2>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col border-2 border-transparent shadow-lg shadow-gray-300 rounded-lg items-start"
          >
            {/* Blog Image */}
            <div className="w-full h-[300px] relative rounded-lg shadow-md bg-white p-2">
              <Image
                src={blog.img}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>

            {/* Author and Date */}
            <div className="flex items-center space-x-2 mt-4">
              <Image src="/images/vector2.png" alt="Pen" width={20} height={20} />
              <span className="text-[#151875] font-medium">{blog.author}</span>
              <Image src="/images/vector1.png" alt="Calendar" width={20} height={20} />
              <span className="text-[#151875] font-josefin font-medium">{blog.date}</span>
            </div>

            {/* Blog Title */}
            <h3
              className="font-bold text-lg font-josefin mt-4 transition-colors duration-300"
              style={{
                color: hoveredBlogId === blog.id ? '#FB2E86' : blog.titleColor,
              }}
              onMouseEnter={() => setHoveredBlogId(blog.id)}
              onMouseLeave={() => setHoveredBlogId(null)}
            >
              {blog.title}
            </h3>

            {/* Blog Description */}
            <p className="text-gray-600 font-lato mt-2">{blog.description}</p>

            {/* Read More Button */}
            <Link href="/blog">
              <button
                className={`mt-4 text-sm font-lato font-medium transition-all duration-300 ${
                  hoveredBlogId === blog.id ? 'text-pink-500 underline' : 'text-[#151875]'
                }`}
                onMouseEnter={() => setHoveredBlogId(blog.id)}
                onMouseLeave={() => setHoveredBlogId(null)}
              >
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogSection;

