import React from 'react';
import FadeInSection from '../components/FadeInSection.jsx';

const About = () => {
  return (
    <div className="bg-white">
      {/* Company Overview */}
      <section className="bg-neutral-bg border-b border-neutral-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <p className="text-xs text-text-secondary mb-2">
            Home <span className="mx-1">›</span> About Us
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-semibold mb-3">
            About Dexterous Power Solution
          </h1>
          <p className="text-text-secondary max-w-2xl text-sm md:text-base">
            Bangalore-based power infrastructure specialists delivering reliable
            backup and energy solutions to homes, businesses, and industries.
          </p>
        </div>
      </section>

      <FadeInSection className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative">
            {/* REPLACE: Add company/office/team photo to /public/about-img.jpg */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-neutral-border">
              <img
                src="/About_US.jpeg"
                alt="Dexterous Power Solution team or office"
                className="w-full h-full max-h-[420px] object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-md border border-neutral-border px-4 py-3 text-xs text-text-secondary">
              Trusted by <span className="font-semibold text-primary">500+ customers</span> across
              Bangalore
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-sm md:text-base text-text-secondary">
              Dexterous Power Solution is a Bangalore-based authorized dealer and
              system integrator specializing in power infrastructure and backup
              solutions. We are authorized partners for industry leaders including
              Emerson, Schneider Electric, APC, Socomec, Delta, Amara Raja, Exide,
              and Rocket Battery.
            </p>
            <p className="text-sm md:text-base text-text-secondary">
              We serve homes, small businesses, corporates, and large industrial
              clients across Bangalore and beyond, providing end-to-end solutions
              from sales and installation to rental and annual maintenance. Our
              focus is on designing reliable, right-sized power backup systems that
              protect your equipment and keep your operations running.
            </p>
            <p className="text-sm md:text-base text-text-secondary">
              With multi-brand expertise, a responsive service team, and a
              commitment to quality, we help our customers reduce downtime,
              improve efficiency, and plan their power infrastructure with
              confidence.
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* Our Values */}
      <FadeInSection className="pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-neutral-card border border-neutral-border shadow-sm p-6">
              <h3 className="font-semibold mb-2">Reliability</h3>
              <p className="text-sm text-text-secondary">
                We believe that power backup should be invisible until you need it.
                Our systems and services are built around uptime, safety, and
                predictable performance.
              </p>
            </div>
            <div className="rounded-2xl bg-neutral-card border border-neutral-border shadow-sm p-6">
              <h3 className="font-semibold mb-2">Expertise</h3>
              <p className="text-sm text-text-secondary">
                Our team brings hands-on experience with leading UPS, battery, and
                inverter brands, ensuring you get technically sound recommendations
                and clean installations.
              </p>
            </div>
            <div className="rounded-2xl bg-neutral-card border border-neutral-border shadow-sm p-6">
              <h3 className="font-semibold mb-2">Customer First</h3>
              <p className="text-sm text-text-secondary">
                From the first enquiry to long-term maintenance, we prioritize
                clear communication, transparent pricing, and dependable support.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Company Details Box */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-neutral-border bg-neutral-bg p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="flex-1 space-y-2 text-sm md:text-base text-text-secondary">
              <h2 className="font-display text-xl md:text-2xl font-semibold mb-2 text-text-primary">
                Company Details
              </h2>
              <p>
                <span className="font-semibold">GST No:</span>{' '}
                29AAUFD9175HUZL
              </p>
              <p>
                <span className="font-semibold">Registered Address:</span>{' '}
                #57, YGR Janya Nilaya, 16th Cross, NGR Layout, Roopena Agrahara,
                Bommanahalli, Bangalore – 560 068
              </p>
              <p>
                <span className="font-semibold">Email:</span>{' '}
                <a
                  href="mailto:sales@dexterouspowersolution.com"
                  className="text-primary hover:text-primary-dark"
                >
                  sales@dexterouspowersolution.com
                </a>
              </p>
            </div>
            <div className="flex-1 rounded-2xl bg-slate-900 text-slate-100 p-5 md:p-6 flex flex-col justify-between">
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-sm uppercase tracking-wide text-slate-300">
                  Quick Contact
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
                  WhatsApp:{' '}
                  <a
                    href="https://wa.me/919994106234"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-light"
                  >
                    +91 9994106234
                  </a>
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="https://wa.me/919994106234?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Dexterous%20Power%20Solution."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 px-4 rounded-full text-xs md:text-sm shadow-md shadow-emerald-500/40 transition"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

