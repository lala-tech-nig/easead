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

  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://easyadbackend.onrender.com/api/ad-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request");
      }

      const result = await response.json();

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

      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Oops! Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 backdrop-blur-sm px-4 sm:px-6 md:px-8">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg lg:max-w-xl p-6 sm:p-8 relative animate-fadeInUp overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          disabled={loading}
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
          {[
            { type: "text", name: "name", placeholder: "Full Name", required: true },
            { type: "email", name: "email", placeholder: "Email Address", required: true },
            { type: "tel", name: "phone", placeholder: "Phone Number", required: true },
            { type: "text", name: "brand", placeholder: "Brand / Business Name", required: true },
            { type: "number", name: "budget", placeholder: "Ad Budget (₦)", required: true },
          ].map((field) => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={formData[field.name]}
              onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
              required={field.required}
            />
          ))}

          {/* Ad Goal */}
          <textarea
            name="goal"
            placeholder="Describe Your Ad Goal"
            className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base h-28 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={formData.goal}
            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
            required
          />

          {/* Referral Email */}
          <input
            type="email"
            name="referral"
            placeholder="Referral Email (if any)"
            className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={formData.referral}
            onChange={(e) => setFormData({ ...formData, referral: e.target.value })}
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full font-semibold py-3 rounded-lg text-sm sm:text-base transition-all duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-500 text-white hover:bg-black"
            }`}
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>
        </form>

        <p className="text-xs sm:text-sm text-gray-500 text-center mt-4">
          By submitting this form, you agree that our EasyAd team may contact you
          via email or WhatsApp for your campaign setup.
        </p>
      </div>
    </div>
  );
}
