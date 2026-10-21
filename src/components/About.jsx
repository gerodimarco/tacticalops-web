import Section from './ui/Section.jsx';
import SectionHeading from './ui/SectionHeading.jsx';

export default function About() {
  return (
    <Section id="nosotros" alt>
      <div className="split">
        <div>
          <SectionHeading
            title="Quiénes somos"
            lead="Tactical Ops es una comunidad de formación y entrenamiento responsable del tiro en Tucumán. Creamos experiencias para quienes quieren iniciarse y espacios de entrenamiento para quienes buscan perfeccionar su técnica y seguir progresando."
          />
          <p className="lead">
            Fundada en 2024 y dirigida por el instructor <strong style={{ color: '#fff' }}>Gerónimo Dimarco</strong> (matrícula ITB 8644), trabajamos con un enfoque basado en la seguridad, la formación y la responsabilidad.
          </p>
          <p className="lead">
            Creemos que una buena formación comienza con bases sólidas, instrucción responsable y una actitud de aprendizaje constante. Por eso, acompañamos a cada participante según su experiencia y sus objetivos, promoviendo una práctica segura, consciente y responsable del tiro.
          </p>
        </div>
        <picture>
          <source srcSet="/images/equipo.webp" type="image/webp" />
          <img className="team" src="/images/equipo.jpg" alt="El equipo de instructores de Tactical Ops con la remera oficial" width="900" height="768" loading="lazy" decoding="async" />
        </picture>
      </div>
    </Section>
  );
}
