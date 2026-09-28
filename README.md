# Portafolio · Román Santiago Chaparro Lozano

Portafolio personal de un **Ingeniero de Datos y Software**, construido como *un sistema que conecta software, datos y negocio*. La experiencia profesional, los proyectos, los datos y la IA aparecen como módulos de un mismo plano. Cada proyecto se documenta como caso de estudio: contexto, problema, responsabilidad, solución, arquitectura, validación, resultado y aprendizajes.

**Stack:** Astro 7 · TypeScript · CSS · SVG · MDX · Sitio estático bilingüe (ES / EN)

---

## Características

- **Mapa interactivo del sistema.** Los casos son nodos conectados a los ejes *Experiencia*, *Datos*, *Software*, *AI* y *Proyectos*. Cada nodo es un enlace real, así que funciona con teclado y lector de pantalla. Las líneas son SVG y se dibujan al cargar.
- **Casos de estudio en MDX,** con componentes propios:
  - `ArchitectureDiagram`: diagramas de arquitectura en SVG.
  - `ProcessMap`: flujos por carriles.
  - `UserStory`: historias de usuario con criterios de aceptación.
  - `Metric`: métricas antes → después.
  - `Fact`: datos destacados.
- **Español e inglés** con rutas propias (`/` y `/en`). El selector ES / EN lleva a la misma página en el otro idioma y cada página declara su `hreflang`.
- **Tema claro y oscuro.** Sigue al sistema por defecto y recuerda la elección del visitante, sin parpadeo al cargar.
- **Colores por eje.** Cada eje tiene su color en el mapa, los casos y el stack, siempre acompañado de texto.
- **Sin información inventada.** Todo lo que no está confirmado se muestra como `[POR COMPLETAR]` en lugar de rellenarse.

## Calidad

Resultados de Lighthouse en móvil, medidos en local sobre el build de producción:

| Rendimiento | Accesibilidad | SEO | Buenas prácticas |
| :-: | :-: | :-: | :-: |
| 96–100 | 100 | 100 | 78 en local* |

\* Baja solo porque la medición local usa `http://`. Con HTTPS en el despliegue desaparece.

- **Cero archivos JavaScript.** El único script son unas líneas incrustadas en la página para el botón de tema.
- **HTML estático** con CSS incrustado en cada página y la fuente autoalojada y precargada.
- **Accesibilidad WCAG AA:**
  - Contraste verificado en ambos temas.
  - Foco visible y navegación completa por teclado.
  - Enlace para saltar al contenido.
  - Descripción textual de cada diagrama.
  - Con `prefers-reduced-motion` se desactiva todo el movimiento, salvo el fundido de los roles.
- **Responsive:** verificado sin desbordamiento horizontal en 13 páginas y en anchos de 320, 375, 768, 1024 y 1440 px.

## Empezar

Requiere **Node.js 22.12 o superior**.

```sh
npm install
npm run dev       # desarrollo en http://localhost:4321
npm run build     # verificación de tipos (astro check) + build estático en dist/
npm run preview   # sirve dist/ localmente
```

## Estructura

```text
src/
├── content/casos/
│   ├── es/*.mdx          # casos de estudio en español
│   └── en/*.mdx          # la misma ruta y nombre de archivo, en inglés
├── content.config.ts     # schema (Zod) de los casos
├── data/
│   ├── profile.ts        # perfil, experiencia, stack y proceso (ES y EN)
│   └── map.ts            # ejes del mapa y su posición en la retícula
├── i18n/index.ts         # idiomas, rutas y textos de interfaz
├── views/                # páginas compartidas por ambos idiomas
│   ├── Home.astro
│   ├── About.astro       # textos de "Sobre mí"
│   └── CasePage.astro
├── pages/                # rutas: /, /sobre-mi, /casos/[slug], /en/…, 404, robots.txt
├── components/           # mapa, índice de casos, roles, logo, contacto…
│   └── case/             # componentes disponibles dentro del MDX
├── layouts/Base.astro    # <head>, barra fija, selector de idioma y tema, pie
└── styles/global.css     # tokens de color, tipografía y reglas globales
```

