import { motion } from 'framer-motion';
import React from 'react';

const MapAnimation = () => {
  // Create more map points for a more complex route
  const mapPoints = Array.from({ length: 8 }).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
  })).sort((a, b) => a.x - b.x);

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const generatePath = () => {
    return mapPoints.reduce((path, point, i) => {
      if (i === 0) return `M ${point.x} ${point.y}`;
      // Add some curve to the path
      const prevPoint = mapPoints[i - 1];
      const cpx1 = prevPoint.x + (point.x - prevPoint.x) * 0.5;
      const cpy1 = prevPoint.y;
      const cpx2 = prevPoint.x + (point.x - prevPoint.x) * 0.5;
      const cpy2 = point.y;
      return `${path} C ${cpx1} ${cpy1}, ${cpx2} ${cpy2}, ${point.x} ${point.y}`;
    }, "");
  };

  return (
    <div className="fixed inset-0 pointer-events-none opacity-10">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        {/* Grid lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <React.Fragment key={i}>
            <motion.line
              x1={i * 5}
              y1="0"
              x2={i * 5}
              y2="100"
              stroke="#ce1e1e"
              strokeWidth="0.1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: i * 0.05 }}
            />
            <motion.line
              x1="0"
              y1={i * 5}
              x2="100"
              y2={i * 5}
              stroke="#ce1e1e"
              strokeWidth="0.1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: i * 0.05 }}
            />
          </React.Fragment>
        ))}

        {/* Route paths - multiple for layered effect */}
        <motion.path
          d={generatePath()}
          stroke="#ce1e1e"
          strokeWidth="0.3"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d={generatePath()}
          stroke="#ce1e1e"
          strokeWidth="0.8"
          strokeOpacity="0.3"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        />

        {/* Points */}
        {mapPoints.map((point, index) => (
          <motion.circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="0.8"
            fill="#ce1e1e"
            variants={dotVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.2 }}
          />
        ))}
      </svg>
    </div>
  );
};

export default MapAnimation;
