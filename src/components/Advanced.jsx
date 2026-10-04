import Section from './ui/Section.jsx';
import SectionHeading from './ui/SectionHeading.jsx';
import ButtonLink from './ui/ButtonLink.jsx';
import { SITE } from '../data/content.js';

const TOPICS = [
  'Perfeccionamiento técnico',
  'Tiro en movimiento',
  'Resolución de fallas',
  'Tácticas y drills de alta exigencia',
  'Entrenamiento personalizado',
];

export default function Advanced() {
  return (
    <Section id="avanzado">
      <div className="split">
        <div>
          <SectionHeading
            title="Seguí entrenando, seguí evolucionando"
            lead="Si te gustó la experiencia, podés continuar con clases progresivas para seguir aprendiendo y afinar tus destrezas."
          />
          <ul className="check">
            {TOPICS.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
        <div className="card" style={{ borderColor: 'var(--ac)' }}>
          <h3>Legítimo usuario y personal policial o penitenciario</h3>
          <p>
            Podés ir a entrenar con tu armamento y munición. Se planifica una jornada personalizada según tus
            requerimientos y, si necesitás munición, te la podemos proveer.
          </p>
          <div className="row" style={{ marginTop: '1.4rem' }}>
            <ButtonLink href={SITE.whatsapp}>Consultar entrenamiento</ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
