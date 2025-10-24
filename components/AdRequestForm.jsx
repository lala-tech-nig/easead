"use client";
import { useState } from "react";
import confetti from "canvas-confetti";
import { toast } from "react-hot-toast";

export default function AdRequestForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    budget: "",
    goal: "",
    referral: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();

    // 🎉 Confetti Celebration
    confetti({
      particleCount: 200,
      spread: 80,
      origin: { y: 0.6 },
    });

    // ✅ Toast Feedback
    toast.success(
      `Thanks ${formData.name || "there"}! 🎉 Our team will reach out shortly.`,
      {
        duration: 5000,
        style: {
          background: "#fff",
          color: "#333",
          fontWeight: "600",
        },
      }
    );

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      brand: "",
      budget: "",
      goal: "",
      referral: "",
    });
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 backdrop-blur-sm px-4 sm:px-6 md:px-8">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg lg:max-w-xl p-6 sm:p-8 relative animate-fadeInUp overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-2xl"
          aria-label="Close form"
        >
          &times;
        </button>

        {/* Header */}
        <h3 className="text-xl sm:text-2xl font-bold text-center text-orange-500 mb-6 leading-snug">
          Let’s Get Your Ad Started 🚀
        </h3>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />

          {/* Brand / Business Name */}
          <input
            type="text"
            placeholder="Brand / Business Name"
            className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={formData.brand}
            onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
            required
          />

          {/* Budget */}
          <input
            type="number"
            placeholder="Ad Budget (₦)"
            className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            required
          />

          {/* Ad Goal */}
          <textarea
            placeholder="Describe Your Ad Goal"
            className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base h-28 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={formData.goal}
            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
            required
          />

          {/* Referral Email (Optional) */}
          <input
            type="email"
            placeholder="Referral Email (if any)"
            className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={formData.referral}
            onChange={(e) =>
              setFormData({ ...formData, referral: e.target.value })
            }
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-black transition-all duration-300 text-sm sm:text-base"
          >
            Submit Request
          </button>
        </form>

        {/* Footer Note */}
        <p className="text-xs sm:text-sm text-gray-500 text-center mt-4">
          By submitting this form, you agree that our EasyAd team may contact
          you via email or WhatsApp for your campaign setup.
        </p>
      </div>
    </div>
  );
}
