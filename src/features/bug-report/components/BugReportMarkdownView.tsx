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

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Markdown</h2>

        <button
          onClick={handleCopy}
          disabled={!markdown}
          className="rounded-md bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
        >
          Copiar
        </button>
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