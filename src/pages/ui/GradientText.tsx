import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface GradientTextProps {
  children: React.ReactNode;
  gradient?: 'blue-purple' | 'purple-pink' | 'green-blue' | 'orange-red';
  className?: string;
  animate?: boolean;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  gradient = 'blue-purple',
  className,
  animate = false,
}) => {
  const gradientClasses = {
    'blue-purple': 'from-blue-600 via-purple-600 to-blue-800',
    'purple-pink': 'from-purple-600 via-pink-600 to-purple-800',
    'green-blue': 'from-green-600 via-blue-600 to-green-800',
    'orange-red': 'from-orange-600 via-red-600 to-orange-800',
  };

  const textClasses = clsx(
    'bg-gradient-to-r bg-clip-text text-transparent font-bold',
    gradientClasses[gradient],
    className
  );

  if (animate) {
    return (
      <motion.span
        className={textClasses}
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: '100% 50%' }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      >
        {children}
      </motion.span>
    );
  }

  return <span className={textClasses}>{children}</span>;
};

export default GradientText;