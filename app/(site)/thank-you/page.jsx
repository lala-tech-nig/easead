export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-6">
      <h1 className="text-4xl font-bold text-orange-500 mb-4">🎉 Thank You!</h1>
      <p className="text-lg text-gray-700 max-w-md">
        Your ad request has been submitted successfully. Our team will review it
        and contact you shortly to finalize your campaign.
      </p>
      <a
        href="/"
        className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all"
      >
        Back to Home
      </a>
    </div>
  );
}
