import Section from './ui/Section.jsx';
import SectionHeading from './ui/SectionHeading.jsx';
import { FAQ } from '../data/content.js';

export default function Faq() {
  return (
    <Section id="faq" className="narrow">
      <SectionHeading title="Preguntas frecuentes" />
      <div className="faq">
        {FAQ.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
