import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Code,
  Palette,
  Database,
  Server,
  Smartphone,
  Globe,
} from "lucide-react";

const About: React.FC = () => {
  const techIcons = [
    { icon: Code, x: "10%", y: "20%", delay: 0 },
    { icon: Database, x: "85%", y: "15%", delay: 0.5 },
    { icon: Server, x: "15%", y: "70%", delay: 1 },
    { icon: Smartphone, x: "80%", y: "75%", delay: 1.5 },
    { icon: Globe, x: "5%", y: "45%", delay: 2 },
    { icon: Palette, x: "90%", y: "45%", delay: 2.5 },
  ];

  const skills = [
    { name: "React ", level: 95, color: "from-blue-400 to-blue-600" },
    { name: "TypeScript", level: 90, color: "from-blue-400 to-blue-600" },
    { name: "Node.js & Express & Vite", level: 85, color: "from-blue-400 to-blue-600" },
    { name: "Spring Boot & Java", level: 80, color: "from-blue-400 to-blue-600" },
    { name: "MariaDB & MySQL", level: 80, color: "from-blue-400 to-blue-600" },
    { name: "MongoDB & PostgreSQL", level: 75, color: "from-blue-400 to-blue-600" },
    { name: "UI/UX Design", level: 70, color: "from-blue-400 to-blue-600" },
    { name: "Git, GitHub & Trello", level: 85, color: "from-blue-400 to-blue-600" },
  ];

  const experiences = [
    {
      company: "Assane Seck University of Ziguinchor",
      logo: "/photo_projets/Logo_DECLIC.jpg",
      role: "Stagiaire en développement web",
      period: "2023 - 2024",
      description:
        "Conception et développement d'une application web interne pour la gestion des projets étudiants, avec React, Node.js et MariaDB.",
    },
    {
      company: "Tech Africa Solutions",
      logo: "/photo_projets/logo_L3I.png",
      role: "Développeur Full Stack",
      period: "2022 - 2023",
      description:
        "Participation à la mise en place d’un système de feedback citoyen pour les communes locales, avec React, Express et PostgreSQL.",
    },
    {
      company: "Innov’Lab",
      logo: "/logos/innovlab.png",
      role: "UI/UX Designer & Intégrateur Frontend",
      period: "2021 - 2022",
      description:
        "Création d’interfaces modernes, accessibles et optimisées pour des startups africaines. Contribution à la charte graphique et à la cohérence visuelle.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white overflow-x-hidden pt-20 relative">
      {/* Floating Tech Icons */}
      {techIcons.map((tech, index) => (
        <motion.div
          key={index}
          className="absolute text-blue-400/10 z-0"
          style={{ left: tech.x, top: tech.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: tech.delay,
            ease: "easeInOut",
          }}
        >
          <tech.icon size={48} />
        </motion.div>
      ))}

      {/* About Section */}
      <section className="relative z-10 w-full py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Développeur passionné par la technologie et la création de solutions innovantes,
            je conçois des applications modernes, performantes et orientées utilisateur.
            Mon objectif : allier performance, simplicité et expérience visuelle soignée.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Profil */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/5 p-8 rounded-2xl backdrop-blur-md border border-white/10 shadow-xl"
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="w-36 h-36 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1"
              >
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                  <img
                    src="/photo_projets/Logo_DECLIC.jpg"
                    alt="Logo DECLIC"
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>

              <div>
                <h3 className="text-2xl font-bold mb-2">Salif Souane</h3>
                <p className="text-cyan-400 font-medium mb-4">
                  Ingénieur logiciel & Développeur web full-stack
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Diplômé en génie informatique, je combine rigueur technique et sens du design
                  pour créer des interfaces fluides et des architectures robustes. 
                  J’accorde une importance particulière à la clarté du code, à la sécurité 
                  et à la satisfaction utilisateur.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              Compétences techniques
            </h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-1">
                  <span className="text-gray-200">{skill.name}</span>
                  <span className="text-cyan-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-2 bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* EXPERIENCES SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 max-w-5xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Expériences professionnelles
          </h3>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-xl font-bold text-white">{exp.company}</h4>
                  <p className="text-cyan-400 text-sm font-medium mb-2">{exp.role}</p>
                  <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">Ma philosophie</h3>
          <p className="text-gray-300 leading-relaxed">
            Chaque projet est une opportunité d’apprendre, de partager et de construire
            des expériences digitales significatives. J’aime collaborer avec des équipes
            ambitieuses, curieuses et tournées vers l’excellence.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
