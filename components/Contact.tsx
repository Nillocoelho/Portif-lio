import { Mail } from "lucide-react";
import { Section } from "./Section";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <Section id="contato" className="mx-auto max-w-5xl px-6 py-24">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 sm:p-12">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Contato
        </p>

        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Vamos construir algo juntos?
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Estou aberto a oportunidades, projetos, freelas e colaborações.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
        >
          <Mail size={18} />
          Enviar email
        </a>
      </div>
    </Section>
  );
}