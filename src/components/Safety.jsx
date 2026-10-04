import Section from './ui/Section.jsx';
import SectionHeading from './ui/SectionHeading.jsx';

const POINTS = [
  'Entorno controlado y supervisado',
  'Instructores capacitados',
  'Uso responsable de armas de fuego',
  'Cumplimiento de la normativa vigente',
];

export default function Safety() {
  return (
    <Section id="seguridad" alt>
      <div className="split">
        <div>
          <SectionHeading
            title="Seguridad primero"
            lead="Cada jornada arranca con un bloque teórico de 40 minutos donde se establecen las normas de seguridad, los fundamentos del tiro, la balística y la normativa legal vigente. Después se pasa a la práctica con fuego real, siempre con instructores."
          />
        </div>
        <ul className="check">
          {POINTS.map((p) => <li key={p}>{p}</li>)}
        </ul>
      </div>
    </Section>
  );
}
