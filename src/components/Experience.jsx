import Section from './Section.jsx';
import { experience } from '../data/experience.js';

export default function Experience() {
  return (
    <Section
      id="erfaring"
      eyebrow="Praksis og ansvar"
      title="Erfaring"
      intro="Jeg liker å jobbe tett på brukere. Her er et utdrag av ansvar jeg har hatt de siste årene."
    >
      <ol className="timeline">
        {experience.map((item) => (
          <li key={`${item.company}-${item.period}`} className="timeline__item">
            <div className="timeline__marker" aria-hidden />
            <div className="timeline__content">
              <h3>{item.title}</h3>
              <p className="timeline__meta">
                <span>{item.company}</span>
                <span>{item.period}</span>
              </p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
