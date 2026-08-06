import Link from "next/link";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const APP_URL = "https://bugnet.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: "BugNet - Generador de reportes de bugs",
    template: "%s | BugNet",
  },
  description:
    "Aplicación para generar reportes de bugs en formato Markdown, con severidad, prioridad y tono configurables.",
  keywords: ["bug report", "reportes de bugs", "markdown", "QA", "testing", "Next.js"],
  authors: [{ name: "Equipo BugNet" }],
  icons: { icon: "/favicon.ico" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "BugNet - Generador de reportes de bugs",
    description:
      "Describí el problema una sola vez. Obtené un reporte ordenado en Markdown, listo para pegar en tu issue.",
    url: APP_URL,
    siteName: "BugNet",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BugNet - Generador de reportes de bugs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BugNet - Generador de reportes de bugs",
    description: "Generá reportes de bugs en Markdown en segundos.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#08050a",
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