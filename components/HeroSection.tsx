import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-green/90 via-dartmouth-green/80 to-sea-green/70 z-10" />
        {/* Hero Background Image */}
        <Image
          src="/hero.png"
          alt="Personal training on the beach at sunset"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full px-6 sm:px-12 lg:px-20 py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
            Transform Your Body,
            <br />
            <span className="text-mint">Elevate Your Life</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/95 mb-10 leading-relaxed max-w-xl">
            Experience personalized holistic health and fitness coaching designed for your unique journey. Let's build strength, wellness, and lasting transformation together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-mint hover:bg-sea-green text-white font-semibold px-7 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Free Consultation
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-transparent hover:bg-mint/20 text-white font-semibold px-7 py-4 rounded-lg transition-all duration-300 border-2 border-mint hover:border-white transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

