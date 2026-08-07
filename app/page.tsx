import BugReportGenerator from "@/src/features/bug-report/components/BugReportGenerator";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-16">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-pink-400">
        BugNet
      </p>

      <h1 className="max-w-3xl text-5xl font-black leading-tight text-white">
        Generador de reportes de bugs
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
        Describí el problema una sola vez. Obtené un reporte ordenado en
        Markdown, listo para pegar en tu issue.
      </p>

      <section className="mt-10">
        <BugReportGenerator />
      </section>
    </main>
  );
}