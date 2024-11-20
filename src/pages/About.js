import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const values = [
    { key: 'innovation', icon: '💡' },
    { key: 'reliability', icon: '🛡️' },
    { key: 'transparency', icon: '🔍' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative pt-20 pb-32 flex content-center items-center justify-center min-h-[60vh] bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <motion.div 
              className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center text-white"
              {...fadeIn}
            >
              <h1 className="text-5xl font-bold mb-4">{t('about.title')}</h1>
              <p className="text-xl">{t('about.description')}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            {/* Mission */}
            <motion.div 
              className="w-full md:w-6/12 px-4 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-3xl font-bold mb-4 text-blue-600">
                  {t('about.mission.title')}
                </h2>
                <p className="text-gray-600 text-lg">
                  {t('about.mission.description')}
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div 
              className="w-full md:w-6/12 px-4 mb-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-3xl font-bold mb-4 text-indigo-600">
                  {t('about.vision.title')}
                </h2>
                <p className="text-gray-600 text-lg">
                  {t('about.vision.description')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">{t('about.values.title')}</h2>
          </motion.div>

          <div className="flex flex-wrap">
            {values.map((value, index) => (
              <motion.div
                key={value.key}
                className="w-full md:w-4/12 px-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-white rounded-lg p-8 shadow-lg text-center h-full">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">
                    {t(`about.values.items.${value.key}.title`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`about.values.items.${value.key}.description`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">{t('about.team.title')}</h2>
            <p className="text-xl text-gray-600">{t('about.team.description')}</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
