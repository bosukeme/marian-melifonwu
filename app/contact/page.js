"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="px-6 md:px-16 py-10 bg-[#121c2b]"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          Contact
        </h3>

        <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-[#1e293b] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-[#1e293b] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-[#1e293b] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded"
          >
            Send Message
          </button>

          {status && <p className="text-white mt-2">{status}</p>}
        </form>
      </motion.section>
    </div>
  );
}
