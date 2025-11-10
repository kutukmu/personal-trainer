"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 section-container">
      <div ref={ref} className={`animate-slide-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-sm font-semibold text-primary-200 tracking-wide uppercase mb-4">
          READY TO TRANSFORM?
        </h2>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to Transform Your Fitness?
        </h3>
        <p className="text-xl text-primary-50 mb-10 leading-relaxed">
          Start your journey today with a free fitness assessment. Let's discuss
          your goals and create a personalized plan to help you achieve them.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-white hover:bg-natural-50 text-primary-700 font-semibold px-10 py-4 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg"
          >
            Book Your Free Assessment
          </a>
          <a
            href="tel:+18585551234"
            className="bg-primary-800/50 hover:bg-primary-800 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 border-2 border-white/30 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg backdrop-blur-sm"
          >
            Call: (858) 555-1234
          </a>
        </div>

        <div className="mt-12 pt-12 border-t border-white/20">
          <p className="text-primary-100 text-lg">
            Join <span className="font-bold text-white">500+ clients</span> who have
            already transformed their lives through our holistic approach to health and fitness.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}

