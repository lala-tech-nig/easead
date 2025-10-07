export default function FAQ() {
  const faqs = [
    { q: "Do I need an ad account?", a: "No, we handle all ad setup and management for you." },
    { q: "Can I track my ad?", a: "Yes, you’ll receive reports and performance updates." },
    { q: "What platforms do you support?", a: "We support Facebook, Instagram, Google, and TikTok." },
  ];

  return (
    <section id="faq" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-orange-500 mb-10">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((f, i) => (
          <div key={i} className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-1">{f.q}</h3>
            <p className="text-gray-600">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
