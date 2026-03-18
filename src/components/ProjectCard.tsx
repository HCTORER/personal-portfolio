import { useState } from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  status: string;
  image?: string;
};

function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  status,
  image,
}: ProjectCardProps) {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <div className="project-card bg-white shadow-sm rounded-4 h-100 overflow-hidden d-flex flex-column">
        {image && (
          <div
            className="project-image-wrapper"
            onClick={() => setShowPreview(true)}
            style={{ cursor: "pointer" }}
          >
            <img src={image} alt={title} className="project-image" />
          </div>
        )}

        <div className="p-4 d-flex flex-column flex-grow-1">
          <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
            <h4 className="fw-bold mb-0">{title}</h4>
            <span className="project-status">{status}</span>
          </div>

          <p className="text-muted project-description">{description}</p>

          <div className="mb-4 d-flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="badge text-bg-light border">
                {tech}
              </span>
            ))}
          </div>

          <div className="d-flex gap-2 flex-wrap mt-auto">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark"
            >
              GitHub
            </a>

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {showPreview && image && (
        <div
          className="project-preview-overlay"
          onClick={() => setShowPreview(false)}
        >
          <div
            className="project-preview-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="project-preview-close"
              onClick={() => setShowPreview(false)}
            >
              ×
            </button>

            <img src={image} alt={title} className="project-preview-image" />
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
