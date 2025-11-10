"use client";

import { useState, useEffect } from "react";

export default function BottomCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show banner after 8 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slideUp">
      <div className="bg-gradient-to-r from-dark-green via-dartmouth-green to-sea-green shadow-2xl border-t-2 border-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-5">
          {/* Content */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-white text-sea-green hover:bg-nyanza font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center text-sm"
              onClick={() => setIsDismissed(true)}
            >
              Book My Free Estimate
            </a>

            <a
              href="tel:8586928824"
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              onClick={() => setIsDismissed(true)}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              (858) 692-8824
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

