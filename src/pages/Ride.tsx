//import React from 'react';
//import { Map, CreditCard, Shield, Bell } from 'lucide-react';
import BenefitCard from '@/components/ride/BenefitCard';
import "../styles/fonts.css";

const rideFeatures = [
  {
    title: 'Smart Trip Planning',
    description: 'The app offers smart route recommendations, considering real-time traffic data and user preferences, ensuring efficient and convenient travel.',
  },
  {
    title: 'Transparent Payments',
    description: 'Seamless and secure payment options, along with transparent fare breakdowns, simplify the payment process and provide clear cost information.',
  },
  {
    title: 'Enhanced Safety Measures',
    description: 'Integrated safety features such as real-time tracking, emergency assistance, and driver background checks prioritise customer safety and provide peace of mind.',
  },
  {
    title: 'Real-time Updates',
    description: 'Stay informed with real-time updates about your journey, including estimated arrival times, traffic conditions, and service updates for a seamless travel experience.',
  },
  {
    title: 'Premium Fleet Selection',
    description: 'Choose from our curated collection of luxury vehicles, each maintained to the highest standards of comfort and performance.',
  },
  {
    title: 'Concierge Service',
    description: 'Enjoy personalized assistance from our dedicated support team, available 24/7 to ensure your journey exceeds expectations.',
  },
];

const Ride = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f9] relative">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-[#18181B] leading-tight" style={{ fontFamily: 'Coco Gothic' }}>
            YOUR JOYRIDE.
            <br />
            <span className="text-[#ce1e1e]">LITERALLY.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#52525B] font-extralight mb-10" style={{ fontFamily: 'Coco Gothic' }}>
            ONE TRIP. ONE APP
          </p>
          <div className="frame-1948">
            <div className="button-primary-with-icon">
              <div className="frame-1">
                <p className="button-name">Download for IOS</p>
              </div>
            </div>
            <div className="button-primary-with-icon-1">
              <div className="frame-11">
                <p className="button-name-1">Download for Android</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-40">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-24">
            <h2 className="text-3xl font-light mb-6 text-[#18181B]" style={{ fontFamily: 'Coco Gothic' }}>
              EXPERIENCE LUXURY IN MOTION
            </h2>
            <div className="w-12 h-[1px] bg-[#ce1e1e] mx-auto mb-6" />
            <p className="text-lg text-[#52525B] font-light leading-relaxed" style={{ fontFamily: 'Inter' }}>
              Discover a world of premium features designed to make every journey exceptional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {rideFeatures.map((feature, index) => (
              <BenefitCard
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-40 left-0 w-96 h-96 bg-[#ce1e1e]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 right-0 w-96 h-96 bg-[#ce1e1e]/5 rounded-full blur-3xl pointer-events-none" />
        </div>
      </section>
    </div>
  );
};

export default Ride;