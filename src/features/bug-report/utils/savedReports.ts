import type { SavedBugReport } from "../types";

const STORAGE_KEY = "bugnet:reports";

const isSavedBugReport = (value: unknown): value is SavedBugReport => {
  if (!value || typeof value !== "object") return false;

  const report = value as Partial<SavedBugReport>;

  return (
    typeof report.id === "string" &&
    typeof report.title === "string" &&
    typeof report.markdown === "string" &&
    typeof report.createdAt === "string"
  );
};

const readReports = (): SavedBugReport[] => {
  const rawReports = window.localStorage.getItem(STORAGE_KEY);

  if (!rawReports) return [];

  try {
    const parsedReports: unknown = JSON.parse(rawReports);

    return Array.isArray(parsedReports)
      ? parsedReports.filter(isSavedBugReport)
      : [];
  } catch {
    return [];
  }
};

const writeReports = (reports: SavedBugReport[]) => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
};

const createReportId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
};

export const getSavedBugReports = () => readReports();

export const saveBugReport = (report: Omit<SavedBugReport, "id" | "createdAt">) => {
  const savedReport: SavedBugReport = {
    ...report,
    id: createReportId(),
    createdAt: new Date().toISOString(),
  };

  writeReports([savedReport, ...readReports()]);

  return savedReport;
};
