import { profile } from '../data/profile.js';

const nav = [
  { href: '#prosjekter', label: 'Prosjekter' },
  { href: '#kompetanse', label: 'Kompetanse' },
  { href: '#erfaring', label: 'Erfaring' },
  { href: '#utdanning', label: 'Utdanning' }
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__title">{profile.name}</p>
          <p className="site-footer__subtitle">{profile.role}</p>
        </div>
        <nav aria-label="Sekundær">
          <ul className="footer-nav">
            {nav.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="site-footer__note">Designet og bygget i React | Oppdatert {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
