'use client';
import Link from 'next/link';
import Image from 'next/image';
import pinkBackground from '/public/images/pink.png'; 

function Unique() {
  return (
    <div className="w-full bg-gray-100 py-20">
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="relative flex justify-center items-center">
          {/* Pink Background */}
          <div className="absolute sm:ml-0 lg:ml-40 inset-0 flex justify-center items-center">
            <Image
              src={pinkBackground}
              alt="Background"
              width={350}
              height={350}
              
              className="object-cover "
            />
          </div>
          
          {/* Sofa Image */}
          <Image
            src="/images/sofa2.png"
            alt="Sofa"
            width={350}
            height={350}
            className="relative sm:ml-0 lg:ml-40 z-10 object-contain"
          />
        </div>

        {/* Right Side */}
        <div className="px-4 mr-40 md:px-0">
          {/* Heading */}
          <h2 className="text-[#151875] font-josefin text-3xl font-bold mb-6">
            Unique Features Of Latest & Trending Products
          </h2>

          {/* Points */}
          <ul className="space-y-4 mb-8">
            {/* Point 1 */}
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-red-500 flex-shrink-0 mt-1 mr-4"></div>
              <p className="text-gray-400 font-lato">
                All frames constructed with hardwood solids and laminates.
              </p>
            </li>

            {/* Point 2 */}
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-[#3F509E] flex-shrink-0 mt-1 mr-4"></div>
              <p className="text-gray-400  font-lato">
                Reinforced with double wood dowels, glue, screw-nails, corner
                blocks, and machine nails.
              </p>
            </li>

            {/* Point 3 */}
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0 mt-1 mr-4"></div>
              <p className="text-gray-400  font-lato">
                Arms, backs, and seats are structurally reinforced.
              </p>
            </li>
          </ul>

          <div className="flex items-center gap-4">
      {/* Add to Cart Button */}
      <Link href="/cart">
        <button className="bg-pink-500 font-josefin text-white py-2 px-6 rounded-sm hover:bg-pink-600 transition-colors">
          Add To Cart
        </button>
      </Link>

            {/* Additional Text */}
            <div>
              <p className="text-[#151875] font-josefin font-semibold text-sm">B&B Italian Sofa</p>
              <p className="text-[#151875] font-bold font-josefin text-sm">$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Unique;
