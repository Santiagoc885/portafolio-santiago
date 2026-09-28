/**
 * Fuente única de datos del perfil, en español e inglés.
 * Todo valor `null` se muestra en el sitio como [POR COMPLETAR] / [TO COMPLETE].
 * No agregar información que no esté confirmada.
 */
import type { Lang } from '../i18n';

/** Datos que no cambian con el idioma. */
export const profile = {
  name: 'Román Santiago Chaparro Lozano',
  shortName: 'Santiago Chaparro',
  positioning: ['Software Engineer', 'Full Stack Developer', 'Data Analyst', 'Business Intelligence', 'AI', 'Cloud'],
  city: 'Medellín, Colombia',
  experienceYears: 2,
  links: {
    email: 'romansantiago.ch@gmail.com' as string | null,
    linkedin: 'https://www.linkedin.com/in/santiago-chaparro-dev/' as string | null,
    github: 'https://github.com/Santiagoc885' as string | null,
  },
  /** Ruta pública del CV. Si existe public/cv.pdf se ofrece la descarga. */
  cvPath: '/cv.pdf',
  /** Mientras no exista el PDF, el CV se consulta en LinkedIn. */
  cvFallbackUrl: 'https://www.linkedin.com/in/santiago-chaparro-dev/' as string | null,
};

/** Eje de color de cada término del posicionamiento. */
export const positioningAxis: Record<string, string> = {
  'Software Engineer': 'software',
  'Full Stack Developer': 'software',
  'Data Analyst': 'datos',
  'Business Intelligence': 'datos',
  AI: 'ai',
};

const text = {
  es: {
    title: 'Ingeniero de Datos y Software',
    statement:
      'Desarrollo software, analizo datos y convierto necesidades de negocio en soluciones que se pueden construir, medir y mejorar.',
    summary:
      'Ingeniero de Datos y Software con 2 años de experiencia desarrollando soluciones backend con Python y Django, y aplicaciones full stack con TypeScript, React y Next.js. Experiencia en análisis de datos, Business Intelligence, integración de bases de datos relacionales y desarrollo de soluciones orientadas a las necesidades del negocio, con conocimientos en servicios cloud Azure. Acostumbrado a trabajar bajo metodologías ágiles (Scrum) y en equipos de desarrollo colaborativo.',
    availability: 'Abierto a oportunidades remotas y a roles de desarrollo de software, datos y Business Intelligence.',
    description:
      'Ingeniero de Datos y Software en Medellín, Colombia. Backend con Python y Django, full stack con TypeScript y Next.js, análisis de datos y Business Intelligence.',
  },
  en: {
    title: 'Data and Software Engineer',
    statement:
      'I build software, analyze data and turn business needs into solutions that can be built, measured and improved.',
    summary:
      'Data and Software Engineer with 2 years of experience building backend solutions with Python and Django, and full stack applications with TypeScript, React and Next.js. Experience in data analysis, Business Intelligence, relational database integration and building solutions around business needs, with knowledge of Azure cloud services. Used to working with agile methodologies (Scrum) and in collaborative development teams.',
    availability: 'Open to remote opportunities and to software development, data and Business Intelligence roles.',
    description:
      'Data and Software Engineer based in Medellín, Colombia. Backend with Python and Django, full stack with TypeScript and Next.js, data analysis and Business Intelligence.',
  },
};

export const getText = (l: Lang) => text[l];

export type ExperienceItem = {
  organization: string;
  role: string;
  period: string | null;
  mode?: string;
  context?: string;
  tools: string[];
  highlights: string[];
  facts?: string[];
  pending?: string[];
  caseSlug?: string;
};

