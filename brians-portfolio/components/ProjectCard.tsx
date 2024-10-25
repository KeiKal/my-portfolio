type ProjectCardProps = {
    title: string;
    description: string;
    link: string;
  };
  
  const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => (
    <div className="card">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} className="btn">
        View Project &rarr;
      </a>
    </div>
  );
  
  export default ProjectCard;
  