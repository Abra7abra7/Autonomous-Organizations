import React from 'react';
import { motion } from 'framer-motion';

const GDPR = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">GDPR Compliance</h1>
          
          <div className="prose prose-lg">
            <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Rights Under GDPR</h2>
              <p>Under the General Data Protection Regulation (GDPR), you have the following rights:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>The right to be informed</li>
                <li>The right of access</li>
                <li>The right to rectification</li>
                <li>The right to erasure</li>
                <li>The right to restrict processing</li>
                <li>The right to data portability</li>
                <li>The right to object</li>
                <li>Rights in relation to automated decision making and profiling</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Process Your Data</h2>
              <p>We process personal data for the following purposes:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>To provide our services</li>
                <li>To improve our website and services</li>
                <li>To send you marketing communications (with consent)</li>
                <li>To comply with legal obligations</li>
                <li>To protect our legal rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Legal Basis for Processing</h2>
              <p>We process your personal data on the following legal grounds:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Consent</li>
                <li>Contract performance</li>
                <li>Legal obligation</li>
                <li>Legitimate interests</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Protection Officer</h2>
              <p>
                Our Data Protection Officer (DPO) can be contacted at:
              </p>
              <ul className="list-none mt-2">
                <li>Email: dpo@aiorganization.com</li>
                <li>Address: [Your Company Address]</li>
                <li>Phone: [Your Company Phone]</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">International Data Transfers</h2>
              <p>
                When we transfer your personal data outside the European Economic Area (EEA),
                we ensure adequate safeguards are in place through:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Standard contractual clauses</li>
                <li>Adequacy decisions</li>
                <li>Binding corporate rules</li>
                <li>Approved certification mechanisms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
              <p>
                We retain personal data only for as long as necessary to fulfill the purposes
                for which it was collected, including legal, accounting, or reporting requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to ensure a level
                of security appropriate to the risk, including:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Encryption of personal data</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>Data backup and recovery procedures</li>
                <li>Staff training on data protection</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Rights in Practice</h2>
              <p>To exercise your rights under GDPR, you can:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Contact our DPO</li>
                <li>Use our contact form</li>
                <li>Send a written request to our postal address</li>
              </ul>
              <p className="mt-4">
                We will respond to your request within one month of receiving it. This period
                may be extended by two further months where necessary, taking into account the
                complexity and number of requests.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Complaints</h2>
              <p>
                You have the right to lodge a complaint with a supervisory authority if you
                believe that our processing of your personal data infringes the GDPR.
              </p>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GDPR;
