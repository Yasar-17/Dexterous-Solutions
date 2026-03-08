import React, { useState } from 'react';
import FadeInSection from '../components/FadeInSection.jsx';

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      // EMAIL INTEGRATION: Replace YOUR_FORM_ID with your Formspree form ID. Sign up free at https://formspree.io
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData(initialFormState);
      } else {
        setStatus('error');
        setErrorMessage('Something went wrong. Please try again or contact us directly.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-950 via-slate-950 to-slate-900 text-slate-50">
      {/* Hero / Intro */}
      <section className="border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex flex-col lg:flex-row gap-10 items-start">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.18em] text-blue-300 mb-3">
              Get in touch
            </p>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              Let&apos;s design the right power backup for your site.
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-xl mb-6">
              Share your load details, runtime, and application. Our engineering team
              will recommend the right UPS, batteries, or rental plan for your
              requirement in Bangalore and beyond.
            </p>
            {/* Quick contact chips */}
            <div className="flex flex-wrap gap-3 mb-6 text-xs md:text-sm">
              <a
                href="tel:+919994106234"
                className="inline-flex items-center gap-2 rounded-full bg-slate-800/70 px-4 py-2 border border-slate-700 hover:border-blue-400 hover:text-blue-100 transition"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Call: 99941 06234
              </a>
              <a
                href="mailto:sales@dexterouspowersolution.com"
                className="inline-flex items-center gap-2 rounded-full bg-slate-800/70 px-4 py-2 border border-slate-700 hover:border-blue-400 hover:text-blue-100 transition"
              >
                ✉️ sales@dexterouspowersolution.com
              </a>
              <a
                href="https://wa.me/919994106234?text=Hello%2C%20I%20need%20assistance%20from%20Dexterous%20Power%20Solution"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 border border-emerald-400 hover:bg-emerald-400 transition"
              >
                💬 WhatsApp enquiry
              </a>
            </div>
            {/* Address */}
            <div className="text-xs md:text-sm text-slate-300/90">
              <p className="font-semibold text-slate-100">
                Dexterous Power Solution
              </p>
              <p>
                #57, YGR Janya Nilaya, 16th Cross, NGR Layout, Roopena Agrahara,
                Bommanahalli, Bangalore – 560 068
              </p>
            </div>
          </div>

          {/* Highlight card with key contact info */}
          <div className="w-full max-w-md">
            <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-emerald-500 p-[1px] shadow-xl shadow-blue-900/40">
              <div className="rounded-[1.4rem] bg-slate-950/90 p-5 space-y-4">
                <h2 className="font-display text-lg md:text-xl font-semibold">
                  24/7 support for critical loads
                </h2>
                <p className="text-xs md:text-sm text-slate-300">
                  For breakdowns and urgent UPS rental, call our support numbers
                  directly for the fastest response.
                </p>
                <div className="space-y-2 text-xs md:text-sm">
                  <p>
                    Phone:{' '}
                    <a href="tel:+919994106234" className="text-blue-200 hover:text-white">
                      99941 06234
                    </a>{' '}
                    |{' '}
                    <a href="tel:+919942465628" className="text-blue-200 hover:text-white">
                      99424 65628
                    </a>{' '}
                    |{' '}
                    <a href="tel:+918546969810" className="text-blue-200 hover:text-white">
                      85469 69810
                    </a>
                  </p>
                  <p>
                    WhatsApp:{' '}
                    <a
                      href="https://wa.me/919994106234"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-200 hover:text-white"
                    >
                      +91 9994106234
                    </a>
                  </p>
                </div>
                <p className="text-[11px] text-slate-400">
                  Typical response time: <span className="text-blue-100">within 1 business hour</span>{' '}
                  for enquiries during working hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Map section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Contact Form */}
          <FadeInSection className="w-full">
            <div className="rounded-3xl bg-slate-950/80 border border-slate-800/80 shadow-2xl shadow-black/40 p-6 md:p-7">
              <h2 className="font-display text-xl md:text-2xl font-semibold mb-2">
                Share your requirement
              </h2>
              <p className="text-xs md:text-sm text-slate-300 mb-5">
                Tell us about your connected load, backup duration, and application. We&apos;ll
                follow up with a tailored proposal.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-slate-300 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-slate-300 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-slate-300 mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+91 ..."
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-slate-300 mb-1.5">
                      Service interested in
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="block w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a service</option>
                      <option>Online UPS Sales &amp; Installation</option>
                      <option>UPS Rental (1KVA–800KVA)</option>
                      <option>Battery Sales</option>
                      <option>Inverter &amp; Battery Buy-Back</option>
                      <option>AMC / Annual Maintenance</option>
                      <option>Solar Inverters</option>
                      <option>Servo Stabilizers</option>
                      <option>Power Quality Audit</option>
                      <option>Thermography Inspection</option>
                      <option>Installation &amp; Commissioning</option>
                      <option>Others</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    placeholder="Example: 40kVA load, 1-hour backup required for office servers..."
                  />
                </div>
                {status === 'success' && (
                  <p className="text-xs text-emerald-400">
                    Thank you! Your message has been sent. We will get back to you
                    shortly.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-xs text-red-400">
                    {errorMessage}
                  </p>
                )}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 disabled:bg-blue-700/70 text-white font-semibold py-2.5 px-6 rounded-full text-sm shadow-lg shadow-blue-700/40 transition"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Submit enquiry'}
                  </button>
                  <span className="text-[11px] text-slate-400">
                    We&apos;ll never share your details with third parties.
                  </span>
                </div>
              </form>
            </div>
          </FadeInSection>

          {/* Map + WhatsApp card */}
          <FadeInSection className="w-full space-y-5">
            <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl shadow-black/40 bg-slate-950/80">
              {/* MAP: Replace the iframe src with your own Google Maps embed link from maps.google.com */}
              <iframe
                title="Dexterous Power Solution Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2587076679874!2d77.617!3d12.887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDexterous%20Power%20Solution!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full border-0"
              ></iframe>
            </div>
            <div className="rounded-3xl bg-gradient-to-r from-emerald-500 to-blue-500 p-[1px] shadow-xl shadow-emerald-900/50">
              <div className="rounded-[1.4rem] bg-slate-950/95 px-5 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                <div>
                  <p className="font-display text-sm md:text-base text-slate-50">
                    Need a faster response?
                  </p>
                  <p className="text-[11px] md:text-xs text-slate-300">
                    Chat with us on WhatsApp for quick clarifications and quotes.
                  </p>
                </div>
                <a
                  href="https://wa.me/919994106234?text=Hello%2C%20I%20need%20assistance%20from%20Dexterous%20Power%20Solution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-2 px-4 rounded-full text-xs md:text-sm shadow-md shadow-emerald-700/50 transition"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
