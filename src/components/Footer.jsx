import { SITE } from '../data/content.js';

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="wrap f">
        <div>
          <a className="logo" href="#inicio" aria-label="Tactical Ops Arg, inicio">
            <img src="/images/logo-footer.png" alt="Tactical Ops, Armas y Tácticas" width="104" height="76" loading="lazy" />
          </a>
          <p>
            Tactical Ops promueve el uso responsable de armas de fuego y el cumplimiento de las normas y
            reglamentaciones aplicables. Este sitio no es una fuente oficial de legislación.
          </p>
        </div>
        <div className="soc">
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer"><InstagramIcon />@tacticalopsarg</a>
          <a href={SITE.youtube} target="_blank" rel="noopener noreferrer"><YoutubeIcon />YouTube</a>
          <span>Tucumán, Argentina</span>
          <span>Formación · Entrenamiento · Responsabilidad</span>
        </div>
      </div>
    </footer>
  );
}
