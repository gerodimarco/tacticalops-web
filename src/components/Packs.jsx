import { useRef } from 'react';
import Section from './ui/Section.jsx';
import SectionHeading from './ui/SectionHeading.jsx';
import ImageLightbox from './ui/ImageLightbox.jsx';
import { GUNS, PACKS } from '../data/content.js';

export default function Packs() {
  const track = useRef(null);

  const step = (direction) => {
    const element = track.current;
    const firstCard = element?.firstElementChild;
    if (!element || !firstCard) return;

    const gap = Number.parseFloat(window.getComputedStyle(element).columnGap) || 0;
    element.scrollBy({
      left: direction * (firstCard.getBoundingClientRect().width + gap),
      behavior: 'smooth'
    });
  };

  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      step(1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      step(-1);
    }
  };

  return (
    <Section id="packs" alt>
      <SectionHeading
        title="Elegí tu pack de armas"
        lead="Todos los packs incluyen instrucción teórico-práctica, uso de armas y municiones, derecho de pedana, equipos de protección y el material necesario para la actividad. Consultanos por valores y cupos."
      />
      <div className="packs-track" ref={track} role="region" aria-label="Carrusel de packs disponibles" aria-roledescription="carrusel" tabIndex={0} onKeyDown={onKeyDown}>
        {PACKS.map((pack) => (
          <article className="card pack-card" key={pack.name}>
            <ImageLightbox image={pack.img} alt={pack.alt} title={`Pack ${pack.name}`} useWebp={pack.useWebp} />
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
      <div className="ctl packs-controls">
        <button type="button" className="btn o" aria-label="Pack anterior" onClick={() => step(-1)}>&#8249;</button>
        <button type="button" className="btn o" aria-label="Pack siguiente" onClick={() => step(1)}>&#8250;</button>
      </div>
    </Section>
  );
}
