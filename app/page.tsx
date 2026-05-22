import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { Workflow } from "@/components/Workflow";
import { profile } from "@/data/profile";

export default function Home() {
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: profile.email,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
      addressCountry: "BR",
    },
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: profile.technologies.flatMap((category) => category.items),
  };

  return (
    <main
      id="main-content"
      className="relative min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-100"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[680px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_58%)]" />
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Workflow />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
