"use client";

import { useState } from "react";

import type { BugReportFormValues } from "../types";
import { generateBugReport } from "../utils/generateBugReport";

import BugReportForm from "./BugReportForm";
import BugReportPreview from "./BugReportPreview";
import BugReportMarkdownView from "./BugReportMarkdownView";

export default function BugReportGenerator() {
  const [markdown, setMarkdown] = useState("");

  const handleGenerateReport = (values: BugReportFormValues) => {
    const report = generateBugReport(values, values.headerVariant);
    setMarkdown(report);
  };

  return (
    <div className="flex flex-col gap-8">
      <BugReportForm onSubmit={handleGenerateReport} />

      <BugReportPreview markdown={markdown} />

      <BugReportMarkdownView markdown={markdown} />
    </div>
  );
}