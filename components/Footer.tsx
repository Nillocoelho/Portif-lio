import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 pb-10 pt-6 text-sm text-zinc-500">
      <div className="border-t border-zinc-800 pt-6">
        <p>
          (c) {new Date().getFullYear()} {profile.name}. Desenvolvedor Backend
          Java Jr.
        </p>
      </div>
    </footer>
  );
}
