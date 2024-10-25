import ProjectCard from '@components/ProjectCard';

const projects = [
  { title: "Project One", description: "An innovative solution...", link: "#" },
  { title: "Project Two", description: "A unique web application...", link: "#" },
  { title: "Project Three", description: "A dynamic experience...", link: "#" },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-gray-200 py-16 px-6">
      <h2 className="text-4xl font-semibold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
