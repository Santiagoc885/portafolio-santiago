# Portafolio · Román Santiago Chaparro Lozano

Sitio estático bilingüe (español en `/`, inglés en `/en`) con Astro 7, TypeScript, CSS y SVG. El único JavaScript son unas líneas incrustadas para el botón de tema claro/oscuro.

## Comandos

```sh
npm install
npm run dev       # desarrollo en http://localhost:4321
npm run build     # astro check + build estático en dist/
npm run preview   # sirve dist/
```

Al desplegar, define el dominio real para el canonical, el sitemap y el robots.txt:

```sh
SITE_URL=https://tu-dominio.com npm run build
```

`dist/` sirve en cualquier hosting estático (Netlify, Vercel, Cloudflare Pages, GitHub Pages, Azure Static Web Apps).

## Dónde se edita cada cosa

| Qué | Archivo |
| --- | --- |
| Perfil, enlaces, experiencia, stack, "Cómo trabajo" (ES y EN) | `src/data/profile.ts` |
| Textos de interfaz, rutas e idiomas | `src/i18n/index.ts` |
| Páginas (compartidas por ambos idiomas) | `src/views/*.astro` |
| Casos de estudio | `src/content/casos/es/*.mdx` y `src/content/casos/en/*.mdx` (mismo nombre de archivo en ambos) |
| Texto de "Sobre mí" | `src/views/About.astro` |
| Schema de los casos (Zod) | `src/content.config.ts` |
| Ejes del mapa y su posición | `src/data/map.ts` |
| Colores, tipografía y reglas globales | `src/styles/global.css` |
| CV | `public/cv.pdf`: si existe, el botón pasa a "Descargar CV"; si no, enlaza a LinkedIn |

### Añadir un caso

Crea `src/content/casos/es/<slug>.mdx` y su traducción `src/content/casos/en/<slug>.mdx`. En español se publica en `/casos/<slug>` y en inglés en `/en/cases/<slug>`. El frontmatter lo valida el schema. `map` coloca el nodo en la retícula de 12 × 10 del mapa y `connects` dice a qué ejes se une con una línea. En el MDX puedes usar estos componentes sin importarlos: `Pending`, `UserStory`, `Metric`, `Fact`, `ProcessMap` y `ArchitectureDiagram`.

`Metric` solo dibuja la gráfica cuando recibe `before` y `after` reales. Si falta alguno, muestra [POR COMPLETAR].

## Decisiones técnicas

- **Fuente**: Archivo Variable (ejes de peso 100–900 y ancho 62–125 %), autoalojada con la Fonts API estable de Astro y el proveedor `local`. Se usa el proveedor local porque los proveedores remotos no garantizan el eje de ancho. Se precarga el subset latino (~90 KB). Licencia en `src/assets/fonts/OFL.txt`.
- **View Transitions**: son las nativas del navegador entre documentos (`@view-transition` en CSS). No se usa `<ClientRouter />` y por eso no hace falta JavaScript. Se desactivan con `prefers-reduced-motion`.
- **Mapa**: los nodos son enlaces HTML reales, así que funcionan con teclado y lector de pantalla. Las líneas son un SVG decorativo sobre la misma retícula. El resaltado usa CSS `:has()`. En pantallas de menos de 60rem se muestra una miniatura y la lista de casos.
- **Idiomas**: `i18n` de Astro con español por defecto, sin prefijo en la URL. El idioma de cada componente sale de `Astro.currentLocale`. Cada página declara su versión en el otro idioma con `hreflang`, y el selector ES/EN lleva a esa misma página.
- **Tema**: el oscuro sigue al sistema por defecto. El botón guarda la elección en `localStorage`, y un script en el `<head>` la aplica antes de pintar para evitar parpadeo.
- **CSS incrustado** en cada página (`inlineStylesheets: 'always'`) para evitar peticiones que bloquean el render.
