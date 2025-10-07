export default function Pricing() {
  const plans = [
    { name: "Starter", price: "₦10,000", desc: "Basic ad campaign on one platform." },
    { name: "Pro", price: "₦25,000", desc: "Optimized ads on multiple platforms." },
    { name: "Elite", price: "₦50,000+", desc: "Full-scale ads with analytics & reporting." },
  ];

  return (
    <section id="pricing" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-orange-500 mb-10">Simple Pricing</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {plans.map((p, i) => (
          <div key={i} className="border border-gray-200 rounded-lg p-8 shadow hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>
            <p className="text-4xl font-bold text-orange-600 mb-4">{p.price}</p>
            <p className="text-gray-600 mb-6">{p.desc}</p>
            <a
              href="#adform"
              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
            >
              Choose Plan
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
