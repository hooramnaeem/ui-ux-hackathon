import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  excerpt: string;
  imageSrc: string;
  date: string;
  readingTime: string;
  tags: string[];
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  imageSrc,
  date,
  readingTime,
  tags,
}) => (
  <motion.div
    className="bg-gray-800 p-4 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.7)" }}
    transition={{ duration: 0.3 }}
  >
    <img
      src={imageSrc}
      alt={title}
      className="rounded-md mb-4 w-full h-40 object-cover"
    />
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-gray-400 mt-2">{excerpt}</p>
    <div className="text-gray-500 text-sm mt-2">
      <span>{date}</span> • <span>{readingTime}</span>
    </div>
    <div className="mt-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="inline-block bg-green-900 text-white text-xs px-2 py-1 rounded-full mr-2"
        >
          #{tag}
        </span>
      ))}
    </div>
  </motion.div>
);

export default BlogCard;
