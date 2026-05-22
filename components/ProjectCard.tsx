"use client";

import { motion } from "motion/react";
import { BadgeCheck, BookOpen, Code2, ExternalLink, FileText } from "lucide-react";
import type { ProjectItem } from "@/types/portfolio";
import type { ComponentType } from "react";

type ProjectCardProps = {
  project: ProjectItem;
  index: number;
  isPrimary?: boolean;
};

type ProjectAction = {
  href?: string | null;
  icon: ComponentType<{ size?: number }>;
  label: string;
};

function actionClassName() {
  return "inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-zinc-200 transition hover:border-cyan-300/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950";
}

export function ProjectCard({ project, index, isPrimary = false }: ProjectCardProps) {
  const hasRoadmapSections =
    Boolean(project.implementedHighlights?.length) || Boolean(project.nextSteps?.length);

  const codeActionLabel =
    project.title === "API de Controle Financeiro"
      ? "Ver progresso no GitHub"
      : "Ver código";

  const actions: ProjectAction[] = [
    { href: project.github, icon: Code2, label: codeActionLabel },
    { href: project.readme, icon: BookOpen, label: "Ver README" },
    { href: project.apiDocs, icon: FileText, label: "Documentação da API" },
    { href: project.demo, icon: ExternalLink, label: "Ver demo" },
  ];

  const availableActions = actions.filter((action) => Boolean(action.href));

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className={`rounded-3xl border border-zinc-800 bg-zinc-950 p-7 shadow-lg shadow-black/20 transition ${
        isPrimary
          ? "relative overflow-hidden border-cyan-300/35 xl:col-span-2"
          : project.featured
            ? "border-zinc-700/90"
            : "hover:border-zinc-700"
      }`}
    >
      {isPrimary ? (
        <div className="pointer-events-none absolute -right-14 -top-14 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
      ) : null}

      <div className="relative">
        <div className="flex flex-wrap items-center gap-2">
          {isPrimary ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-cyan-300/35 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
              <BadgeCheck size={14} />
              Projeto principal
            </span>
          ) : null}

          <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-semibold text-zinc-300">
            {project.category}
          </span>
        </div>

        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-100">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-zinc-400">{project.subtitle}</p>

        <p className="mt-5 text-base leading-7 text-zinc-300">{project.description}</p>

        {hasRoadmapSections ? (
          <div className="mt-6 space-y-5">
            {project.implementedHighlights?.length ? (
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-300">
                  Implementado / em andamento
                </p>
                <ul className="mt-3 space-y-2">
                  {project.implementedHighlights.map((item) => (
                    <li key={item} className="text-sm text-zinc-400">
                      - {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {project.nextSteps?.length ? (
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-300">
                  Próximos passos
                </p>
                <ul className="mt-3 space-y-2">
                  {project.nextSteps.map((item) => (
                    <li key={item} className="text-sm text-zinc-400">
                      - {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ) : (
          <ul className="mt-5 space-y-2">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="text-sm text-zinc-400">
                - {highlight}
              </li>
            ))}
          </ul>
        )}

        {project.plannedTechs?.length ? (
          <div className="mt-6 space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-300">
                Tecnologias atuais
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1 text-xs font-medium text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                Planejado
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.plannedTechs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-dashed border-zinc-700 bg-zinc-900/40 px-3 py-1 text-xs font-medium text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1 text-xs font-medium text-zinc-200"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-7 flex flex-wrap gap-3 text-sm">
          {availableActions.map((action) => {
            const Icon = action.icon;

            return (
              <a
                key={action.label}
                href={action.href ?? undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={actionClassName()}
              >
                <Icon size={16} />
                {action.label}
              </a>
            );
          })}

          {availableActions.length === 0 ? (
            <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300">
              Em desenvolvimento
            </span>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
