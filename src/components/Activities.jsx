import Section from './ui/Section.jsx';
import SectionHeading from './ui/SectionHeading.jsx';
import ButtonLink from './ui/ButtonLink.jsx';
import { ACTIVITIES, SITE } from '../data/content.js';

export default function Activities() {
  return (
    <Section id="actividades">
      <SectionHeading title="Actividades" />
      <div className="grid g3">
        {ACTIVITIES.map(({ t, d, cta }) => (
          <article className="card" key={t}>
            <h3>{t}</h3>
            {d.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <ButtonLink href={SITE.whatsapp}>{cta}</ButtonLink>
          </article>
        ))}
      </div>
    </Section>
  );
}
