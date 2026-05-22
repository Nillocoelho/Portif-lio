import { Section } from "./Section";
import { profile } from "@/data/profile";

export function TechStack() {
  return (
    <Section className="mx-auto max-w-5xl px-6 py-24">
      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
        Tecnologias
      </p>

      <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
        Ferramentas que estou usando.
      </h2>

      <div className="mt-8 flex flex-wrap gap-3">
        {profile.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </Section>
  );
}