import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Globe,
  Lock,
  Search,
  Server,
  Workflow,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  projects,
  type Project,
  type ProjectBadge,
  type ProjectCategory,
} from "../data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const PAGE_SIZE = 6;

type ProjectFilter = "Todos" | "Destacados" | ProjectCategory;

const filters: ProjectFilter[] = [
  "Todos",
  "Destacados",
  "Web",
  "Backend",
  "IA",
  "Automatización",
];

const categoryIcon: Record<ProjectCategory, typeof Globe> = {
  Web: Globe,
  Backend: Server,
  IA: Bot,
  Automatización: Workflow,
};

const badgeStyle: Record<ProjectBadge, string> = {
  Destacado: "border-accent-200 bg-accent-50 text-accent-700",
  Producción: "border-emerald-200 bg-emerald-50 text-emerald-700",
  Privado: "border-line bg-cloud text-muted",
  "Open source": "border-brand-200 bg-brand-50 text-brand-700",
  Fork: "border-amber-200 bg-amber-50 text-amber-700",
  "En desarrollo": "border-sky-200 bg-sky-50 text-sky-700",
};

function ProjectCard({ project }: { project: Project }) {
  const Icon = categoryIcon[project.category];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`group relative flex h-full flex-col rounded-3xl border bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-float ${
        project.featured
          ? "border-accent-200 ring-1 ring-accent-100"
          : "border-line hover:border-accent-200"
      }`}
    >
      {project.featured ? (
        <span className="absolute right-5 top-0 h-1 w-14 -translate-y-1/2 rounded-full bg-accent-400" />
      ) : null}

      <div className="flex items-start justify-between gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        {project.badge ? (
          <span
            className={`rounded-full border px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-wider ${badgeStyle[project.badge]}`}
          >
            {project.badge}
          </span>
        ) : null}
      </div>

      <p className="mt-4 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-accent-700">
        {project.category}
      </p>
      <h3 className="mt-1 text-lg font-bold text-brand">{project.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{project.tagline}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-cloud px-2.5 py-1 text-[0.68rem] font-semibold text-brand-700"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-brand-800"
          >
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            Ver web
          </a>
        ) : null}
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-2 text-xs font-semibold text-brand transition hover:border-brand-200 hover:bg-brand-50"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            Código
          </a>
        ) : null}
        {!project.live && !project.repo ? (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-cloud px-3.5 py-2 text-xs font-semibold text-muted">
            <Lock className="h-3.5 w-3.5" aria-hidden="true" />
            Proyecto privado
          </span>
        ) : null}
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("Todos");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [filter, query]);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesFilter =
        filter === "Todos" ||
        (filter === "Destacados"
          ? Boolean(project.featured)
          : project.category === filter);

      if (!matchesFilter) return false;
      if (!term) return true;

      return [project.name, project.tagline, project.category, ...project.tech]
        .join(" ")
        .toLowerCase()
        .includes(term);
    });
  }, [filter, query]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const isFiltered = filter !== "Todos" || query.trim().length > 0;

  function resetFilters() {
    setFilter("Todos");
    setQuery("");
  }

  return (
    <section id="proyectos" className="px-0 py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Proyectos"
            title={
              <>
                Cosas que he <span className="text-accent-600">construido</span>
              </>
            }
            copy="Una selección de proyectos reales, retos y experimentos. Filtra por categoría o busca por tecnología para encontrar lo que te interesa."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 rounded-3xl border border-line bg-cloud p-4 sm:p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div
                className="flex flex-wrap gap-2"
                role="group"
                aria-label="Filtrar proyectos por categoría"
              >
                {filters.map((category) => {
                  const isActive = filter === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setFilter(category)}
                      aria-pressed={isActive}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                        isActive
                          ? "bg-brand text-white shadow-soft"
                          : "border border-line bg-white text-brand hover:border-brand-200 hover:bg-brand-50"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              <div className="relative w-full lg:max-w-xs">
                <Search
                  className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Buscar por nombre o tecnología"
                  aria-label="Buscar proyectos"
                  className="w-full rounded-full border border-line bg-white py-2.5 pl-10 pr-10 text-sm text-ink outline-none transition placeholder:text-muted/60 hover:border-brand-200 focus:border-accent-400 focus:ring-4 focus:ring-accent-100"
                />
                {query ? (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Limpiar búsqueda"
                    className="absolute right-2.5 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center rounded-full text-muted transition hover:bg-brand-50 hover:text-brand"
                  >
                    <X className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                ) : null}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-4 text-xs font-semibold text-muted">
              <p>
                Mostrando {visible.length} de {filtered.length} proyecto
                {filtered.length === 1 ? "" : "s"}
              </p>
              {isFiltered ? (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="rounded-full border border-line bg-white px-3 py-1.5 font-semibold text-brand transition hover:border-brand-200 hover:bg-brand-50"
                >
                  Limpiar filtros
                </button>
              ) : null}
            </div>
          </div>
        </Reveal>

        {filtered.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-dashed border-line bg-cloud px-6 py-14 text-center">
            <p className="text-base font-bold text-brand">
              No encontré proyectos con ese filtro.
            </p>
            <p className="mt-1 text-sm text-muted">
              Prueba con otra categoría o limpia la búsqueda.
            </p>
            <button type="button" onClick={resetFilters} className="btn-outline mt-5">
              Limpiar filtros
            </button>
          </div>
        ) : (
          <motion.div layout className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {filtered.length > 0 && (hasMore || visibleCount > PAGE_SIZE) ? (
          <div className="mt-10 flex justify-center">
            {hasMore ? (
              <button
                type="button"
                onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                className="btn-outline"
              >
                Ver más proyectos
                <span className="rounded-full bg-accent-50 px-2 py-0.5 text-[0.68rem] font-bold text-accent-700">
                  +{Math.min(PAGE_SIZE, filtered.length - visibleCount)}
                </span>
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setVisibleCount(PAGE_SIZE)}
                className="btn-outline"
              >
                Ver menos
                <ChevronUp className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </div>
        ) : null}

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl border border-line bg-cloud px-6 py-6 sm:flex-row">
            <p className="text-sm font-medium text-muted">
              Hay más código en mi GitHub. Explora todos los repositorios públicos.
            </p>
            <a
              href="https://github.com/Valcoing095"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0"
            >
              Ver GitHub
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
