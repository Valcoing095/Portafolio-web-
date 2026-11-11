import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Code2,
  Database,
  Download,
  Mail,
  MapPin,
  Server,
  Sparkles,
} from "lucide-react";
import { profile, whatsappHref } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const trust = [
  "6+ años construyendo software",
  "Backend, APIs y microservicios",
  "Disponible para nuevos retos",
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-cloud pb-20 pt-28 sm:pt-32 lg:pb-28"
    >
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -left-28 top-36 h-72 w-72 rounded-full bg-accent-100/70 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-brand-100/70 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.06fr_0.94fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
            Desarrollador Backend Semi Senior
          </span>

          <h1 className="mt-6 text-[2.35rem] font-extrabold leading-[1.05] tracking-[-0.035em] text-brand sm:text-5xl lg:text-[3.65rem]">
            Construyo <span className="highlight text-accent-700">productos web</span> que
            escalan y se sienten bien
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Soy {profile.name}, desarrollador backend y full stack. Diseño APIs,
            microservicios y experiencias web con Laravel, NestJS, React y Angular.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#proyectos" className="btn-primary group">
              Ver proyectos
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <a href={profile.cv} download className="btn-outline group">
              <Download className="h-4 w-4 text-accent-600" aria-hidden="true" />
              Descargar CV
            </a>
          </div>

          <div className="mt-7 flex items-center gap-2.5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white text-brand transition hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50"
              aria-label="GitHub de Yeison Velasco"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white text-brand transition hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50"
              aria-label="LinkedIn de Yeison Velasco"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white text-brand transition hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50"
              aria-label="Enviar correo a Yeison Velasco"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white text-brand transition hover:-translate-y-0.5 hover:border-accent-200 hover:bg-accent-50"
              aria-label="Escribir por WhatsApp"
            >
              <Sparkles className="h-5 w-5 text-accent-600" aria-hidden="true" />
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2.5">
            {trust.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-xs font-semibold text-muted sm:text-sm"
              >
                <span className="grid h-4.5 w-4.5 place-items-center rounded-full bg-accent-100 text-accent-700">
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 flex items-center gap-2 text-xs font-medium text-muted">
            <MapPin className="h-4 w-4 text-brand-400" aria-hidden="true" />
            {profile.location}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[26rem] lg:max-w-none"
        >
          <div
            className="absolute -inset-4 rounded-[2.75rem] bg-gradient-to-br from-accent-200/70 via-white to-brand-100/60 blur-2xl"
            aria-hidden="true"
          />

          <div className="relative rounded-[2.25rem] border border-white bg-white/85 p-2.5 shadow-card backdrop-blur">
            <div className="overflow-hidden rounded-[1.8rem] bg-brand-900 text-left">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-2 font-mono text-[0.68rem] text-white/45">
                  yeison@portfolio ~ %
                </span>
              </div>
              <div className="space-y-4 px-5 py-6 font-mono text-[0.78rem] leading-relaxed sm:text-[0.84rem]">
                <div>
                  <p className="text-accent-300">~/yeison $ whoami</p>
                  <p className="mt-1 text-white/85">{profile.fullName}</p>
                  <p className="text-white/55">{profile.role}</p>
                </div>
                <div>
                  <p className="text-accent-300">~/yeison $ stack --top</p>
                  <p className="mt-1 text-white/80">
                    Laravel · NestJS · React · Angular
                  </p>
                </div>
                <div>
                  <p className="text-accent-300">~/yeison $ status</p>
                  <p className="mt-1 flex items-center gap-2 text-white/85">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
                    </span>
                    Disponible para nuevos retos
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 border-t border-white/10">
                {[
                  { icon: Server, label: "Backend" },
                  { icon: Database, label: "Datos" },
                  { icon: Code2, label: "Frontend" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-1.5 border-r border-white/10 py-4 text-white/70 last:border-r-0"
                  >
                    <Icon className="h-4 w-4 text-accent-300" aria-hidden="true" />
                    <span className="text-[0.62rem] font-semibold uppercase tracking-wider">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -right-2 top-10 hidden items-center gap-2.5 rounded-2xl border border-line bg-white/95 px-3.5 py-3 shadow-float backdrop-blur sm:flex lg:-right-6">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-50 text-accent-600">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-bold text-brand">Semi Senior</p>
              <p className="text-[0.65rem] text-muted">LinkTIC · 2025</p>
            </div>
          </div>

          <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2.5 rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-float backdrop-blur sm:left-5 sm:translate-x-0">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-white">
              <MapPin className="h-4.5 w-4.5" aria-hidden="true" />
            </span>
            <div className="pr-1">
              <p className="whitespace-nowrap text-xs font-bold text-brand">
                Pereira, Colombia
              </p>
              <p className="whitespace-nowrap text-[0.65rem] text-muted">
                Remoto · Híbrido
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
