export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-orange-400 to-red-500 text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Run Ads Like a Pro — Without the Hassle
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8">
          Set your goal and budget. We’ll take care of the rest — from setup to optimization.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#adform"
            className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Get Started
          </a>
          <a
            href="#learnmore"
            className="text-white/80 underline hover:text-white transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
