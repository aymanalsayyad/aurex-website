'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'general',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: 'general', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'info@aurexconsultancy.com',
      note: 'We respond within 24 hours',
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: '+971 (0) 4 XXX XXXX',
      note: 'Mon-Fri, 9 AM - 6 PM GST',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: '+971 XX XXX XXXX',
      note: 'Quick responses during business hours',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Dubai, UAE',
      note: 'Schedule an appointment first',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom text-center animate-fade-in-up">
          <span className="badge">CONTACT US</span>
          <h1 className="section-title mt-6 mb-4">Get in Touch</h1>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            Ready to transform your business? Our experts are here to help you succeed.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-primary-600 font-semibold">
            <Clock size={20} />
            We respond within 24 hours
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-dark-900 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark-900 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark-900 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark-900 mb-2">Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="real-estate">Real Estate Consulting</option>
                    <option value="golden-visa">Golden Visa Services</option>
                    <option value="business-setup">Business Setup</option>
                    <option value="management">Management Consulting</option>
                    <option value="technology">Technology Solutions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark-900 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="textarea-field"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                {submitted && (
                  <div className="p-4 rounded-lg bg-green-50 text-green-700 border border-green-200">
                    ✓ Thank you! We'll get back to you within 24 hours.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-dark-900 mb-4">Contact Methods</h3>
              </div>
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div key={index} className="flex gap-4 p-4 rounded-lg border border-dark-200 hover:border-primary-600 hover:bg-primary-50 transition-all">
                    <div className="w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-dark-900 text-sm">{method.title}</p>
                      <p className="text-dark-600 text-sm">{method.description}</p>
                      <p className="text-dark-500 text-xs mt-1">{method.note}</p>
                    </div>
                  </div>
                );
              })}

              {/* Working Hours */}
              <div className="p-4 rounded-lg bg-primary-50 border border-primary-200">
                <p className="font-semibold text-dark-900 text-sm mb-3">Working Hours</p>
                <div className="space-y-1 text-sm text-dark-600">
                  <p>Mon - Fri: 9:00 AM - 6:00 PM GST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM GST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
