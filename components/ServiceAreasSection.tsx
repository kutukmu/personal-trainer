"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const serviceAreas = [
  "La Jolla",
  "Pacific Beach",
  "Mission Beach",
  "Ocean Beach",
  "Point Loma",
  "Downtown San Diego",
  "Hillcrest",
  "North Park",
  "Coronado",
  "Del Mar",
];

const inPersonServices = [
  "One-on-one sessions at your home gym or outdoor location",
  "Small group training (2-6 people) at beaches or parks",
  "Flexible scheduling to fit your lifestyle",
  "All equipment provided for outdoor sessions",
];

const onlineServices = [
  "Live virtual training sessions via video call",
  "Custom workout programs with video demonstrations",
  "Weekly check-ins and progress tracking",
  "Ongoing support and accountability",
];

export default function ServiceAreasSection() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="service-areas" className="section-container bg-white">
      <div ref={ref}>
      <div className={`text-center mb-16 animate-slide-up ${isVisible ? 'visible' : ''}`}>
        <h2 className="text-sm font-semibold text-primary-600 tracking-wide uppercase mb-2">
          SERVICE AREAS
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-natural-900 mb-4">
          Service Areas in San Diego
        </h3>
        <p className="text-lg text-natural-600 max-w-2xl mx-auto">
          We offer personalized fitness services to clients across San Diego County.
          In-person training available throughout greater San Diego area.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* In-Person Training */}
        <div className={`bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border-2 border-primary-200 animate-slide-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white mr-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-natural-900">
              In-Person Training
            </h4>
          </div>
          <p className="text-natural-700 mb-6">
            Experience personalized training in the comfort of your home, at scenic
            San Diego beaches, or your preferred outdoor location.
          </p>
          <ul className="space-y-3">
            {inPersonServices.map((service, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-natural-700">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Online Training */}
        <div className={`bg-gradient-to-br from-natural-50 to-natural-100 rounded-2xl p-8 border-2 border-natural-200 animate-slide-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.25s' }}>
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-natural-800 rounded-lg flex items-center justify-center text-white mr-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-natural-900">Online Training</h4>
          </div>
          <p className="text-natural-700 mb-6">
            Train from anywhere in the world with comprehensive online coaching
            programs and virtual training sessions.
          </p>
          <ul className="space-y-3">
            {onlineServices.map((service, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-5 h-5 text-natural-700 mr-3 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-natural-700">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Service Areas Grid */}
      <div className="bg-natural-50 rounded-2xl p-8">
        <h4 className="text-2xl font-bold text-natural-900 mb-6 text-center">
          In-Person Service Areas
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {serviceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center mb-2">
                <svg
                  className="w-4 h-4 text-primary-600 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium text-natural-900">{area}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-natural-600 mt-6">
          Don't see your area listed?{" "}
          <a href="#contact" className="text-primary-600 hover:text-primary-700 font-semibold">
            Contact us
          </a>{" "}
          to discuss availability.
        </p>
      </div>
      </div>
    </section>
  );
}

