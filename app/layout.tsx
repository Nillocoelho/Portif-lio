import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Danillo Coelho Barbosa | Desenvolvedor Backend Java Jr.",
  description:
    "Portfólio profissional de Danillo Coelho Barbosa, Desenvolvedor Backend Java Jr. com foco em Java, Spring Boot, APIs REST, PostgreSQL e integração de sistemas.",
  keywords: [
    "Desenvolvedor Backend Java Jr",
    "Java",
    "Spring Boot",
    "APIs REST",
    "PostgreSQL",
    "Integracao de Sistemas",
    "Portfolio Backend",
  ],
  openGraph: {
    title: "Danillo Coelho Barbosa | Desenvolvedor Backend Java Jr.",
    description:
      "Portfólio backend com foco em Java, Spring Boot, APIs REST, PostgreSQL e arquitetura em camadas.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danillo Coelho Barbosa | Desenvolvedor Backend Java Jr.",
    description:
      "Backend Java Jr focado em APIs REST, integrações de sistemas e qualidade de software.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-zinc-950 font-sans text-zinc-100">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-cyan-300 focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-zinc-950"
        >
          Ir para conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}
