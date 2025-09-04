import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  const elements = [
    { size: 'w-4 h-4', delay: 0, duration: 6, x: '10%', y: '20%' },
    { size: 'w-6 h-6', delay: 1, duration: 8, x: '80%', y: '10%' },
    { size: 'w-3 h-3', delay: 2, duration: 7, x: '70%', y: '70%' },
    { size: 'w-5 h-5', delay: 0.5, duration: 9, x: '20%', y: '80%' },
    { size: 'w-2 h-2', delay: 1.5, duration: 5, x: '90%', y: '50%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-sm`}
          style={{
            left: element.x,
            top: element.y,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;