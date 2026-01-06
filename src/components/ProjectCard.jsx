import {
  ArrowSquareOut,
  FileText,
  GithubLogo,
  GlobeSimple,
  StarFour,
  UserCircleGear
} from 'phosphor-react';

const linkIcons = {
  github: GithubLogo,
  caseStudy: FileText,
  demo: ArrowSquareOut,
  prototype: ArrowSquareOut,
  side: GlobeSimple
};

export default function ProjectCard({ project }) {
  const contribution = project.contribution ?? [];
  const stack = project.stack ?? [];

  return (
    <article className="project-card">
      <header className="project-card__header">
        <p className="project-card__type">{project.type}</p>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__period">{project.period}</p>
      </header>
      <p className="project-card__summary">{project.summary}</p>
      <div className="project-card__content">
        {contribution.length > 0 ? (
          <section>
            <h4 className="project-card__heading">
              <UserCircleGear size={20} weight="duotone" aria-hidden />
              Hva jeg har bygd
            </h4>
            <ul>
              {contribution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
      <div className="project-card__footer">
        <div className="chip-list" aria-label="Teknologier">
          {stack.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-card__links">
          {Object.entries(project.links ?? {}).map(([key, value]) => {
            const Icon = linkIcons[key];

            if (!value || !Icon) {
              return null;
            }

            const labelMap = {
              github: 'GitHub',
              caseStudy: 'Case study',
              demo: 'Live demo',
              prototype: 'Prototype',
              side: 'Nettside'
            };

            return (
              <a key={key} href={value} className="text-link" target="_blank" rel="noreferrer">
                <Icon size={18} weight="duotone" aria-hidden />
                {labelMap[key]}
              </a>
            );
          })}
        </div>
      </div>
    </article>
  );
}
