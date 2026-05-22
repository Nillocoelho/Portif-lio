import { Code2, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <Section id="projetos">
      <SectionHeading
        eyebrow="Projetos"
        title="Projetos com foco em backend, APIs REST e arquitetura."
        description="Implementacoes voltadas para regras de negocio, integracao e qualidade de codigo."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {profile.projects.map((project) => (
          <article
            key={project.title}
            className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-300/40"
          >
            <h3 className="text-xl font-semibold text-zinc-100">{project.title}</h3>

            <p className="mt-4 leading-7 text-zinc-300">{project.description}</p>

            <ul className="mt-5 space-y-2">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="text-sm text-zinc-400">
                  - {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1 text-xs font-medium text-zinc-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3 text-sm">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-zinc-200 transition hover:border-cyan-300/60 hover:text-white"
              >
                <Code2 size={16} />
                Codigo
              </a>

              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-zinc-200 transition hover:border-cyan-300/60 hover:text-white"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
