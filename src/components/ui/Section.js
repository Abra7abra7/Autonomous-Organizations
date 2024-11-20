import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../styles/animations';
import gridPattern from '../../assets/grid.svg';

export const Section = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <section
      className={`py-20 relative overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export const SectionTitle = ({
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      <motion.h2
        variants={textVariant(0.1)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={textVariant(0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-4 text-xl text-gray-600 dark:text-gray-300"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export const GradientSection = ({
  children,
  className = '',
  gradient = 'from-violet-600 to-indigo-600',
  ...props
}) => {
  return (
    <Section
      className={`bg-gradient-to-r ${gradient} text-white ${className}`}
      {...props}
    >
      <div className="absolute inset-0" style={{ backgroundImage: `url(${gridPattern})`, opacity: 0.1 }} />
      <div className="relative">
        {children}
      </div>
    </Section>
  );
};

export const FeatureSection = ({
  title,
  subtitle,
  features,
  className = '',
}) => {
  return (
    <Section className={className}>
      <div className="container mx-auto px-4">
        <SectionTitle
          title={title}
          subtitle={subtitle}
          centered
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index * 0.1}
            >
              <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
