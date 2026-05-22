import { Mail, Phone, SquareArrowOutUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const phoneDigits = profile.phone.replace(/\D/g, "");
  const phoneHref = `tel:+55${phoneDigits}`;

  return (
    <Section id="contato" className="pb-16">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8 sm:p-10">
        <SectionHeading
          eyebrow="Contato"
          title="Vamos conversar sobre backend, APIs e novas oportunidades."
          description="Disponivel para atuar com desenvolvimento backend Java, manutencao de sistemas e integracao de servicos."
        />

        <p className="mt-4 text-sm text-zinc-400">Localizacao: {profile.location}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-200"
          >
            <Mail size={16} />
            {profile.email}
          </a>

          <a
            href={phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900"
          >
            <Phone size={16} />
            {profile.phone}
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-zinc-300 transition hover:border-cyan-300/60 hover:text-white"
          >
            <SquareArrowOutUpRight size={15} />
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-zinc-300 transition hover:border-cyan-300/60 hover:text-white"
          >
            <SquareArrowOutUpRight size={15} />
            LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
}
