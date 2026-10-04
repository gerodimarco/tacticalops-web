export default function SectionHeading({ title, lead }) {
  return (
    <>
      <h2>{title}</h2>
      <span className="rule" />
      {lead && <p className="lead">{lead}</p>}
    </>
  );
}
