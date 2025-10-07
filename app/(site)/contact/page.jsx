export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-bold text-orange-500 mb-6">Contact Us</h1>
      <p className="text-gray-700 mb-8">
        Have a question? Reach us via WhatsApp or email anytime.
      </p>
      <div className="space-y-4">
        <p className="text-lg">📱 WhatsApp: <a href="https://wa.me/2348012345678" className="text-orange-500">+234 801 234 5678</a></p>
        <p className="text-lg">📧 Email: <a href="mailto:support@adease.ng" className="text-orange-500">support@adease.ng</a></p>
      </div>
    </section>
  );
}
