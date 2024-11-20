import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://linkedin.com',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: 'https://instagram.com',
  },
  {
    name: 'X (Twitter)',
    icon: FaTwitter,
    url: 'https://x.com',
  },
  {
    name: 'Facebook',
    icon: FaFacebook,
    url: 'https://facebook.com',
  },
];

const legalLinks = [
  {
    name: 'Privacy Policy',
    path: '/privacy-policy',
  },
  {
    name: 'Terms of Service',
    path: '/terms-of-service',
  },
  {
    name: 'Cookie Policy',
    path: '/cookie-policy',
  },
  {
    name: 'GDPR Compliance',
    path: '/gdpr',
  },
  {
    name: 'Data Protection',
    path: '/data-protection',
  },
  {
    name: 'Impressum',
    path: '/impressum',
  },
  {
    name: 'Accessibility Statement',
    path: '/accessibility',
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">AI Organization</h3>
            <p className="text-gray-400 mb-4">
              Empowering the future through autonomous AI solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Legal Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Compliance</h3>
            <ul className="space-y-2">
              {legalLinks.slice(4).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* EU Compliance Notice */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-sm text-gray-400">
              <p>
                This website complies with EU regulations including GDPR, ePrivacy Directive, and
                Cookie Law. We respect your privacy and protect your personal data.
              </p>
            </div>
            <div className="text-sm text-gray-400 md:text-right">
              <p>© {currentYear} AI Organization. All rights reserved.</p>
              <p>Registered in EU | VAT ID: XX XXX XXX</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
