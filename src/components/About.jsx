import Section from './ui/Section.jsx';
import SectionHeading from './ui/SectionHeading.jsx';

export default function About() {
  return (
    <Section id="nosotros" alt>
      <div className="split">
        <div>
          <SectionHeading
            title="Quiénes somos"
            lead="Tactical Ops es una comunidad de entrenamiento y práctica responsable del tiro en Tucumán. Personas reales, experiencias reales: formación, entrenamiento y responsabilidad para quien arranca de cero y para quien quiere seguir evolucionando."
          />
          <p className="lead">
            Fundada en el 2024 y liderada por el Instructor <strong style={{ color: '#fff' }}>Geronimo Dimarco</strong>{' '}
            (Matrícula ITB 8644).
          </p>
        </div>
        <img className="team" src="/images/equipo.jpg" alt="El equipo de instructores de Tactical Ops con la remera oficial" width="900" height="768" loading="lazy" decoding="async" />
      </div>
    </Section>
  );
}
