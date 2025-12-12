
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

  const tagline = useTypewriter("SALIF SOUANE                   DEVELOPPEUR ", 80);
  
  
 


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
              <span className="text-cyan-400 font-medium">Disponible pour de nouveaux projets</span>
            </motion.div>

            {/* Profile Photo */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <img
                src={`${import.meta.env.BASE_URL}photo_projets/profil.jpg`}
                alt="Salif Souane - Développeur Web"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-cyan-400/50 shadow-2xl shadow-cyan-400/20 object-cover"
              />
            </motion.div>

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
              <span className="text-blue-400 font-semibold">Java (Springboot)</span>.
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
                className="group px-8 py-4 bg-gradient-to-r from-blue-500  rounded-full font-semibold text-lg flex items-center gap-3 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                 Voir mes projets
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </motion.button>

              <motion.a
                href={`${import.meta.env.BASE_URL}Salif_SOUANE_CV.pdf`}
                download="Salif_SOUANE_CV.pdf"
                className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold text-lg flex items-center gap-3 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="group-hover:translate-y-1 transition-transform duration-300" />
                Télécharger CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.8 }}
            >
              {[
                { icon: Github, href: "https://github.com/salif-souane", color: "hover:text-white" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/salif-souane-a09ba8228/recent-activity/all/", color: "hover:text-blue-400" },
                { icon: Mail, href: "http://localhost:5173/portfelio-pro/contact", color: "hover:text-green-400" }
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

      {/* About Preview Section */}
      <section className="relative z-10 w-full py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
              À propos de moi
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Découvrez mon parcours et mes compétences en développement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={`${import.meta.env.BASE_URL}photo_projets/photo_graduation.jpg`}
                alt="Salif Souane"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white">Salif Souane</h3>
              <p className="text-cyan-400 font-medium">Ingénieur logiciel & Développeur web full-stack</p>
              <p className="text-gray-300 leading-relaxed">
                Diplômé en génie informatique, je combine rigueur technique et sens du design
                pour créer des interfaces fluides et des architectures robustes.
              </p>
              <motion.button
                onClick={() => navigate('/about')}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full font-semibold text-white hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                En savoir plus
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="relative z-10 w-full py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Mes Projets
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Découvrez une sélection de mes réalisations les plus récentes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "App Web de Fankanta",
                description: "Gestion de feedback communautaire",
                image: "/portfelio-pro/photo_projets/photo1.png",
                tech: ["React", "TypeScript", "Node.js"]
              },
              {
                title: "Mon Portfolio",
                description: "Interface moderne et responsive",
                image: "/portfelio-pro/photo_projets/photo2.png",
                tech: ["React", "Tailwindcss"]
              },
              {
                title: "SEN LIVRAISON",
                description: "Application de livraison innovante",
                image: "/portfelio-pro/photo_projets/photo8.png",
                tech: ["TypeScript", "React"]
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => navigate('/projects')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full font-semibold text-white hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir tous les projets
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="relative z-10 w-full py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r  to-blue-400 bg-clip-text text-transparent">
              Contactez-moi
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Prêt à donner vie à votre projet ? Discutons-en !
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto"
          >
            <p className="text-gray-300 mb-8 leading-relaxed">
              Que ce soit pour un projet web, une collaboration ou simplement pour échanger,
              n'hésitez pas à me contacter. Je suis toujours ouvert aux nouvelles opportunités.
            </p>

            <motion.button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r to-blue-500 rounded-full font-semibold text-white hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Me contacter
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
