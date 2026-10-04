import Section from './ui/Section.jsx';
import SectionHeading from './ui/SectionHeading.jsx';
import CardMedia from './ui/CardMedia.jsx';
import { GUNS, PACKS } from '../data/content.js';

export default function Packs() {
  return (
    <Section id="packs" alt>
      <SectionHeading
        title="Elegí tu pack de armas"
        lead="Todos los packs incluyen instrucción teórico-práctica, uso de armas y municiones, derecho de pedana, equipos de protección y el material necesario para la actividad. Consultanos por valores y cupos."
      />
      <div className="grid g4">
        {PACKS.map((pack) => (
          <article className="card" key={pack.name}>
            <CardMedia src={pack.img} alt={pack.alt} />
            <h3>{`Pack ${pack.name}`}</h3>
            <ul>
              {pack.items.map(([gun, shots]) => (
                <li key={gun}>
                  <em>{shots} disparos</em> · {GUNS[gun].name}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
