/**
 * Geometría del mapa principal.
 * Retícula de 12 columnas × 10 filas. Cada celda mide CELL_W × CELL_H unidades SVG,
 * y el contenedor HTML usa la misma proporción, así las líneas SVG y los nodos HTML coinciden.
 */
import { paths, type Lang } from '../i18n';

export const COLS = 12;
export const ROWS = 10;
export const CELL_W = 100;
export const CELL_H = 76;
export const VIEW_W = COLS * CELL_W;
export const VIEW_H = ROWS * CELL_H;

export type Box = { column: number; row: number; width: number; height: number };
export type HubId = 'experiencia' | 'datos' | 'software' | 'ai' | 'proyectos';

type Hub = { id: HubId; label: string; description: string; href: string; box: Box };

const boxes: Record<HubId, Box> = {
  experiencia: { column: 5, row: 2, width: 4, height: 1 },
  datos: { column: 1, row: 5, width: 3, height: 1 },
  software: { column: 5, row: 5, width: 4, height: 1 },
  ai: { column: 10, row: 5, width: 3, height: 1 },
  proyectos: { column: 5, row: 8, width: 4, height: 1 },
};

const hubText: Record<Lang, Record<HubId, { label: string; description: string }>> = {
  es: {
    experiencia: { label: 'Experiencia profesional', description: 'Backend, Business Intelligence y desarrollo Full Stack.' },
    datos: { label: 'Datos', description: 'SQL, análisis de datos, Power BI y automatización de reportes.' },
    software: { label: 'Software', description: 'Backend con Python y Django; full stack con TypeScript, React y Next.js.' },
    ai: { label: 'AI', description: 'LLMs, RAG y clasificación integrados en aplicaciones.' },
    proyectos: { label: 'Proyectos', description: 'Proyectos académicos, personales y de formación.' },
  },
  en: {
    experiencia: { label: 'Professional experience', description: 'Backend, Business Intelligence and Full Stack development.' },
    datos: { label: 'Data', description: 'SQL, data analysis, Power BI and report automation.' },
    software: { label: 'Software', description: 'Backend with Python and Django; full stack with TypeScript, React and Next.js.' },
    ai: { label: 'AI', description: 'LLMs, RAG and classification integrated into applications.' },
    proyectos: { label: 'Projects', description: 'Academic, personal and training projects.' },
  },
};

const hubHref = (id: HubId, l: Lang) =>
  ({
    experiencia: paths.section(l, 'experience'),
    datos: paths.section(l, 'stack'),
    software: paths.section(l, 'stack'),
    ai: `${paths.about(l)}#${l === 'es' ? 'ia' : 'ai'}`,
    proyectos: paths.section(l, 'cases'),
  })[id];

const hubIds: HubId[] = ['experiencia', 'datos', 'software', 'ai', 'proyectos'];

export const getHubs = (l: Lang): Hub[] =>
  hubIds.map((id) => ({ id, ...hubText[l][id], href: hubHref(id, l), box: boxes[id] }));

/** Conexiones estructurales entre ejes. */
export const hubLinks: [HubId, HubId][] = [
  ['experiencia', 'software'],
  ['datos', 'software'],
  ['software', 'ai'],
  ['software', 'proyectos'],
];

export const center = (b: Box) => ({
  x: (b.column - 1 + b.width / 2) * CELL_W,
  y: (b.row - 1 + b.height / 2) * CELL_H,
});

export const hubBox = (id: HubId) => boxes[id];

/** Posición CSS en porcentaje para un nodo HTML. */
export const boxStyle = (b: Box) =>
  `left:${((b.column - 1) / COLS) * 100}%;top:${((b.row - 1) / ROWS) * 100}%;width:${(b.width / COLS) * 100}%;height:${(b.height / ROWS) * 100}%`;

export const hubLabel = (id: HubId, l: Lang) => hubText[l][id].label;

/** Eje principal de un caso: su primera disciplina. */
export const primaryAxis = (areas: readonly HubId[]): HubId => areas[0];

/** Ejes de un caso para los chips: tipo (experiencia/proyectos) + disciplinas. */
export const caseAxes = (areas: readonly HubId[], type: string): HubId[] => [
  type === 'professional' ? 'experiencia' : 'proyectos',
  ...areas,
];
