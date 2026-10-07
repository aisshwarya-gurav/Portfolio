export default function ProjectCard({ project }) {
  return (
    <article className="card">
      <h3>{project.name}</h3>
      <p>{project.desc}</p>
      <div className="chips">
        {project.stack.map((t) => <span key={t} className="chip">{t}</span>)}
      </div>
    </article>
  );
}