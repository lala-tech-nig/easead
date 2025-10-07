export default function StepsSection() {
  const steps = [
    { num: "1", title: "Tell Us Your Goal", desc: "Brand awareness, leads, or sales." },
    { num: "2", title: "Set Your Budget", desc: "We’ll recommend what works best." },
    { num: "3", title: "We Run the Ads", desc: "Sit back while we deliver results." },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-center">
      <h2 className="text-4xl font-bold text-orange-500 mb-12">
        How It Works
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        {steps.map((s, i) => (
          <div key={i} className="p-8 bg-white border rounded-xl shadow hover:shadow-lg transition-all">
            <span className="block text-5xl font-extrabold text-orange-500 mb-4">{s.num}</span>
            <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
