"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonialsTop = [
  {
    name: "Sarah Johnson",
    role: "Boutique Owner, Lagos",
    quote:
      "EasyAd completely transformed how I advertise my fashion store. I no longer need to understand ad managers — I just fill the form, and sales started flowing in within days!",
  },
  {
    name: "Daniel Obinna",
    role: "Digital Marketer",
    quote:
      "Managing client campaigns used to be a nightmare. EasyAd lets me automate setup, reports, and tracking across platforms — it saves me hours every week!",
  },
  {
    name: "Mariam Osho",
    role: "Café Owner, Abuja",
    quote:
      "Before EasyAd, running Facebook ads felt confusing. Now I just share my goals and budget, and the team handles everything — results speak for themselves.",
  },
];

const testimonialsBottom = [
  {
    name: "Tolu Adebayo",
    role: "Music Producer",
    quote:
      "I used EasyAd to promote my new EP and got thousands of streams in days. Their smart targeting is insane — it feels like having a full marketing agency in your pocket.",
  },
  {
    name: "Ada Eze",
    role: "Tech Startup Founder",
    quote:
      "The reporting dashboard and weekly insights helped us scale ads from ₦10,000 to ₦100,000 monthly with confidence. It’s perfect for growing teams!",
  },
  {
    name: "Emeka Nwosu",
    role: "Event Planner",
    quote:
      "My first EasyAd campaign sold out my event tickets. I just entered my goal, set budget, and they did the rest. Simple and powerful!",
  },
];

// ✅ Animated Gradient Border Card
const TestimonialCard = ({ name, role, quote }) => (
  <div className="relative flex-shrink-0 w-80 mx-4 rounded-2xl p-[2px] overflow-hidden group transition-transform duration-300 hover:scale-[1.04]">
    {/* Animated gradient border */}
    <motion.div
      className="absolute inset-0 bg-[conic-gradient(from_0deg,theme(colors.orange.400),theme(colors.pink.500),theme(colors.purple.600),theme(colors.orange.400))]"
      animate={{ rotate: [0, 360] }}
      transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
    ></motion.div>

    {/* Inner white card */}
    <div className="relative bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col justify-between border border-white/30">
      <div>
        <h3 className="font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-sm text-orange-500 mb-3">{role}</p>
        <p className="text-gray-600 text-sm italic leading-relaxed">“{quote}”</p>
      </div>
    </div>
  </div>
);

export default function Testimonial() {
  return (
    <section
      id="testimonials"
      className="relative py-24 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
          What Our Users Are Saying
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Businesses, creators, and marketers across Africa are achieving
          incredible results with EasyAd — from effortless campaign setup to
          measurable ad success. Here’s what some of them had to say:
        </p>

        {/* Top Row */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays (hidden on mobile) */}
          <div className="hidden md:block pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-20" />
          <div className="hidden md:block pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-20" />

          <motion.div
            className="flex mb-10"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {[...testimonialsTop, ...testimonialsTop].map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays (hidden on mobile) */}
          <div className="hidden md:block pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-20" />
          <div className="hidden md:block pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-20" />

          <motion.div
            className="flex"
            animate={{ x: ["-100%", "0%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {[...testimonialsBottom, ...testimonialsBottom].map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-gray-100 pointer-events-none" />
    </section>
  );
}
