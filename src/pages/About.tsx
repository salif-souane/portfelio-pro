import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Code,
  Palette,
  Database,
  Server,
  Smartphone,
  Globe
} from 'lucide-react';

const About: React.FC = () => {
  // Floating tech icons data
  const techIcons = [
    { icon: Code, x: '10%', y: '20%', delay: 0 },
    { icon: Database, x: '85%', y: '15%', delay: 0.5 },
    { icon: Server, x: '15%', y: '70%', delay: 1 },
    { icon: Smartphone, x: '80%', y: '75%', delay: 1.5 },
    { icon: Globe, x: '5%', y: '45%', delay: 2 },
    { icon: Palette, x: '90%', y: '45%', delay: 2.5 },
  ];

  const skills = [
    { name: "React & TypeScript", level: 95, color: "from-blue-400 to-blue-600" },
    { name: "Angular & RxJS", level: 90, color: "from-red-400 to-red-600" },
    { name: "Node.js & Express", level: 85, color: "from-green-400 to-green-600" },
    { name: "UI/UX Design", level: 80, color: "from-purple-400 to-purple-600" },
    { name: "AWS & Docker", level: 75, color: "from-orange-400 to-orange-600" },
    { name: "MongoDB & PostgreSQL", level: 85, color: "from-teal-400 to-teal-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden pt-16">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 w-full">
        <motion.div className="absolute inset-0 opacity-30">
          {/* Floating code lines */}
          <div className="absolute top-20 left-10 text-blue-400/20 font-mono text-sm">
            {'<div className="about">'}
          </div>
          <div className="absolute top-40 right-20 text-purple-400/20 font-mono text-sm">
            {'const developer = "Salif";'}
          </div>
          <div className="absolute bottom-40 left-20 text-green-400/20 font-mono text-sm">
            {'return <Skills />;'}
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

      {/* About Section */}
      <section className="relative z-10 w-full py-20 px-4">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              À propos de moi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <User className="text-blue-400 mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-4 text-white">Mon parcours</h3>
                <p className="text-gray-300 leading-relaxed">
                  Passionné par le développement web depuis plus de 5 ans, je me spécialise dans la création
                  d'applications modernes et performantes. Mon expertise couvre l'ensemble du stack technique,
                  du front-end au back-end, en passant par l'UI/UX design.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Compétences techniques</h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
