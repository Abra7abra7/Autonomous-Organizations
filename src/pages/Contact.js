import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaTwitter, 
  FaGithub 
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      info: "contact@aiorganization.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      info: "+1 (555) 123-4567",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      info: "Silicon Valley, CA",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, url: "#", label: "LinkedIn" },
    { icon: <FaTwitter />, url: "#", label: "Twitter" },
    { icon: <FaGithub />, url: "#", label: "GitHub" }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300";

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
          Get in Touch
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          Have questions about our AI solutions? We're here to help and ready to explore how we can transform your organization.
        </motion.p>
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                  required
                />
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                  required
                />
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClasses}
                  required
                />
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.01 }}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className={inputClasses}
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow relative group overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {/* Gradient Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10 flex items-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-3xl text-primary mr-4"
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.info}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="pt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    className="text-2xl text-gray-600 hover:text-primary transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + (0.1 * index) }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
