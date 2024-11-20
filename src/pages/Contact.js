import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    // Add your form submission logic here
  };

  const contactInfo = [
    { icon: <MapPinIcon className="h-6 w-6" />, key: 'address' },
    { icon: <EnvelopeIcon className="h-6 w-6" />, key: 'email' },
    { icon: <PhoneIcon className="h-6 w-6" />, key: 'phone' },
    { icon: <ClockIcon className="h-6 w-6" />, key: 'hours' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative pt-20 pb-32 flex content-center items-center justify-center min-h-[40vh] bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-4">{t('contact.title')}</h1>
            <p className="text-xl">{t('contact.description')}</p>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            {/* Contact Information */}
            <motion.div 
              className="w-full lg:w-4/12 px-4 mb-8 lg:mb-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">{t('contact.info.title')}</h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.key} className="flex items-start">
                      <div className="text-violet-500 mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{t(`contact.info.${item.key}`)}</h3>
                        <p className="text-gray-600">
                          {/* Add your contact information here */}
                          {item.key === 'email' && 'info@example.com'}
                          {item.key === 'phone' && '+1 (123) 456-7890'}
                          {item.key === 'address' && '123 AI Street, Tech City, 12345'}
                          {item.key === 'hours' && 'Mon-Fri: 9:00 AM - 5:00 PM'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="w-full lg:w-8/12 px-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500"
                        placeholder={t('contact.form.placeholders.name')}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500"
                        placeholder={t('contact.form.placeholders.email')}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.phone')}
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500"
                        placeholder={t('contact.form.placeholders.phone')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.company')}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500"
                        placeholder={t('contact.form.placeholders.company')}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500"
                      placeholder={t('contact.form.placeholders.message')}
                      required
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-200"
                  >
                    {t('contact.form.submit')}
                  </motion.button>

                  {formStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg"
                    >
                      {t('contact.form.success')}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
