'use client';

import Image from 'next/image';
import { HeartIcon, ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import pinkdote from'../../../public/images/pinkdote.png'

function FeaturedProducts() {
  const products = [
    {
      id: 1,
      img: "/images/chair.png",
      name: "Cantilever Chair",
      code: "Y523201",
      price: "$42.00",
    },
    {
      id: 2,
      img: "/images/chair2.png",
      name: "Cantilever Chair",
      code: "Y523201",
      price: "$42.00",
    },
    {
      id: 3,
      img: "/images/chair3.png",
      name: "Cantilever Chair",
      code: "Y523201",
      price: "$42.00",
    },
    {
      id: 4,
      img: "/images/chair4.png",
      name: "Cantilever Chair",
      code: "Y523201",
      price: "$42.00",
    },
  ];

  return (
    <div className="w-full bg-white  py-20">
      {/* Heading */}
      <h2 className="text-[#1A0B5B] text-4xl font-josefin text-center mb-16 font-bold">Featured Products</h2>

      {/* Product Grid */}
      <div className="w-full max-w-screen-xl  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="relative group">
            {/* Product Image with Icons */}
            <div className=" shadow-lg shadow-gray-300  bg-[#F6F7FB] flex justify-center items-center   relative overflow-hidden  h-[300px]">
              {/* Product Image */}
              <Image
                src={product.img}
                width={200}
                height={250}
                alt={product.name}
                className="object-cover w-[250px]  h-[300px] transition-all duration-300 group-hover:scale-105"
              />

              {/* Icons (Wishlist, View Details, and Zoom) */}
              <div className="absolute top-2 right-[152px] space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                {/* Cart Icon */}
                <button className="bg-gray-200 p-2 rounded-full">
                  <ShoppingCartIcon className="w-6 h-6 text-[#151875] " />
                </button>
                {/* Wishlist Icon */}
                <button className="bg-gray-200 p-2 text-blue-400 rounded-full">
                  <HeartIcon className="w-6 h-6 " />
                </button>
                {/* Magnifying Glass Icon */}
                <button className="bg-gray-200 p-2 rounded-full">
                  <MagnifyingGlassIcon className="w-6 h-6 text-blue-400" />
                </button>
                
              </div>

              {/* Add to Cart Button */}
              <div className="absolute bottom-0 w-full text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-1/2 py-2 text-sm bg-[#08D15F] rounded-none hover:bg-green-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="text-center mt-0 hover:bg-[#2F1AC4] hover:text-white ">
              <h3 className="text-lg font-semibold  hover:text-white text-red-500">{product.name}</h3>
              <div className="flex justify-center items-center gap-1 mt-1">
                <span className="text-[#05E6B7] text-4xl">-</span>
                <span className="text-[#F701A8] text-4xl">-</span>
                <span className="text-[#00009D] text-4xl">-</span>
              </div>
              <p className="mt-2 text-sm  hover:text-white text-[#151875]">Code - {product.code}</p>
              <p className="mt-1  hover:text-white text-[#151875]">{product.price}</p>

            </div>
          </div>
        ))}
                <div className="w-[91px] h-[4px]  top-[1519px] left-[915px]  rounded-tl-[10px]  sm:w-[70px] sm:h-[3px] sm:top-[1200px] sm:left-[500px] md:w-[80px] md:h-[4px] md:top-[1400px] md:left-[700px]  ml-[50px] md:ml-[550px] mt-[50px]">
        
        <Image
        src={pinkdote}
        alt='pink dotted line'/>
    </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
