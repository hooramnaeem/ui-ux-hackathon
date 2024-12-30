import Image from "next/image";
import Link from "next/link";

function Discount() {
  return (
    <div className="w-full py-20">
      <div className="w-full max-w-screen-xl mx-auto">
        {/* Heading */}
        <h2 className="text-[#151875] text-4xl font-bold text-center font-josefin mb-8">Discount Item</h2>

        {/* Tag Buttons */}
        <div className="flex justify-center space-x-8 mb-12">
          {["Wood Chair", "Plastic Chair", "Sofa Chair"].map((tag) => (
            <button
              key={tag}
              className="relative text-lg font-medium text-gray-700 hover:text-pink-600"
            >
              {tag}
              <span className="block h-[2px] w-0 bg-pink-600 absolute bottom-0 left-0 transition-all duration-300 hover:w-full"></span>
              <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-pink-600 rounded-full opacity-0 hover:opacity-100"></span>
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Section */}
          <div className="text-center lg:ml-36 sm:ml-0 md:text-left">
            <h3 className="text-[#151875] text-3xl font-josefin font-bold mb-4">20% Discount Of All Products</h3>
            <h4 className="text-pink-500 text-xl font-lato font-semibold mb-6">Eames Sofa Compact</h4>
            <p className="text-gray-400 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p> 
            <p className="text-gray-400 mb-6"> Eu eget feugiat habitasse
              nec, bibendum condimentum. </p>
              <p className="text-gray-400 flex flex-col md:mb-2 md:flex-row whitespace-nowrap"> 
                ✓ Material expose like metals.  <span className=" ml-10 text-gray-400 mb-2 whitespace-nowrap"> 
                ✓ Clear lines and geomatric figures. </span></p>
             
              <p className="text-gray-400  whitespace-nowrap flex flex-col md:mb-2 md:flex-row whitespace"> 
               ✓ Simple neutral colours. <span className="text-gray-400 ml-20 mb-2"> 
               ✓ Material expose like metals.  </span></p> 
              

            {/* Tick Marks with Features */}
            <ul className="space-y-4">
              {[
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-4">
                  {/* Tick Mark */}
                  <span className="w-5 h-5 flex justify-center items-center border border-gray-600 rounded-full text-gray-600">
                    ✓
                  </span>
                  {/* Feature Text */}
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            {/* Shop Now Button */}
            
          <Link href="/shoplist">
            <button className="px-6 font-lato py-2 mt-4 bg-[#FB2E86] text-white font-text rounded-sm shadow-md hover:bg-pink-600">
              Shop Now
            </button>
          </Link>
            </div>

          {/* Right Side - Image Section */}
          <div className="relative flex justify-center">
            <div
              className="absolute inset-0 bg-pink-100 w-[400px] h-[400px] -z-10 rounded-full"
              style={{ margin: "auto" }}
            ></div>
            <Image
              src="/images/sofa3.png"
              alt="Discount Sofa"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discount;