/** Experiencia profesional, de la más reciente a la más antigua. */
const experience: Record<Lang, ExperienceItem[]> = {
  es: [
    {
      organization: 'Riwi',
      role: 'Full Stack Developer',
      period: '2026 – Actualidad',
      context:
        'Programa de formación intensiva orientado al desarrollo Full Stack y AI, con trabajo bajo Scrum y en equipos colaborativos.',
      tools: ['React', 'Next.js', 'TypeScript', 'Python', 'SQL', 'Git', 'GitHub', 'APIs', 'JWT'],
      highlights: [
        'Desarrollo de aplicaciones Full Stack, con funcionalidades de frontend y backend.',
        'Autenticación, CRUD, dashboards y estructuras multi-tenant.',
        'Proyectos integradores desarrollados en equipo, con Git y code reviews.',
        'Trabajo bajo metodologías ágiles (Scrum).',
      ],
      facts: ['5 proyectos, en equipos de 5 personas bajo Scrum.'],
      caseSlug: 'riwlog',
    },
    {
      organization: 'Grupo ISA / XM',
      role: 'Practicante de Software Asset Management / Business Intelligence',
      period: 'Julio 2023 – Enero 2024',
      mode: 'Híbrida',
      tools: ['Power BI', 'Python', 'Excel', 'SharePoint', 'Service Desk'],
      highlights: [
        'Construcción de dashboards en Power BI sobre activos y licencias de software.',
        'Procesamiento y análisis de datos con Python.',
        'Automatización de reportes periódicos.',
        'Identificación de licencias sin uso o subutilizadas para apoyar decisiones sobre activos de software.',
      ],
      facts: ['Más de 10.000 registros analizados.', 'Preparación de reportes: de 1 día a 3 horas tras automatizarlos.'],
      caseSlug: 'isa-xm-activos-software',
    },
    {
      organization: 'PHC Servicios Integrados',
      role: 'Backend Developer',
      period: 'Septiembre 2022 – Junio 2023',
      tools: ['Python', 'Django', 'SQL', 'APIs', 'Git', 'Scrum'],
      highlights: [
        'Desarrollo de módulos backend con Python y Django.',
        'Integración con bases de datos relacionales e implementación de lógica de negocio.',
        'Desarrollo e integración de APIs.',
        'Trabajo en equipo bajo Scrum, con Git.',
      ],
      facts: ['2 módulos backend y 2 APIs, en un equipo de unas 3 personas.'],
      caseSlug: 'phc-backend',
    },
  ],
  en: [
    {
      organization: 'Riwi',
      role: 'Full Stack Developer',
      period: '2026 – Present',
      context: 'Intensive training program focused on Full Stack development and AI, working with Scrum in collaborative teams.',
      tools: ['React', 'Next.js', 'TypeScript', 'Python', 'SQL', 'Git', 'GitHub', 'APIs', 'JWT'],
      highlights: [
        'Full Stack application development, covering frontend and backend features.',
        'Authentication, CRUD, dashboards and multi-tenant structures.',
        'Team capstone projects, using Git and code reviews.',
        'Agile work (Scrum).',
      ],
      facts: ['5 projects, in teams of 5 people under Scrum.'],
      caseSlug: 'riwlog',
    },
    {
      organization: 'Grupo ISA / XM',
      role: 'Software Asset Management / Business Intelligence Intern',
      period: 'July 2023 – January 2024',
      mode: 'Hybrid',
      tools: ['Power BI', 'Python', 'Excel', 'SharePoint', 'Service Desk'],
      highlights: [
        'Built Power BI dashboards on software assets and licenses.',
        'Processed and analyzed data with Python.',
        'Automated periodic reports.',
        'Identified unused or underused licenses to support decisions on software assets.',
      ],
      facts: ['More than 10,000 records analyzed.', 'Report preparation: from 1 day to 3 hours after automation.'],
      caseSlug: 'isa-xm-activos-software',
    },
    {
      organization: 'PHC Servicios Integrados',
      role: 'Backend Developer',
      period: 'September 2022 – June 2023',
      tools: ['Python', 'Django', 'SQL', 'APIs', 'Git', 'Scrum'],
      highlights: [
        'Built backend modules with Python and Django.',
        'Integrated relational databases and implemented business logic.',
        'Built and integrated APIs.',
        'Teamwork under Scrum, using Git.',
      ],
      facts: ['2 backend modules and 2 APIs, in a team of about 3 people.'],
      caseSlug: 'phc-backend',
    },
  ],
};

export const getExperience = (l: Lang) => experience[l];

export type StackGroup = { id: string; label: string; hub?: 'datos' | 'software' | 'ai'; items: string[]; note?: string };

