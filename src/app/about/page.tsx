'use client';

import Image from 'next/image';
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaShoppingCart,
  FaGift,
  FaMoneyBillAlt,
  FaDollarSign,
} from 'react-icons/fa';

function About() {
  return (
    <div className="bg-white text-black">
      {/* About Section */}
      <section className="w-[90%] md:w-[80%] mx-auto py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-left mb-8">Our Story</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-base md:text-lg leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-6">
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nulla sit amet est eget urna pellentesque auctor. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/shopping.png"
              alt="About Image"
              width={500}
              height={500}
              className="w-full h-auto rounded-none"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-[90%] md:w-[80%] mx-auto py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[ 
            { icon: FaShoppingCart, count: "10.5k", description: "Sales online this year" },
            { icon: FaDollarSign, count: "33k", description: "Monthly Products Sold" },
            { icon: FaGift, count: "45.5k", description: "Customers online this year" },
            { icon: FaMoneyBillAlt, count: "25k", description: "Annual growth in our sales" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md group hover:bg-red-500 transition-all"
            >
              <div className="flex justify-center items-center mb-2 group-hover:text-white">
                <div className="bg-gray-200 rounded-full p-4">
                  <div className="bg-black p-2 rounded-full group-hover:bg-white">
                    <stat.icon size={30} className="text-white group-hover:text-black" />
                  </div>
                </div>
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-black mb-2 group-hover:text-white">
                {stat.count}
              </h2>
              <p className="text-sm md:text-base text-black group-hover:text-white">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="w-[90%] md:w-[80%] mx-auto py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">
          {[ 
            { name: "Tom Cruise", role: "Founder & CEO", img: "/images/member1.png" },
            { name: "Emma Watson", role: "Managing Director", img: "/images/member2.png" },
            { name: "Will Smith", role: "Marketing Manager", img: "/images/member3.png" },
          ].map((member, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <div className="mb-4 bg-gray-100 p-4 rounded-md">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="mx-auto rounded-md w-[100px] sm:w-[150px] md:w-[185px]"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-sm md:text-base text-black mb-4">{member.role}</p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-gray-500 hover:text-black">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-black">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-black">
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
