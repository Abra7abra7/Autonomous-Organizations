import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  ChartBarIcon,
  CpuChipIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  SparklesIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { Button } from '../components/ui/Button';
import { GradientSection, FeatureSection } from '../components/ui/Section';
import { GlassCard } from '../components/ui/Card';
import { fadeIn, floatingAnimation, textVariant } from '../styles/animations';

const HeroIllustration = () => (
  <svg className="w-full h-full" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#8B5CF6', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <circle cx="400" cy="300" r="150" fill="url(#grad1)" opacity="0.1"/>
    <circle cx="400" cy="300" r="100" fill="url(#grad1)" opacity="0.2"/>
    <circle cx="400" cy="300" r="50" fill="url(#grad1)" opacity="0.3"/>
    <circle cx="200" cy="200" r="20" fill="#8B5CF6"/>
    <circle cx="600" cy="200" r="20" fill="#6366F1"/>
    <circle cx="200" cy="400" r="20" fill="#6366F1"/>
    <circle cx="600" cy="400" r="20" fill="#8B5CF6"/>
    <line x1="200" y1="200" x2="600" y2="200" stroke="#8B5CF6" strokeWidth="2"/>
    <line x1="200" y1="200" x2="200" y2="400" stroke="#6366F1" strokeWidth="2"/>
    <line x1="600" y1="200" x2="600" y2="400" stroke="#8B5CF6" strokeWidth="2"/>
    <line x1="200" y1="400" x2="600" y2="400" stroke="#6366F1" strokeWidth="2"/>
  </svg>
);

const Home = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <CpuChipIcon className="w-6 h-6" />,
      title: t('home.features.items.automation.title'),
      description: t('home.features.items.automation.description'),
    },
    {
      icon: <ChartBarIcon className="w-6 h-6" />,
      title: t('home.features.items.analytics.title'),
      description: t('home.features.items.analytics.description'),
    },
    {
      icon: <SparklesIcon className="w-6 h-6" />,
      title: t('home.features.items.integration.title'),
      description: t('home.features.items.integration.description'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <GradientSection className="min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial="initial"
              animate="animate"
              className="text-center lg:text-left"
            >
              <motion.h1
                variants={textVariant(0.1)}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                {t('home.hero.title')}
              </motion.h1>
              <motion.p
                variants={textVariant(0.2)}
                className="text-xl md:text-2xl mb-8 text-gray-200"
              >
                {t('home.hero.subtitle')}
              </motion.p>
              <motion.div
                variants={fadeIn}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  to="/about"
                  className="group"
                >
                  {t('home.hero.cta')}
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              variants={floatingAnimation}
              animate="animate"
              className="hidden lg:block"
            >
              <HeroIllustration />
            </motion.div>
          </div>
        </div>
      </GradientSection>

      {/* Features Section */}
      <FeatureSection
        title={t('home.features.title')}
        subtitle={t('home.features.subtitle')}
        features={features}
        className="bg-gray-50 dark:bg-gray-900"
      />

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '99%', label: 'Accuracy' },
              { value: '24/7', label: 'Support' },
              { value: '150+', label: 'Clients' },
              { value: '10x', label: 'Efficiency' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index * 0.1}
                className="text-center"
              >
                <GlassCard className="p-6">
                  <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <GradientSection className="text-center">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              {t('home.cta.description')}
            </p>
            <Button
              size="lg"
              variant="secondary"
              to="/contact"
              className="group"
            >
              {t('home.cta.button')}
              <RocketLaunchIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </GradientSection>
    </div>
  );
};

export default Home;
