import Section from './ui/Section.jsx';
import SectionHeading from './ui/SectionHeading.jsx';
import ImageLightbox from './ui/ImageLightbox.jsx';
import { GUNS, PACKS } from '../data/content.js';

export default function Firearms() {
  return (
    <Section id="armas">
      <SectionHeading title="Armas disponibles" lead="Estas son las armas que podés usar según el pack que elijas." />
      <div className="grid g3">
        {Object.entries(GUNS).map(([key, gun]) => {
          const inPacks = PACKS.filter((p) => p.items.some(([k]) => k === key)).map((p) => p.name).join(', ');
          return (
            <article className="card" key={key}>
              <ImageLightbox image={gun.img} alt={gun.alt} title={gun.name} actionLabel="VER ARMAS">
                <h3>{gun.name}</h3>
                <ul className="platform-list">
                  {gun.models.map((model) => (
                    <li key={model}><strong>Plataforma:</strong> {model}</li>
                  ))}
                </ul>
                <p>Disponible en los packs: {inPacks}.</p>
              </ImageLightbox>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
