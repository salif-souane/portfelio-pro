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
    <section>
      <h2 className="text-3xl font-bold mb-6 text-center">Mes Projets</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, idx) => (
          <div key={idx} className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600 mb-4">{p.description}</p>
            <div className="space-x-4">
              <a href={p.github} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                GitHub
              </a>
              <a href={p.demo} target="_blank" rel="noreferrer" className="text-green-600 hover:underline">
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
