import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg">
            <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                AI Organization ("we," "our," or "us") respects your privacy and is committed to
                protecting your personal data. This privacy policy will inform you about how we look
                after your personal data when you visit our website and tell you about your privacy
                rights and how the law protects you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Data We Collect</h2>
              <p>We may collect, use, store and transfer different kinds of personal data about you, including:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Identity Data (name, username)</li>
                <li>Contact Data (email address, telephone numbers)</li>
                <li>Technical Data (IP address, browser type, device information)</li>
                <li>Usage Data (how you use our website)</li>
                <li>Marketing and Communications Data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>To provide and maintain our services</li>
                <li>To notify you about changes to our services</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our services</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as necessary to fulfill the
                purposes we collected it for, including for the purposes of satisfying any legal,
                accounting, or reporting requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Your Legal Rights</h2>
              <p>Under the GDPR, you have various rights regarding your personal data, including:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>The right to access your personal data</li>
                <li>The right to rectification of your personal data</li>
                <li>The right to erasure of your personal data</li>
                <li>The right to restrict processing of your personal data</li>
                <li>The right to data portability</li>
                <li>The right to object to processing</li>
                <li>Rights related to automated decision making and profiling</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. International Transfers</h2>
              <p>
                We ensure a similar degree of protection is afforded to your personal data by
                ensuring at least one of the following safeguards is implemented:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>We will only transfer your personal data to countries that have been deemed to provide an adequate level of protection for personal data by the European Commission.</li>
                <li>Where we use certain service providers, we may use specific contracts approved by the European Commission which give personal data the same protection it has in Europe.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
              <p>
                For any questions about this privacy policy or our privacy practices, please contact
                our Data Protection Officer at:
              </p>
              <ul className="list-none mt-2">
                <li>Email: dpo@aiorganization.com</li>
                <li>Address: [Your Company Address]</li>
                <li>Phone: [Your Company Phone]</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
