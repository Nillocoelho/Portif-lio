import { Code2, ExternalLink } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    title: "Portfólio pessoal",
    description:
      "Meu portfólio desenvolvido com Next.js, TypeScript e Tailwind CSS para apresentar minha evolução como desenvolvedor.",
    techs: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "Dashboard financeiro",
    description:
      "Projeto de dashboard para praticar cards, gráficos, layout responsivo e organização de dados.",
    techs: ["React", "Tailwind", "Vercel"],
    github: "https://github.com/",
    demo: "#",
  },
];

export function Projects() {
  return (
    <Section id="projetos" className="mx-auto max-w-5xl px-6 py-24">
      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
        Projetos
      </p>

      <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
        Alguns trabalhos em desenvolvimento.
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:-translate-y-1 hover:border-zinc-600"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>

            <p className="mt-4 leading-7 text-zinc-400">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-zinc-900 px-3 py-1 text-sm text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex gap-4 text-zinc-400">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ver código de ${project.title}`}
                className="flex items-center gap-2 hover:text-white"
              >
                <Code2 size={18} />
                Código
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ver demo de ${project.title}`}
                className="flex items-center gap-2 hover:text-white"
              >
                <ExternalLink size={18} />
                Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
