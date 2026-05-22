import { profile } from "@/data/profile";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function TechStack() {
  return (
    <Section id="tecnologias">
      <SectionHeading
        eyebrow="Tecnologias"
        title="Stack organizada por contexto de atuacao."
        description="Ferramentas e conhecimentos aplicados em projetos backend e integracoes, sem perder versatilidade em frontend e mobile."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {profile.technologies.map((category) => (
          <article
            key={category.title}
            className="rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-950 to-zinc-950/50 p-5 transition hover:-translate-y-1 hover:border-cyan-300/40"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              {category.title}
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {category.items.map((item) => (
                <li key={item} className="rounded-lg bg-zinc-900/70 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
