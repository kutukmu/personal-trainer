"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    title: "Personal Training",
    image: "/personal-training.png",
  },
  {
    title: "Online Coaching",
    image: "/online-coaching.png",
  },
  {
    title: "Group Training",
    image: "/group-training.png",
  },
  {
    title: "Strength & Conditioning",
    image: "/strength-conditioning.png",
  },
  {
    title: "Weight Loss",
    image: "/weight-loss.png",
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="services" className="bg-white section-container">
      <div ref={ref}>
      <div className={`text-center mb-16 animate-slide-up ${isVisible ? 'visible' : ''}`}>
        <h2 className="text-sm font-semibold text-dartmouth-green tracking-widest uppercase mb-3">
          SERVICES
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">
          Our Expert Training Services
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* First Row - 2 Large Cards */}
        {services.slice(0, 2).map((service, index) => (
          <div
            key={index}
            className={`relative h-80 rounded-3xl overflow-hidden group cursor-pointer animate-slide-up ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            {/* Background Image - scales on hover */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-all duration-500 transform group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/20 group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black/30 transition-all duration-500" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h4 className="text-3xl md:text-4xl font-bold text-white text-center px-6">
                {service.title}
              </h4>
            </div>
            
            {/* Hover effect */}
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-mint/30 rounded-3xl transition-all duration-300 z-20" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Second Row - 3 Medium Cards */}
        {services.slice(2, 5).map((service, index) => (
          <div
            key={index}
            className={`relative h-80 rounded-3xl overflow-hidden group cursor-pointer animate-slide-up ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${(index + 2) * 0.15}s` }}
          >
            {/* Background Image - scales on hover */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-all duration-500 transform group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/20 group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black/30 transition-all duration-500" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h4 className="text-2xl md:text-3xl font-bold text-white text-center px-6">
                {service.title}
              </h4>
            </div>
            
            {/* Hover effect */}
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-mint/30 rounded-3xl transition-all duration-300 z-20" />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
