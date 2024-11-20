import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const Services = () => {
  const { t } = useTranslation();

  const categories = [
    { key: 'automation', icon: '⚡', color: 'from-blue-500 to-cyan-500' },
    { key: 'analytics', icon: '📊', color: 'from-purple-500 to-pink-500' },
    { key: 'management', icon: '🎯', color: 'from-yellow-500 to-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative pt-20 pb-32 flex content-center items-center justify-center min-h-[60vh] bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-4">{t('services.title')}</h1>
            <p className="text-xl">{t('services.description')}</p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">{t('services.subtitle')}</h2>
          </motion.div>

          <div className="flex flex-wrap">
            {categories.map((category, index) => (
              <motion.div
                key={category.key}
                className="w-full md:w-4/12 px-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                  <div className={`h-2 bg-gradient-to-r ${category.color}`} />
                  <div className="p-8">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">
                      {t(`services.categories.${category.key}.title`)}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {t(`services.categories.${category.key}.description`)}
                    </p>
                    <ul className="space-y-3">
                      {t(`services.categories.${category.key}.features`, { returnObjects: true }).map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircleIcon className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold py-4 px-8 rounded-full inline-flex items-center space-x-2 hover:shadow-lg transition-all duration-200"
            >
              {t('services.cta')}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
