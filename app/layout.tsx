import Link from "next/link";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeToggle from "@/src/components/ThemeToggle";
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
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80">
          <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 p-4">
            <div className="flex gap-6">
              <Link href="/" className="text-sm font-medium text-gray-700 transition hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
                Inicio
              </Link>
              <Link href="/reports" className="text-sm font-medium text-gray-700 transition hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
                Reportes
              </Link>
            </div>
            <ThemeToggle />
          </nav>
        </header>

        <div className="flex-1 bg-background text-foreground">{children}</div>
      </body>
    </html>
  );
}
