import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "App Web de Fankanta",
      description: "App React/TypeScript avec mecanisme de gestion de feedback communautaire pour Organisation DECLIC en collaboration avec un autre developer",
      tech: ["React", "TypeScript", "Node.js", "Mariadb", "CloudFlare", "Vite", "Tailwindcss", "Crizzle", "Hostinger"],
      image: "/portfelio-pro/photo_projets/photo1.png",
      link: "https://app.fankanta.org/"
    },
    {
      title: "Mon Portfolio",
      description: "Interface portfolio moderne et responsive pour mettre en valeur mes compétences et projets",
      tech: ["React", "TypeScript", "Tailwindcss", "GitHub Pages"],
      image: "/portfelio-pro/photo_projets/photo2.png",
      link: " https://salif-souane.github.io/portfelio-pro/"
    },
    {
      title: "Web App Experience psychologique",
      description: "Cette application web permet de gérer des expériences d'étiquetage d'images.Elle propose une interface d'administration (gestion des expériences, photos, participants) / Non deployer mais le code source est sur GitHub",
      tech: ["PHP", "Mariadb"],
      image: "/portfelio-pro/photo_projets/photo3.png",
      link: "https://github.com/salif-souane/image-labeling-app"
    },
    {
      title: "Web App Gestion de Plainte",
      description: "Cette application web permet de gérer des plaintes. / Non deployer mais le code source est sur GitHub",
      tech: ["java", "Mariadb", "Spring Boot","Html", "Css", "React"],
      image: "/portfelio-pro/photo_projets/photo4.png",
      link: "https://github.com/salif-souane/front-sa"
    },
    {
      title: "Web App Gestion Avis ",
      description: "Cette application web permet de gérer des avis des utilisateurs. /Non deployer mais le code source est sur GitHub",
      tech: ["java", "Mariadb", "Spring Boot","Html", "Css", "React"],
      image: "/portfelio-pro/photo_projets/photo5.png",
      link: "https://github.com/salif-souane/front-sa"
    },
    {
      title: "SEN LIVRAISON Version bêta (Accès actuellement limité).",
      description: "SEN LIVRAISON est une application web innovante spécialisée dans la livraison à travers tout le Sénégal. Développement en cours.",
      tech: ["TypeScript", "Mariadb", "Tailwindcss", "React"],
      image: "/portfelio-pro/photo_projets/photo8.png",
      link: "/accesInterdit"
    },
    {
      title: "SITE WEB L2I-UASZ",
      description: "ce site developpait par certains membres de ma classe, met en valeur notre filliere, la licence ingeneirie informatique.",
      tech: ["information incomplete  "],
      image: "/portfelio-pro/photo_projets/photo7.png",
      link: "https://l2i-uasz.com/"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden pt-16">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 w-full">
        <motion.div className="absolute inset-0 opacity-30">
          {/* Floating code lines */}
          <div className="absolute top-20 left-10 text-blue-400/20 font-mono text-sm">
            {'<div className="projects">'}
          </div>
          <div className="absolute top-40 right-20 text-purple-400/20 font-mono text-sm">
            {'const portfolio = [...];'}
          </div>
          <div className="absolute bottom-40 left-20 text-green-400/20 font-mono text-sm">
            {'return <Showcase />;'}
          </div>
          <div className="absolute bottom-20 right-10 text-cyan-400/20 font-mono text-sm">
            {'</div>'}
          </div>
        </motion.div>
      </div>

      {/* Projects Section */}
      <section className="relative z-10 w-full py-20 px-4">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400 bg-clip-text ">
              Mes Projets
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Découvrez une sélection de mes réalisations les plus récentes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(168, 85, 247, 0.2)"
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback en cas d'erreur de chargement d'image
                      const target = e.target as HTMLImageElement;
                      target.src = "/portfelio-pro/placeholder-image.png";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link.startsWith('/') ? (
                    <Link
                      to={project.link}
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200"
                    >
                      Voir le projet <ExternalLink size={16} />
                    </Link>
                  ) : (
                    <motion.a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200"
                      whileHover={{ x: 5 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir le projet <ExternalLink size={16} />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;