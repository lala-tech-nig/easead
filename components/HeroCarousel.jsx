"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    title: "We Simplify Digital Advertising",
    subtitle: "No Ad Manager. No Confusion. Just Results.",
  },
  {
    title: "Tell Us Your Goal",
    subtitle: "We’ll plan and run the perfect ad campaign for your brand.",
  },
  {
    title: "Reach More People Effortlessly",
    subtitle: "Your budget. Your audience. Our expertise.",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  const { title, subtitle } = slides[index];

  return (
    <section className="relative flex items-center justify-center text-center h-[70vh] bg-gradient-to-r from-orange-500 to-black text-white transition-all duration-700">
      <div className="max-w-3xl px-6">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-8 text-gray-200">{subtitle}</p>
        <a href="/start-ad" className="btn btn-light bg-white text-orange-500">
          Start My Ad
        </a>
      </div>
    </section>
  );
}
