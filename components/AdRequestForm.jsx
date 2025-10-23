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
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();

    // 🎉 Confetti effect
    confetti({
      particleCount: 200,
      spread: 80,
      origin: { y: 0.6 },
    });

    // ✅ Toast message
    toast.success(
      `Thanks ${formData.name || "there"}! 🎉 Our team will reach out shortly.`,
      { duration: 5000, style: { background: "#fff", color: "#333", fontWeight: "600" } }
    );

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      brand: "",
      budget: "",
      goal: "",
    });
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-lg p-8 relative animate-fadeInUp">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-2xl"
        >
          &times;
        </button>

        <h3 className="text-2xl font-bold text-center text-orange-500 mb-6">
          Let’s Get Your Ad Started 🚀
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Brand / Business Name"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={formData.brand}
            onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Ad Budget (₦)"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            required
          />
          <textarea
            placeholder="Describe Your Ad Goal"
            className="w-full border rounded-lg px-4 py-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={formData.goal}
            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
            required
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-black transition-all duration-300"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
