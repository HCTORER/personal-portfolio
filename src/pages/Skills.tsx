import { skills } from "../data/skills";
import SkillCard from "../components/SkillCard";

function Skills() {
  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Yeteneklerim</h2>
          <p className="text-muted">
            Full stack developer olma yolunda kullandığım temel teknolojiler
          </p>
        </div>
        <div className="row g-4">
          {skills.map((skill) => (
            <div className="col-6 col-md-4 col-lg-3" key={skill.id}>
              <SkillCard title={skill.title} description={skill.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
