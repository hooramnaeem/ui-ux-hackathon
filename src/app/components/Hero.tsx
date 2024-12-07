import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image"; 
import { ChevronRightIcon } from "@heroicons/react/24/outline";

function Hero() {
  return (
    <div className="w-full flex justify-center mt-8">
      <div className="bg-black w-full sm:w-[80%] flex flex-col sm:flex-row justify-between items-center sm:items-stretch">
        {/* Left Side */}
        <div className="bg-white w-full sm:w-[30%] p-4">
          <ul className="space-y-2">
            <li className="flex items-center justify-between sm:gap-2 hover:underline">
              <span>Woman's Fashion</span>
              <ChevronRightIcon className="w-4 h-4 hidden sm:inline" />
            </li>
            <li className="flex items-center justify-between sm:gap-2 hover:underline">
              <span>Men's Fashion</span>
              <ChevronRightIcon className="w-4 h-4 hidden sm:inline" />
            </li>
            <li className="hover:underline">Electronics</li>
            <li className="hover:underline">Home & Lifestyle</li>
            <li className="hover:underline">Medicine</li>
            <li className="hover:underline">Sports & Outdoor</li>
            <li className="hover:underline">Baby's & Toys</li>
            <li className="hover:underline">Groceries & Pets</li>
            <li className="hover:underline">Health & Beauty</li>
          </ul>
        </div>

        {/* Center Section */}
        <div className="text-white text-center sm:text-left mt-4 sm:mt-16 sm:ml-8">
          <div className="flex justify-center sm:justify-start items-center">
            <FontAwesomeIcon icon={faApple} className="w-[30px]" />
            <span className="ml-4 text-lg sm:text-xl">iPhone 14 Series</span>
          </div>
          <div className="w-[90%] sm:w-[200px] mx-auto sm:mx-0 mt-4">
            <h1 className="text-2xl sm:text-3xl font-sans font-bold">
              Upto 10% off Voucher
            </h1>
            <button className="font-bold underline underline-offset-8 mt-2 sm:ml-5 group transition-transform duration-300 hover:translate-x-2">
              Shop Now →
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="mt-4 sm:mt-0">
          <Image
            src={"/images/hero.png"}
            width={350}
            height={200}
            alt="Heroimage"
            className="mx-auto sm:mx-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;