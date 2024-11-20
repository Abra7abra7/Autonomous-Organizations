import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: 'AI-Powered Operations',
    description: 'Automate and optimize your business processes with cutting-edge AI technology.',
    icon: '🤖',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Smart Decision Making',
    description: 'Let AI analyze data and make informed decisions in real-time.',
    icon: '🧠',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Autonomous Workflows',
    description: 'Create self-running workflows that adapt and improve over time.',
    icon: '⚡',
    gradient: 'from-green-500 to-emerald-500',
  },
];

function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 animate-gradient-bg opacity-20" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.1)_50%,transparent_75%)] bg-[length:500px_500px] animate-[gradient_20s_linear_infinite]" />
          <motion.div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at center, rgba(59,130,246,0.1) 0%, transparent 70%)",
              y,
              opacity,
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-6 py-2 rounded-full bg-secondary/10 text-secondary mb-8"
            >
              <SparklesIcon className="h-5 w-5 mr-2" />
              <span>The Future of Business Automation</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              The Future of Business is{' '}
              <span className="animate-text-gradient font-extrabold">
                Autonomous
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Transform your organization with AI-powered automation. Let intelligent
              agents handle your operations while you focus on growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary group"
              >
                Get Started
                <ArrowRightIcon className="ml-2 h-5 w-5 inline-block transition-transform group-hover:translate-x-1" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn glass text-white"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-6 h-10 border-2 border-white/30 rounded-full relative"
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full absolute left-1/2 top-2 transform -translate-x-1/2" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-4">
              Revolutionize Your Business
            </h2>
            <p className="text-xl text-gray-600">
              Harness the power of AI to transform your operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl -z-10"
                  style={{
                    background: `linear-gradient(to right, ${feature.gradient})`,
                  }}
                />
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="text-5xl mb-6 animate-float">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl" />
        </div>
      </section>
    </div>
  );
}

export default Home;
