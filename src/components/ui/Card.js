import React from 'react';
import { motion } from 'framer-motion';
import { hoverScale } from '../../styles/animations';

export const Card = ({ children, className = '', hover = true, ...props }) => {
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-xl shadow-lg backdrop-blur-sm bg-opacity-50 dark:bg-opacity-50';
  
  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      {...(hover ? hoverScale : {})}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const GlassCard = ({ children, className = '', hover = true, ...props }) => {
  const glassClasses = 'bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl';
  
  return (
    <motion.div
      className={`${glassClasses} ${className}`}
      {...(hover ? hoverScale : {})}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const FeatureCard = ({ icon: Icon, title, description, className = '' }) => {
  return (
    <Card className={`p-6 ${className}`}>
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-violet-500/10 rounded-lg" />
        <div className="relative z-10 text-violet-600 dark:text-violet-400">
          <Icon className="w-8 h-8" />
        </div>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </Card>
  );
};
