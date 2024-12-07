'use client';
import React, { useState } from 'react'; // Import useState for managing the alert
import Image from 'next/image'; 
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';

function Footer() {
  const [email, setEmail] = useState(""); // State for email input
  const [message, setMessage] = useState(""); // State for the success/error message

  const handleSendEmail = () => {
    if (!email.includes("@")) { // Check if the email contains '@'
      setMessage("❌ Please enter a valid email address with '@'.");
    } else {
      setMessage("✅ Your email has been sent!");
    }
    setTimeout(() => setMessage(""), 3000); // Clear the message after 3 seconds
  };

  return (
    <div className="bg-black text-white py-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Exclusive Section */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Exclusive</h1>
          <ul>
            <li className="mb-2 font-semibold">
              <a href="#" className="hover:text-red-500">Subscribe</a>
            </li>
            <li className="mb-4 text-gray-400">Get 10% off your first order</li>
            <div className="flex items-center border border-white rounded-md overflow-hidden">
              <input
                type="email"
                value={email} // Bind the email state to the input
                onChange={(e) => setEmail(e.target.value)} // Update state on input change
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm outline-none bg-black text-white"
              />
              <button
                onClick={handleSendEmail} // Call the function when clicked
                className="p-2 bg-black hover:bg-gray-800 transition-colors"
              >
                <FaPaperPlane className="text-white w-5 h-5" />
              </button>
            </div>
            {/* Message Alert */}
            {message && (
              <p className="mt-2 text-sm flex items-center gap-2">
                {message.startsWith("✅") ? (
                  <span className="text-green-500">{message}</span>
                ) : (
                  <span className="text-red-500">{message}</span>
                )}
              </p>
            )}
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Support</h1>
          <ul>
            <li className="mb-2">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh</li>
            <li className="mb-2">exclusive@gmail.com</li>
            <li className="mb-4">+88015-88888-9999</li>
          </ul>
        </div>

        {/* Account Section */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Account</h1>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-red-500">My Account</a></li>
            <li className="mb-2"><a href="#" className="hover:text-red-500">Login / Register</a></li>
            <li className="mb-2"><a href="#" className="hover:text-red-500">Cart</a></li>
            <li className="mb-2"><a href="#" className="hover:text-red-500">Wishlist</a></li>
            <li className="mb-4"><a href="#" className="hover:text-red-500">Shop</a></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Quick Links</h1>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
            <li className="mb-2"><a href="#" className="hover:text-red-500">Terms of Use</a></li>
            <li className="mb-2"><a href="#" className="hover:text-red-500">FAQ</a></li>
            <li className="mb-4"><a href="#" className="hover:text-red-500">Contact</a></li>
          </ul>
        </div>

        {/* Download App Section */}
        <div>
          <h1 className="text-2xl font-bold mb-2">Download App</h1>
          <p className="text-gray-400 mb-1">Save $3 with App New User Only</p>
          <div className="flex items-center">
            <div className="mr-1">
              <Image
                src="/images/scan.png"
                alt="Scan QR Code"
                width={90}
                height={100}
              />
            </div>
            <div>
              <div className="flex mb-4">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/googleplay.png"
                    alt="Google Play"
                    width={110}
                    height={45}
                  />
                </a>
              </div>
              <div className="flex">
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/appstore.png"
                    alt="App Store"
                    width={110}
                    height={45}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="mt-6 flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF size={30} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={30} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={30} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedinIn size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 mt-8">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
