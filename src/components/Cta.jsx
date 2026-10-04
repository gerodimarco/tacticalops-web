import ButtonLink from './ui/ButtonLink.jsx';
import { SITE } from '../data/content.js';

export default function Cta() {
  return (
    <section className="cta">
      <div className="wrap">
        <h2>¿Listo para vivir la experiencia?</h2>
        <p>
          Escribinos y reservá tu lugar. Si es tu primera vez, no hay problema: la jornada está pensada para que la
          vivas de forma segura, guiada y profesional, desde cero.
        </p>
        <div className="row">
          <ButtonLink href={SITE.whatsapp}>Contactar por WhatsApp</ButtonLink>
          <ButtonLink href={SITE.instagram} variant="outline">Instagram</ButtonLink>
        </div>
      </div>
    </section>
  );
}
