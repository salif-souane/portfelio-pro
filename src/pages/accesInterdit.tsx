import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const AccesInterdit: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-md mx-auto"
      >
        <motion.div
          className="mb-8"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Lock size={80} className="mx-auto text-red-400" />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Accès Interdit
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          L'accès à cette page est interdit pour le moment.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AccesInterdit;
