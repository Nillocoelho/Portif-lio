"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Mail, PhoneCall } from "lucide-react";
import { profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";

export function Hero() {
  const phoneDigits = profile.phone.replace(/\D/g, "");
  const phoneHref = `tel:+55${phoneDigits}`;

  return (
    <section className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 pb-20 pt-32 sm:pt-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_62%)]" />

      <div className="w-full rounded-3xl border border-zinc-800/70 bg-zinc-950/60 p-8 shadow-2xl shadow-black/30 backdrop-blur-sm sm:p-12">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="order-2 text-center lg:order-1 lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200"
            >
              {profile.availability}
            </motion.span>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mt-4 text-xs uppercase tracking-[0.28em] text-zinc-400"
            >
              Portfólio Profissional
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-4 text-4xl font-semibold tracking-tight text-zinc-100 sm:text-6xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-4 text-lg font-medium text-cyan-300 sm:text-xl"
            >
              {profile.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-2 text-sm uppercase tracking-[0.22em] text-zinc-400"
            >
              {profile.heroStack}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="mt-6 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg"
            >
              {profile.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start"
            >
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-200"
              >
                Ver projetos <ArrowRight size={17} />
              </a>

              <a
                href="#experiencia"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900"
              >
                Minha experiência
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.48 }}
              className="mt-8 flex flex-wrap justify-center gap-3 text-sm lg:justify-start"
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-zinc-200 transition hover:border-cyan-300/60 hover:text-white"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-zinc-200 transition hover:border-cyan-300/60 hover:text-white"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-zinc-200 transition hover:border-cyan-300/60 hover:text-white"
              >
                <Mail size={16} />
                Email
              </a>

              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-zinc-200 transition hover:border-cyan-300/60 hover:text-white"
              >
                <PhoneCall size={16} />
                {profile.phone}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.56 }}
              className="mt-8 grid gap-3 sm:grid-cols-3"
            >
              {profile.highlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-left"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">
                    {highlight.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-zinc-200">
                    {highlight.value}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-xs sm:max-w-sm lg:max-w-[360px]">
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-cyan-400/18 blur-3xl" />

              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl transition duration-300 hover:-translate-y-1 hover:scale-[1.01]">
                <Image
                  src="/foto.jpg"
                  alt="Foto de Danillo Coelho"
                  fill
                  priority
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 52vw, 360px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
