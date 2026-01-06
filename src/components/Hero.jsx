import { ArrowRight, CalendarCheck, ChatsCircle, MapPin } from 'phosphor-react';
import { profile } from '../data/profile.js';
import Section from './Section.jsx';

const meta = [
  { label: 'Basert i', value: profile.location, icon: MapPin },
  { label: 'Tilgjengelig', value: profile.availability, icon: CalendarCheck }
];

export default function Hero() {
  return (
    <Section id="top" eyebrow="Hei, jeg er Tara" title={profile.role} level={1}>
      <div className="hero">
        <p className="hero__tagline">{profile.tagline}</p>
        <p className="hero__mission">{profile.mission}</p>
        <ul className="hero__meta" aria-label="Arbeidssted og tilgjengelighet">
          {meta.map(({ label, value, icon: Icon }) => (
            <li key={label}>
              <span className="hero__meta-icon" aria-hidden="true">
                <Icon size={20} weight="duotone" aria-hidden />
              </span>
              <span className="sr-only">{label}</span>
              <span>{value}</span>
            </li>
          ))}
        </ul>
        <div className="hero__actions">
          <a className="button" href="#prosjekter">
            Se prosjekter
            <ArrowRight size={18} weight="bold" aria-hidden />
          </a>
        </div>
        </div>
    </Section>
  );
}
