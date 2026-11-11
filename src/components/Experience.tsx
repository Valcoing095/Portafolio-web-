import { Briefcase, Check, GraduationCap, MapPin } from "lucide-react";
import { education, experience } from "../data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experiencia" className="bg-cloud px-0 py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Experiencia"
            title={
              <>
                Dónde he <span className="text-accent-600">trabajado</span>
              </>
            }
            copy="Roles donde he construido sistemas, liderado módulos y aprendido a llevar software a producción."
          />
        </Reveal>

        <div className="relative mt-14">
          <span
            className="absolute bottom-2 left-3.5 top-2 w-px bg-line"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {experience.map((item, index) => (
              <Reveal key={`${item.company}-${item.period}`} delay={index * 0.06}>
                <div className="relative pl-10 sm:pl-14">
                  <span
                    className={`absolute left-0 top-1 grid h-7 w-7 place-items-center rounded-full text-white shadow-soft ${
                      item.current ? "bg-accent-500" : "bg-brand"
                    }`}
                  >
                    <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>

                  <div className="card p-6 sm:p-7">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-accent-700">
                          {item.period}
                        </p>
                        <h3 className="mt-1 text-lg font-bold text-brand">{item.role}</h3>
                        <p className="mt-0.5 text-sm font-semibold text-muted">
                          {item.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.current ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-accent-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                            Actualidad
                          </span>
                        ) : null}
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-muted">
                          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-accent-500"
                            aria-hidden="true"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {item.tech.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full bg-brand-50 px-2.5 py-1 text-[0.68rem] font-semibold text-brand-700"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-accent-700">
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
              Educación
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {education.map((item) => (
                <div key={item.title} className="card p-6">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-accent-700">
                    {item.period}
                  </p>
                  <h3 className="mt-1.5 text-base font-bold leading-snug text-brand">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-muted">{item.org}</p>
                  <p className="mt-0.5 text-xs text-muted">{item.place}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
