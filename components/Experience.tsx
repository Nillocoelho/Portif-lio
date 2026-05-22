import { profile } from "@/data/profile";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <Section id="experiencia">
      <SectionHeading
        eyebrow="Experiência"
        title="Atuação em desenvolvimento de software e evolução de sistemas."
      />

      <div className="relative mt-10 space-y-5">
        <div className="pointer-events-none absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px bg-zinc-800 lg:block" />
        {profile.experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.role}`}
            className="relative rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900/60 p-6 transition hover:border-cyan-300/35 lg:ml-10"
          >
            <span className="absolute -left-[2.85rem] top-8 hidden h-4 w-4 rounded-full border border-cyan-300/35 bg-zinc-950 lg:block" />

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
