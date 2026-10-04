import { useEffect, useState } from 'react';
import ButtonLink from './ui/ButtonLink.jsx';
import { SITE } from '../data/content.js';

export default function WhatsAppFab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const cover = document.querySelector('.hero');
    if (!cover) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      setShow(!entry.isIntersecting);
    });
    observer.observe(cover);
    return () => observer.disconnect();
  }, []);

  if (!show) return null;

  return (
    <ButtonLink href={SITE.whatsapp} className="fab" aria-label="Consultar por WhatsApp">
      Consultar
    </ButtonLink>
  );
}
