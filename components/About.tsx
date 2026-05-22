import { profile } from "@/data/profile";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <Section id="sobre">
      <SectionHeading
        eyebrow="Sobre"
        title="Backend orientado a qualidade, integracao e clareza tecnica."
        description={profile.about}
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {[
          "Desenvolvimento e manutencao de APIs REST para sistemas corporativos.",
          "Modelagem e consultas SQL com foco em consistencia e performance.",
          "Integracao de servicos e sincronizacao de dados entre plataformas.",
          "Clean Code, arquitetura em camadas e colaboracao em times ageis.",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-zinc-800 bg-zinc-950/70 px-5 py-4 text-sm text-zinc-300"
          >
            {item}
          </div>
        ))}
      </div>
    </Section>
  );
}
