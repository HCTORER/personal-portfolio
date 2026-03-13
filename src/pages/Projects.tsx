import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Projelerim</h2>
          <p className="text-muted">
            Öğrenme sürecimde geliştirdiğim ve GitHub’da paylaştığım projeler
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                status={project.status}
                image={project.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
