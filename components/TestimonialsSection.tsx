"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const transformations = [
  {
    name: "Sarah M.",
    timeframe: "8 months",
    image: "/transformation-1.png",
    results: "Lost 45 lbs",
    testimonial: "I tried so many programs before finding Christian, and nothing stuck. His approach to nutrition and training completely transformed my life. I gained confidence I never knew I had.",
  },
  {
    name: "James K.",
    timeframe: "6 months",
    image: "/transformation-2.png",
    results: "Lost 60 lbs",
    testimonial: "Christian's knowledge of functional training is unmatched. The transformation journey has been life-changing, and I feel stronger than ever.",
  },
  {
    name: "Maria L.",
    timeframe: "7 months",
    image: "/transformation-3.png",
    results: "Lost 35 lbs",
    testimonial: "Training with Christian has been a game changer. The results speak for themselves, and I've never felt more confident and healthy.",
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="testimonials" className="bg-nyanza section-container">
      <div ref={ref}>
      <div className={`text-center mb-16 animate-slide-up ${isVisible ? 'visible' : ''}`}>
        <h2 className="text-sm font-semibold text-dartmouth-green tracking-widest uppercase mb-3">
          TRANSFORMATIONS
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">
          Real People. Real Results.
        </h3>
        <p className="text-lg text-dartmouth-green max-w-2xl mx-auto">
          See the incredible transformations our clients have achieved through dedication,
          expert coaching, and a holistic approach to fitness.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {transformations.map((transformation, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-up ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            {/* Before/After Image (combined) */}
            <div className="relative aspect-[3/4]">
              <Image
                src={transformation.image}
                alt={`${transformation.name} transformation - before and after`}
                fill
                className={`object-cover ${index === 0 ? 'object-top' : 'object-center'}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Details */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl font-bold text-dark-green">
                  {transformation.name}
                </h4>
                <span className="text-sm font-semibold text-sea-green bg-celadon px-3 py-1 rounded-full">
                  {transformation.timeframe}
                </span>
              </div>
              
              <div className="flex items-center text-sea-green font-semibold mb-4">
                <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {transformation.results}
              </div>

              <p className="text-dartmouth-green text-sm leading-relaxed italic">
                "{transformation.testimonial}"
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="#contact" className="btn-primary inline-block">
          Start Your Transformation
        </a>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-dartmouth-green/70 text-center mt-8 max-w-3xl mx-auto">
        *Results may vary. Individual results depend on commitment, starting point, 
        and adherence to program. Always consult with a healthcare provider before 
        starting any fitness program.
      </p>
      </div>
    </section>
  );
}
