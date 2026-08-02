import BugReportGenerator from "@/src/features/bug-report/components/BugReportGenerator";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 p-8">
      <h1 className="text-3xl font-bold">Generador de Reportes</h1>

      <BugReportGenerator />
    </main>
  );
}