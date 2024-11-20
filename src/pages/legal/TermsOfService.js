import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg">
            <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using our website, you agree to be bound by these Terms of Service
                and our Privacy Policy. If you disagree with any part of the terms, you may not
                access our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property Rights</h2>
              <p>
                Our website and its original content, features, and functionality are owned by
                AI Organization and are protected by international copyright, trademark, patent,
                trade secret, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. User Account</h2>
              <p>When you create an account with us, you must provide accurate and complete information. You are responsible for:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Maintaining the security of your account</li>
                <li>All activities that occur under your account</li>
                <li>Ensuring your password is secure and confidential</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
              <p>By using our services, you agree not to:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Use the service for any illegal purpose</li>
                <li>Violate any laws in your jurisdiction</li>
                <li>Infringe on any intellectual property rights</li>
                <li>Transmit any malicious code or viruses</li>
                <li>Harass, abuse, or harm others</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Service Modifications</h2>
              <p>
                We reserve the right to modify or discontinue, temporarily or permanently, the
                service with or without notice. We shall not be liable to you or any third party
                for any modification, suspension, or discontinuance of the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, AI Organization shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages resulting from
                your use of or inability to use the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the
                European Union and your country of residence, without regard to its conflict of law
                provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify you of any
                changes by posting the new Terms of Service on this page and updating the "Last
                updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <ul className="list-none mt-2">
                <li>Email: legal@aiorganization.com</li>
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

export default TermsOfService;
