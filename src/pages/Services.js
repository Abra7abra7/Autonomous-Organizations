import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaRobot, 
  FaBrain, 
  FaChartBar, 
  FaShieldAlt, 
  FaCogs, 
  FaDatabase,
  FaUserCog,
  FaNetworkWired
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaRobot />,
      title: "AI Process Automation",
      description: "Streamline operations with intelligent automation solutions powered by advanced AI algorithms.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaBrain />,
      title: "Machine Learning Integration",
      description: "Implement cutting-edge ML models to enhance decision-making and predictive capabilities.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaChartBar />,
      title: "Analytics & Insights",
      description: "Transform data into actionable insights with advanced analytics and visualization tools.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaShieldAlt />,
      title: "Security & Compliance",
      description: "Ensure robust security measures and regulatory compliance for your AI systems.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <FaCogs />,
      title: "System Integration",
      description: "Seamlessly integrate AI solutions with your existing infrastructure and workflows.",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: <FaDatabase />,
      title: "Data Management",
      description: "Comprehensive data handling solutions from collection to processing and storage.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <FaUserCog />,
      title: "AI Consultation",
      description: "Expert guidance on AI strategy, implementation, and optimization for your organization.",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: <FaNetworkWired />,
      title: "Infrastructure Setup",
      description: "Build robust AI infrastructure tailored to your organizational needs.",
      gradient: "from-fuchsia-500 to-pink-500"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24 pb-16">
      {/* Hero Section */}
      <motion.div 
        className="container mx-auto px-4 mb-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          {...fadeInUp}
        >
          Our Services
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          Empowering organizations with cutting-edge AI solutions and intelligent automation services.
        </motion.p>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            {/* Gradient Background Effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            
            {/* Content */}
            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-4xl mb-4 text-primary"
              >
                {service.icon}
              </motion.div>
              <motion.h3 
                className="text-2xl font-semibold mb-3 text-gray-800 group-hover:text-primary transition-colors"
              >
                {service.title}
              </motion.h3>
              <p className="text-gray-600">{service.description}</p>
            </div>

            {/* Learn More Button */}
            <motion.button
              className="mt-6 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="container mx-auto px-4 mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow relative group overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Schedule a Consultation</span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Services;
