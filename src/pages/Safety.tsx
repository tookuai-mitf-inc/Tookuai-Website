import React from 'react';
import '../styles/fonts.css';

const Safety = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f9] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-light mb-8 text-[#18181B]" style={{ fontFamily: 'Inter' }}>
          Your Safety is Our Priority
        </h1>

        <div className="prose prose-lg" style={{ fontFamily: 'Inter' }}>
          <p className="text-[#52525B] mb-12">
            At Tookuài, we're committed to providing a safe and secure transportation experience. 
            Our comprehensive safety measures ensure peace of mind for every journey.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-6 text-[#18181B]">Before Your Ride</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2 text-[#18181B]">Verified Drivers</h3>
                <p className="text-[#52525B]">
                  Every Tookuài driver undergoes:
                  <br />• Thorough background checks
                  <br />• Document verification
                  <br />• Vehicle inspection
                  <br />• Professional conduct training
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2 text-[#18181B]">Premium Vehicles</h3>
                <p className="text-[#52525B]">
                  Our luxury fleet is:
                  <br />• Regularly inspected
                  <br />• Professionally maintained
                  <br />• Equipped with safety features
                  <br />• Clean and sanitized
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-6 text-[#18181B]">During Your Ride</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2 text-[#18181B]">Real-Time Tracking</h3>
                <p className="text-[#52525B]">
                  • Live GPS tracking of your journey
                  <br />• Share your trip details with trusted contacts
                  <br />• Monitor your route in real-time
                  <br />• Instant notifications of any route changes
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2 text-[#18181B]">In-App Safety Features</h3>
                <p className="text-[#52525B]">
                  • Emergency assistance button
                  <br />• Direct connection to emergency services
                  <br />• Two-way rating system
                  <br />• Secure in-app messaging
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-6 text-[#18181B]">24/7 Support</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2 text-[#18181B]">Instant Assistance</h3>
                <p className="text-[#52525B]">
                  Our dedicated support team is available 24/7 through:
                  <br />• WhatsApp: <a href="https://wa.me/2348022379177" target="_blank" rel="noopener noreferrer" className="text-[#ce1e1e] hover:underline">+234 802 237 9177</a>
                  <br />• Email: <a href="mailto:info@tookuai.com" className="text-[#ce1e1e] hover:underline">info@tookuai.com</a>
                  <br />• In-app help center
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2 text-[#18181B]">Rapid Response Protocol</h3>
                <p className="text-[#52525B]">
                  • Immediate response to safety concerns
                  <br />• Direct escalation to relevant authorities
                  <br />• Post-incident follow-up
                  <br />• Continuous safety monitoring
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-6 text-[#18181B]">Secure Payments</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-2 text-[#18181B]">Protected Transactions</h3>
              <p className="text-[#52525B]">
                • Secure payment processing through Paystack
                <br />• Encrypted transaction data
                <br />• No cash handling required
                <br />• Transparent pricing with no hidden charges
              </p>
            </div>
          </section>

          <div className="mt-12 p-6 bg-white rounded-lg shadow-sm border-l-4 border-[#ce1e1e]">
            <h2 className="text-2xl font-light mb-4 text-[#18181B]">Safety Tips</h2>
            <div className="text-[#52525B]">
              <p className="mb-4">Before your ride:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Verify your driver's identity and vehicle details</li>
                <li>Share your trip details with family or friends</li>
                <li>Ensure your pickup location is well-lit and safe</li>
                <li>Check that your driver is wearing a Tookuài uniform</li>
              </ul>
              <p className="mb-4">During your ride:</p>
              <ul className="list-disc pl-6">
                <li>Follow your route on the app</li>
                <li>Keep your personal belongings secure</li>
                <li>Use the emergency button if needed</li>
                <li>Stay alert and aware of your surroundings</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#52525B]">
              Have safety concerns? Contact our 24/7 support team immediately:
              <br />
              <a href="https://wa.me/2348022379177" target="_blank" rel="noopener noreferrer" className="text-[#ce1e1e] hover:underline">
                WhatsApp: +234 802 237 9177
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safety;
