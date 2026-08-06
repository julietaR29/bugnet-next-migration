"use client";

type BugReportMarkdownViewProps = {
  markdown: string;
};

export default function BugReportMarkdownView({
  markdown,
}: BugReportMarkdownViewProps) {
  const handleCopy = async () => {
    if (!markdown) return;

    await navigator.clipboard.writeText(markdown);
    alert("Markdown copiado al portapapeles.");
  };

  const handleDownload = () => {
    if (!markdown) return;

    const blob = new Blob([markdown], {
      type: "text/markdown;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "bug-report.md";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <section className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/80">
      <div className="flex flex-col gap-3 border-b border-gray-200 pb-3 sm:flex-row sm:items-center sm:justify-between dark:border-gray-800">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Markdown</h2>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleCopy}
            disabled={!markdown}
            className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition hover:border-blue-400 hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:bg-blue-900/60"
          >
            Copiar
          </button>

          <button
            onClick={handleDownload}
            disabled={!markdown}
            className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 transition hover:border-emerald-400 hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300 dark:hover:border-emerald-700 dark:hover:bg-emerald-900/60"
          >
            Descargar
          </button>
        </div>
      </div>

      <textarea
        readOnly
        value={markdown}
        placeholder="El reporte generado aparecerá aquí..."
        className="min-h-[350px] w-full resize-none rounded-xl border border-gray-200 bg-gray-50 p-4 font-mono text-sm leading-6 text-gray-800 shadow-inner outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-gray-200"
      />
    </section>
  );
}