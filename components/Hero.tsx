"use client";

import { motion } from "motion/react";
import { ArrowRight, Mail, SquareArrowOutUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center overflow-hidden px-6 py-24">
      <div className="absolute left-1/2 top-1/4 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400"
      >
        Portfólio
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-3xl text-5xl font-bold tracking-tight sm:text-7xl"
      >
        Olá, eu sou {profile.name}.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400"
      >
        {profile.bio}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <a
          href="#projetos"
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
        >
          Ver projetos <ArrowRight size={18} />
        </a>

        <a
          href="#contato"
          className="rounded-full border border-zinc-700 px-6 py-3 font-medium text-white transition hover:bg-zinc-900"
        >
          Entrar em contato
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 flex gap-5 text-zinc-400"
      >
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="hover:text-white"
        >
          <SquareArrowOutUpRight />
        </a>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="hover:text-white"
        >
          <SquareArrowOutUpRight />
        </a>

        <a href={`mailto:${profile.email}`} className="hover:text-white">
          <Mail />
        </a>
      </motion.div>
    </section>
  );
}
