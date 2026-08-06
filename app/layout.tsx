import Link from "next/link";
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
  title: "BugNet - Generador de reportes de bugs",
  description:
    "Aplicación para generar reportes de bugs en formato Markdown.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-2 focus:rounded focus:bg-pink-400 focus:px-3 focus:py-2 focus:text-black">
        Saltar al contenido principal
      </a>

      <header className="border-b border-white/10 bg-black/20">
        <nav
          aria-label="Navegación principal"
          className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5"
        >
          <Link href="/" className="text-sm font-bold uppercase tracking-[0.25em] text-pink-400">
            BugNet
          </Link>

          <div className="flex gap-6 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">
            <Link href="/" className="hover:text-pink-400">
              Inicio
            </Link>
            <Link href="/reports" className="hover:text-pink-400">
              Reportes
            </Link>
          </div>
        </nav>
      </header>

      {children}
    </body>
    </html>
  );
}