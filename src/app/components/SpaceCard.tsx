// src/components/SpaceCard.tsx
import { motion } from 'framer-motion';

interface SpaceCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const SpaceCard: React.FC<SpaceCardProps> = ({ title, description, imageSrc }) => (
  <motion.div
    className="bg-gray-800 p-4 rounded-lg shadow-lg overflow-hidden"
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.8)" }}
    transition={{ duration: 0.3 }}
  >
    <img src={imageSrc} alt={title} className="rounded-t-lg mb-4 w-full h-40 object-cover" />
    <h2 className="text-xl font-bold text-white">{title}</h2>
    <p className="text-gray-400 mt-2">{description}</p>
  </motion.div>
);

export default SpaceCard;
