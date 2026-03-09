import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/services' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'About Us', to: '/about' },
  { name: 'Contact', to: '/contact' }
];

const Logo = () => {
  const logoSrc = `${import.meta.env.BASE_URL}logo.jpeg`;

  return (
    <div className="flex items-center gap-2">
      {/* LOGO: Place your Dexterous Power Solution logo file as public/logo.jpeg */}
      <img
        src={logoSrc}
        alt="Dexterous Power Solution logo"
        className="h-12 w-auto object-contain"
      />
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-neutral-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <NavLink to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <Logo />
          </NavLink>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-sm font-medium">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `transition-colors hover:text-primary ${
                      isActive ? 'text-primary border-b-2 border-primary pb-1' : 'text-text-secondary'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-primary hover:bg-neutral-bg focus:outline-none focus:ring-2 focus:ring-primary-light"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <div className="flex flex-col gap-2 text-sm font-medium">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-2 py-2 rounded-md ${
                      isActive
                        ? 'text-primary bg-neutral-bg'
                        : 'text-text-secondary hover:bg-neutral-bg'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

