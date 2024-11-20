import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

const menuVariants = {
  closed: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  closed: { 
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 }
  },
  open: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 }
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Get page-specific styles
  const getPageStyles = () => {
    switch (location.pathname) {
      case '/about':
        return {
          gradient: 'from-blue-500 to-indigo-600',
          text: 'text-blue-500',
          hover: 'hover:text-blue-600',
          background: 'bg-blue-50',
          mobileGradient: 'from-blue-500/20 to-indigo-600/20',
          borderGradient: 'from-blue-500 to-indigo-600'
        };
      case '/services':
        return {
          gradient: 'from-emerald-500 to-teal-600',
          text: 'text-emerald-500',
          hover: 'hover:text-emerald-600',
          background: 'bg-emerald-50',
          mobileGradient: 'from-emerald-500/20 to-teal-600/20',
          borderGradient: 'from-emerald-500 to-teal-600'
        };
      case '/contact':
        return {
          gradient: 'from-violet-500 to-purple-600',
          text: 'text-violet-500',
          hover: 'hover:text-violet-600',
          background: 'bg-violet-50',
          mobileGradient: 'from-violet-500/20 to-purple-600/20',
          borderGradient: 'from-violet-500 to-purple-600'
        };
      default:
        return {
          gradient: 'from-primary to-secondary',
          text: 'text-primary',
          hover: 'hover:text-primary',
          background: 'bg-primary-50',
          mobileGradient: 'from-primary/20 to-secondary/20',
          borderGradient: 'from-primary to-secondary'
        };
    }
  };

  const pageStyles = getPageStyles();

  // Handle scroll events for navbar visibility and transparency
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      const scrolled = currentScrollPos > 20;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
      setScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <div className="fixed w-full top-0 z-50 flex justify-center">
        <motion.nav
          initial={{ y: 0 }}
          animate={{ y: visible ? 0 : -100 }}
          transition={{ duration: 0.3 }}
          className={`w-full md:w-[30%] px-4 py-2 relative ${
            scrolled ? 'mt-2' : 'mt-4'
          }`}
        >
          {/* Backdrop blur effect */}
          <div className={`absolute inset-0 transition-all duration-300 rounded-xl ${
            scrolled 
              ? 'bg-white/80 backdrop-blur-md shadow-lg'
              : 'bg-white/40 backdrop-blur-sm'
          }`} />

          <div className="relative">
            <div className="flex items-center justify-between h-12">
              {/* Logo */}
              <Link to="/">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-lg font-bold relative group"
                >
                  <span className={`relative z-10 bg-clip-text text-transparent bg-gradient-to-r ${pageStyles.gradient}`}>
                    AI Org
                  </span>
                </motion.div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => (
                  <Link key={item.name} to={item.path}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 group
                        ${location.pathname === item.path
                          ? pageStyles.text
                          : scrolled ? 'text-gray-700 ' + pageStyles.hover : 'text-gray-800 ' + pageStyles.hover
                        }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <div className={`absolute inset-0 bg-gradient-to-r ${pageStyles.mobileGradient} rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300`} />
                      
                      {location.pathname === item.path && (
                        <motion.div
                          className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${pageStyles.gradient}`}
                          layoutId="activeIndicator"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                ))}
              </div>

              {/* Mobile menu button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden p-1.5 rounded-lg relative group ${pageStyles.hover}`}
              >
                <span className="relative z-10">
                  {isOpen ? (
                    <XMarkIcon className="h-5 w-5 text-gray-700" />
                  ) : (
                    <Bars3Icon className="h-5 w-5 text-gray-700" />
                  )}
                </span>
              </motion.button>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-gray-900/95 backdrop-blur-lg z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="min-h-screen flex flex-col items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full max-w-[280px] space-y-3">
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    className="w-full"
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="block w-full"
                    >
                      <motion.div
                        whileHover={{ 
                          scale: 1.02,
                          x: 5,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.98 }}
                        className={`
                          relative p-4 rounded-xl overflow-hidden
                          ${location.pathname === item.path
                            ? 'bg-white/20 shadow-lg'
                            : 'bg-white/10'
                          }
                          group hover:bg-white/25
                          transition-all duration-300 ease-out
                        `}
                      >
                        {/* Glass effect background */}
                        <div className="absolute inset-0 backdrop-blur-sm" />
                        
                        {/* Gradient overlay for active state */}
                        {location.pathname === item.path && (
                          <div className={`absolute inset-0 bg-gradient-to-r ${pageStyles.mobileGradient} opacity-50`} />
                        )}

                        {/* Hover gradient */}
                        <div className={`
                          absolute inset-0 bg-gradient-to-r ${pageStyles.mobileGradient}
                          opacity-0 group-hover:opacity-30 transition-opacity duration-300
                        `} />
                        
                        {/* Content */}
                        <div className="relative flex items-center justify-between">
                          <span className={`
                            text-lg font-medium
                            ${location.pathname === item.path
                              ? 'text-white'
                              : 'text-gray-100 group-hover:text-white'
                            }
                            transition-all duration-300
                          `}>
                            {item.name}
                          </span>
                          
                          {/* Active indicator dot */}
                          {location.pathname === item.path && (
                            <div className={`
                              w-2 h-2 rounded-full mr-2
                              bg-gradient-to-r ${pageStyles.gradient}
                            `} />
                          )}
                          
                          <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-5 h-5 transform transition-transform duration-300
                              ${location.pathname === item.path
                                ? 'text-white'
                                : 'text-gray-300 group-hover:text-white'
                              }
                            `}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </motion.svg>
                        </div>

                        {/* Bottom border gradient */}
                        <div className={`
                          absolute bottom-0 left-0 right-0 h-[1px]
                          bg-gradient-to-r ${pageStyles.gradient} opacity-30
                        `} />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
