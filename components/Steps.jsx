export default function Steps() {
  const steps = [
    { title: "Tell Us Your Goal", desc: "Share your business and what you want to achieve." },
    { title: "Set Your Budget", desc: "Decide how much you want to spend — we’ll optimize it." },
    { title: "We Run the Ads", desc: "We launch, monitor, and deliver reports automatically." },
  ];

  return (
    <section id="steps" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10 text-orange-500">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
        {steps.map((step, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
