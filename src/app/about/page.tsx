'use client';

import Image from 'next/image';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaShoppingCart, FaGift, FaMoneyBillAlt, FaDollarSign } from 'react-icons/fa'; // Removed extra icons

function About() {
  return (
    <div className="bg-white text-black">
      {/* About Section */}
      <section className="w-[80%] mx-auto py-16">
        <h1 className="text-4xl font-bold text-left mb-8">Our Story</h1> {/* Aligned to the left */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nulla sit amet est eget urna pellentesque auctor. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/shopping.png" // Replace with actual image source
              alt="About Image"
              width={500}
              height={500}
              className="rounded-none" // Square corners for the main image
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-[80%] mx-auto py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-white rounded-lg shadow-md group hover:bg-red-500 transition-all">
            <div className="flex justify-center items-center mb-2 group-hover:text-white">
              <div className="bg-gray-200 rounded-full p-4">
                <div className="bg-black p-2 rounded-full group-hover:bg-white">
                  <FaShoppingCart size={30} className="text-white group-hover:text-black" />
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-black mb-2 group-hover:text-white">10.5k</h2>
            <p className="text-black group-hover:text-white">Sales online this year</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md group hover:bg-red-500 transition-all">
            <div className="flex justify-center items-center mb-2 group-hover:text-white">
              <div className="bg-gray-200 rounded-full p-4">
                <div className="bg-black p-2 rounded-full group-hover:bg-white">
                  <FaDollarSign size={30} className="text-white group-hover:text-black" />
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-black mb-2 group-hover:text-white">33k</h2>
            <p className="text-black group-hover:text-white">Monthly Products Sold</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md group hover:bg-red-500 transition-all">
            <div className="flex justify-center items-center mb-2 group-hover:text-white">
              <div className="bg-gray-200 rounded-full p-4">
                <div className="bg-black p-2 rounded-full group-hover:bg-white">
                  <FaGift size={30} className="text-white group-hover:text-black" />
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-black mb-2 group-hover:text-white">45.5k</h2>
            <p className="text-black group-hover:text-white">Customers online this year</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md group hover:bg-red-500 transition-all">
            <div className="flex justify-center items-center mb-2 group-hover:text-white">
              <div className="bg-gray-200 rounded-full p-4">
                <div className="bg-black p-2 rounded-full group-hover:bg-white">
                  <FaMoneyBillAlt size={30} className="text-white group-hover:text-black" />
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-black mb-2 group-hover:text-white">25k</h2>
            <p className="text-black group-hover:text-white">Annual growth in our sales</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-[80%] mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4 bg-gray-100 p-4 rounded-md">
              <Image
                src="/images/member1.png" // Replace with actual image source
                alt="Team Member"
                width={150}
                height={150}
                className="mx-auto rounded-md" // Gray background behind image
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Tom Cruise</h3> {/* Name in bold */}
            <p className="text-black mb-4">Founder & CEO</p>
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
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4 bg-gray-100 p-4 rounded-md">
              <Image
                src="/images/member2.png" // Replace with actual image source
                alt="Team Member"
                width={185}
                height={185}
                className="mx-auto rounded-md" // Gray background behind image
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Emma Watson</h3> {/* Name in bold */}
            <p className="text-black mb-4">Managing Director</p>
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
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4 bg-gray-100 p-4 rounded-md">
              <Image
                src="/images/member3.png" // Replace with actual image source
                alt="Team Member"
                width={200}
                height={200}
                className="mx-auto rounded-md" // Gray background behind image
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Will Smith</h3> {/* Name in bold */}
            <p className="text-black mb-4">Marketing Manager</p>
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
        </div>
      </section>
    </div>
  );
}

export default About;
