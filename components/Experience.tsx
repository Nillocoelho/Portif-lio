import { profile } from "@/data/profile";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <Section id="experiencia">
      <SectionHeading
        eyebrow="Experiencia"
        title="Atuacao em desenvolvimento de software e evolucao de sistemas."
      />

      <div className="mt-10 space-y-5">
        {profile.experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.role}`}
            className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900/60 p-6 transition hover:border-cyan-300/35"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-zinc-100">
                {experience.company} - {experience.role}
              </h3>
              <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                {experience.period}
              </span>
            </div>

            <p className="mt-4 leading-7 text-zinc-300">{experience.summary}</p>

            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {experience.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-zinc-300"
                >
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
