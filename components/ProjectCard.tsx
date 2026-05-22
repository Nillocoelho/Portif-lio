"use client";

import { motion } from "motion/react";
import { BadgeCheck, Code2, ExternalLink } from "lucide-react";
import type { ProjectItem } from "@/types/portfolio";

type ProjectCardProps = {
  project: ProjectItem;
  index: number;
  isPrimary?: boolean;
};

export function ProjectCard({ project, index, isPrimary = false }: ProjectCardProps) {
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

          {project.category === "Full Stack" ? (
            <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-semibold text-zinc-200">
              Full Stack
            </span>
          ) : null}

          {!isPrimary && project.category !== "Full Stack" ? (
            <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-semibold text-zinc-300">
              {project.category}
            </span>
          ) : null}
        </div>

        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-100">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-zinc-400">{project.subtitle}</p>

        <p className="mt-5 text-base leading-7 text-zinc-300">{project.description}</p>

        <ul className="mt-5 space-y-2">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="text-sm text-zinc-400">
              - {highlight}
            </li>
          ))}
        </ul>

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

        <div className="mt-7 flex flex-wrap gap-3 text-sm">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-zinc-200 transition hover:border-cyan-300/60 hover:text-white"
          >
            <Code2 size={16} />
            Ver código
          </a>

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-zinc-200 transition hover:border-cyan-300/60 hover:text-white"
            >
              <ExternalLink size={16} />
              Ver detalhes
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
