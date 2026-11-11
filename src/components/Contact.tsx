import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { profile, whatsappHref } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { Reveal } from "./Reveal";

const contactLinks = [
  {
    icon: Mail,
    label: "Correo",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: profile.phoneDisplay,
    href: profile.phoneHref,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "yeison-velasco",
    href: profile.linkedin,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "Valcoing095",
    href: profile.github,
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: profile.location,
    href: undefined,
  },
];

export function Contact() {
  return (
    <section id="contacto" className="px-0 py-24">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.25rem] bg-brand px-6 py-14 shadow-card sm:px-12 lg:px-16 lg:py-20">
            <div className="dark-grid absolute inset-0" aria-hidden="true" />
            <div
              className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <span className="eyebrow-dark">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden="true" />
                  Contacto
                </span>
                <h2 className="mt-5 text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.7rem]">
                  ¿Construimos algo <span className="text-gradient">juntos</span>?
                </h2>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">
                  Estoy abierto a nuevos retos, proyectos freelance y oportunidades de
                  tiempo completo. Escríbeme y conversamos.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`mailto:${profile.email}`}
                    className="btn-light group"
                  >
                    Enviar correo
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost-dark"
                  >
                    <MessageCircle className="h-4 w-4 text-accent-300" aria-hidden="true" />
                    WhatsApp
                  </a>
                  <a href={profile.cv} download className="btn-ghost-dark">
                    <Download className="h-4 w-4 text-accent-300" aria-hidden="true" />
                    CV
                  </a>
                </div>
              </div>

              <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                {contactLinks.map(({ icon: Icon, label, value, href }) => {
                  const content = (
                    <>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-accent-300">
                        <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white/45">
                          {label}
                        </span>
                        <span className="block truncate text-sm font-semibold text-white/90">
                          {value}
                        </span>
                      </span>
                    </>
                  );

                  return (
                    <li key={label}>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition hover:border-white/25 hover:bg-white/[0.08]"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                          {content}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
