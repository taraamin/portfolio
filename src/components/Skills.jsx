import { BracketsAngle, DeviceMobile, ShieldCheck, Stack, UsersThree } from 'phosphor-react';
import Section from './Section.jsx';
import { skills } from '../data/skills.js';

const specialisationIcons = {
  'Frontend fokus': BracketsAngle,
  'Mobilopplevelser': DeviceMobile
};

export default function Skills() {
  return (
    <Section
      id="kompetanse"
      eyebrow="Fullstack Profil"
      title="Ferdigheter og styrker"
      intro="Jeg bygger solide frontend-opplevelser, men tenker helhetlig på hele produktet - fra brukervennlighet til sikker leveranse."
    >
      <div className="skills">
        <div className="skills__focus">
          {skills.specialisations.map((area) => {
            const Icon = specialisationIcons[area.title];

            return (
              <article key={area.title} className="skills__card">
                <h3 className="skills__heading">
                  {Icon ? <Icon size={22} weight="duotone" aria-hidden /> : null}
                  {area.title}
                </h3>
                <ul>
                  {area.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
        <div className="skills__stack">
          <h3 className="skills__heading">
            <Stack size={22} weight="duotone" aria-hidden />
            Kjerne-stack
          </h3>
          <div className="chip-list">
            {skills.techStack.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="skills__journey">
          <h3 className="skills__heading">
            <ShieldCheck size={22} weight="duotone" aria-hidden />
            Backend & sikkerhet (pågående utdyping)
          </h3>
          <ul>
            {skills.backendJourney.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="skills__soft">
          <h3 className="skills__heading">
            <UsersThree size={22} weight="duotone" aria-hidden />
            Samarbeidskraft
          </h3>
          <ul>
            {skills.softSkills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
