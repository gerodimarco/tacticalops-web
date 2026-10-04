import Section from './ui/Section.jsx';
import SectionHeading from './ui/SectionHeading.jsx';
import { ACTIVITIES } from '../data/content.js';

export default function Activities() {
  return (
    <Section id="actividades">
      <SectionHeading title="Actividades" />
      <div className="grid g3">
        {ACTIVITIES.map(({ t, d }) => (
          <article className="card" key={t}>
            <h3>{t}</h3>
            <p>{d}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
