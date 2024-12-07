import Image from 'next/image';

function Arrival() {
  return (
    <div className="w-full flex justify-center items-center mt-10 mb-10">
      <div className="w-[80%]">
        {/* Section Heading */}
        <div className="flex justify-between items-center mb-7">
          <div>
            <span className="border-l-8 border-red-500 text-red-500 font-bold pl-2">Featured</span>
            <h2 className="text-4xl font-bold mt-2 text-black">New Arrival</h2>
          </div>
        </div>

        {/* Main Div with Two Parts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side - PlayStation Section */}
          <div className="bg-black text-white p-4 rounded-md relative h-[480px]">
            <div className="absolute bottom-4 left-4 z-10">
              <h3 className="text-lg font-bold">PlayStation 5</h3>
              <p className="text-sm mt-1">Black and White version of the PS5 coming out on sale.</p>
              <button className="text-white text-sm font-bold underline hover:no-underline mt-2">
                Shop Now
              </button>
            </div>
            <div className="absolute bottom-0 w-full flex justify-center items-center">
              <Image src="/images/playstation.png" width={400} height={400} alt="PlayStation 5" />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-6">
            {/* Women's Collections (Hat) Section */}
            <div className="bg-black text-white p-4 rounded-md relative h-[215px]">
              <div className="absolute top-0 right-0 w-[60%]">
                <Image
                  src="/images/hat.png"
                  width={350}
                  height={350}
                  alt="Women's Collections"
                  className="object-contain"
                />
              </div>
              <div className="absolute bottom-4 left-4 w-[60%]">
                <h3 className="text-lg font-bold">Women’s Collections</h3>
                <p className="text-sm mt-1">Featured women collections</p>
                <p className="text-sm mt-1">that give you another vibe.</p>
                <button className="text-white text-sm font-bold underline hover:no-underline mt-2">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Speakers and Perfume Section */}
            <div className="grid grid-cols-2 gap-6">
              {/* Speakers Section */}
              <div className="bg-black text-white p-4 rounded-md relative h-[240px]">
                <div className="absolute center-6 right-0 w-[80%]">
                  <Image
                    src="/images/amazon.png"
                    width={150}
                    height={200}
                    alt="Speakers"
                    className="object-contain"
                  />
                </div>
                <div className="absolute bottom-4 left-4 w=[60%]">
                  <h3 className="text-lg font-bold">Speakers</h3>
                  <p className="text-sm mt-1">Amazon wireless speakers.</p>
                  <button className="text-white text-sm font-bold underline hover:no-underline mt-2">
                    Shop Now
                  </button>
                </div>
              </div>

              {/* Perfume Section */}
              <div className="bg-black text-white p-4 rounded-md relative h-[240px]">
                <div className="absolute top-0 right-0 w-[80%]">
                  <Image
                    src="/images/perfume.png"
                    width={200}
                    height={250}
                    alt="Perfume"
                    className="object-contain"
                  />
                </div>
                <div className="absolute bottom-4 left-4 w=[60%]">
                  <h3 className="text-lg font-bold">Perfume</h3>
                  <p className="text-sm mt-1">GUCCI INTENSE OUD EDP.</p>
                  <button className="text-white text-sm font-bold underline hover:no-underline mt-2">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Arrival;
