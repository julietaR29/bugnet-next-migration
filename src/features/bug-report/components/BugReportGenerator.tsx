"use client";

import { useState } from "react";

import type { BugReportFormValues } from "../types";
import { generateBugReport } from "../utils/generateBugReport";
import { saveBugReport } from "../utils/savedReports";

import BugReportForm from "./BugReportForm";
import BugReportPreview from "./BugReportPreview";

export default function BugReportGenerator() {
  const [markdown, setMarkdown] = useState("");
  const [savedTitle, setSavedTitle] = useState("");

  const handleGenerateReport = (values: BugReportFormValues) => {
    const report = generateBugReport(values, values.headerVariant);

    saveBugReport({
      title: values.title.trim(),
      markdown: report,
    });

    setMarkdown(report);
    setSavedTitle(values.title.trim());
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)] lg:items-start">
      <div>
        <BugReportForm onSubmit={handleGenerateReport} />
      </div>

      <div className="flex flex-col gap-6 lg:sticky lg:top-6">
        {savedTitle && (
          <div className="rounded-lg border border-pink-400/20 bg-pink-500/10 px-4 py-3 text-sm text-pink-100">
            Reporte guardado: <span className="font-semibold">{savedTitle}</span>
          </div>
        )}

        <BugReportPreview markdown={markdown} />
      </div>
    </div>
  );
}
