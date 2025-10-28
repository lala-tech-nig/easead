"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AdRequestForm from "./AdRequestForm"; // ✅ Updated import

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: "Starter",
      price: "₦5,000 – ₦20,000",
      tag: "Perfect for individuals & small startups",
      features: [
        "✔️ One platform ad setup (Facebook, Instagram, or WhatsApp)",
        "✔️ Professional ad copy and graphic design",
        "✔️ 7-day campaign monitoring",
        "✔️ Reach up to 5,000 customers",
        "✔️ Free pre-launch consultation",
      ],
      accent: "bg-orange-100 text-orange-700",
    },
    {
      name: "Pro",
      price: "₦20,001 – ₦50,000",
      tag: "Ideal for growing businesses",
      features: [
        "✔️ Multi-platform campaigns (Facebook, Instagram, TikTok)",
        "✔️ Advanced targeting & A/B testing",
        "✔️ Weekly performance report",
        "✔️ Priority ad optimization support",
        "✔️ Reach up to 20,000 targeted users",
      ],
      accent: "bg-blue-100 text-blue-700",
    },
    {
      name: "Elite",
      price: "₦50,001 – ₦200,000",
      tag: "Best for established brands & serious campaigns",
      features: [
        "✔️ Multi-channel ads (Meta, Google, YouTube, X)",
        "✔️ Full creative design team (video, graphics, copywriting)",
        "✔️ Dedicated ad strategist",
        "✔️ Weekly analytics dashboard",
        "✔️ 50,000+ impressions guaranteed",
      ],
      accent: "bg-emerald-100 text-emerald-700",
    },
    {
      name: "Premium",
      price: "₦200,001+",
      tag: "For large-scale or enterprise-level projects",
      features: [
        "✔️ Custom multi-channel marketing strategy",
        "✔️ Nationwide or international ad exposure",
        "✔️ Full creative direction & project management",
        "✔️ Deep ROI tracking and conversion analysis",
        "✔️ One-on-one consultation with EasyAd’s senior experts",
      ],
      accent: "bg-purple-100 text-purple-700",
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-b from-gray-50 to-white text-center relative"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
        >
          Transparent & Flexible Pricing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          Choose a plan that fits your goals. Each plan is tailored to help your
          brand grow with clarity, precision, and measurable impact.
        </motion.p>

        <div className="grid md:grid-cols-4 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -5,
                boxShadow: "0px 12px 30px rgba(0,0,0,0.08)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="rounded-2xl border border-gray-200 bg-white p-8 flex flex-col justify-between hover:border-orange-400 transition-all duration-300"
            >
              <div>
                <div
                  className={`inline-block px-3 py-1 text-sm rounded-full mb-4 font-medium ${plan.accent}`}
                >
                  {plan.name}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {plan.tag}
                </h3>
                <p className="text-3xl font-extrabold text-orange-600 mb-6">
                  {plan.price}
                </p>

                <ul className="text-left mb-8 space-y-2 text-gray-700 text-sm">
                  {plan.features.map((f, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 leading-relaxed"
                    >
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setSelectedPlan(plan.name)}
                className="mt-auto w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition-all duration-300"
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🧾 Modal Form */}
      <AnimatePresence>
        {selectedPlan && (
          <AdRequestForm
            isOpen={!!selectedPlan}
            plan={selectedPlan}
            onClose={() => setSelectedPlan(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
