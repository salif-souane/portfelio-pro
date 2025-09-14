import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden pt-16">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 w-full">
        <motion.div className="absolute inset-0 opacity-30">
          {/* Floating code lines */}
          <div className="absolute top-20 left-10 text-blue-400/20 font-mono text-sm">
            {'<div className="contact">'}
          </div>
          <div className="absolute top-40 right-20 text-purple-400/20 font-mono text-sm">
            {'const message = "Hello";'}
          </div>
          <div className="absolute bottom-40 left-20 text-green-400/20 font-mono text-sm">
            {'return <Form />;'}
          </div>
          <div className="absolute bottom-20 right-10 text-cyan-400/20 font-mono text-sm">
            {'</div>'}
          </div>
        </motion.div>
      </div>

      {/* Contact Section */}
      <section className="relative z-10 w-full py-20 px-4">
        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Contactez-moi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300">
              Prêt à donner vie à votre projet ? Discutons-en !
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Nom</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-200"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-200"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Sujet</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-200"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Décrivez votre projet..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r text-cyan-400 text-cyan-400 text-cyan-400 font-semibold rounded-lg flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} />
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
