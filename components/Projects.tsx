import { profile } from "@/data/profile";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

function getProjectPriority(title: string): number {
  if (title === "API de Controle Financeiro") return 0;
  if (title === "FinanTech") return 1;
  return 2;
}

export function Projects() {
  const featuredProjects = [...profile.projects].sort((a, b) => {
    const byFeatured = Number(b.featured) - Number(a.featured);
    if (byFeatured !== 0) return byFeatured;
    return getProjectPriority(a.title) - getProjectPriority(b.title);
  });

  return (
    <Section id="projetos">
      <SectionHeading
        eyebrow="Projetos"
        title="Projetos em destaque"
        description="Projetos construídos para resolver problemas reais, com foco em backend, arquitetura, dados e qualidade técnica."
      />

      <div className="mt-10 grid gap-6 xl:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            isPrimary={index === 0 && project.title === "API de Controle Financeiro"}
          />
        ))}
      </div>
    </Section>
  );
}
