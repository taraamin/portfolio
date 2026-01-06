import Section from './Section.jsx';
import ProjectCard from './ProjectCard.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <Section
      id="prosjekter"
      eyebrow="Utvalgte prosjekter"
      title="Prosjekter jeg er stolt av"
      intro="Kvalitet fremfor kvantitet."
    >
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}

