import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaFacebook
} from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    setSubscriptionStatus('success');
    setEmail('');
  };

  const socialLinks = [
    { icon: <FaLinkedin className="w-6 h-6" />, href: '#', name: 'linkedin' },
    { icon: <FaTwitter className="w-6 h-6" />, href: '#', name: 'twitter' },
    { icon: <FaGithub className="w-6 h-6" />, href: '#', name: 'github' },
    { icon: <FaFacebook className="w-6 h-6" />, href: '#', name: 'facebook' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.company.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-violet-400 transition-colors">
                  {t('footer.company.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-violet-400 transition-colors">
                  {t('footer.company.services')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-violet-400 transition-colors">
                  {t('footer.company.contact')}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-violet-400 transition-colors">
                  {t('footer.company.careers')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.resources.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="hover:text-violet-400 transition-colors">
                  {t('footer.resources.blog')}
                </Link>
              </li>
              <li>
                <Link to="/docs" className="hover:text-violet-400 transition-colors">
                  {t('footer.resources.documentation')}
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-violet-400 transition-colors">
                  {t('footer.resources.support')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-violet-400 transition-colors">
                  {t('footer.resources.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-violet-400 transition-colors">
                  {t('footer.resources.terms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.social.title')}</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-violet-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={t(`footer.social.${social.name}`)}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.newsletter.title')}</h3>
            <p className="text-gray-400 mb-4">{t('footer.newsletter.description')}</p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('footer.newsletter.placeholder')}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
              >
                {t('footer.newsletter.button')}
              </motion.button>
              {subscriptionStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm"
                >
                  {t('footer.newsletter.success')}
                </motion.p>
              )}
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
