"use client";
import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 4000);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-2 z-50">
      {/* Pop-up message */}
      <div
        className={`${
          showMessage
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-3 pointer-events-none"
        } bg-orange-500 text-white text-sm rounded-lg shadow-lg px-3 py-2 mb-1 transition-all duration-700 ease-in-out`}
      >
        💬 Want to talk to us?
      </div>

      {/* WhatsApp button */}
      <a
        href="https://wa.me/2348121444306?text=Hello%20EasyAd"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-7 h-7"
        >
          <path d="M12.004 2c-5.51 0-9.98 4.47-9.98 9.98 0 1.763.47 3.49 1.36 5.01L2 22l5.17-1.36a9.943 9.943 0 004.83 1.24h.01c5.51 0 9.98-4.47 9.98-9.98 0-2.67-1.04-5.18-2.93-7.07A9.946 9.946 0 0012.004 2zm-.01 18c-1.51 0-2.99-.38-4.3-1.11l-.31-.17-3.07.81.82-2.99-.2-.32a8.05 8.05 0 01-1.25-4.31c0-4.45 3.63-8.08 8.08-8.08 2.16 0 4.19.84 5.72 2.37a8.07 8.07 0 012.36 5.72c0 4.45-3.63 8.08-8.08 8.08zm4.64-5.69c-.25-.13-1.47-.73-1.7-.81-.23-.09-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.49-1.4-1.74-.15-.25-.02-.39.11-.52.11-.11.25-.29.38-.43.13-.15.17-.25.26-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.49-.4-.42-.57-.43h-.49c-.17 0-.45.06-.69.32-.23.25-.9.88-.9 2.13s.93 2.47 1.06 2.64c.13.17 1.83 2.78 4.43 3.9.62.27 1.11.43 1.49.55.63.2 1.2.17 1.65.1.5-.08 1.47-.6 1.68-1.17.21-.57.21-1.06.15-1.17-.06-.11-.23-.17-.48-.3z" />
        </svg>
      </a>
    </div>
  );
}
