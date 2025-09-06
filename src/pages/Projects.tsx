const projects = [
  {
    title: "Portfolio Pro",
    description: "Un portfolio moderne avec React, TypeScript et Tailwind.",
    github: "https://github.com/TON_USER/portfelio-pro",
    demo: "#",
  },
  {
    title: "Application Feedback",
    description: "Gestion des feedbacks avec Express, MySQL et React.",
    github: "https://github.com/TON_USER/feedback-app",
    demo: "#",
  },
];

function Projects() {
  return (
    <div className="pt-20 min-h-screen bg-gray-900 text-white px-4">
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Mes Projets</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <div key={idx} className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-white">{p.title}</h3>
              <p className="text-gray-300 mb-4">{p.description}</p>
              <div className="space-x-4">
                <a href={p.github} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  GitHub
                </a>
                <a href={p.demo} target="_blank" rel="noreferrer" className="text-green-400 hover:text-green-300 transition-colors">
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
