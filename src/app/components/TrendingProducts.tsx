'use client';

import Image from 'next/image';

function TrendingProducts() {
  const products = [
    { id: 1, img: "/images/chair5.png" },
    { id: 2, img: "/images/chair6.png" },
    { id: 3, img: "/images/chair7.png" },
    { id: 4, img: "/images/product5.png" },
  ];

  const exclusiveProducts = [
    { id: 1, img: "/images/chair8.png" },
    { id: 2, img: "/images/chair9.png" },
    { id: 3, img: "/images/chair10.png" },
  ];

  return (
    <div className="w-full bg-white py-20">
      {/* Section Heading */}
      <h2 className="text-[#151875] font-josefin text-3xl font-bold text-center mb-16">Trending Products</h2>

      {/* Product Grid */}
      <div className="w-full bg-white  max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-20">
        {products.map((product) => (
          <div key={product.id} className="group relative border-transparent shadow-sm shadow-slate-300">
            {/* Image with Gray Background */}
            <div className=" flex justify-center  items-center  h-[280px] relative">
              <Image
                src={product.img}
                alt="Trending Product"
                width={260}
                height={260}
                className="object-contain bg-gray-100 transition-all duration-300 group-hover:opacity-90"
              />
            </div>

            {/* Product Details */}
            <div className="mt-0 text-center">
              <h3 className="text-[#151875] font-semibold text-lg mb-2">Cantilever Chair</h3>
              <p className="text-[#666897] font-bold inline-block">$26.00</p>
              <span className="text-gray-400 line-through ml-2">$42.00</span>
            </div>
          </div>
        ))}
      </div>

      {/* Vouchers and Product List Section */}
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-[#FFF6FB] p-40 flex flex-col justify-between relative h-[200px]">
          <h3 className="text-[#3F509E] text-xl font-josefin font-bold ml-[-140px] mt-[-140px] mb-[20px]">23% Off in all products</h3>
          <button className="text-pink-600 mr-[300px] ml-[-140px] whitespace-nowrap mb-[200px] underline text-lg font-josefin font-medium">Shop Now</button>
          <Image
            src="/images/voucher1.png"
            alt="Voucher Image"
            width={250}
            height={250}
            className="absolute bottom-2 right-0 object-contain"
          />
        </div>

      
        <div className="bg-[#EEEFFB] p-40 flex flex-col justify-between relative h-[200px]">
          <h3 className="text-[#3F509E] whitespace-nowrap ml-[-140px]  mt-[-140px] mb-[15px] text-xl font-bold ">23% Off in all products</h3>
   {/* Button */}
   <button className="text-pink-600 mr-[300px] ml-[-140px]  underline  mb-28 font-lato whitespace-nowrap text-lg font-medium mt-4">
    View Collection
  </button>
          <Image
            src="/images/voucher2.png"
            alt="Voucher Image"
            width={250}
            height={250}
             className="absolute bottom-2 right-2 object-contain"
          />
        </div>

        {/* Exclusive Product List */}
        <div className="flex flex-col space-y-3">
          {exclusiveProducts.map((product) => (
            <div
              key={product.id}
              className=" flex items-center p-4 h-[100px] rounded shadow"
            >
              <Image
                src={product.img}
                alt="Exclusive Product"
                width={80}
                height={80}
                className="object-contain bg-gray-200 mr-4"
              />
              <div>
                <h3 className="text-[#151875] font-josefin font-semibold text-lg mb-1">Exclusive Seat Chair</h3>
                <p className="text-[#151875] font-josefin font-bold inline-block">$32.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingProducts;
