import Section from './ui/Section.jsx';
import SectionHeading from './ui/SectionHeading.jsx';
import CardMedia from './ui/CardMedia.jsx';
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
              <CardMedia src={gun.img} alt={gun.alt} />
              <h3>{gun.name}</h3>
              {gun.models && <p>Modelos: {gun.models}.</p>}
              <p>{gun.type}. Disponible en: {inPacks}.</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
