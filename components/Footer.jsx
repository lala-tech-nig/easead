"use client";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">

        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-4">EasyAd</h2>
          <p className="text-sm leading-relaxed">
            EasyAd is your smart digital marketing partner — built to simplify
            advertising for everyone. Whether you’re a business owner, content
            creator, or marketer, EasyAd helps you create, launch, and track
            effective ads across platforms like Facebook, Instagram, Google, and TikTok — without the complexity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-orange-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-orange-500 transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-orange-500 transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-orange-500 transition-colors">
                FAQs
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-500 transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <p className="text-sm mb-2">📍 Lagos, Nigeria</p>
          <p className="text-sm mb-2">📞 +234 8121444306</p>
          <p className="text-sm mb-4">✉️ easyad@gmail.com</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-orange-500 transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-sm mb-3">
            Subscribe to get the latest ad tips, trends, and exclusive EasyAd updates.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-5 py-3 rounded-md hover:bg-orange-600 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto text-center mt-10 text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} <span className="text-orange-500 font-semibold">EasyAd</span> — 
          Simplifying Digital Advertising Across Africa.
        </p>
        <p className="mt-2">
          Built with ❤️ by <span className="text-orange-500">LALA TECH</span>
        </p>
      </div>
    </footer>
  );
}