const stack: Record<Lang, StackGroup[]> = {
  es: [
    { id: 'backend', label: 'Backend', hub: 'software', items: ['Python', 'Django', 'Node.js', 'Express', 'FastAPI'] },
    { id: 'frontend', label: 'Frontend', hub: 'software', items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'HTML', 'CSS'] },
    { id: 'db', label: 'Bases de datos', hub: 'datos', items: ['SQL', 'PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Prisma'] },
    {
      id: 'data',
      label: 'Datos y Business Intelligence',
      hub: 'datos',
      items: ['Power BI', 'Python', 'SQL', 'Análisis de datos', 'Automatización de reportes', 'Dashboards'],
    },
    {
      id: 'ai',
      label: 'AI',
      hub: 'ai',
      items: ['LLMs', 'RAG', 'Embeddings', 'Bases de datos vectoriales', 'Prompt engineering', 'Integración de IA en aplicaciones'],
    },
    { id: 'cloud', label: 'Cloud', items: ['Azure', 'AWS (conceptos)'], note: 'Azure trabajado en el proyecto de formación Centinela.' },
    { id: 'tools', label: 'Herramientas y práctica', items: ['Git', 'GitHub', 'Jira', 'Scrum', 'Linux / WSL', 'Clean Code'] },
  ],
  en: [
    { id: 'backend', label: 'Backend', hub: 'software', items: ['Python', 'Django', 'Node.js', 'Express', 'FastAPI'] },
    { id: 'frontend', label: 'Frontend', hub: 'software', items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'HTML', 'CSS'] },
    { id: 'db', label: 'Databases', hub: 'datos', items: ['SQL', 'PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Prisma'] },
    {
      id: 'data',
      label: 'Data and Business Intelligence',
      hub: 'datos',
      items: ['Power BI', 'Python', 'SQL', 'Data analysis', 'Report automation', 'Dashboards'],
    },
    {
      id: 'ai',
      label: 'AI',
      hub: 'ai',
      items: ['LLMs', 'RAG', 'Embeddings', 'Vector databases', 'Prompt engineering', 'AI integration in applications'],
    },
    { id: 'cloud', label: 'Cloud', items: ['Azure', 'AWS (concepts)'], note: 'Azure used in the Centinela training project.' },
    { id: 'tools', label: 'Tools and practice', items: ['Git', 'GitHub', 'Jira', 'Scrum', 'Linux / WSL', 'Clean Code'] },
  ],
};

export const getStack = (l: Lang) => stack[l];

/** Proceso de trabajo. Cada paso describe una acción concreta, sin adornos. */
const processSteps = {
  es: [
    { step: 'Entender el problema', detail: 'Quién lo tiene, qué decisión o tarea bloquea y cómo se nota que está resuelto.' },
    { step: 'Analizar la información', detail: 'Revisar los datos y procesos existentes antes de proponer tecnología.' },
    { step: 'Diseñar la solución', detail: 'Definir alcance, modelo de datos, flujos y arquitectura mínima que resuelve el caso.' },
    { step: 'Desarrollar', detail: 'Entregas pequeñas, control de versiones con Git y revisión de código en equipo.' },
    { step: 'Validar', detail: 'Comprobar el comportamiento contra los criterios acordados con quien usa la solución.' },
    { step: 'Medir', detail: 'Definir qué indicador debería cambiar y registrarlo antes y después.' },
    { step: 'Mejorar', detail: 'Iterar sobre lo que muestran los datos y la retroalimentación, no sobre suposiciones.' },
  ],
  en: [
    { step: 'Understand the problem', detail: 'Who has it, which decision or task it blocks, and how we will know it is solved.' },
    { step: 'Analyze the information', detail: 'Review the existing data and processes before proposing technology.' },
    { step: 'Design the solution', detail: 'Define scope, data model, flows and the minimum architecture that solves the case.' },
    { step: 'Build', detail: 'Small deliveries, version control with Git and team code reviews.' },
    { step: 'Validate', detail: 'Check the behavior against the criteria agreed with the people who use the solution.' },
    { step: 'Measure', detail: 'Define which indicator should change and record it before and after.' },
    { step: 'Improve', detail: 'Iterate on what the data and feedback show, not on assumptions.' },
  ],
};

export const getProcess = (l: Lang) => processSteps[l];

export const typeLabels = {
  es: {
    professional: 'Experiencia profesional',
    academic: 'Experiencia académica',
    personal: 'Proyecto personal',
    training: 'Proyecto de formación',
  },
  en: {
    professional: 'Professional experience',
    academic: 'Academic experience',
    personal: 'Personal project',
    training: 'Training project',
  },
} as const;

export const typeOrder = ['professional', 'academic', 'personal', 'training'] as const;
