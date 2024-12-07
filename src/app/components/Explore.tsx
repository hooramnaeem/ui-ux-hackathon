'use client';

import Image from "next/image";
import { FiHeart } from "react-icons/fi"; // Wishlist icon
import { FaStar, FaEye } from "react-icons/fa"; // Star and Eye icons
import { HiArrowRight, HiArrowLeft } from "react-icons/hi"; // Navigation Arrows

function Explore() {
  return (
    <div className="w-full flex justify-center items-center mt-10 mb-10">
      <div className="w-[80%]">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-7">
          <div>
            <span className="border-l-8 border-red-500 text-red-500 font-bold pl-2">Our Products</span>
            <h2 className="text-4xl font-bold mt-2">Explore Our Products</h2>
          </div>
          <div className="flex items-center space-x-4">
            <HiArrowLeft className="text-3xl cursor-pointer text-gray-500 hover:text-black" />
            <HiArrowRight className="text-3xl cursor-pointer text-gray-500 hover:text-black" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[  
            {
              id: 1,
              img: "/images/chocolate.png",
              name: "Breed Dry Dog Food",
              originalPrice: "$260",
              rating: 4.7,
              reviews: 78,
              isNew: false,
            },
            {
              id: 2,
              img: "/images/camera.png",
              name: "CANON EOS DSLR Camera",
              originalPrice: "$960",
              rating: 4.9,
              reviews: 90,
              isNew: false,
            },
            {
              id: 3,
              img: "/images/laptop.png",
              name: "ASUS FHD Gaming Laptop",
              originalPrice: "$160",
              rating: 4.8,
              reviews: 68,
              isNew: false,
            },
            {
              id: 4,
              img: "/images/cream.png",
              name: "Curology Product Set",
              originalPrice: "$360",
              rating: 4.6,
              reviews: 55,
              isNew: false,
            },
            {
              id: 5,
              img: "/images/car.png",
              name: "Kids Electric Car",
              originalPrice: "$360",
              rating: 4.6,
              reviews: 55,
              isNew: true,
            },
            {
              id: 6,
              img: "/images/shoes.png",
              name: "Jr. Zoom Soccer Cleats",
              originalPrice: "$360",
              rating: 4.6,
              reviews: 55,
              isNew: false,
            },
            {
              id: 7,
              img: "/images/remote.png",
              name: "GP11 Shooter USB Gamepad",
              originalPrice: "$360",
              rating: 4.6,
              reviews: 55,
              isNew: true,
            },
            {
              id: 8,
              img: "/images/sweater.png",
              name: "Quilted Satin Jacket",
              originalPrice: "$360",
              rating: 4.6,
              reviews: 55,
              isNew: false,
            },
          ].map((product) => (
            <div key={product.id} className="relative group">
              {/* Product Image */}
              <div className="w-full h-[250px] bg-gray-200 flex justify-center items-center relative">
                {/* New Arrival Badge */}
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    New Arrival
                  </span>
                )}
                <Image
                  src={product.img}
                  width={180} // Image width
                  height={product.id === 1 ? 120 : 200} // Even more reduction for the first image
                  alt={product.name}
                  className="object-contain" // Ensures the image fits within the frame
                />

                {/* Wishlist and Eye Icons */}
                <div className="absolute top-2 right-2 space-y-1">
                  <FiHeart className="text-black bg-white p-1 w-6 h-6 rounded-full" />
                  <FaEye className="text-black bg-white p-1 w-6 h-6 rounded-full" />
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
                <div className="text-red-500 font-bold">{product.originalPrice}</div>
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

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <button className="py-2 px-7 bg-red-500 text-white rounded-md hover:bg-red-600">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Explore;
