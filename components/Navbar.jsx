"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-orange-500">
          AdEase<span className="text-black">.</span>
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-orange-500 text-2xl"
        >
          ☰
        </button>

        <ul
          className={`flex-col md:flex-row md:flex gap-6 absolute md:static bg-white left-0 right-0 p-6 md:p-0 transition-all ${
            open ? "flex" : "hidden"
          }`}
        >
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Services", "/services"],
            ["Pricing", "/pricing"],
            ["Start Ad", "/start-ad"],
            ["Contact", "/contact"],
          ].map(([label, link]) => (
            <li key={label}>
              <Link
                href={link}
                className="text-gray-700 hover:text-orange-500 font-medium"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
