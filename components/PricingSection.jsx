export default function PricingSection() {
  const plans = [
    { title: "Starter", price: "₦5,000", desc: "Basic local reach" },
    { title: "Growth", price: "₦20,000", desc: "Broader engagement" },
    { title: "Pro", price: "₦50,000", desc: "Maximum exposure" },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-orange-500 mb-10">
          Simple Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div key={i} className="p-8 bg-white border rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
              <p className="text-3xl font-bold text-orange-500 mb-3">{p.price}</p>
              <p className="text-gray-600 mb-5">{p.desc}</p>
              <a href="/start-ad" className="btn btn-primary block">
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
