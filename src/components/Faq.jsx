import { useState } from 'react';
import Section from './ui/Section.jsx';
import SectionHeading from './ui/SectionHeading.jsx';
import ButtonLink from './ui/ButtonLink.jsx';
import ScheduleList from './ui/ScheduleList.jsx';
import { FAQ } from '../data/content.js';

export default function Faq() {
  const [openItems, setOpenItems] = useState(() => new Set());

  const toggleItem = (index) => {
    setOpenItems((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <Section id="faq" className="narrow">
      <SectionHeading title="Preguntas frecuentes" />
      <div className="faq">
        {FAQ.map(({ question, answer, includeSchedule, link }, index) => {
          const isOpen = openItems.has(index);
          const answerId = `faq-answer-${index}`;

          return (
            <article className={`faq-item${isOpen ? ' is-open' : ''}`} key={question}>
              <h3>
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleItem(index)}
                >
                  {question}
                </button>
              </h3>
              <div className="faq-answer" id={answerId} hidden={!isOpen}>
                {answer.map((paragraph, paragraphIndex) => (
                  <div key={paragraph}>
                    <p>{paragraph}</p>
                    {includeSchedule && paragraphIndex === 0 && <ScheduleList compact />}
                  </div>
                ))}
                {link && (
                  <p>
                    <ButtonLink href={link.href} variant="outline">{link.label}</ButtonLink>
                  </p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
