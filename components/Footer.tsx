export function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-6 py-10 text-sm text-zinc-500">
      <div className="border-t border-zinc-900 pt-8">
        © {new Date().getFullYear()} Danillo Coelho. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}