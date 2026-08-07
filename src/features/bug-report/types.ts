export type Severity = "low" | "medium" | "high" | "critical";
export type Priority = "low" | "medium" | "high";
export type Tone = "formal" | "direct" | "detailed";
export type HeaderVariant = 0 | 1 | 2 | 3 | 4 | 5;

export interface BugReportFormValues {
  title: string;
  description: string;
  steps: string;
  expectedResult: string;
  actualResult: string;
  severity: Severity;
  priority: Priority;
  environment: string;
  tone: Tone;
  headerVariant: HeaderVariant;
}

export type BugTemplate = "visual" | "functional" | "performance";

export interface SavedBugReport {
  id: string;
  title: string;
  markdown: string;
  createdAt: string;
}
