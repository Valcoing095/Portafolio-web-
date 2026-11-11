import { ArrowUp, Mail } from "lucide-react";
import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const quickLinks = [
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "stack", label: "Stack" },
  { id: "proyectos", label: "Proyectos" },
  { id: "experiencia", label: "Experiencia" },
  { id: "contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-white px-0 py-14">
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#inicio" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-sm font-extrabold text-white">
                YV
              </span>
              <span className="leading-tight">
                <span className="block text-base font-bold text-brand">{profile.name}</span>
                <span className="block text-[0.6rem] font-bold uppercase tracking-[0.18em] text-muted">
                  Backend & Full Stack
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {profile.fullName}. Construyendo productos web, APIs y microservicios con
              foco en calidad y experiencia.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-xl border border-line text-brand transition hover:border-brand-200 hover:bg-brand-50"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-xl border border-line text-brand transition hover:border-brand-200 hover:bg-brand-50"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="grid h-10 w-10 place-items-center rounded-xl border border-line text-brand transition hover:border-brand-200 hover:bg-brand-50"
                aria-label="Correo"
              >
                <Mail className="h-4.5 w-4.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-brand">Navegación</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="transition hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-brand">Contacto</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <a href={`mailto:${profile.email}`} className="transition hover:text-brand">
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={profile.phoneHref} className="transition hover:text-brand">
                  {profile.phoneDisplay}
                </a>
              </li>
              <li>{profile.location}</li>
              <li>
                <a
                  href={profile.cv}
                  download
                  className="font-semibold text-accent-700 transition hover:text-accent-600"
                >
                  Descargar CV
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. Hecho con React, TypeScript y
            Tailwind CSS.
          </p>
          <a
            href="#inicio"
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-semibold text-brand transition hover:border-brand-200 hover:bg-brand-50"
          >
            Volver arriba
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
