import { Code2, Languages, Layers, Wrench } from "lucide-react";
import { skillGroups, type SkillGroup } from "../data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const iconMap: Record<SkillGroup["icon"], typeof Code2> = {
  code: Code2,
  layers: Layers,
  wrench: Wrench,
  languages: Languages,
};

const marqueeTech = [
  "Laravel",
  "NestJS",
  "Node.js",
  "React",
  "Angular",
  "Django",
  "TypeScript",
  "Python",
  "PHP",
  "Docker",
  "MySQL",
  "Git",
  "Postman",
  "Linux",
];

export function Skills() {
  return (
    <section id="stack" className="bg-cloud px-0 py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Stack"
            title={
              <>
                Herramientas con las que <span className="text-accent-600">construyo</span>
              </>
            }
            copy="Un stack enfocado en backend, APIs y productos web mantenibles. Estas son las tecnologías que uso a diario."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => {
            const Icon = iconMap[group.icon];
            return (
              <Reveal key={group.title} delay={index * 0.06}>
                <div className="card h-full p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand text-white shadow-soft">
                    <Icon className="h-5 w-5 text-accent-300" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-brand">{group.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="marquee-mask mt-12 overflow-hidden">
            <div className="flex w-max animate-marquee gap-3">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex gap-3" aria-hidden={copy === 1}>
                  {marqueeTech.map((tech) => (
                    <span
                      key={`${copy}-${tech}`}
                      className="whitespace-nowrap rounded-full border border-line bg-white px-4 py-2 text-xs font-semibold text-brand-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