## Editar el contenido

| Quiero cambiar… | Archivo |
| --- | --- |
| Nombre, enlaces, disponibilidad, experiencia, stack | `src/data/profile.ts` |
| Textos de "Sobre mí" | `src/views/About.astro` (objeto `copy`, con `es` y `en`) |
| Un caso de estudio | `src/content/casos/es/<caso>.mdx` y su par en `en/` |
| Textos de botones, menú y etiquetas | `src/i18n/index.ts` |
| Colores de fondo, texto o ejes | `src/styles/global.css` (variables en `:root`) |
| CV | Pon el PDF en `public/cv.pdf`: el botón pasa de "Ver CV en LinkedIn" a "Descargar CV" |

### Añadir un caso de estudio

1. Crea `src/content/casos/es/<slug>.mdx` y su traducción `src/content/casos/en/<slug>.mdx`, con el mismo nombre de archivo.
2. Completa el frontmatter. El schema lo valida al compilar:

   ```yaml
   title: Nombre del proyecto
   mapLabel: Nombre corto      # etiqueta del nodo en el mapa (máx. 22 caracteres)
   summary: "Una frase de hasta 160 caracteres."
   role: Full Stack Developer
   period: "2026"
   tools: [Next.js, PostgreSQL]
   type: training              # professional | academic | personal | training
   category: Software + AI
   order: 8                    # orden en listas y navegación entre casos
   connects: [proyectos]       # ejes unidos con una línea en el mapa
   areas: [software, ai]       # disciplinas: color y etiquetas
   map: { column: 5, row: 10, width: 3, height: 1 }   # posición en la retícula 12 × 10
   ```

3. Escribe el cuerpo con las secciones `## Contexto`, `## Problema`, `## Mi responsabilidad`… Los componentes de `src/components/case/` se usan sin importarlos.

Se publica en `/casos/<slug>` y en `/en/cases/<slug>`, y aparece solo en el mapa y en el índice.

## Despliegue

`dist/` es un sitio estático: sirve en Netlify, Vercel, Cloudflare Pages, GitHub Pages o Azure Static Web Apps.

Define el dominio final con la variable `SITE_URL`. Se usa para el canonical, los `hreflang`, el sitemap y `robots.txt`:

```sh
SITE_URL=https://tu-dominio.com npm run build
```

En Netlify, Vercel o Cloudflare Pages, configura `SITE_URL` como variable de entorno del proyecto, con el comando `npm run build` y el directorio de salida `dist`.

## Decisiones técnicas

- **Tipografía:** una sola familia, Archivo Variable, con ejes de peso (100–900) y ancho (62–125 %). Se carga con la Fonts API de Astro y el proveedor `local`, porque los proveedores remotos no garantizan el eje de ancho. Se autoaloja solo el subset latino (~90 KB).
- **View Transitions nativas del navegador** (`@view-transition` en CSS), sin `<ClientRouter />`: animan la navegación sin añadir JavaScript.
- **Mapa sin JavaScript:** los nodos HTML y las líneas SVG comparten la misma retícula. El resaltado al pasar el cursor o enfocar usa CSS `:has()`.
- **Idioma por URL:** cada componente obtiene el idioma de `Astro.currentLocale`, en lugar de recibirlo página por página.
- **Tema sin parpadeo:** un script de pocas líneas en el `<head>` aplica el tema guardado antes de pintar la página.

## Créditos

- Tipografía [Archivo](https://github.com/Omnibus-Type/Archivo) de Omnibus-Type, bajo SIL Open Font License (`src/assets/fonts/OFL.txt`).
- Construido con [Astro](https://astro.build).

---

**Contacto:** [romansantiago.ch@gmail.com](mailto:romansantiago.ch@gmail.com) · [LinkedIn](https://www.linkedin.com/in/santiago-chaparro-dev/) · [GitHub](https://github.com/Santiagoc885)
