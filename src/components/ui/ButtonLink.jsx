const VARIANTS = { primary: 'btn', outline: 'btn o', light: 'btn w' };

export default function ButtonLink({ href, variant = 'primary', className, children, ...rest }) {
  const external = /^https?:/.test(href);
  return (
    <a
      className={[VARIANTS[variant], className].filter(Boolean).join(' ')}
      href={href}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      {...rest}
    >
      {children}
    </a>
  );
}
