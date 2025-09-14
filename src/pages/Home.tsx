
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Code,
  Palette,
  Database,
  Server,
  Smartphone,
  Globe
} from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  // Typewriter effect hook
  const useTypewriter = (text: string, speed: number = 50) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, text, speed]);

    return displayText;
  };

  const tagline = useTypewriter("Créateur d'expériences web immersives", 80);

  // Floating tech icons data
  const techIcons = [
    { icon: Code, x: '10%', y: '20%', delay: 0 },
    { icon: Database, x: '85%', y: '15%', delay: 0.5 },
    { icon: Server, x: '15%', y: '70%', delay: 1 },
    { icon: Smartphone, x: '80%', y: '75%', delay: 1.5 },
    { icon: Globe, x: '5%', y: '45%', delay: 2 },
    { icon: Palette, x: '90%', y: '45%', delay: 2.5 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden pt-16">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 w-full">
        <motion.div
          className="absolute inset-0 opacity-30"
        >
          {/* Floating code lines */}
          <div className="absolute top-20 left-10 text-blue-400/20 font-mono text-sm">
            {'<div className="portfolio">'}
          </div>
          <div className="absolute top-40 right-20 text-purple-400/20 font-mono text-sm">
            {'const developer = "Salif";'}
          </div>
          <div className="absolute bottom-40 left-20 text-green-400/20 font-mono text-sm">
            {'return <Innovation />;'}
          </div>
          <div className="absolute bottom-20 right-10 text-cyan-400/20 font-mono text-sm">
            {'</div>'}
          </div>
        </motion.div>

        {/* Floating tech icons */}
        {techIcons.map((tech, index) => (
          <motion.div
            key={index}
            className="absolute text-blue-400/10"
            style={{ left: tech.x, top: tech.y }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: tech.delay,
              ease: "easeInOut"
            }}
          >
            <tech.icon size={40} />
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen w-full flex items-center justify-center px-4">
        <div className="w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              className="inline-block mb-6 px-6 py-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 211, 238, 0.3)" }}
            >
              <span className="text-cyan-400 font-medium">👋 Disponible pour de nouveaux projets</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Salif SOUANE
            </motion.h1>

            <motion.div
              className="text-2xl md:text-3xl text-cyan-400 mb-8 h-12 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {tagline}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="ml-1"
              >
                |
              </motion.span>
            </motion.div>

            <motion.p
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              Développeur Web passionné spécialisé en{' '}
              <span className="text-blue-400 font-semibold">React</span>,{' '}
              <span className="text-blue-400 font-semibold">TypeScript</span> et{' '}
              <span className="text-red-400 font-semibold">Angular</span>.
              <br />
              Je transforme vos idées en expériences digitales exceptionnelles.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <motion.button
                onClick={() => navigate('/projects')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-lg flex items-center gap-3 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                Voir mes projets
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </motion.button>

              <motion.button
                className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold text-lg flex items-center gap-3 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="group-hover:translate-y-1 transition-transform duration-300" />
                Télécharger CV
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.8 }}
            >
              {[
                { icon: Github, href: "#", color: "hover:text-white" },
                { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
                { icon: Mail, href: "#", color: "hover:text-green-400" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 ${social.color} transition-all duration-300`}
                  whileHover={{
                    scale: 1.2,
                    y: -5,
                    boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
