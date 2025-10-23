// export default function Steps() {
//   const steps = [
//     {
//       title: "1. Tell Us Your Goal",
//       desc: "Start by telling us what your business does and the kind of audience you want to reach. Whether it’s more sales, awareness, or followers — we’ll tailor the right ad strategy for you.",
//       icon: "🎯",
//     },
//     {
//       title: "2. Set Your Budget & Preferences",
//       desc: "Choose how much you want to invest — even with a small budget, EasyAd’s intelligent system ensures every naira works efficiently. You can target by location, interest, or industry.",
//       icon: "💰",
//     },
//     {
//       title: "3. Our Team & AI Handle The Rest",
//       desc: "Once submitted, our experts and smart system create stunning ad visuals, run optimized campaigns across social media and search platforms, and constantly adjust for best performance.",
//       icon: "⚙️",
//     },
//     {
//       title: "4. Track, Learn & Grow",
//       desc: "Monitor your campaign in real-time with simple, easy-to-understand reports. See how your ads perform, discover insights about your audience, and grow smarter with each campaign.",
//       icon: "📊",
//     },
//   ];

//   return (
//     <section id="steps" className="py-20 bg-gradient-to-b from-white to-gray-50 text-center">
//       <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-orange-500">
//         How EasyAd Works
//       </h2>
//       <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
//         From idea to impact — EasyAd automates and simplifies your advertising journey. 
//         No stress, no marketing jargon — just real results for your brand.
//       </p>

//       <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
//         {steps.map((step, i) => (
//           <div
//             key={i}
//             className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
//           >
//             <div className="text-5xl mb-4">{step.icon}</div>
//             <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
//             <p className="text-gray-600 leading-relaxed">{step.desc}</p>
//           </div>
//         ))}
//       </div>

//       <div className="mt-16">
//         <a
//           href="#get-started"
//           className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl"
//         >
//           Get Started With EasyAd
//         </a>
//       </div>
//     </section>
//   );
// }



"use client";
import { useState } from "react";
import confetti from "canvas-confetti";
import { toast, Toaster } from "react-hot-toast";

export default function Steps() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    budget: "",
    goal: "",
  });

  const steps = [
    {
      title: "1. Tell Us Your Goal",
      desc: "Start by telling us what your business does and the kind of audience you want to reach. Whether it’s more sales, awareness, or followers — we’ll tailor the right ad strategy for you.",
      icon: "🎯",
    },
    {
      title: "2. Set Your Budget & Preferences",
      desc: "Choose how much you want to invest — even with a small budget, EasyAd’s intelligent system ensures every naira works efficiently. You can target by location, interest, or industry.",
      icon: "💰",
    },
    {
      title: "3. Our Team & AI Handle The Rest",
      desc: "Once submitted, our experts and smart system create stunning ad visuals, run optimized campaigns across social media and search platforms, and constantly adjust for best performance.",
      icon: "⚙️",
    },
    {
      title: "4. Track, Learn & Grow",
      desc: "Monitor your campaign in real-time with simple, easy-to-understand reports. See how your ads perform, discover insights about your audience, and grow smarter with each campaign.",
      icon: "📊",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);

    // 🎉 Confetti animation
    confetti({
      particleCount: 200,
      spread: 80,
      origin: { y: 0.6 },
    });

    // ✅ Toast notification
    toast.success(
      `Thanks ${formData.name || "there"}! 🎉 Our team will reach out to you in a few minutes.`,
      { duration: 5000, style: { background: "#fff", color: "#333", fontWeight: "600" } }
    );

    // Clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      brand: "",
      budget: "",
      goal: "",
    });
  };

  return (
    <section
      id="steps"
      className="relative py-20 bg-gradient-to-b from-white to-gray-50 text-center"
    >
      <Toaster position="top-center" />

      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-orange-500">
        How EasyAd Works
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
        From idea to impact — EasyAd automates and simplifies your advertising journey.
        No stress, no marketing jargon — just real results for your brand.
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

      {/* MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-lg p-8 relative animate-fadeInUp">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold text-center text-orange-500 mb-6">
              Let’s Get Your Ad Started 🚀
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Brand / Business Name"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                required
              />
              <input
                type="number"
                placeholder="Ad Budget (₦)"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                required
              />
              <textarea
                placeholder="Describe Your Ad Goal"
                className="w-full border rounded-lg px-4 py-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                required
              />

              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-black transition-all duration-300"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
