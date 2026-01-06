import Section from './Section.jsx';
import { education } from '../data/experience.js';

export default function Education() {
  return (
    <Section
      id="utdanning"
      eyebrow="Livslang læring"
      title="Utdanning"
      intro="Utdanningen min gir en solid plattform i både frontend-estetikk og sikker, moderne webutvikling."
    >
      <div className="education">
        {education.map((item) => (
          <article key={item.title} className="education__card">
            <header>
              <h3>{item.title}</h3>
              <p className="education__meta">
                <span>{item.institution}</span>
                <span>{item.period}</span>
              </p>
            </header>
            <p className="education__status">{item.status}</p>
            <ul>
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
