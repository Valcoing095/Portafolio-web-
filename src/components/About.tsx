import { Boxes, Check, Database, Layers, Quote, Rocket, ShieldCheck } from "lucide-react";
import { profile } from "../data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const contributions = [
  {
    icon: Layers,
    title: "Arquitectura modular",
    desc: "Microservicios y módulos mantenibles con Laravel y NestJS.",
  },
  {
    icon: Database,
    title: "Modelado de datos",
    desc: "Diseño de bases de datos y consultas eficientes para nuevos módulos.",
  },
  {
    icon: ShieldCheck,
    title: "Calidad y pruebas",
    desc: "Pruebas de endpoints con Postman y pruebas unitarias.",
  },
  {
    icon: Boxes,
    title: "Contenerización",
    desc: "Docker para entornos de desarrollo y despliegue reproducibles.",
  },
];

export function About() {
  return (
    <section id="sobre-mi" className="relative px-0 py-24">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Sobre mí"
              title={
                <>
                  Backend con <span className="text-accent-600">mentalidad de producto</span>
                </>
              }
              copy={profile.summary}
            />

            <div className="mt-8 space-y-4 text-base leading-relaxed text-muted">
              <p>
                Me gusta entender el problema antes de escribir la primera línea. He
                liderado técnicamente un módulo completo, desde el diseño y el modelo de
                datos hasta su entrega en producción, coordinando submódulos y
                asegurando la calidad del software.
              </p>
              <p>
                Disfruto construir soluciones que la gente realmente usa: APIs claras,
                flujos bien pensados y frontends que se sienten rápidos. Aprendo de forma
                continua y documento lo que hago para que el equipo avance sin fricción.
              </p>
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-accent-100 bg-accent-50/60 p-5">
              <Quote className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" aria-hidden="true" />
              <p className="text-sm font-medium leading-relaxed text-brand-800">
                “Mi objetivo es aportar habilidades técnicas y creativas en proyectos que
                impacten positivamente.”
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card p-6 sm:p-8">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-accent-700">
                <Rocket className="h-4 w-4" aria-hidden="true" />
                Lo que aporto
              </div>

              <ul className="mt-6 space-y-5">
                {contributions.map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="flex gap-3.5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-brand">{title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex items-center gap-2 rounded-xl bg-brand-50 px-4 py-3 text-xs font-semibold text-brand-700">
                <Check className="h-4 w-4 text-accent-600" aria-hidden="true" />
                Español nativo · Inglés de lectura técnica
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <dl className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-line bg-white px-5 py-6 text-center shadow-soft"
              >
                <dd className="text-3xl font-extrabold tracking-tight text-brand sm:text-4xl">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-[0.7rem] font-semibold uppercase tracking-wider text-muted">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
