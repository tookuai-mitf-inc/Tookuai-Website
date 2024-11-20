import BenefitCard from '@/components/partners/BenefitCard';
import PartnerForm from '@/components/partners/PartnerForm';
import "../styles/fonts.css";

const partnerBenefits = [
  {
    title: 'Premium Fleet Management',
    description: 'Access our advanced fleet management system that streamlines operations and maximizes efficiency for your luxury vehicle fleet. Our comprehensive solution ensures optimal performance and utilization of your assets.',
  },
  {
    title: 'Competitive Revenue Share',
    description: 'Enjoy attractive revenue sharing models designed to maximize your earnings while maintaining premium service standards. Our transparent partnership model ensures mutual growth and success.',
  },
  {
    title: 'Exclusive Partner Network',
    description: 'Join our carefully curated network of premium transportation partners and gain access to high-value clientele. Benefit from our established reputation in the luxury transportation sector.',
  },
  {
    title: 'Performance Incentives',
    description: 'Benefit from our performance-based reward system that recognizes and rewards excellence in service delivery. We believe in acknowledging and promoting partners who consistently exceed expectations.',
  },
  {
    title: 'Advanced Technology Integration',
    description: 'Leverage our cutting-edge technology platform for seamless operations, real-time analytics, and enhanced customer experience. Stay ahead with continuous updates and improvements.',
  },
  {
    title: 'Dedicated Support Team',
    description: 'Access round-the-clock support from our dedicated partner success team. We ensure smooth operations and quick resolution of any concerns that may arise.',
  },
];

const Partners = () => {
  return (
    <main className="min-h-screen bg-[#faf9f6] relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-start pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center gap-16">
            {/* Text Content */}
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-2xl md:text-3xl text-[#18181B] font-light text-center" style={{ fontFamily: 'Coco Gothic' }}>
                BE A PARTNER
                <br />
                <span className="text-3xl md:text-4xl text-[#ce1e1e]">JOIN THE EXCELLENCE</span>
              </h1>
              <p className="text-base md:text-lg text-[#52525B] font-light mt-6 mb-12" style={{ fontFamily: 'Inter' }}>
                Step into a world of luxury transportation, where excellence meets opportunity— join our distinguished network of premium partners.
              </p>
            </div>

            {/* Image */}
            <div className="relative w-full h-[40vh] mt-8 overflow-hidden">
              <div className="px-4 sm:px-12 md:px-24 lg:px-32 h-full">
                <img
                  src="/images/rr1.png"
                  alt="Luxury Vehicle"
                  className="w-full h-full object-contain object-center slide-animation"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-40">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-24">
            <h2 className="text-3xl font-light mb-6 text-[#18181B]" style={{ fontFamily: 'Coco Gothic' }}>
            UNLOCK THE POWER OF YOUR HIGH-END VEHICLES
            </h2>
            <div className="w-12 h-[1px] bg-[#ce1e1e] mx-auto mb-6" />
            <p className="text-lg text-[#52525B] font-light leading-relaxed" style={{ fontFamily: 'Inter' }}>
              Join our network of distinguished partners, where excellence is not just a goal—it's our standard.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-40 left-0 w-96 h-96 bg-[#ce1e1e]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 right-0 w-96 h-96 bg-[#ce1e1e]/5 rounded-full blur-3xl pointer-events-none" />
        </div>
      </section>

      {/* Application Form Section */}
      <section className="relative py-32 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-light mb-6 text-[#18181B]" style={{ fontFamily: 'Coco Gothic' }}>
              APPLY NOW
            </h2>
            <div className="w-12 h-[1px] bg-[#ce1e1e] mx-auto mb-6" />
            <p className="text-lg text-[#52525B] font-light leading-relaxed max-w-2xl mx-auto mb-12" style={{ fontFamily: 'Inter' }}>
              Join our network of premium fleet providers and elevate your business to new heights.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 relative">
              <div className="relative">
                <PartnerForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Partners;