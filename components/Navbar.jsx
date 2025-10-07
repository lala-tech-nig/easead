export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-black text-white">
      <h1 className="text-xl font-bold text-orange-500">EasyAd</h1>
      <ul className="flex space-x-6 text-sm">
        <li><a href="#steps">How It Works</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#adform">Submit Ad</a></li>
        <li><a href="#faq">FAQs</a></li>
      </ul>
    </nav>
  );
}
