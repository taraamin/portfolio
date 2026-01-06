import { useState } from 'react';
import { profile } from '../data/profile.js';

const navLinks = [
  { href: '#prosjekter', label: 'Prosjekter' },
  { href: '#kompetanse', label: 'Kompetanse' },
  { href: '#erfaring', label: 'Erfaring' },
  { href: '#utdanning', label: 'Utdanning' },
  { href: '#kontakt', label: 'Kontakt' }
];

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleToggle = () => setIsNavOpen((open) => !open);
  const handleClose = () => setIsNavOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#top" aria-label="Til toppen av siden">
          <span className="brand__mark" aria-hidden>TA</span>
          <span className="brand__text">
            <span className="brand__name">{profile.name}</span>
            <span className="brand__role">{profile.role}</span>
          </span>
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isNavOpen}
          aria-controls="site-nav"
          onClick={handleToggle}
        >
          <span className="sr-only">Meny</span>
          <span className="nav-toggle__icon" aria-hidden />
        </button>
        <nav aria-label="Hovednavigasjon">
          <ul className={`nav ${isNavOpen ? 'nav--open' : ''}`} id="site-nav">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="nav__link" href={link.href} onClick={handleClose}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
