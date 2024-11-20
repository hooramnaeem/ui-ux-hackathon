"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 128, 0, 0.5)" }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="bg-gradient-to-r from-green-900 to-green-500 text-white py-2 px-6 rounded-full transition duration-300"
  >
    {text}
  </motion.button>
);

export default Button;
