"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import toast, { Toaster } from "react-hot-toast";

export default function PricingForm({ plan, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger confetti
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
    });

    toast.success("🎉 Our team will reach out to you as soon as possible!");

    setTimeout(() => {
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <Toaster position="top-center" />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-black text-2xl"
        >
          ✕
        </button>

        <h3 className="text-2xl font-bold text-center text-orange-500 mb-2">
          Get Started with {plan}
        </h3>
        <p className="text-center text-gray-600 mb-6">
          Fill in your details below — our EasyAd team will reach out shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500"
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500"
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500"
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Tell us a bit about your project..."
            rows="3"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all"
          >
            Submit Request
          </button>
        </form>
      </motion.div>
    </div>
  );
}
