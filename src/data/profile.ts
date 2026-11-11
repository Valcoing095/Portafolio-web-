export const profile = {
  name: "Yeison Velasco",
  fullName: "Yeison Alexis Velasco Trejos",
  role: "Desarrollador Backend Semi Senior",
  email: "yvelasco321@gmail.com",
  phoneDisplay: "+57 302 247 5080",
  phoneHref: "tel:+573022475080",
  whatsapp: "573022475080",
  location: "Pereira, Risaralda, Colombia",
  github: "https://github.com/Valcoing095",
  linkedin: "https://linkedin.com/in/yeison-velasco-37104b1a3",
  cv: "/cv_yeison_velasco.pdf",
  summary:
    "Desarrollador backend con experiencia en la creación de soluciones innovadoras. Domino tecnologías como Node.js, Laravel y Angular, y destaco por mi capacidad de aprendizaje continuo. Actualmente me desempeño como desarrollador Semi Senior, participando en el diseño y construcción de microservicios y módulos empresariales.",
  stats: [
    { label: "Años de experiencia", value: "6+" },
    { label: "Proyectos construidos", value: "25+" },
    { label: "Frameworks", value: "6" },
    { label: "Empresas", value: "3" },
  ],
} as const;

export const whatsappHref = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
  "Hola Yeison, vi tu portafolio y quiero hablar contigo sobre un proyecto.",
)}`;

export type SkillGroup = {
  title: string;
  icon: "code" | "layers" | "wrench" | "languages";
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Lenguajes",
    icon: "code",
    items: ["Python", "JavaScript", "TypeScript", "PHP", "VB 6.0"],
  },
  {
    title: "Frameworks",
    icon: "layers",
    items: ["Laravel", "NestJS", "Node.js", "React", "Angular", "Django"],
  },
  {
    title: "Herramientas",
    icon: "wrench",
    items: ["Git", "Docker", "Linux", "SQL", "Postman"],
  },
  {
    title: "Idiomas",
    icon: "languages",
    items: ["Español — nativo", "Inglés — lectura técnica"],
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  current?: boolean;
  bullets: string[];
  tech: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Desarrollador Backend Semi Senior",
    company: "LinkTIC",
    period: "Mar 2025 — Presente",
    location: "Remoto",
    current: true,
    bullets: [
      "Análisis y levantamiento de requerimientos funcionales y técnicos.",
      "Diseño y modelado de bases de datos para nuevos módulos y microservicios.",
      "Definición e implementación de controladores y lógica de negocio.",
      "Desarrollo de microservicios con Laravel bajo arquitectura modular.",
      "Liderazgo técnico de un módulo completo, desde el diseño hasta producción.",
      "Pruebas de endpoints con Postman y pruebas unitarias para asegurar calidad.",
      "Contenerización de servicios con Docker para desarrollo y despliegue.",
    ],
    tech: ["Laravel", "PHP", "MySQL", "Docker", "Postman"],
  },
  {
    role: "Analista y Desarrollador de Sistemas",
    company: "Chevrolet Caminos",
    period: "2021 — Presente",
    location: "Pereira, Colombia",
    bullets: [
      "Mantenimiento y optimización del sistema in-house en Visual Basic.",
      "Desarrollo de un sistema de facturación electrónica en PHP.",
      "Migración de módulos de Visual Basic 6.0 a Laravel.",
      "Integración de la pasarela de pagos Wompi.",
      "Desarrollo de una plataforma de seguros en Node.js con webhooks en tiempo real.",
      "Creación y automatización de informes personalizados en MySQL.",
    ],
    tech: ["PHP", "Laravel", "Node.js", "Visual Basic", "MySQL", "Wompi"],
  },
  {
    role: "Desarrollador Frontend",
    company: "Tencoparque",
    period: "2020 — 2021",
    location: "Pereira, Colombia",
    bullets: [
      "Análisis y documentación de requisitos funcionales y no funcionales.",
      "Desarrollo de sistemas personalizados con componentes reutilizables.",
      "Pruebas exhaustivas y depuración de aplicaciones híbridas.",
    ],
    tech: ["JavaScript", "HTML", "CSS"],
  },
];

export type EducationItem = {
  title: string;
  org: string;
  place: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    title: "Tecnólogo en Análisis y Desarrollo de Sistemas de Información",
    org: "SENA CDITI",
    place: "Dosquebradas, Colombia",
    period: "2019 — 2021",
  },
  {
    title: "Bootcamp de Análisis de Datos",
    org: "Talentotech · MinTIC",
    place: "Colombia",
    period: "2024",
  },
];

export type ProjectCategory = "Web" | "Backend" | "IA" | "Automatización";

export type ProjectBadge =
  | "Destacado"
  | "Producción"
  | "Privado"
  | "Open source"
  | "Fork"
  | "En desarrollo";

export type Project = {
  name: string;
  tagline: string;
  category: ProjectCategory;
  tech: string[];
  repo?: string;
  live?: string;
  badge?: ProjectBadge;
  featured?: boolean;
  local?: boolean;
};

export const projects: Project[] = [
  {
    name: "Asesoría de Seguros",
    tagline:
      "Landing de captación para asesora de seguros: formulario de leads, CTA a WhatsApp y diseño responsive con animaciones.",
    category: "Web",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    repo: "https://github.com/Valcoing095/Asesoria-Seguros-",
    live: "https://asesoriaseguros.vercel.app",
    badge: "Destacado",
    featured: true,
  },
  {
    name: "Web Préstamos",
    tagline:
      "Front para gestionar préstamos: clientes, cuotas, pagos y dashboard con gráficas. Persistencia local sin backend.",
    category: "Web",
    tech: ["Angular", "TypeScript", "Chart.js", "Tailwind CSS"],
    repo: "https://github.com/Valcoing095/webPrestamos",
    live: "https://web-prestamos-xi.vercel.app",
    badge: "Destacado",
    featured: true,
  },
  {
    name: "La Chaza",
    tagline:
      "Landing de producto para un sistema integral de estanquillos: POS, domicilios, inventario, rutas y facturación con IVA.",
    category: "Web",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    badge: "Destacado",
    featured: true,
    local: true,
  },
  {
    name: "Finantra",
    tagline:
      "App de administración y educación financiera: presupuesto, transacciones, metas, calculadoras y dashboard con gráficas.",
    category: "Web",
    tech: ["React", "TypeScript", "Vite", "Recharts", "Zod"],
    badge: "Destacado",
    featured: true,
    local: true,
  },
  {
    name: "Portfolio",
    tagline: "Portafolio web personal para presentar perfil y proyectos.",
    category: "Web",
    tech: ["PHP", "HTML", "CSS"],
    repo: "https://github.com/Valcoing095/Portfolio",
    live: "https://portfolio-valcoing095s-projects.vercel.app",
    badge: "Producción",
  },
  {
    name: "Finazz Web",
    tagline: "Sistema de gestión financiera con enfoque en experiencia de usuario.",
    category: "Web",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/Valcoing095/FinazzWeb",
    live: "https://finazz-web.vercel.app",
    badge: "Producción",
  },
  {
    name: "brain_project",
    tagline:
      "IA local que analiza tu proyecto y responde dudas específicas de código y funcionalidades.",
    category: "IA",
    tech: ["Rust"],
    repo: "https://github.com/Valcoing095/brain_project",
    badge: "Open source",
  },
  {
    name: "Distributed Rate Limiter",
    tagline:
      "Reto nivel hard: limitador de tasa distribuido para APIs de alta concurrencia.",
    category: "Backend",
    tech: ["Python"],
    repo: "https://github.com/Valcoing095/Distributed-Rate-Limiter",
    badge: "Open source",
  },
  {
    name: "WhatsApp Automático",
    tagline:
      "Envío masivo de mensajes por WhatsApp con plantillas, carga desde Excel y automatización.",
    category: "Automatización",
    tech: ["Node.js", "whatsapp-web.js", "Python"],
    repo: "https://github.com/Valcoing095/whatsapp_automatic",
    badge: "Open source",
  },
  {
    name: "Finanzz API",
    tagline: "API de gestión financiera construida con NestJS y TypeScript.",
    category: "Backend",
    tech: ["NestJS", "TypeScript"],
    repo: "https://github.com/Valcoing095/finanzz-api",
  },
  {
    name: "Api Finanzz",
    tagline: "API financiera desarrollada con Laravel y Blade.",
    category: "Backend",
    tech: ["Laravel", "Blade", "PHP"],
    repo: "https://github.com/Valcoing095/Api-Finanzz",
  },
  {
    name: "Cafetería Web",
    tagline: "Sistema web para gestionar inventarios de cafetería.",
    category: "Web",
    tech: ["PHP", "MySQL"],
    repo: "https://github.com/Valcoing095/Cafeteria-web",
  },
  {
    name: "Inventory System",
    tagline: "Sistema de inventario para control de productos y stock.",
    category: "Backend",
    tech: ["Python"],
    repo: "https://github.com/Valcoing095/-Inventory-system",
  },
  {
    name: "Inventory Sietemapp",
    tagline: "Sistema web de inventario de equipos.",
    category: "Web",
    tech: ["Web", "Inventario"],
    repo: "https://github.com/Valcoing095/inventorySietemapp",
  },
  {
    name: "PatiGarras",
    tagline: "Página de preguntas y respuestas sobre gatos.",
    category: "Web",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/Valcoing095/patiGarras",
  },
  {
    name: "InlazeFriends",
    tagline: "Red social web con perfiles y conexiones.",
    category: "Web",
    tech: ["JavaScript"],
    repo: "https://github.com/Valcoing095/InlazeFriends",
  },
  {
    name: "apiFinanzz",
    tagline: "API financiera en JavaScript.",
    category: "Backend",
    tech: ["JavaScript"],
    repo: "https://github.com/Valcoing095/apiFinanzz",
  },
  {
    name: "Azure Lab",
    tagline:
      "Simulador de Azure para aprender DevOps sin cuenta ni costos: portal, Cloud Shell y 47 laboratorios.",
    category: "Web",
    tech: ["TypeScript", "DevOps"],
    repo: "https://github.com/Valcoing095/azure-lab",
    badge: "Fork",
  },
  {
    name: "AmuseAI",
    tagline: "IA local para generar imagen, video, audio y texto.",
    category: "IA",
    tech: ["C#", "IA local"],
    repo: "https://github.com/Valcoing095/AmuseAI",
    badge: "Fork",
  },
  {
    name: "Core Bank",
    tagline: "Core bancario de referencia para prácticas de arquitectura.",
    category: "Backend",
    tech: ["Java"],
    repo: "https://github.com/Valcoing095/core-bank",
    badge: "Fork",
  },
  {
    name: "La Chaza Web",
    tagline:
      "Aplicación web del sistema de gestión para estanquillos con Next.js y shadcn/ui.",
    category: "Web",
    tech: ["Next.js", "shadcn/ui", "Tailwind CSS"],
    badge: "Privado",
    local: true,
  },
  {
    name: "Zaria",
    tagline:
      "Réplica de la flagship virtual de ZARA: experiencia 3D inmersiva con React Three Fiber y animaciones.",
    category: "Web",
    tech: ["Next.js", "Three.js", "React Three Fiber", "TypeScript"],
    badge: "Privado",
    local: true,
  },
  {
    name: "Carta Web",
    tagline:
      "Carta digital interactiva: una experiencia web personal con diseño responsive y animaciones.",
    category: "Web",
    tech: ["Next.js", "shadcn/ui", "Tailwind CSS"],
    badge: "Privado",
    local: true,
  },
  {
    name: "Proyecto Jui",
    tagline: "Herramientas de red y registro desarrolladas en Python.",
    category: "Backend",
    tech: ["Python"],
    badge: "Privado",
    local: true,
  },
  {
    name: "Inversiones",
    tagline: "Automatización y análisis de inversiones con Python.",
    category: "Automatización",
    tech: ["Python"],
    badge: "Privado",
    local: true,
  },
];

export const projectCategories: Array<"Todos" | ProjectCategory> = [
  "Todos",
  "Web",
  "Backend",
  "IA",
  "Automatización",
];
