import { profile } from "@/data/profile";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function Workflow() {
  return (
    <Section id="processo">
      <SectionHeading
        eyebrow="Processo"
        title="Como eu conduzo entregas backend com previsibilidade."
        description="Fluxo de trabalho orientado à clareza técnica, qualidade e evolução sustentável do sistema."
      />

      <ol className="mt-10 grid gap-5 lg:grid-cols-3">
        {profile.workflow.map((step, index) => (
          <li
            key={step.title}
            className="rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-950 to-zinc-900/70 p-6 transition hover:-translate-y-1 hover:border-cyan-300/35"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 text-sm font-semibold text-cyan-200">
              0{index + 1}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-zinc-100">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-300">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
