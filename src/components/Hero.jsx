import ButtonLink from './ui/ButtonLink.jsx';
import ScheduleList from './ui/ScheduleList.jsx';
import { SITE } from '../data/content.js';

const INFO = [
  { title: 'Sede', text: 'Club Tiro Federal de Tucumán' },
  { title: 'Días y horarios', schedule: true },
  { title: 'Para todos', text: 'No necesitás experiencia previa ni arma propia' },
  { title: 'Edad', text: 'Desde 12 años con padre, madre o tutor legal. Desde 18, sin acompañante' },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="pic">
        <img
          src="/images/hero.webp"
          alt="Instructor de Tactical Ops explicando durante una jornada"
          width="900"
          height="1350"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <svg className="t" viewBox="0 0 400 400" aria-hidden="true" fill="none" stroke="#e00000">
        <circle cx="200" cy="200" r="190" strokeWidth="2" opacity=".35" />
        <circle cx="200" cy="200" r="140" strokeWidth="2" opacity=".5" />
        <circle cx="200" cy="200" r="90" strokeWidth="3" opacity=".7" />
        <circle cx="200" cy="200" r="40" strokeWidth="4" />
        <path d="M200 0v120M200 280v120M0 200h120M280 200h120" strokeWidth="2" opacity=".6" />
      </svg>
      <div className="wrap">
        <h1>Viví una experiencia única en Tucumán</h1>
        <span className="rule" />
        <p>
          Jornadas de iniciación y entrenamiento en tiro táctico. Aprendé los fundamentos del tiro, la seguridad y la
          disciplina de manera progresiva, con instructores calificados y en un entorno seguro y controlado.
        </p>
        <div className="row">
          <ButtonLink href="#packs">Ver packs</ButtonLink>
          <ButtonLink href={SITE.whatsapp} variant="light">Consultar</ButtonLink>
        </div>
        <div className="info">
          {INFO.map(({ title, text, schedule }) => (
            <div key={title} className={schedule ? 'info-hours' : undefined}>
              <b>{title}</b>
              {schedule ? (
                <>
                  <ScheduleList compact />
                  <a className="schedule-instagram" href={SITE.instagram} target="_blank" rel="noopener noreferrer">
                    Fechas en Instagram
                  </a>
                </>
              ) : <span>{text}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
