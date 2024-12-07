import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image"; 
import { ChevronRightIcon } from "@heroicons/react/24/outline";

function Hero(){
  return(
    <div className="w-full h-[270px] flex justify-center mt-8">
      <div className="bg-black h-full w-[80%] flex justify-between">
        {/* left side */}
        <div className="bg-white w-[25%] ">
          <ul>
            <li className="flex items-center gap-2 mb-2 hover:underline">
              <span>Woman's Fashion</span>
              <ChevronRightIcon className="w-4 h-4" />
            </li>
            <li className="flex items-center gap-2 mb-2 hover:underline">
              <span>Men's Fashion</span>
              <ChevronRightIcon className="w-4 h-4" />
            </li>
            <li className="mb-2 hover:underline">Electronics</li>
            <li className="mb-2 hover:underline">Home & Lifestyle</li>
            <li className="mb-2 hover:underline">Medicine</li>
            <li className="mb-2 hover:underline">Sports & Outdoor</li>
            <li className="mb-2 hover:underline">Baby's & Toys</li>
            <li className="mb-2 hover:underline">Groceries & Pets</li>
            <li className="mb-2 hover:underline">Health & Beauty</li>
          </ul>
        </div>
        <div className="ml-8 mt-16 text-white">
          <div className="flex justify-center items-center">
            <span> <FontAwesomeIcon icon={faApple} className="w-[30px]"/> </span>
            <span className="ml-4">iPhone 14 Series</span>
            </div>
            <div className="w-[200px]">
              <h1 className="text-3xl font-sans font-bold ml-5"> Upto 10% off Voucher</h1>
              <button className="font-bold underline underline-offset-8 ml-5 items-center group transition-transform duration-300 hover:translate-x-2"> Shop Now → 
               </button>
            </div>
        </div>
         {/* right side */}
         <div>
          <Image src={"/images/hero.png"} width={350} height={200} alt="Heroimage"
          className="nt-5"></Image>
         </div>
         </div>
      </div>
  )
}

export default Hero; 