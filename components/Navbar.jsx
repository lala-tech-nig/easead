"use client";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Navigation links
  const links = [
    { name: "How It Works", href: "#steps" },
    { name: "Pricing", href: "#pricing" },
    { name: "Submit Ad", href: "#adform" },
    { name: "FAQs", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm transition-all duration-300 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={darkMode ? "/logo-dark.png" : "/logo-light.png"}
            alt="EasyAd Logo"
            className="w-8 h-8"
          />
          <h1 className="text-lg font-bold text-orange-600 dark:text-orange-400 tracking-tight">
            EasyAd
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-300"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 hover:w-full"></span>
              </a>
            </li>
          ))}
          {/* Contact Button */}
          <li>
            <a
              href="#contact"
              className="ml-4 px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-yellow-400" />
            ) : (
              <Moon className="w-4 h-4 text-neutral-600" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5 text-neutral-800 dark:text-neutral-300" />
            ) : (
              <Menu className="w-5 h-5 text-neutral-800 dark:text-neutral-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 px-4 pb-4 animate-fadeIn">
          <ul className="flex flex-col space-y-4 mt-3">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-sm text-neutral-700 dark:text-neutral-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-center text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}