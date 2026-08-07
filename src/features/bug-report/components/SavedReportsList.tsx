"use client";

import { useEffect, useState } from "react";
import type { SavedBugReport } from "../types";
import { getSavedBugReports } from "../utils/savedReports";

const formatReportDate = (createdAt: string) => {
  const date = new Date(createdAt);

  if (Number.isNaN(date.getTime())) return "Fecha no disponible";

  return new Intl.DateTimeFormat("es-AR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
};

export default function SavedReportsList() {
  const [reports, setReports] = useState<SavedBugReport[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    setReports(getSavedBugReports());
  }, []);

  const handleCopy = async (report: SavedBugReport) => {
    await navigator.clipboard.writeText(report.markdown);
    setCopiedId(report.id);

    window.setTimeout(() => {
      setCopiedId((currentId) => (currentId === report.id ? null : currentId));
    }, 1800);
  };

  if (reports.length === 0) {
    return (
      <section className="mt-10 rounded-lg border border-white/10 bg-zinc-950/70 p-8 text-center shadow-2xl shadow-black/30">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-pink-300">
          Sin reportes
        </p>
        <h2 className="mt-3 text-2xl font-bold text-white">
          Todavía no hay reportes guardados
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-zinc-400">
          Generá un reporte desde el formulario principal y aparecerá acá con
          su título, fecha y Markdown listo para copiar.
        </p>
      </section>
    );
  }

  return (
    <section className="mt-10 flex flex-col gap-5">
      {reports.map((report) => (
        <article
          key={report.id}
          className="rounded-lg border border-white/10 bg-zinc-950/70 p-5 shadow-2xl shadow-black/30"
        >
          <div className="flex flex-col gap-4 border-b border-white/10 pb-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pink-300">
                BUG-REPORT.MD
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white">
                {report.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-400">
                {formatReportDate(report.createdAt)}
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleCopy(report)}
              className="rounded-lg border border-pink-400/40 bg-pink-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-pink-400"
            >
              {copiedId === report.id ? "Copiado" : "Copiar Markdown"}
            </button>
          </div>

          <pre className="mt-4 max-h-72 overflow-auto whitespace-pre-wrap break-words rounded-lg border border-zinc-800 bg-black/35 p-4 font-mono text-sm leading-7 text-zinc-300 shadow-inner">
            {report.markdown}
          </pre>
        </article>
      ))}
    </section>
  );
}
