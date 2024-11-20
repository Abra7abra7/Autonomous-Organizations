import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { hoverScale } from '../../styles/animations';

const baseClasses = {
  primary: 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white',
  secondary: 'bg-gray-900 text-white dark:bg-white dark:text-gray-900',
  outline: 'border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white dark:border-violet-400 dark:text-violet-400',
  ghost: 'text-violet-600 hover:bg-violet-600/10 dark:text-violet-400',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  to,
  disabled = false,
  loading = false,
  ...props
}) => {
  const classes = `
    ${baseClasses[variant]}
    ${sizeClasses[size]}
    rounded-lg font-medium transition-all duration-200
    flex items-center justify-center gap-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${className}
  `;

  const content = (
    <>
      {loading && (
        <motion.div
          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      )}
      {children}
    </>
  );

  if (to) {
    return (
      <motion.div {...hoverScale}>
        <Link to={to} className={classes} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...hoverScale}>
        <a href={href} className={classes} {...props}>
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      className={classes}
      disabled={disabled || loading}
      {...hoverScale}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export const IconButton = ({
  icon: Icon,
  className = '',
  size = 'md',
  ...props
}) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  return (
    <Button
      className={`p-0 ${sizeMap[size]} ${className}`}
      {...props}
    >
      <Icon className="w-5 h-5" />
    </Button>
  );
};
