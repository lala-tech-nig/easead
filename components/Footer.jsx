export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-10 mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-4 text-orange-500">AdEase</h3>
        <p className="text-gray-400 mb-6">
          Simplifying digital advertising for small businesses.
        </p>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} AdEase. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
