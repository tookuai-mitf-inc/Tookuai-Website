import BenefitCard from '@/components/drivers/BenefitCard';
import "../styles/fonts.css";

const driverBenefits = [
  {
    title: 'Uncompromising Discretion',
    description: 'Our chauffeurs sign Non-Disclosure Agreements (NDAs), guaranteeing passengers the utmost privacy and confidentiality during every journey. Whether for high-profile clients or private conversations, discretion is paramount.',
  },
  {
    title: 'Exceptional Customer Service',
    description: 'Trained in luxury hospitality, our chauffeurs provide a seamless and personalized experience. From assisting with luggage to offering tailored services, every detail is managed with care and professionalism.',
  },
  {
    title: 'Impeccable Etiquette and Appearance',
    description: 'Our chauffeurs embody sophistication, dressing immaculately and maintaining a courteous demeanor that aligns with the Tookuài brand. They understand the importance of making a lasting positive impression.',
  },
  {
    title: 'Unrivaled Safety Standards',
    description: 'Passengers can travel with confidence knowing our chauffeurs undergo rigorous background checks and comprehensive training, including defensive driving techniques. Safety is our highest priority.',
  },
  {
    title: 'Timely and Efficient Service',
    description: 'With advanced navigation tools and a deep knowledge of local routes, our chauffeurs ensure passengers arrive at their destination promptly and stress-free, every time.',
  },
  {
    title: 'Personalized Comfort',
    description: 'Whether adjusting the temperature, offering a preferred route, or ensuring a serene ambiance, our chauffeurs go above and beyond to meet individual preferences.',
  },
  {
    title: 'Cultural and Professional Sensitivity',
    description: 'Trained to interact with a diverse clientele, our chauffeurs respect cultural nuances and understand professional expectations, ensuring a harmonious and accommodating journey.',
  },
];

const Drivers = () => {
  return (
    <div className="min-h-screen bg-[#faf9f6] relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-start pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center gap-16">
            {/* Text Content */}
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-xl md:text-2xl text-[#18181B] font-light text-center" style={{ fontFamily: 'Coco Gothic' }}>
                BE A PILOT
                <br />
                <br />
                <span className="text-3xl md:text-4xl text-[#ce1e1e]">TAKE THE HELM TODAY</span>
              </h1>
              <p className="text-base md:text-lg text-[#52525B] font-light mt-6 mb-12" style={{ fontFamily: 'Inter' }}>
              Imagine a world where you move effortlessly, without a second thought about the journey— just pure comfort and sophistication at every turn.
              </p>
            </div>

            {/* Image */}
            <div className="relative w-full max-w-4xl aspect-[16/9]">
              <img
                src="/images/IMG_3281.jpg"
                alt="Tookuài Driver"
                className="absolute inset-0 w-full h-full object-cover"
              />
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
              PROFESSIONAL STANDARDS
            </h2>
            <div className="w-12 h-[1px] bg-[#ce1e1e] mx-auto mb-6" />
            <p className="text-lg text-[#52525B] font-light leading-relaxed" style={{ fontFamily: 'Inter' }}>
              Our chauffeurs represent the epitome of luxury service, combining professionalism with unparalleled attention to detail.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {driverBenefits.map((benefit, index) => (
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

      {/* Download Section */}
      <section className="relative py-32 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-light mb-6 text-[#18181B]" style={{ fontFamily: 'Coco Gothic' }}>
              BEGIN YOUR JOURNEY
            </h2>
            <div className="w-12 h-[1px] bg-[#ce1e1e] mx-auto mb-6" />
            <p className="text-lg text-[#52525B] font-light leading-relaxed max-w-2xl mx-auto mb-12" style={{ fontFamily: 'Inter' }}>
              Take the first step towards an exceptional career as a professional chauffeur. Download our app and join our distinguished team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://apps.apple.com/app/tookuai-driver', '_blank')}
                className="group h-[70px] px-8 border border-[#18181B] rounded-[60px] bg-transparent hover:border-[#ce1e1e] hover:bg-transparent transition-all duration-300 flex items-center"
              >
                <span className="text-[#18181B] text-[20px] leading-[120%] font-normal group-hover:text-[#ce1e1e] transition-colors duration-300" style={{ fontFamily: 'Inter' }}>
                  Download for iOS
                </span>
              </button>
              <button
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.tookuai.driver', '_blank')}
                className="group h-[70px] px-8 border border-[#18181B] rounded-[60px] bg-transparent hover:border-[#ce1e1e] hover:bg-transparent transition-all duration-300 flex items-center"
              >
                <span className="text-[#18181B] text-[20px] leading-[120%] font-normal group-hover:text-[#ce1e1e] transition-colors duration-300" style={{ fontFamily: 'Inter' }}>
                  Download for Android
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Drivers;