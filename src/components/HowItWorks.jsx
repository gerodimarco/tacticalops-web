import Section from './ui/Section.jsx';
import SectionHeading from './ui/SectionHeading.jsx';

const STEPS = [
  ['Elegís tu pack', 'Mirá las opciones y elegí las armas que querés disparar.'],
  ['Nos contactás', 'Escribinos y reservamos tu lugar. Los cupos son limitados.'],
  ['Coordinamos fecha', 'Las jornadas son grupales y las fechas se anuncian por Instagram.'],
  ['Venís a entrenar', 'Bloque teórico, práctica con fuego real y a disfrutar.'],
];

export default function HowItWorks() {
  return (
    <Section>
      <SectionHeading title="¿Cómo funciona?" />
      <div className="steps">
        {STEPS.map(([title, text]) => (
          <div key={title}>
            <b>{title}</b>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
