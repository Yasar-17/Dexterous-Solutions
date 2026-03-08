import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand & tagline */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img
              src="/logo-dark.png"
              alt="Dexterous Power Solution logo"
              className="h-10 w-auto object-contain"
            />
          </div>
          <p className="text-sm text-slate-300 max-w-sm">
            Reliable power backup and infrastructure solutions for homes,
            businesses, and industries across Bangalore and beyond.
          </p>
          {/* ADD: social media links if available */}
          <div className="flex gap-3 text-slate-400 text-sm">
            {/* REPLACE: Add your social icons/links */}
            <span className="italic text-xs">
              {/* ADD: social media links if available */}
            </span>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-slate-200 uppercase mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink
                to="/"
                className="hover:text-primary-light transition-colors"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="hover:text-primary-light transition-colors"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className="hover:text-primary-light transition-colors"
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-primary-light transition-colors"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-primary-light transition-colors"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact details */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-slate-200 uppercase mb-4">
            Contact
          </h3>
          <div className="space-y-2 text-sm text-slate-300">
            <p>
              #57, YGR Janya Nilaya, 16th Cross, NGR Layout, Roopena Agrahara,
              Bommanahalli, Bangalore – 560 068
            </p>
            <p>
              Phone:{' '}
              <a
                href="tel:+919994106234"
                className="hover:text-primary-light"
              >
                99941 06234
              </a>{' '}
              |{' '}
              <a
                href="tel:+919942465628"
                className="hover:text-primary-light"
              >
                99424 65628
              </a>{' '}
              |{' '}
              <a
                href="tel:+918546969810"
                className="hover:text-primary-light"
              >
                85469 69810
              </a>
            </p>
            <p>
              Email:{' '}
              <a
                href="mailto:sales@dexterouspowersolution.com"
                className="hover:text-primary-light"
              >
                sales@dexterouspowersolution.com
              </a>
            </p>
            <p>GST No: 29AAUFD9175HUZL</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            © 2024 Dexterous Power Solution. All rights reserved.
          </p>
          <p>GST: 29AAUFD9175HUZL</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
