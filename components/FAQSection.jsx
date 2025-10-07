"use client";
import { useState } from "react";

const faqs = [
  { q: "Do I need a Facebook or Instagram Ad Account?", a: "No. We handle all that for you — you just tell us your goal." },
  { q: "Can I choose where my ads appear?", a: "Yes, you can specify platforms or let us optimize automatically." },
  { q: "How long does it take to start?", a: "Once you submit your ad details, we begin within 24 hours." },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-orange-500 text-center mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="border rounded-lg p-4 hover:shadow transition-all cursor-pointer"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <h3 className="text-lg font-semibold flex justify-between items-center">
              {item.q}
              <span>{open === i ? "−" : "+"}</span>
            </h3>
            {open === i && <p className="mt-3 text-gray-600">{item.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
