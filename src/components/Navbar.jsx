import { useEffect, useState } from 'react';
import ButtonLink from './ui/ButtonLink.jsx';
import { SITE } from '../data/content.js';

const LINKS = [
  ['Nosotros', '#nosotros'],
  ['Actividades', '#actividades'],
  ['Packs', '#packs'],
  ['Armas', '#armas'],
  ['Experiencias', '#experiencias'],
  ['Ubicación', '#ubicacion'],
  ['Preguntas', '#faq'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header>
      <div className="wrap nav">
        <a className="logo" href="#inicio" aria-label="Tactical Ops Arg, inicio">
          <img src="/images/logo-nav.png" alt="Tactical Ops" width="82" height="54" />
        </a>
        <button
          type="button"
          className="burger"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>
        <nav aria-label="Principal">
          <ul id="menu" className={open ? 'open' : undefined}>
            {LINKS.map(([label, href]) => (
              <li key={href}>
                <a href={href} onClick={close}>{label}</a>
              </li>
            ))}
            <li>
              <ButtonLink href={SITE.whatsapp} onClick={close}>Consultar</ButtonLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
