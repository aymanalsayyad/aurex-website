'use client';

import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/about#team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Management Consulting', href: '/services#management' },
        { label: 'Real Estate', href: '/services#real-estate' },
        { label: 'Golden Visa', href: '/golden-visa' },
        { label: 'Business Setup', href: '/services#business-setup' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Investment Guides', href: '/#guides' },
        { label: 'Blog & Insights', href: '/blog' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Calculators', href: '/#calculators' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/aurex', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/aurexconsult', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com/aurexconsult', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/aurexconsult', label: 'Instagram' },
  ];

  return (
    <footer className="bg-dark-900 text-white">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary-400 to-accent-400 flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="text-xl font-bold">Aurex</span>
            </div>
            <p className="text-dark-300 text-sm mb-6">
              Your trusted strategic partner for success in Dubai and beyond.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-800 hover:bg-primary-600 flex items-center justify-center transition-colors"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-dark-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-dark-800 pt-12 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <a
              href="mailto:info@aurexconsultancy.com"
              className="flex items-start gap-3 hover:text-primary-400 transition-colors"
            >
              <Mail size={20} className="mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm">Email Us</p>
                <p className="text-dark-300 text-sm">info@aurexconsultancy.com</p>
              </div>
            </a>

            <a
              href="tel:+971123456789"
              className="flex items-start gap-3 hover:text-primary-400 transition-colors"
            >
              <Phone size={20} className="mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm">Call Us</p>
                <p className="text-dark-300 text-sm">+971 (0) 4 XXX XXXX</p>
              </div>
            </a>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 hover:text-primary-400 transition-colors"
            >
              <MapPin size={20} className="mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm">Visit Us</p>
                <p className="text-dark-300 text-sm">Dubai, United Arab Emirates</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800 bg-dark-950">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-400 text-sm">
            © {currentYear} Aurex Consultancy. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-dark-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-dark-400 hover:text-white text-sm transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
