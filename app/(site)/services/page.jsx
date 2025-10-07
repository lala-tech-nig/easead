export default function ServicesPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-orange-500 text-center mb-10">
        Our Advertising Services
      </h1>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {[
          {
            title: "Social Media Campaigns",
            desc: "We run ads on Facebook, Instagram, TikTok, and Google that connect you directly to your target audience.",
          },
          {
            title: "Brand Awareness",
            desc: "Get your brand seen by thousands of potential customers through smart, data-driven ad placements.",
          },
          {
            title: "Product Launch Ads",
            desc: "Launching something new? We'll help you make noise and attract the right customers instantly.",
          },
        ].map((item, i) => (
          <div key={i} className="p-6 rounded-xl shadow bg-white border">
            <h2 className="text-2xl font-semibold text-orange-500 mb-3">
              {item.title}
            </h2>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
