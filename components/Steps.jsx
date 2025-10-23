"use client";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import AdRequestForm from "./AdRequestForm";

export default function Steps() {
  const [showForm, setShowForm] = useState(false);

  const steps = [
    {
      title: "1. Tell Us Your Goal",
      desc: "Tell us what your business does and the audience you want to reach — we’ll tailor your ad strategy for success.",
      icon: "🎯",
    },
    {
      title: "2. Set Your Budget & Preferences",
      desc: "Choose your budget and target options. Even small budgets deliver big impact with EasyAd’s smart optimization.",
      icon: "💰",
    },
    {
      title: "3. Our Team & AI Handle The Rest",
      desc: "Our experts and smart system create visuals, launch campaigns, and optimize them in real-time.",
      icon: "⚙️",
    },
    {
      title: "4. Track, Learn & Grow",
      desc: "See how your ads perform and gain insights that help your business grow effortlessly.",
      icon: "📊",
    },
  ];

  return (
    <section id="steps" className="relative py-20 bg-gradient-to-b from-white to-gray-50 text-center">
      <Toaster position="top-center" />

      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-orange-500">
        How EasyAd Works
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
        From idea to impact — EasyAd automates your ad journey. No jargon, no stress, just results.
      </p>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
            <p className="text-gray-600 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <button
          onClick={() => setShowForm(true)}
          className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Get Started With EasyAd
        </button>
      </div>

      {/* Modal Form */}
      <AdRequestForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </section>
  );
}
