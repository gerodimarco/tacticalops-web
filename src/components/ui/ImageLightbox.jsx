import { useEffect, useId, useRef, useState } from 'react';
import CardMedia from './CardMedia.jsx';

const toWebpSource = (src) => src.replace(/\.(jpe?g|png)$/i, '.webp');

export default function ImageLightbox({
  image,
  alt,
  title,
  imageClassName = 'pimg',
  actionLabel,
  children,
  triggerClassName = ''
}) {
  const titleId = useId();
  const activeTriggerRef = useRef(null);
  const dialogRef = useRef(null);
  const closeTimerRef = useRef(null);
  const [closing, setClosing] = useState(false);

  useEffect(() => () => window.clearTimeout(closeTimerRef.current), []);

  const openDialog = (event) => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    activeTriggerRef.current = event.currentTarget;
    dialog.showModal();
    dialog.querySelector('.image-modal-close')?.focus();
  };

  const closeDialog = () => {
    const dialog = dialogRef.current;
    if (!dialog?.open || closeTimerRef.current) return;

    setClosing(true);
    closeTimerRef.current = window.setTimeout(() => {
      dialog.close();
      closeTimerRef.current = null;
      setClosing(false);
    }, 150);
  };

  const handleDialogClick = (event) => {
    if (event.target === event.currentTarget) closeDialog();
  };

  const handleCancel = (event) => {
    event.preventDefault();
    closeDialog();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeDialog();
    }
  };

  const triggerClasses = ['image-lightbox-trigger', triggerClassName].filter(Boolean).join(' ');
  const webpImage = toWebpSource(image);

  return (
    <>
      <button
        type="button"
        className={triggerClasses}
        aria-label={`Ampliar imagen: ${title}`}
        aria-haspopup="dialog"
        onClick={openDialog}
      >
        <CardMedia src={image} alt={alt} className={imageClassName} />
        <span className="image-expand-indicator" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m13-5h3a2 2 0 0 1 2 2v3M3 16v3a2 2 0 0 0 2 2h3m13-5v3a2 2 0 0 1-2 2h-3" />
          </svg>
        </span>
      </button>
      {children}
      {actionLabel && (
        <button type="button" className="btn image-lightbox-action" onClick={openDialog}>
          {actionLabel}
        </button>
      )}
      <dialog
        ref={dialogRef}
        className={`image-modal${closing ? ' is-closing' : ''}`}
        aria-labelledby={titleId}
        onClick={handleDialogClick}
        onKeyDown={handleKeyDown}
        onCancel={handleCancel}
        onClose={() => activeTriggerRef.current?.focus()}
      >
        <div className="image-modal-content">
          <header className="image-modal-header">
            <h2 id={titleId}>{title}</h2>
            <button type="button" className="image-modal-close" aria-label="Cerrar imagen" onClick={closeDialog}>
              <span aria-hidden="true">×</span>
            </button>
          </header>
          <picture>
            <source srcSet={webpImage} type="image/webp" />
            <img className="image-modal-image" src={image} alt={alt} decoding="async" />
          </picture>
        </div>
      </dialog>
    </>
  );
}