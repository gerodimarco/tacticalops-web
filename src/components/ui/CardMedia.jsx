const toWebpSource = (src) => src.replace(/\.(jpe?g|png)$/i, '.webp');

export default function CardMedia({ src, alt, className = 'pimg' }) {
  if (!src) return <div className="ph">[FOTO PENDIENTE]</div>;

  const webpSrc = toWebpSource(src);

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img className={className} src={src} alt={alt} width="900" height="600" loading="lazy" decoding="async" />
    </picture>
  );
}
