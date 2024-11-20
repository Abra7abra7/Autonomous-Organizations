import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaLightbulb, FaChartLine, FaUsers } from 'react-icons/fa';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: <FaRobot className="text-4xl text-primary" />,
      title: "AI-Powered Solutions",
      description: "Leveraging cutting-edge artificial intelligence to revolutionize organizational processes."
    },
    {
      icon: <FaLightbulb className="text-4xl text-primary" />,
      title: "Innovation First",
      description: "Pioneering new approaches to autonomous systems and decentralized operations."
    },
    {
      icon: <FaChartLine className="text-4xl text-primary" />,
      title: "Data-Driven Growth",
      description: "Using advanced analytics to drive strategic decisions and optimize performance."
    },
    {
      icon: <FaUsers className="text-4xl text-primary" />,
      title: "Community Focused",
      description: "Building a strong ecosystem of users, developers, and stakeholders."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24 pb-16">
      {/* Hero Section */}
      <motion.div 
        className="container mx-auto px-4 mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          {...fadeInUp}
        >
          About Our Vision
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          We're revolutionizing organizations through AI-driven autonomy, creating a future where efficiency meets innovation.
        </motion.p>
      </motion.div>

      {/* Features Grid */}
      <motion.div 
        className="container mx-auto px-4 grid md:grid-cols-2 gap-8 mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
          >
            {/* Gradient Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Content */}
            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="mb-4 inline-block"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Interactive Stats Section */}
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "95%", label: "Efficiency Increase" },
              { value: "24/7", label: "Autonomous Operation" },
              { value: "100+", label: "Organizations Served" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <motion.div 
                  className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
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
          <span className="relative z-10">Join Our Journey</span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
