type SkillCardProps = {
  title: string;
  description: string;
};

function SkillCard({ title, description }: SkillCardProps) {
  return (
    <div className="skill-card p-4 bg-white shadow-sm rounded-4 text-center h-100">
      <h5 className="fw-bold mb-2">{title}</h5>
      <p className="text-muted mb-0 small">{description}</p>
    </div>
  );
}

export default SkillCard;
