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
    referralEmail: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger confetti celebration 🎉
    confetti({
      particleCount: 180,
      spread: 75,
      origin: { y: 0.6 },
      colors: ["#ff7a00", "#ffb347", "#ffd580"],
    });

    toast.success("🎉 Your request has been submitted! Our team will contact you soon.");

    setTimeout(() => {
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <Toaster position="top-center" />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl transition-all"
        >
          ✕
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white py-5 text-center">
          <h3 className="text-2xl font-extrabold">Get Started with {plan}</h3>
          <p className="text-sm text-orange-100 mt-1">
            Fill in your details and we’ll reach out shortly.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              name="name"
              placeholder="John Doe"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:outline-none transition"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:outline-none transition"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              name="phone"
              placeholder="+234 801 234 5678"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:outline-none transition"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Referral Email <span className="text-gray-400 text-xs">(optional)</span>
            </label>
            <input
              name="referralEmail"
              type="email"
              placeholder="friend@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:outline-none transition"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Project Details
            </label>
            <textarea
              name="message"
              placeholder="Tell us about your campaign goals..."
              rows="3"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:outline-none transition"
              onChange={handleChange}
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 active:scale-95 transition-all shadow-md"
          >
            Submit Request
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
