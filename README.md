# Fisioterapia Pélvica — Landing page

React + TypeScript + Tailwind CSS v4 + Vite.

```bash
npm install
npm run dev      # desarrollo
npm run build    # producción (carpeta dist/)
```

## Deploy en Netlify

Sube el repo (o arrastra el proyecto) y listo: `netlify.toml` ya define build (`npm run build`), carpeta `dist` y Node 22.

## Qué editar después

Todo está en `src/config.ts`:

- `instagram.url` y `facebook.url`: pega las URLs reales y los enlaces se activan solos.
- `formEndpoint`: si lo dejas vacío, el formulario abre WhatsApp con el mensaje redactado.
  Para recibir por correo, crea un formulario en Formspree y pega su URL.
- Teléfono, correo, horario y ubicación.

Imágenes reales: la página no depende de fotos. Cuando existan, agrégalas en `public/` y colócalas en el componente que corresponda.

Falta (no se inventó): dominio/URL del sitio, imagen para Open Graph (`og:image`), testimonios, precios.
