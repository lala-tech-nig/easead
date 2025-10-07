export default function PricingPage() {
  const plans = [
    { title: "Starter", price: "₦5,000", desc: "Perfect for small local ads." },
    { title: "Growth", price: "₦20,000", desc: "More reach and engagement." },
    { title: "Pro", price: "₦50,000", desc: "Maximum exposure for serious brands." },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-bold text-orange-500 mb-8">Pricing Plans</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <div key={i} className="p-8 rounded-xl border shadow hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold mb-2">{plan.title}</h2>
            <p className="text-3xl font-bold text-orange-500 mb-3">{plan.price}</p>
            <p className="text-gray-700 mb-4">{plan.desc}</p>
            <a
              href="/start-ad"
              className="btn btn-primary w-full block"
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
