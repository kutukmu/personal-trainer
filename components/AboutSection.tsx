"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    title: "Science-Based Approach",
    description:
      "Every program is built on proven methodologies and tailored to your unique physiology and goals.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Mindful Nutrition That Works",
    description:
      "Learn to fuel your body intuitively. No rigid diets or calorie counting — just sustainable eating habits.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    title: "Confidence Through Coaching",
    description:
      "Build lasting self-confidence as you develop strength, discipline, and a positive relationship with fitness.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="about" className="section-container">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className={`relative animate-slide-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
            <Image
              src="/beach-group-training.png"
              alt="Beach Training Group with Christian Borja"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Floating card */}
          <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-celadon rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-sea-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <div className="font-semibold text-dark-green">
                  Certified Expert
                </div>
                <div className="text-sm text-dartmouth-green">
                  10+ Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={`animate-slide-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.25s' }}>
          <h2 className="text-sm font-semibold text-dartmouth-green tracking-widest uppercase mb-2">
            ABOUT
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-dark-green mb-6">
            Move Smarter. Eat Intuitively.
            <br />
            <span className="text-sea-green">Feel Strong For Life.</span>
          </h3>
          <p className="text-lg text-dartmouth-green mb-8 leading-relaxed">
            Hi, I'm Christian Borja. I believe fitness should empower, not exhaust you. 
            My approach combines evidence-based training with holistic nutrition and mindset 
            coaching to help you build a body and lifestyle you're proud of — without sacrificing 
            the things you love.
          </p>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-celadon rounded-lg flex items-center justify-center text-sea-green">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-dark-green text-lg mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-dartmouth-green">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a href="#contact" className="btn-primary inline-block">
              Book Your Free Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

