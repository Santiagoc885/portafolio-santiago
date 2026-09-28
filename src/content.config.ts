import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Ejes del mapa principal a los que se conecta cada caso. */
export const hubs = ['experiencia', 'datos', 'software', 'ai', 'proyectos'] as const;

const casos = defineCollection({
  loader: glob({ base: './src/content/casos', pattern: '**/*.mdx' }),
  schema: z.object({
    title: z.string(),
    /** Etiqueta corta para el nodo del mapa. */
    mapLabel: z.string().max(22).optional(),
    summary: z.string().max(160),
    role: z.string(),
    period: z.string(),
    tools: z.array(z.string()).min(1),
    type: z.enum(['professional', 'academic', 'personal', 'training']),
    /** Etiqueta libre cuando el tipo combina categorías (p. ej. "Personal / Formación"). */
    typeLabel: z.string().optional(),
    category: z.string(),
    organization: z.string().optional(),
    status: z.string().optional(),
    order: z.number().int(),
    /** Ejes a los que el nodo se une con una línea en el mapa. */
    connects: z.array(z.enum(hubs)).min(1),
    /** Disciplinas del caso (color y chips). No dibujan líneas. */
    areas: z.array(z.enum(['datos', 'software', 'ai'])).min(1),
    /** Posición en la retícula del mapa: 12 columnas × 10 filas, base 1. */
    map: z.object({
      column: z.number().int().min(1).max(12),
      row: z.number().int().min(1).max(10),
      width: z.number().int().min(1).max(4),
      height: z.number().int().min(1).max(2),
    }),
  }),
});

export const collections = { casos };
