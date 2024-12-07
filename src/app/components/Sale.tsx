'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi"; // Arrows for navigation
import { FiHeart } from "react-icons/fi"; // Wishlist heart icon
import { FaEye } from "react-icons/fa"; // Eye icon
import { FaStar } from "react-icons/fa"; // Star icon

function Sale() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetTime = new Date().getTime() + 86400000; // 24 hours from now

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* Flash Sale Section */}
      <div className="w-full flex flex-col items-center mt-10 mb-10">
        {/* Flash Sale Header */}
        <div className="w-[80%] flex justify-between items-center mb-5">
          <div>
            <span className="border-l-8 border-red-500 text-red-500 font-bold pl-2">Today's</span>
            <h2 className="text-4xl font-bold mt-2">Flash Sales</h2>
          </div>
          <div className="flex items-center space-x-4">
            {/* Timer */}
            {["Days", "Hours", "Minutes", "Seconds"].map((unit, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-sm">{unit}</span>
                <span className="text-2xl font-bold">
                  {timeLeft[unit.toLowerCase() as keyof typeof timeLeft]}
                </span>
              </div>
            ))}
            {/* Navigation Arrows */}
            <HiArrowLeft className="text-2xl cursor-pointer text-gray-500 hover:text-black" />
            <HiArrowRight className="text-2xl cursor-pointer text-gray-500 hover:text-black" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Individual Product Cards */}
          {[
            {
              id: 1,
              img: "/images/gaming.png",
              name: "HAVIT HV-G92 Gamepad",
              discountedPrice: "$120",
              originalPrice: "$160",
              discount: "-25%",
              rating: 5.0,
              reviews: 20,
            },
            {
              id: 2,
              img: "/images/keyboard.png",
              name: "AK-900 Wired Keyboard",
              discountedPrice: "$960",
              originalPrice: "$1,200",
              discount: "-20%",
              rating: 4.8,
              reviews: 50,
            },
            {
              id: 3,
              img: "/images/tv.png",
              name: "IPS LCD Gaming Monitor",
              discountedPrice: "$370",
              originalPrice: "$450",
              discount: "-15%",
              rating: 4.9,
              reviews: 35,
            },
            {
              id: 4,
              img: "/images/chair.png",
              name: "S-Series Comfort Chair",
              discountedPrice: "$375",
              originalPrice: "$500",
              discount: "-25%",
              rating: 4.7,
              reviews: 45,
            },
          ].map((product) => (
            <div key={product.id} className="relative">
              {/* Product Image with Icons */}
              <div className="w-full bg-gray-200 flex justify-center items-center relative group">
                {/* Discount Badge */}
                <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
                  {product.discount}
                </span>
                <Image src={product.img} width={150} height={100} alt={product.name} />
                {/* Icons */}
                <div className="absolute top-2 right-2 space-y-2">
                  <FiHeart className="text-black bg-white p-1 w-6 h-6 rounded-full shadow cursor-pointer" />
                  <FaEye className="text-black bg-white p-1 w-6 h-6 rounded-full shadow cursor-pointer" />
                </div>
                {/* Add to Cart Button on Hover */}
                <div className="absolute bottom-0 w-full bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100">
                  <button className="w-full">Add to Cart</button>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col mt-2">
                <span className="font-bold">{product.name}</span>
                {/* Price */}
                <div className="flex items-center space-x-2">
                  <span className="text-red-500 font-bold">{product.discountedPrice}</span>
                  <span className="line-through text-gray-500">{product.originalPrice}</span>
                </div>
                {/* Rating */}
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`w-4 h-4 ${
                        index < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm">{`(${product.reviews})`}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="mt-10">
          <button className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600">View All Products</button>
        </div>
      </div>
    </main>
  );
}

export default Sale;
