/**
 * Internacionalización: idiomas, rutas equivalentes y textos de interfaz.
 * Español es el idioma por defecto (sin prefijo); inglés vive bajo /en.
 */

export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

export const getLang = (locale: string | undefined): Lang => (locale === 'en' ? 'en' : 'es');

/** Marcador de información faltante, por idioma. */
export const PENDING = { es: '[POR COMPLETAR]', en: '[TO COMPLETE]' } as const;
export const isPendingValue = (v?: string | null) => !v || v === PENDING.es || v === PENDING.en;

/** Anclas de las secciones del inicio. */
export const anchors = {
  es: { cases: 'casos', experience: 'experiencia', stack: 'stack', process: 'como-trabajo', contact: 'contacto', ai: 'ia' },
  en: { cases: 'cases', experience: 'experience', stack: 'stack', process: 'how-i-work', contact: 'contact', ai: 'ai' },
} as const;

/** Rutas por idioma. */
export const paths = {
  home: (l: Lang) => (l === 'es' ? '/' : '/en'),
  about: (l: Lang) => (l === 'es' ? '/sobre-mi' : '/en/about'),
  case: (l: Lang, slug: string) => (l === 'es' ? `/casos/${slug}` : `/en/cases/${slug}`),
  section: (l: Lang, key: keyof (typeof anchors)['es']) => `${l === 'es' ? '/' : '/en'}#${anchors[l][key]}`,
};

/** Devuelve la ruta equivalente en el otro idioma. */
export const translatePath = (pathname: string, to: Lang): string => {
  const p = pathname.replace(/\/$/, '').replace(/\.html$/, '') || '/';
  const caseEs = p.match(/^\/casos\/([^/]+)$/);
  const caseEn = p.match(/^\/en\/cases\/([^/]+)$/);
  const slug = caseEs?.[1] ?? caseEn?.[1];
  if (slug) return paths.case(to, slug);
  if (p === '/sobre-mi' || p === '/en/about') return paths.about(to);
  return paths.home(to);
};

