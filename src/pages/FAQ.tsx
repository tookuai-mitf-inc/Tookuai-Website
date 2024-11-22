import React from 'react';
import '../styles/fonts.css';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f9] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-light mb-8 text-[#18181B]" style={{ fontFamily: 'Inter' }}>
          Help Center / FAQ
        </h1>
        
        <div className="prose prose-lg" style={{ fontFamily: 'Inter' }}>
          <section className="mb-12">
            <h2 className="text-2xl font-light mb-6 text-[#18181B]">Getting Started</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2 text-[#18181B]">How do I download the Tookuài app?</h3>
                <p className="text-[#52525B]">
                  You can download the Tookuài app from the App Store for iOS devices or Google Play Store for Android devices. Simply search for "Tookuài" and click install.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2 text-[#18181B]">How do I create an account?</h3>
                <p className="text-[#52525B]">
                  Open the Tookuài app and click "Sign Up". You'll need to provide your phone number, email address, and create a password. We'll send you a verification code to confirm your phone number.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-6 text-[#18181B]">Wallet & Payments</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#ce1e1e]">
                <h3 className="text-xl font-medium mb-2 text-[#18181B]">Important: Funding Your Wallet</h3>
                <p className="text-[#52525B]">
                  Before booking a ride, you must fund your Tookuài wallet. This is required for all trips. Here's how to add money:<br />
                  1. Open the Tookuài app<br />
                  2. Go to "Wallet" section<br />
                  3. Select "Add Money"<br />
                  4. Choose your preferred payment method<br />
                  5. Enter the amount and confirm
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2 text-[#18181B]">What payment methods can I use to fund my wallet?</h3>
                <p className="text-[#52525B]">
                  You can fund your Tookuài wallet using your debit or credit card through our secure payment partner, Paystack. We accept all major cards including Visa, Mastercard, and Verve.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2 text-[#18181B]">How long does it take for wallet funding to reflect?</h3>
                <p className="text-[#52525B]">
                  All wallet funding through card payments is processed instantly. Your wallet balance will be updated immediately after your payment is confirmed through Paystack.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-6 text-[#18181B]">Booking a Ride</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2 text-[#18181B]">How do I book a ride?</h3>
                <p className="text-[#52525B]">
                  Before booking, ensure your wallet has sufficient funds. Then:<br />
                  1. Open the Tookuài app<br />
                  2. Enter your destination in the "Where to?" field<br />
                  3. Confirm your pickup location<br />
                  4. Choose your preferred ride type<br />
                  5. Verify your wallet balance covers the estimated fare<br />
                  6. Tap "Book Ride" to confirm
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2 text-[#18181B]">What type of vehicles does Tookuài offer?</h3>
                <p className="text-[#52525B]">
                  Tookuài exclusively offers premium luxury vehicles to provide you with a high-end, comfortable travel experience. Our fleet consists of carefully selected luxury cars maintained to the highest standards, ensuring a sophisticated and reliable journey every time.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2 text-[#18181B]">What happens if my wallet balance is insufficient?</h3>
                <p className="text-[#52525B]">
                  If your wallet balance is insufficient:<br />
                  • You won't be able to book a ride<br />
                  • The app will prompt you to add funds<br />
                  • Once funded, you can proceed with booking<br />
                  We recommend maintaining a minimum balance for convenience.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-6 text-[#18181B]">Safety & Support</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2 text-[#18181B]">What safety features does Tookuài provide?</h3>
                <p className="text-[#52525B]">
                  Your safety is our priority. We offer:<br />
                  • Real-time GPS tracking<br />
                  • Share trip details with trusted contacts<br />
                  • 24/7 customer support<br />
                  • Emergency assistance button<br />
                  • Driver background checks
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2 text-[#18181B]">How do I contact customer support?</h3>
                <p className="text-[#52525B]">
                  You can reach our support team 24/7 through:<br />
                  • WhatsApp: <a href="https://wa.me/2348022379177" target="_blank" rel="noopener noreferrer" className="text-[#ce1e1e] hover:underline">+234 802 237 9177</a><br />
                  • Email: <a href="mailto:info@tookuai.com" className="text-[#ce1e1e] hover:underline">info@tookuai.com</a><br />
                  • In-app help center<br />
                  We're always here to help and aim to respond to all inquiries promptly.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-light mb-4 text-[#18181B]">Still need help?</h2>
            <p className="text-[#52525B]">
              If you couldn't find the answer you're looking for, contact our 24/7 support team on WhatsApp at{' '}
              <a href="https://wa.me/2348022379177" target="_blank" rel="noopener noreferrer" className="text-[#ce1e1e] hover:underline">
                +234 802 237 9177
              </a>
              {' '}or email us at{' '}
              <a href="mailto:info@tookuai.com" className="text-[#ce1e1e] hover:underline">
                info@tookuai.com
              </a>
              . We're here to help!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
