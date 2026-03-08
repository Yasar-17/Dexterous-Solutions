import React from 'react';
import FadeInSection from '../components/FadeInSection.jsx';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Online UPS Sales & Installation',
    description:
      'Supply and professional installation of online UPS systems from 1KVA to 800KVA for homes, offices, data centers, and industrial setups.',
    whatsappText:
      'Hello, I would like to enquire about Online UPS Sales & Installation from Dexterous Power Solution.'
  },
  {
    title: 'UPS Rental (1KVA–800KVA)',
    description:
      'Flexible short-term and long-term UPS rental plans. Ideal for events, temporary setups, and load testing.',
    whatsappText:
      'Hello, I would like to enquire about UPS Rental (1KVA–800KVA) from Dexterous Power Solution.'
  },
  {
    title: 'Battery Sales',
    description:
      'Authorized dealer for Exide, Amara Raja, and Rocket batteries — VRLA, Li-ion, and tubular types.',
    whatsappText:
      'Hello, I would like to enquire about Battery Sales from Dexterous Power Solution.'
  },
  {
    title: 'Inverter & Battery Buy-Back',
    description:
      'Sell your old UPS or inverter battery to us at competitive prices. Eco-friendly disposal guaranteed.',
    whatsappText:
      'Hello, I would like to enquire about Inverter & Battery Buy-Back from Dexterous Power Solution.'
  },
  {
    title: 'Annual Maintenance Contract (AMC)',
    description:
      'Scheduled preventive maintenance, health checkup, and 24/7 breakdown support for UPS, inverters, and batteries.',
    whatsappText:
      'Hello, I would like to enquire about Annual Maintenance Contract (AMC) from Dexterous Power Solution.'
  },
  {
    title: 'Solar Inverters',
    description:
      'Supply and installation of grid-tied and off-grid solar inverters. Contribute to a greener environment.',
    whatsappText:
      'Hello, I would like to enquire about Solar Inverters from Dexterous Power Solution.'
  },
  {
    title: 'Servo Stabilizers',
    description:
      'Wide range of stabilizers for household and industrial applications.',
    whatsappText:
      'Hello, I would like to enquire about Servo Stabilizers from Dexterous Power Solution.'
  },
  {
    title: 'Power Quality Audit',
    description:
      'Detailed analysis of your electrical system — harmonic study, load analysis, SLD preparation, APFC panel design.',
    whatsappText:
      'Hello, I would like to enquire about Power Quality Audit from Dexterous Power Solution.'
  },
  {
    title: 'Thermography Inspection',
    description:
      'Infrared thermal imaging to identify hotspots and prevent electrical failures before they happen.',
    whatsappText:
      'Hello, I would like to enquire about Thermography Inspection from Dexterous Power Solution.'
  },
  {
    title: 'Installation & Commissioning',
    description:
      'End-to-end project execution: cabling, panel installation, testing, and handover documentation.',
    whatsappText:
      'Hello, I would like to enquire about Installation & Commissioning from Dexterous Power Solution.'
  }
];

const Services = () => {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-neutral-bg border-b border-neutral-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <p className="text-xs text-text-secondary mb-2">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>{' '}
            <span className="mx-1">›</span> Services
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-semibold mb-3">
            Our Services
          </h1>
          <p className="text-text-secondary max-w-2xl text-sm md:text-base">
            Comprehensive power backup, maintenance, and rental solutions tailored
            for homes, SMEs, corporates, and industrial facilities.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <FadeInSection className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service) => {
              const whatsappUrl = `https://wa.me/919994106234?text=${encodeURIComponent(
                service.whatsappText
              )}`;
              return (
                <article
                  key={service.title}
                  className="bg-neutral-card rounded-2xl border border-neutral-border shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="M4 7h16M4 12h10M4 17h7" strokeLinecap="round" />
                        <path d="M16 16.5 19 19l3-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold mb-1">
                        {service.title}
                      </h2>
                      <p className="text-sm text-text-secondary">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 px-4 rounded-full text-xs md:text-sm shadow-md shadow-emerald-500/40 transition"
                    >
                      Enquire on WhatsApp
                      <span className="ml-1">💬</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </FadeInSection>

      {/* WhatsApp Enquiry CTA - same blue gradient banner as Home */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-3">
                Unsure which UPS or solution fits your load?
              </h2>
              <p className="text-sm md:text-base text-blue-100 max-w-lg">
                Share your application, power rating, and backup requirement. Our
                engineering team will suggest the right brand and configuration.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="https://wa.me/919994106234?text=Hello%2C%20I%20would%20like%20to%20discuss%20power%20backup%20solutions%20with%20Dexterous%20Power%20Solution."
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

export default Services;
