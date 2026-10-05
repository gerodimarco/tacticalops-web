export default function CardMedia({ src, alt, className = 'pimg' }) {
  if (!src) return <div className="ph">[FOTO PENDIENTE]</div>;
  return <img className={className} src={src} alt={alt} width="900" height="600" loading="lazy" decoding="async" />;
}
