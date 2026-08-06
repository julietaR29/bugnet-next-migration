type BugReportPreviewProps = {
  markdown: string;
};

export default function BugReportPreview({
  markdown,
}: BugReportPreviewProps) {
  return (
    <section className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/80">
      <div className="flex items-center justify-between border-b border-gray-200 pb-3 dark:border-gray-800">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Vista previa</h2>
        <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300">
          Markdown renderizado
        </span>
      </div>

      <pre className="overflow-x-auto whitespace-pre-wrap break-words rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm leading-7 text-gray-800 shadow-inner dark:border-gray-700 dark:bg-gray-950 dark:text-gray-200">
        {markdown || "Todavía no hay un reporte generado."}
      </pre>
    </section>
  );
}