export const ui = {
  es: {
    skip: 'Saltar al contenido',
    homeLabel: 'inicio',
    navLabel: 'Principal',
    nav: { cases: 'Casos', experience: 'Experiencia', about: 'Sobre mí', contact: 'Contacto' },
    langLabel: 'Idioma',
    switchTo: 'Read in English',
    themeDark: 'Tema oscuro',
    contact: 'Contacto',
    rights: 'Todos los derechos reservados.',
    backToTop: 'Volver arriba',
    missing: 'Falta',
    cvDownload: 'Descargar CV',
    cvLinkedIn: 'Ver CV en LinkedIn',
    cvMissing: 'Falta el archivo public/cv.pdf',
    // Home
    available: 'Disponible.',
    rolesLabel: 'Roles',
    seeCases: 'Ver casos',
    mapAria: 'Plano del portafolio',
    casesLabel: 'Proyectos y casos',
    casesTitle: 'Qué he construido',
    casesIntro:
      'Separados por tipo: experiencia profesional, académica, proyectos personales y de formación. Cada caso sigue la misma estructura: contexto, problema, responsabilidad, solución, arquitectura, validación y resultado.',
    expLabel: 'Experiencia',
    expTitle: (n: number) => `${n} años entre backend, datos y full stack`,
    period: 'periodo',
    in: 'en',
    technologies: 'Tecnologías',
    readCase: 'Leer el caso',
    stackLabel: 'Stack técnico',
    stackTitle: 'Herramientas por área',
    stackIntro: 'Tecnologías usadas en experiencia profesional y proyectos. Sin niveles inventados: el detalle de uso está en cada caso.',
    processLabel: 'Cómo trabajo',
    processTitle: 'Del problema a una solución medible',
    processLoop: 'Mejorar vuelve a entender el problema: el ciclo se repite con lo aprendido.',
    processAi: 'Cómo uso IA dentro de este proceso',
    contactTitle: 'Hablemos',
    // Mapa
    mapCaption: 'Plano del sistema',
    mapHelp: 'Cada módulo es un caso. Actívalo para ver el resumen; ábrelo para leer el caso completo.',
    mapLegend: 'Leyenda de colores por eje',
    mapHubs: 'Ejes del plano',
    mapCases: 'Casos en el plano',
    mapThumb:
      'Miniatura del plano: la experiencia profesional arriba; datos, software y AI en el centro; proyectos abajo. La lista de casos está a continuación.',
    mapList: 'Ver todos los casos como lista',
    axes: 'Ejes',
    // Caso
    back: '← Volver al plano',
    caseAxes: 'Ejes del caso',
    facts: { type: 'Tipo', org: 'Organización', role: 'Rol', period: 'Periodo', category: 'Categoría', status: 'Estado' },
    inThisCase: 'En este caso',
    caseSections: 'Secciones del caso',
    otherCases: 'Otros casos',
    prev: 'Anterior',
    next: 'Siguiente',
    // Componentes de caso
    userStory: 'Historia de usuario',
    story: { as: 'Como', want: 'quiero', so: 'para', given: 'Dado que', when: 'Cuando', then: 'Entonces' },
    storyBenefit: 'beneficio',
    acceptance: 'Criterios de aceptación',
    before: 'Antes',
    after: 'Después',
    source: 'Fuente',
    process: 'Proceso',
    architecture: 'Arquitectura',
    diagramText: 'Descripción textual del diagrama',
    connections: 'Conexiones',
    towards: 'hacia',
    crossCutting: 'Transversal',
  },
  en: {
    skip: 'Skip to content',
    homeLabel: 'home',
    navLabel: 'Main',
    nav: { cases: 'Cases', experience: 'Experience', about: 'About', contact: 'Contact' },
    langLabel: 'Language',
    switchTo: 'Leer en español',
    themeDark: 'Dark theme',
    contact: 'Contact',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
    missing: 'Missing',
    cvDownload: 'Download CV',
    cvLinkedIn: 'View CV on LinkedIn',
    cvMissing: 'The file public/cv.pdf is missing',
    available: 'Available.',
    rolesLabel: 'Roles',
    seeCases: 'See cases',
    mapAria: 'Portfolio map',
    casesLabel: 'Projects and cases',
    casesTitle: 'What I have built',
    casesIntro:
      'Grouped by type: professional experience, academic work, personal projects and training projects. Every case follows the same structure: context, problem, responsibility, solution, architecture, validation and result.',
    expLabel: 'Experience',
    expTitle: (n: number) => `${n} years across backend, data and full stack`,
    period: 'period',
    in: 'at',
    technologies: 'Technologies',
    readCase: 'Read the case',
    stackLabel: 'Tech stack',
    stackTitle: 'Tools by area',
    stackIntro: 'Technologies used in professional experience and projects. No made-up skill levels: how each one was used is in the cases.',
    processLabel: 'How I work',
    processTitle: 'From the problem to a measurable solution',
    processLoop: 'Improving leads back to understanding the problem: the cycle repeats with what was learned.',
    processAi: 'How I use AI within this process',
    contactTitle: "Let's talk",
    mapCaption: 'System map',
    mapHelp: 'Each module is a case. Focus it to see the summary; open it to read the full case.',
    mapLegend: 'Color legend by axis',
    mapHubs: 'Map axes',
    mapCases: 'Cases on the map',
    mapThumb:
      'Map thumbnail: professional experience at the top; data, software and AI in the middle; projects at the bottom. The list of cases follows.',
    mapList: 'See all cases as a list',
    axes: 'Axes',
    back: '← Back to the map',
    caseAxes: 'Case axes',
    facts: { type: 'Type', org: 'Organization', role: 'Role', period: 'Period', category: 'Category', status: 'Status' },
    inThisCase: 'In this case',
    caseSections: 'Case sections',
    otherCases: 'Other cases',
    prev: 'Previous',
    next: 'Next',
    userStory: 'User story',
    story: { as: 'As', want: 'I want', so: 'so that', given: 'Given', when: 'When', then: 'Then' },
    storyBenefit: 'benefit',
    acceptance: 'Acceptance criteria',
    before: 'Before',
    after: 'After',
    source: 'Source',
    process: 'Process',
    architecture: 'Architecture',
    diagramText: 'Text description of the diagram',
    connections: 'Connections',
    towards: 'to',
    crossCutting: 'Cross-cutting',
  },
} as const;

export const useT = (lang: Lang) => ui[lang];
