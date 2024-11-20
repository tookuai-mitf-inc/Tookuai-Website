import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AppFeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index?: number;
}

const AppFeatureCard: React.FC<AppFeatureCardProps> = ({ title, description, icon: Icon, index = 0 }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
      }
    },
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 200,
      }
    }
  };

  const iconVariants = {
    hidden: { 
      scale: 0,
      rotate: -180 
    },
    visible: { 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: index * 0.2 + 0.3,
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const glowVariants = {
    hover: {
      opacity: [0.5, 0.7, 0.5],
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
      }
    }
  };

  return (
    <motion.div
      className="relative p-8 rounded-2xl bg-gradient-to-br from-white/90 via-white/80 to-white/70 backdrop-blur-md border border-white/20"
      style={{
        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1), 0 0 20px rgba(100,100,100,0.1)',
      }}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent rounded-2xl"
        variants={glowVariants}
        initial="hidden"
        whileHover="hover"
      />

      {/* Icon container */}
      <div className="absolute -top-6 left-8">
        <motion.div
          className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#ce1e1e] to-[#ff4444] text-white flex items-center justify-center shadow-lg"
          variants={iconVariants}
          style={{
            boxShadow: '0 10px 20px -5px rgba(206,30,30,0.3)',
          }}
        >
          <Icon className="w-7 h-7" />
        </motion.div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-2xl font-light mb-4 text-[#18181B] font-inter tracking-wide">{title}</h3>
        <p className="text-[#52525B] leading-relaxed font-inter">{description}</p>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden">
        <motion.div
          className="w-full h-full bg-gradient-to-r from-transparent via-gray-300/30 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </motion.div>
  );
};

export default AppFeatureCard;