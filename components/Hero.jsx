"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  // Carousel images
const slides = [
  {
    image: "/images/hero1.png",
    title: "Promote Your Vision Effortlessly",
    subtitle: "Turn your dreams into professional ads—no marketing skills required.",
  },
  {
    image: "/images/hero2.jpg",
    title: "Grow Your Business with Ease",
    subtitle: "Create powerful ad campaigns in minutes, not weeks.",
  },
  {
    image: "/images/hero3.jpg",
    title: "From Idea to Visibility",
    subtitle: "Show the world what you do best—our tools make it simple.",
  },
  {
    image: "/images/hero4.jpg",
    title: "Run Ads Like a Pro",
    subtitle: "Smart automation handles the hard part so you can focus on results.",
  },
  {
    image: "/images/hero5.jpg",
    title: "Promote Anything, Anytime",
    subtitle: "Your brand, your message, your success—made easy for everyone.",
  },
];


  const [current, setCurrent] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlide = slides[current];

  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      {/* Background carousel */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 animate-fadeInUp">
          {currentSlide.title}
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl animate-fadeIn delay-200">
          {currentSlide.subtitle}
        </p>

        <div className="flex gap-4 flex-wrap justify-center animate-fadeIn delay-300">
          <a
            href="#adform"
            className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 hover:shadow-orange-500/40 transition-all duration-300 transform hover:-translate-y-1"
          >
            Get Started
          </a>
          <a
            href="#learnmore"
            className="px-8 py-3 border-2 border-white/80 text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-orange-500 scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
