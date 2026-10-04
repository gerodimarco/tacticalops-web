import Section from './ui/Section.jsx';
import SectionHeading from './ui/SectionHeading.jsx';
import ButtonLink from './ui/ButtonLink.jsx';
import { SITE } from '../data/content.js';

export default function Location() {
  return (
    <Section id="ubicacion" alt>
      <div className="split">
        <div>
          <SectionHeading
            title="Dónde estamos"
            lead={<><strong style={{ color: '#fff' }}>Tiro Federal Tucumán.</strong> Las jornadas se hacen los sábados y/o domingos, en turnos de 9 a 14 hs o de 14 a 18 hs.</>}
          />
          <div className="row">
            <ButtonLink href={SITE.maps}>Cómo llegar</ButtonLink>
          </div>
        </div>
        <div className="map">
          <iframe
            title="Ubicación de Tactical Ops en Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.884629350921!2d-65.18665052375411!3d-26.843621576688445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9422590006609931%3A0x411adf0ec1a191bd!2sTactical%20Ops%20-%20Instrucciones%20de%20Tiro!5e0!3m2!1ses-419!2sar!4v1790971367799!5m2!1ses-419!2sar"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </Section>
  );
}
