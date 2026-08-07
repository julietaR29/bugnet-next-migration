import SavedReportsList from "@/src/features/bug-report/components/SavedReportsList";

export default function ReportsPage() {
  return (
    <main id="main-content" className="mx-auto w-full max-w-6xl flex-1 px-6 py-16">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-pink-400">
        Reportes
      </p>

      <h1 className="text-4xl font-black text-white">Reportes guardados</h1>

      <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
        Historial local de reportes generados en BugNet. Se guarda únicamente
        en este navegador.
      </p>

      <SavedReportsList />
    </main>
  );
}
