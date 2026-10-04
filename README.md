# Tactical Ops Arg

Landing page en React 18 + Vite.

## Comandos

```bash
npm install
npm run dev      # desarrollo
npm run build    # build de producción en dist/
npm run preview  # probar el build
npm run lint
```

## Dónde editar

- `src/data/content.js`: textos, packs, armas, FAQ, fotos y enlaces (WhatsApp, Instagram, YouTube, Maps).
- `public/images/`: logos y fotos. Para una foto nueva, copiarla ahí y referenciarla en `content.js`.
- `src/styles/global.css`: estilos y colores (variables en `:root`).
- `src/components/`: una sección por componente; `ui/` tiene piezas reutilizables.

## Deploy en Vercel

Importar el repositorio: Vercel detecta Vite solo (build `npm run build`, salida `dist`).

## Pendientes

- Sumar un sitemap y la URL canónica cuando exista el dominio.
- Reemplazar las fotos de packs y armas por fotos reales si hace falta.
- Mapa interactivo de Google: se puede incrustar con un `iframe` fuera de la vista previa de claude.ai.
