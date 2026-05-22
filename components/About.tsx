import { Section } from "./Section";
import { profile } from "@/data/profile";

export function About() {
  return (
    <Section id="sobre" className="mx-auto max-w-5xl px-6 py-24">
      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
        Sobre mim
      </p>

      <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
        Construindo soluções digitais com foco em simplicidade e qualidade.
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            {profile.about}
      </p>
    </Section>
  );
}