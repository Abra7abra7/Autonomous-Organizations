import React from 'react';
import { motion } from 'framer-motion';

const CookiePolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg">
            <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when
                you visit our website. They are widely used to make websites work more efficiently
                and provide information to the website owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
              <p>We use cookies for the following purposes:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <strong>Essential Cookies:</strong> Required for the website to function properly
                </li>
                <li>
                  <strong>Analytical Cookies:</strong> Help us understand how visitors interact with
                  our website
                </li>
                <li>
                  <strong>Functional Cookies:</strong> Remember your preferences and settings
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Track your visit across websites to display
                  relevant advertisements
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Strictly Necessary Cookies</h3>
                  <p>These cookies are essential for you to browse the website and use its features.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Performance Cookies</h3>
                  <p>These cookies collect information about how you use our website.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Functionality Cookies</h3>
                  <p>These cookies allow the website to remember choices you make.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Targeting Cookies</h3>
                  <p>These cookies record your visit to our website, the pages you visit, and the links you follow.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. How to Control Cookies</h2>
              <p>
                You can control and/or delete cookies as you wish. You can delete all cookies that
                are already on your computer and you can set most browsers to prevent them from
                being placed. However, if you do this, you may have to manually adjust some
                preferences every time you visit a site and some services and functionalities may
                not work.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Cookie Settings</h2>
              <p>
                Most web browsers allow some control of most cookies through the browser settings.
                To find out more about cookies, including how to see what cookies have been set,
                visit www.aboutcookies.org or www.allaboutcookies.org.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Third-Party Cookies</h2>
              <p>
                We also use various third-party cookies to report usage statistics of the service.
                These cookies may be placed by:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Google Analytics</li>
                <li>Social Media Platforms</li>
                <li>Advertising Partners</li>
                <li>Other Analytics Services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. We encourage you to
                periodically review this page for the latest information about our cookie
                practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <ul className="list-none mt-2">
                <li>Email: privacy@aiorganization.com</li>
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

export default CookiePolicy;
