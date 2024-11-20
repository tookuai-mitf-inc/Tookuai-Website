import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  title: string;
  description: string;
}

const BenefitCard = ({ title, description }: BenefitCardProps) => {
  return (
    <div className="group relative flex flex-col p-10 bg-white/20 hover:bg-white/30 transition-colors duration-300">
      <div className="absolute top-0 left-0 w-[2px] h-12 bg-[#ce1e1e] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <h3 className="text-xl text-[#18181B] font-medium mb-1" style={{ fontFamily: 'Inter' }}>
        {title}
      </h3>
      <div className="w-12 h-[1px] bg-[#ce1e1e] mb-6" />
      <p className="text-[#52525B] leading-relaxed" style={{ fontFamily: 'Inter' }}>
        {description}
      </p>
    </div>
  );
};

export default BenefitCard;
