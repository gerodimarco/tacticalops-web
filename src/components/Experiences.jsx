import { useRef } from 'react';
import SectionHeading from './ui/SectionHeading.jsx';
import { PHOTOS } from '../data/content.js';

const GAP = 16;

export default function Experiences() {
  const track = useRef(null);

  const step = (dir) => {
    const el = track.current;
    el.scrollBy({ left: dir * (el.firstElementChild.offsetWidth + GAP), behavior: 'smooth' });
  };
  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  };

  return (
    <section id="experiencias" className="alt">
      <div className="wrap">
        <SectionHeading title="Experiencias" lead="Así se viven las jornadas de Tactical Ops. Deslizá para ver más fotos." />
      </div>
      <div className="car" ref={track} role="region" aria-label="Fotos de las jornadas" tabIndex={0} onKeyDown={onKeyDown}>
        {PHOTOS.map(([src, alt], i) => (
          <figure key={src}>
            <img src={src} alt={alt} width="960" height="720" loading={i ? 'lazy' : 'eager'} decoding="async" />
          </figure>
        ))}
      </div>
      <div className="ctl">
        <button type="button" className="btn o" aria-label="Foto anterior" onClick={() => step(-1)}>&#8249;</button>
        <button type="button" className="btn o" aria-label="Foto siguiente" onClick={() => step(1)}>&#8250;</button>
      </div>
    </section>
  );
}
