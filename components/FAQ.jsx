"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      q: "What exactly is EasyAd?",
      a: "EasyAd is your all-in-one advertising assistant. We help businesses and individuals launch, manage, and optimize online ads across multiple platforms — without needing to understand complex ad dashboards. From strategy to creative design and reporting, our team handles everything while you focus on running your business.",
    },
    {
      q: "Do I need to have an existing ad account?",
      a: "No. If you don’t have an existing ad account, our experts will create and manage one for you under your brand name. You’ll still have full transparency and ownership of all campaigns we run for you.",
    },
    {
      q: "Can I track my ad performance?",
      a: "Absolutely. You’ll receive detailed weekly or campaign-end performance reports showing impressions, engagement, clicks, reach, and conversions. For larger plans, we even provide live analytics dashboards you can check anytime.",
    },
    {
      q: "What advertising platforms does EasyAd support?",
      a: "We currently support Facebook, Instagram, Google Ads, TikTok, WhatsApp Business, and YouTube. For custom or enterprise projects, we can also manage ads on X (Twitter), LinkedIn, and Snapchat.",
    },
    {
      q: "How long does it take for my ad to go live?",
      a: "Once you complete payment and approve your ad creatives, your campaign can go live within 12–24 hours (depending on platform approval times).",
    },
    {
      q: "Can EasyAd help me design my ad creatives?",
      a: "Yes! Every EasyAd plan includes access to our in-house creative team. We design high-performing visuals, write compelling ad copies, and even produce short video ads for higher-tier plans.",
    },
    {
      q: "What if my business is new or I’ve never run ads before?",
      a: "That’s totally fine. We specialize in helping first-time advertisers. Our team will guide you through every step — from understanding your audience to choosing the best strategy that matches your budget and goals.",
    },
    {
      q: "Can I run ads even if my business is small?",
      a: "Yes! EasyAd is designed for everyone — from small startups and local stores to large brands. You can start with as little as ₦5,000, and we’ll make sure you get measurable results.",
    },
    {
      q: "Do you offer refunds or guarantees?",
      a: "While ad results depend on audience behavior and platform algorithms, we guarantee transparency, expert setup, and full support throughout your campaign. If any technical error on our end occurs, we’ll rerun your campaign at no extra cost.",
    },
    {
      q: "Can I pause or edit my campaign after it starts?",
      a: "Yes. You can request changes or a temporary pause anytime before your campaign ends. Our team will review your request and adjust accordingly.",
    },
    {
      q: "Will I speak directly with a human or a bot?",
      a: "EasyAd values real communication. You’ll always have access to a human campaign manager who understands your business and can assist you personally via WhatsApp, email, or dashboard chat.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept bank transfers, debit cards, and secure online payments via Paystack or Flutterwave. For enterprise clients, invoice-based payments and contracts are also supported.",
    },
    {
      q: "Can I refer a friend and earn rewards?",
      a: "Yes! Our referral system allows you to invite friends or business owners. Once they complete their first ad campaign, you receive a bonus or discount on your next EasyAd service.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      id="faq"
      className="py-24 bg-gradient-to-b from-gray-50 to-white text-center"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Got questions about EasyAd? We’ve answered the most common ones below to help
          you understand how we make advertising <span className="text-orange-500 font-semibold">simple, smart, and affordable</span>.
        </p>

        <div className="space-y-4 text-left">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-xl bg-white p-5 shadow-sm hover:shadow-md transition-all"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {faq.q}
                </span>
                <span className="text-orange-500 text-2xl font-bold">
                  {activeIndex === i ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 text-gray-600 leading-relaxed"
                  >
                    {faq.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-orange-50 rounded-2xl p-8 shadow-inner">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is always ready to help. Reach out to us anytime — we’ll
            guide you through every step of your ad journey.
          </p>
          <a
            href="#contact"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
