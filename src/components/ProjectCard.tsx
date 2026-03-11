type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string;
  githubUrl: string;
  liveUrl: string;
  status: string;
};

function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  status,
}: ProjectCardProps) {
  return (
    <div className="project-card p-4 bg-white shadow-sm rounded-4 h-100">
      <div className="d-flex justify-content-between align-items-start mb-3">
        <h4 className="fw-bold mb-0">{title}</h4>
        <span className="project-status">{status}</span>
      </div>

      <p className="text-muted mt-3">{description}</p>

      <p className="mb-4">
        <strong>Teknolojiler:</strong> {technologies}
      </p>

      <div className="d-flex gap-2 flex-wrap">
        <a href={githubUrl} className="btn btn-dark">
          GitHub
        </a>

        <a href={liveUrl} className="btn btn-outline-dark">
          Canlı Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
