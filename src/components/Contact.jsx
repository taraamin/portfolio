import { EnvelopeSimple, GithubLogo, LinkedinLogo } from 'phosphor-react';
import Section from './Section.jsx';
import { profile } from '../data/profile.js';

const contactMethods = [
  {
    label: 'E-post',
    value: profile.contact.email,
    href: `mailto:${profile.contact.email}`,
    icon: EnvelopeSimple
  },
  {
    label: 'LinkedIn',
    value: profile.contact.linkedin,
    href: profile.contact.linkedin,
    icon: LinkedinLogo,
    external: true
  },
  {
    label: 'GitHub',
    value: profile.contact.github,
    href: profile.contact.github,
    icon: GithubLogo,
    external: true
  }
];

export default function Contact() {
  return (
    <Section
      id="kontakt"
      eyebrow="La oss skape noe sammen"
      title="Kontakt"
      intro="Fortell meg om teamet ditt og hvilke brukerproblemer dere ønsker å løse. Jeg er klar til å bidra."
    >
      <div className="contact">
        <div className="contact__cta">
          <h3>Neste steg</h3>
          <p>
            Send en e-post med litt kontekst om rollen, teamet og hva som er viktig for dere. Jeg svarer vanligvis samme dag.
          </p>
        </div>
        <dl className="contact__info">
          {contactMethods.map(({ label, value, href, icon: Icon, external }) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>
                <a
                  className="contact__link"
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                >
                  <Icon size={20} weight="duotone" aria-hidden />
                  <span>{value}</span>
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
