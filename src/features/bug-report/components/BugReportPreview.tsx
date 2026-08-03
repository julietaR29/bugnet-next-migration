type BugReportPreviewProps = {
  markdown: string;
};

export default function BugReportPreview({
  markdown,
}: BugReportPreviewProps) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Vista previa</h2>

      <pre className="rounded-lg border bg-gray-100 p-4 overflow-x-auto whitespace-pre-wrap text-gray-900">
        {markdown || "Todavía no hay un reporte generado."}
      </pre>
      
    </section>
  );
}