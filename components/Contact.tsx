import { Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";

export function Contact() {
  const phoneDigits = profile.phone.replace(/\D/g, "");
  const normalizedPhone = phoneDigits.startsWith("55")
    ? phoneDigits
    : `55${phoneDigits}`;
  const whatsappHref = `https://wa.me/${normalizedPhone}`;

  return (
    <Section id="contato" className="pb-16">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8 sm:p-10">
        <SectionHeading
          eyebrow="Contato"
          title="Vamos conversar sobre backend, APIs e novas oportunidades."
          description="Disponível para atuar com desenvolvimento backend Java, manutenção de sistemas e integração de serviços."
        />

        <p className="mt-4 text-sm text-zinc-400">Localização: {profile.location}</p>
        <p className="mt-2 text-sm text-zinc-500">
          Resposta geralmente em até 24 horas.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-200"
          >
            <Mail size={16} />
            {profile.email}
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-zinc-300 transition hover:border-cyan-300/60 hover:text-white"
          >
            <GitHubIcon className="h-[15px] w-[15px]" />
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-zinc-300 transition hover:border-cyan-300/60 hover:text-white"
          >
            <LinkedInIcon className="h-[15px] w-[15px]" />
            LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
}
