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
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Markdown</h2>

        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            disabled={!markdown}
            className="rounded-md bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
          >
            Copiar
          </button>

          <button
            onClick={handleDownload}
            disabled={!markdown}
            className="rounded-md bg-green-600 px-4 py-2 text-white disabled:opacity-50"
          >
            Descargar
          </button>
        </div>
      </div>

      <textarea
        readOnly
        value={markdown}
        placeholder="El reporte generado aparecerá aquí..."
        className="min-h-[350px] w-full rounded-lg border p-4 font-mono text-sm resize-none"
      />
    </section>
  );
}