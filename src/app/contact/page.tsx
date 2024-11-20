"use client";

import { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true); // Simulate submission
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg shadow-xl max-w-md mx-auto relative">
      {/* Decorative Glow */}
      <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-500 blur-3xl rounded-full opacity-50"></div>
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 blur-3xl rounded-full opacity-50"></div>

      {/* Heading */}
      <h2 className="text-4xl font-bold text-green-900 mb-6 text-center relative">
        <span className="block text-shadow-lg shadow-green-900">Let's Connect!</span>
      </h2>
      <p className="text-center text-gray-700 mb-8">
        I'm always excited to collaborate on exciting projects or share ideas. Feel free to reach out!
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div className="relative">
          <FaUser className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full pl-10 p-3 bg-white border border-gray-300 text-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-green-700"
            required
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full pl-10 p-3 bg-white border border-gray-300 text-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-green-700"
            required
          />
        </div>

        {/* Message Field */}
        <div className="relative">
          <FaCommentDots className="absolute left-3 top-3 text-gray-500" />
          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            className="w-full pl-10 p-3 bg-white border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
            rows={5}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-900 to-green-500 text-white py-3 rounded-full font-bold hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 transition duration-300"
        >
          Send Message
        </button>
        {submitted && (
          <p className="text-green-900 mt-4 text-center">
            Thank you for your message! I'll get back to you soon. 😊
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
