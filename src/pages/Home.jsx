import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import FadeInSection from '../components/FadeInSection.jsx';

const stats = [
  { label: 'Happy Customers', value: '500+' },
  { label: 'Rental Range', value: '1KVA – 800KVA' },
  { label: 'Support', value: '24/7' },
  { label: 'Years Experience', value: '8+' }
];

const servicesSnapshot = [
  {
    title: 'UPS Sales & Installation',
    description: 'Online UPS systems from 1KVA to 800KVA for homes to industries.',
    iconPath: 'M3 13.5L12 3l9 10.5-9 7.5-9-7.5Z'
  },
  {
    title: 'UPS Rental (1KVA–800KVA)',
    description: 'Flexible rental solutions for events, load tests, and temporary setups.',
    iconPath: 'M4 6h16v4H4V6Zm2 6h12v4H6v-4Zm3 6h10v4H9v-4Z'
  },
  {
    title: 'Battery Sales & Buy-Back',
    description: 'Authorized dealer for Exide, Amara Raja, and Rocket batteries.',
    iconPath: 'M5 7h14v10H5V7Zm3-4h8v3H8V3Z'
  },
  {
    title: 'Solar Inverters',
    description: 'Grid-tied and off-grid solar inverters for a greener footprint.',
    iconPath: 'M12 2 9 8h6l-3-6Zm0 20 3-6H9l3 6Zm10-10-6-3v6l6-3Zm-20 0 6 3v-6l-6 3Z'
  },
  {
    title: 'AMC / Annual Maintenance',
    description: 'Preventive maintenance and 24/7 breakdown support for critical systems.',
    iconPath: 'M5 5h14v4H5V5Zm0 6h8v4H5v-4Zm0 6h14v4H5v-4Z'
  },
  {
    title: 'Power Quality Audit & Thermography',
    description: 'Detailed electrical analysis to prevent failures and optimize efficiency.',
    iconPath: 'M4 4h16v16H4V4Zm4 3h2v10H8V7Zm4 4h2v6h-2v-6Zm4-3h2v9h-2V8Z'
  }
];

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // HERO BACKGROUND IMAGE:
            // This uses a sample Unsplash+ data center image URL for development.
            // For production, download a licensed image and place it in /public/hero-bg.jpg,
            // then change this line back to: backgroundImage: "url('/hero-bg.jpg')"
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1764705685529-2319648d71ca?fm=jpg&q=60&w=2400&auto=format&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-[#0f172a]/75" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl text-left text-white animate-fade-in">
            <p className="inline-flex items-center gap-2 text-xs font-medium bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Powering Bangalore since 2016
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Powering Your World, Reliably.
            </h1>
            <p className="text-base md:text-lg text-slate-100/90 mb-8 max-w-2xl">
              Dexterous Power Solution — Authorized dealer &amp; service partner for
              Emerson, Schneider, APC, Socomec, Delta, Exide &amp; more. From UPS
              sales and rentals to batteries and solar inverters, we keep your
              business always-on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full text-sm md:text-base shadow-lg shadow-blue-900/40 transition"
              >
                Get a Quote
                <span className="ml-2 inline-block">
                  →
                </span>
              </NavLink>
              <NavLink
                to="/services"
                className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-blue-50 font-semibold py-3 px-8 rounded-full text-sm md:text-base transition"
              >
                Our Services
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-start md:items-center"
              >
                <p className="text-xl md:text-2xl font-semibold text-white">
                  {item.value}
                </p>
                <p className="text-xs md:text-sm text-slate-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <FadeInSection className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-3">
                What We Do
              </h2>
              <p className="text-text-secondary max-w-2xl">
                End-to-end power backup solutions — from online UPS systems and
                batteries to solar inverters, rentals, and preventive maintenance.
              </p>
            </div>
            <NavLink
              to="/services"
              className="text-sm font-semibold text-primary hover:text-primary-dark"
            >
              View all services →
            </NavLink>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesSnapshot.map((service) => (
              <div
                key={service.title}
                className="bg-neutral-card border-l-4 border-primary/80 rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="h-11 w-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="currentColor"
                    >
                      <path d={service.iconPath} />
                    </svg>
                  </div>
                  <span className="inline-flex items-center text-[11px] font-medium text-primary bg-primary/5 border border-primary/20 px-2 py-1 rounded-full">
                    Power Solutions
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary flex-1">
                  {service.description}
                </p>
                <div className="mt-5">
                  <NavLink
                    to="/services"
                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark"
                  >
                    Learn More
                    <span className="ml-1">→</span>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Brand partners section is handled globally in App.jsx */}

      {/* Why Choose Us */}
      <FadeInSection className="py-16 md:py-24 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-3">
              Why Choose Dexterous Power Solution?
            </h2>
            <p className="text-text-secondary">
              We combine multi-brand expertise, responsive service, and practical
              engineering know-how to ensure your power backup is always ready
              when you need it most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-blue-50 border border-blue-100 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white text-sm">
                  ✓
                </span>
                <h3 className="font-semibold text-base">Authorized Multi-Brand Dealer</h3>
              </div>
              <p className="text-sm text-text-secondary">
                Official partners for Emerson, Schneider Electric, APC, Socomec,
                Delta, Amara Raja, Exide, and Rocket Battery with genuine
                spares and OEM support.
              </p>
            </div>
            <div className="rounded-2xl bg-blue-50 border border-blue-100 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white text-sm">
                  ✓
                </span>
                <h3 className="font-semibold text-base">24/7 Service Support</h3>
              </div>
              <p className="text-sm text-text-secondary">
                Round-the-clock technical assistance, on-site visit support, and
                rapid response for breakdowns and emergency power requirements.
              </p>
            </div>
            <div className="rounded-2xl bg-blue-50 border border-blue-100 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white text-sm">
                  ✓
                </span>
                <h3 className="font-semibold text-base">Competitive Rental Pricing</h3>
              </div>
              <p className="text-sm text-text-secondary">
                Flexible UPS rental plans from 1KVA to 800KVA designed to meet
                budgets for events, testing, and temporary infrastructure needs.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* CTA Banner */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-3">
                Need a UPS rental or urgent power backup?
              </h2>
              <p className="text-sm md:text-base text-blue-100 max-w-lg">
                Share your load details and duration, and our team will respond
                quickly with the best-suited UPS rental or backup solution for
                your site.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="https://wa.me/919994106234?text=Hello%2C%20I%20need%20a%20quote%20from%20Dexterous%20Power%20Solution"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-full text-sm md:text-base shadow-lg shadow-emerald-500/40 transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
