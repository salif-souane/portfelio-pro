import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = true,
  gradient = false,
  onClick,
}) => {
  const cardClasses = clsx(
    'rounded-2xl p-6 transition-all duration-300',
    'border border-gray-200/50 backdrop-blur-sm',
    {
      'bg-white/80 shadow-lg hover:shadow-xl hover:shadow-blue-500/10': !gradient,
      'bg-gradient-to-br from-white/90 to-blue-50/50 shadow-lg hover:shadow-xl hover:shadow-blue-500/20': gradient,
      'cursor-pointer': onClick,
    },
    className
  );

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: hover ? { y: -5, scale: 1.02 } : {},
  };

  return (
    <motion.div
      className={cardClasses}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Card;