// src/components/ImageGallery.tsx
"use client";

import { motion } from 'framer-motion';

const images = [
  { src: "/images/galaxy.jpg", alt: "Galaxy" },
  { src: "/images/nebula.jpg", alt: "Nebula" },
  { src: "/images/earth.jpg", alt: "Earth" },
];

const ImageGallery = () => (
  <div className="container mx-auto py-16">
    <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">Image Gallery</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-64 object-cover"
          />
        </motion.div>
      ))}
    </div>
  </div>
);

export default ImageGallery;
