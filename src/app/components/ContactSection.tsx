"use client";

import { useState } from "react";

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
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-green-900 mb-4 text-center">Contact Me</h2>
      <p className="text-center text-gray-700 mb-6">
        I'm always excited to collaborate on exciting projects or share ideas. Feel free to reach out!
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-white border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-white border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
          required
        />
        <textarea
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-white border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
          rows={5}
          required
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-900 to-green-500 text-white py-3 rounded-md font-bold hover:shadow-lg hover:scale-105 transition duration-300"
        >
          Send Message
        </button>
        {submitted && <p className="text-green-900 mt-4 text-center">Thank you for your message!</p>}
      </form>
    </div>
  );
};

export default ContactForm;
