// src/components/AnimatedButton.tsx
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  text: string;
  onClick?: () => void;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ text, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.5)" }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="inline-block bg-green-900 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition duration-300"
    >
    {text}
  </motion.button>
);

export default AnimatedButton;


