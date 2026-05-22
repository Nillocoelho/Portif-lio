import { profile } from "@/data/profile";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <Section id="sobre">
      <SectionHeading
        eyebrow="Sobre"
        title="Backend orientado a qualidade, integração e clareza técnica."
        description={profile.about}
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {profile.focusAreas.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-zinc-800 bg-zinc-950/70 px-5 py-4 text-sm text-zinc-300 transition hover:border-cyan-300/30 hover:bg-zinc-900/80"
          >
            {item}
          </div>
        ))}
      </div>
    </Section>
  );
}
