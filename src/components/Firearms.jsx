import { useRef } from 'react';
import Section from './ui/Section.jsx';
import SectionHeading from './ui/SectionHeading.jsx';
import ImageLightbox from './ui/ImageLightbox.jsx';
import { FIREARMS, PACKS } from '../data/content.js';

export default function Firearms() {
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
    <Section id="armas">
      <SectionHeading title="Armas disponibles" lead="Estas son las armas que podés usar según el pack que elijas." />
      <div className="firearms-track" ref={track} role="region" aria-label="Carrusel de armas disponibles" aria-roledescription="carrusel" tabIndex={0} onKeyDown={onKeyDown}>
        {FIREARMS.map((firearm) => {
          const inPacks = PACKS.filter((pack) => pack.items.some(([category]) => category === firearm.category));
          return (
            <article className="card firearm-card" key={firearm.model}>
              <ImageLightbox image={firearm.image} alt={firearm.imageAlt} title={firearm.model} actionLabel="Ampliar foto" useWebp={false}>
                <h3>{firearm.manufacturer}</h3>
                <dl className="firearm-details">
                  <div><dt>Modelo</dt><dd>{firearm.model}</dd></div>
                  <div><dt>Calibre</dt><dd>{firearm.caliber}</dd></div>
                  <div><dt>Disponible en</dt><dd>{inPacks.map((pack) => pack.name).join(', ') || 'Consultar'}</dd></div>
                </dl>
              </ImageLightbox>
            </article>
          );
        })}
      </div>
      <div className="ctl firearms-controls">
        <button type="button" className="btn o" aria-label="Arma anterior" onClick={() => step(-1)}>&#8249;</button>
        <button type="button" className="btn o" aria-label="Arma siguiente" onClick={() => step(1)}>&#8250;</button>
      </div>
    </Section>
  );
}
