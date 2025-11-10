import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-natural-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="mb-4 bg-white rounded-lg p-2 inline-block">
              <Image
                src="/logo.png"
                alt="Christian Borja - Holistic Health & Fitness"
                width={400}
                height={100}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-natural-400 text-sm">
              Transform your body, elevate your life. Expert personal training and holistic health coaching in San Diego.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-natural-400 text-sm">
              <li>
                <Link href="#services" className="hover:text-primary-400 transition-colors">
                  Personal Training
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary-400 transition-colors">
                  Online Coaching
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary-400 transition-colors">
                  Group Training
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary-400 transition-colors">
                  Nutrition Counseling
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary-400 transition-colors">
                  Weight Loss Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Programs</h3>
            <ul className="space-y-2 text-natural-400 text-sm">
              <li>
                <Link href="#programs" className="hover:text-primary-400 transition-colors">
                  In-Home Training
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-primary-400 transition-colors">
                  Outdoor Training
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-primary-400 transition-colors">
                  Virtual Sessions
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-primary-400 transition-colors">
                  Fitness Assessments
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-natural-400 text-sm">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5 text-primary-400"
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
                <span>San Diego, CA</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5 text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:contact@chrisborja.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  contact@chrisborja.com
                </a>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5 text-primary-400"
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
                <a
                  href="tel:+18585551234"
                  className="hover:text-primary-400 transition-colors"
                >
                  (858) 555-1234
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-natural-400 hover:text-primary-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-natural-400 hover:text-primary-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-natural-800 mt-8 pt-8 text-center text-natural-400 text-sm">
          <p>
            &copy; {currentYear} Christian Borja. All rights reserved. San
            Diego personal training services with a focus on transforming lives.
          </p>
        </div>
      </div>
    </footer>
  );
}

