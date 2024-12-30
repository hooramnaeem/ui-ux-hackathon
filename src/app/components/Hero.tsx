
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import pagenav from '../../../public/images/pagenav.png'

function Hero() {
  const router = useRouter();

  return (
    <div className="relative w-full h-auto lg:h-screen  overflow-hidden flex flex-col  lg:flex-row items-center justify-between">

      
      <div className="w-full md:w-1/2 flex flex-col  items-center md:items-start justify-start px-4 md:px-16 relative space-y-4 md:space-y-6">

        {/* lamp Image */}
        <div className="relative md:absolute top-2  md:top-[-165px] left-0 md:left-[0px]">
          <Image
            src="/images/bulb.png"
            alt="Bulb"
            width={200}
            height={200}
            className="object-contain md:w-[300px]"
          />
        </div>

        {/* Text Section */}
        <div className="text-center sm:mt-0 lg:ml-[160px] md:ml-[220px] md:text-left  md:mt-0">
          <p className="text-[#FB2E86] font-lato text-sm font-normal mb-2">
            Best Furniture For Your Castle...
          </p>

          <h1 className="text-xl md:text-4xl  font-josefin font-bold text-black  whitespace-nowrap leading-tight mb-4">
            New Furniture Collection <br /> Trends in 2020
          </h1>

          <p className="text-sm md:text-lg text-gray-600  whitespace-nowrap leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Magna in es adipiscing in phasellus non in justo.
          </p>

          <Link href="/shoplist">
            <button className="px-4 py-2 bg-[#FB2E86] text-white font-text rounded-md shadow-md hover:bg-pink-600">
              Shop Now
            </button>
          </Link>
          <div className="hidden  lg:block bg-[#FB2E86] rounded-full w-[12px] h-[12px] absolute top-[250px] left-[100px]"></div>
        </div>

        {/* Promotional Image */}
        <div className="flex justify-center md:absolute mt-6 md:mt-0 top-[370px] md:left-[450px] lg:left-[570px]">
          <Image
            src={pagenav}
            alt="Promotional page nav"
            className="w-10 md:w-[80px] h-auto"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 relative flex flex-col items-center justify-start space-y-4">

        {/* Pink Background */}
        <div
          className="absolute top-[10px] md:top-[1px] w-[280px] md:w-[400px] h-[280px] md:h-[400px] bg-cover bg-center z-0"
          style={{ backgroundImage: 'url(/images/pink.png)' }}
        ></div>

        {/* Sofa Image */}
        <div className="relative z-10 mt-[60px] md:mt-[80px] mb-[20px]">
          <Image
            src="/images/sofa.png"
            alt="Sofa"
            width={250}
            height={200}
            className="object-contain md:w-[350px]"
          />
        </div>

        {/* Blue Discount Badge */}
        <div
          className="absolute top-[20px] md:top-[40px] right-[90px] md:right-[75px] bg-cover bg-center w-[60px] md:w-[80px] h-[60px] md:h-[80px] flex flex-col justify-center items-center z-20"
          style={{ backgroundImage: 'url(/images/discount.png)' }}
        >
          <span className="text-sm md:text-xl font-bold text-white">50%</span>
          <span className="text-xs md:text-sm font-semibold text-white">OFF</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
