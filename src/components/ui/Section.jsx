export default function Section({ id, alt = false, className, children }) {
  const classes = [alt && 'alt', className].filter(Boolean).join(' ') || undefined;
  return (
    <section id={id} className={classes}>
      <div className="wrap">{children}</div>
    </section>
  );
}
