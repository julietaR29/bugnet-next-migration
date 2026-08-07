"use client";

type BugReportPreviewProps = {
  markdown: string;
};

export default function BugReportPreview({
  markdown,
}: BugReportPreviewProps) {
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
    <section className="flex flex-col gap-4 rounded-lg border border-white/10 bg-zinc-950/70 p-5 shadow-2xl shadow-black/30">
      <div className="flex flex-col gap-3 border-b border-white/10 pb-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pink-300">
            BUG-REPORT.MD
          </p>
          <h2 className="mt-1 text-xl font-semibold text-white">
            Vista previa Markdown
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handleCopy}
            disabled={!markdown}
            className="rounded-lg border border-pink-400/40 bg-pink-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-pink-400 disabled:cursor-not-allowed disabled:border-zinc-700 disabled:bg-zinc-900 disabled:text-zinc-500"
          >
            Copiar
          </button>

          <button
            type="button"
            onClick={handleDownload}
            disabled={!markdown}
            className="rounded-lg border border-white/10 bg-black/35 px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-pink-400/50 hover:text-pink-200 disabled:cursor-not-allowed disabled:border-zinc-800 disabled:text-zinc-600"
          >
            Descargar
          </button>
        </div>
      </div>

      <pre className="min-h-[520px] max-h-[720px] overflow-auto whitespace-pre-wrap break-words rounded-lg border border-zinc-800 bg-black/35 p-4 font-mono text-sm leading-7 text-zinc-300 shadow-inner">
        {markdown || "Todavía no hay un reporte generado."}
      </pre>
    </section>
  );
}
