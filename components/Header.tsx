export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-zinc-900 bg-black/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="font-bold text-white">
          Danillo.dev
        </a>

        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="#sobre" className="hover:text-white">
            Sobre
          </a>
          <a href="#projetos" className="hover:text-white">
            Projetos
          </a>
          <a href="#contato" className="hover:text-white">
            Contato
          </a>
        </div>
      </nav>
    </header>
  );
}