"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  const programs = [
    { name: "Personal Training", href: "#services" },
    { name: "Online Coaching", href: "#services" },
    { name: "Group Training", href: "#services" },
    { name: "Strength & Conditioning", href: "#services" },
    { name: "Weight Loss Programs", href: "#services" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Christian Borja - Holistic Health & Fitness"
              width={450}
              height={150}
              className="h-20 w-auto sm:h-24"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className="text-dartmouth-green hover:text-sea-green font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-dartmouth-green hover:text-sea-green font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="#programs"
              className="text-dartmouth-green hover:text-sea-green font-medium transition-colors"
            >
              Programs
            </Link>
            <Link
              href="#testimonials"
              className="text-dartmouth-green hover:text-sea-green font-medium transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-dartmouth-green hover:text-sea-green font-medium transition-colors"
            >
              Contact
            </Link>
            <a
              href="#contact"
              className="bg-sea-green hover:bg-dartmouth-green text-white font-semibold px-6 py-2.5 rounded-lg transition-all transform hover:scale-105"
            >
              Free Assessment
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setProgramsOpen(false);
            }}
            className="md:hidden p-2 rounded-lg hover:bg-natural-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
    </header>

      {/* Mobile menu - Slide from right */}
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 z-[60] md:hidden"
            onClick={() => {
              setMobileMenuOpen(false);
              setProgramsOpen(false);
            }}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-full bg-white z-[70] md:hidden overflow-y-auto shadow-2xl animate-slideInRight">
            <div className="flex flex-col h-full p-6">
              {/* Close button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setProgramsOpen(false);
                  }}
                  className="w-12 h-12 bg-sea-green rounded-2xl flex items-center justify-center text-white hover:bg-dartmouth-green transition-colors"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-4 flex-1">
                {/* Programs Dropdown */}
                <div>
                  <button
                    onClick={() => setProgramsOpen(!programsOpen)}
                    className="w-full bg-sea-green text-white font-semibold px-6 py-3 rounded-full flex items-center justify-between hover:bg-dartmouth-green transition-colors"
                  >
                    <span>Programs</span>
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        programsOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  
                  {/* Programs submenu */}
                  {programsOpen && (
                    <div className="mt-3 ml-6 space-y-3">
                      {programs.map((program) => (
                        <Link
                          key={program.name}
                          href={program.href}
                          className="block text-dartmouth-green hover:text-sea-green font-medium transition-colors py-2"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setProgramsOpen(false);
                          }}
                        >
                          {program.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="#about"
                  className="text-dartmouth-green hover:text-sea-green font-semibold text-lg py-2 transition-colors ml-6"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setProgramsOpen(false);
                  }}
                >
                  About Me
                </Link>

                <Link
                  href="#contact"
                  className="text-dartmouth-green hover:text-sea-green font-semibold text-lg py-2 transition-colors ml-6"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setProgramsOpen(false);
                  }}
                >
                  Contact
                </Link>

                <Link
                  href="#service-areas"
                  className="text-dartmouth-green hover:text-sea-green font-semibold text-lg py-2 transition-colors ml-6"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setProgramsOpen(false);
                  }}
                >
                  Service Areas
                </Link>
              </nav>

              {/* Bottom Buttons */}
              <div className="space-y-4 mt-auto pb-8">
                <a
                  href="#contact"
                  className="block w-full bg-sea-green text-white font-bold text-center px-6 py-3 rounded-full hover:bg-dartmouth-green transition-colors"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setProgramsOpen(false);
                  }}
                >
                  Book Your Free Assessment
                </a>

                <a
                  href="tel:8586928824"
                  className="block w-full bg-white border-2 border-dartmouth-green text-dartmouth-green font-semibold text-center px-6 py-3 rounded-full hover:bg-nyanza transition-colors flex items-center justify-center gap-3"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setProgramsOpen(false);
                  }}
                >
                  <svg
                    className="w-5 h-5"
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
        </>
      )}
    </>
  );
}

