"use client";

import React, { useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa"; // Import phone and envelope icons

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [showAlert, setShowAlert] = useState(false);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAlert(true);

    // Clear the form fields
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });

    // Hide the alert after 3 seconds
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:py-16">
      <div className="max-w-6xl mx-auto bg-white p-4 sm:p-8 rounded-lg shadow-lg flex flex-col gap-6 md:flex-row md:gap-8">
        {/* Left Section */}
        <div className="flex flex-col w-full md:w-1/3 space-y-6 p-4 border border-gray-300 rounded-lg">
          <div className="flex items-center space-x-4">
            {/* Red Circle Background Icon */}
            <div className="bg-red-500 text-white rounded-full p-3">
              <FaPhone className="text-xl" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">Call To Us</h3>
              <p className="text-sm sm:text-base">We are available 24/7, 7 days a week.</p>
              <p className="font-bold text-sm sm:text-base">Phone: +8801611122222</p>
            </div>
          </div>

          {/* Gray Line Divider */}
          <div className="border-t border-gray-300 my-2 sm:my-4"></div>

          <div className="flex items-center space-x-4">
            {/* Red Circle Background Icon */}
            <div className="bg-red-500 text-white rounded-full p-3">
              <FaEnvelope className="text-xl" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">Write To Us</h3>
              <p className="text-sm sm:text-base">
                Fill out our form, and we will contact you within 24 hours.
              </p>
              <p className="font-bold text-sm sm:text-base">Emails:</p>
              <p className="text-sm sm:text-base">customer@exclusive.com</p>
              <p className="text-sm sm:text-base">support@exclusive.com</p>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="flex flex-col w-full md:w-2/3 space-y-6 p-4 border border-gray-300 rounded-lg">
          {/* Name, Phone, Email in one line */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-black"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Your Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-black"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Your Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-black"
              />
            </div>
          </div>

          {/* Message Section */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-black"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              onClick={handleSubmit}
              className="py-2 px-4 sm:py-3 sm:px-6 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none w-full sm:w-auto"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* Thank You Alert */}
      {showAlert && (
        <div className="mt-4 p-2 text-center text-black">
          <p>Thank you for your message! 😊</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
