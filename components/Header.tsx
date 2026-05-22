const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#processo", label: "Processo" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/75 backdrop-blur">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4"
      >
        <a href="#" className="shrink-0 text-sm font-semibold text-zinc-100">
          Danillo C. Barbosa
        </a>

        <ul className="flex items-center gap-4 overflow-x-auto text-xs text-zinc-400 sm:gap-6 sm:text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-zinc-100">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
