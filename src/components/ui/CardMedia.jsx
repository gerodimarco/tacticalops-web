export default function CardMedia({ src, alt }) {
  if (!src) return <div className="ph">[FOTO PENDIENTE]</div>;
  return <img className="pimg" src={src} alt={alt} width="900" height="600" loading="lazy" decoding="async" />;
}
