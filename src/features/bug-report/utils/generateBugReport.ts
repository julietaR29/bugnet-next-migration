import type { BugReportFormValues, Severity, Priority } from "../types";
import { toneTemplates, type HeaderVariant } from "./toneTemplates";

const severityLabel: Record<Severity, string> = {
  low: "Baja",
  medium: "Media",
  high: "Alta",
  critical: "Crítica",
};

const priorityLabel: Record<Priority, string> = {
  low: "Baja",
  medium: "Media",
  high: "Alta",
};

type SectionKey = keyof typeof toneTemplates;

export function generateBugReport(
  values: Partial<BugReportFormValues>,
  headerVariant: HeaderVariant = 0
): string {
  const {
    title = "Reporte de Error",
    description = "",
    steps = "",
    expectedResult = "",
    actualResult = "",
    severity,
    priority,
    environment = "",
    tone,
  } = values;

  const selectedTone = tone ?? "formal";

  const severityText = severity ? severityLabel[severity] : "No seleccionado";
  const priorityText = priority ? priorityLabel[priority] : "No seleccionado";

  const sections: Array<{ key: SectionKey; value: string }> = [
    {
      key: "description",
      value: description || "Sin descripción provista.",
    },
    {
      key: "steps",
      value: steps || "No se detallaron pasos para reproducir.",
    },
    {
      key: "expectedResult",
      value: expectedResult || "No especificado.",
    },
    {
      key: "actualResult",
      value: actualResult || "No especificado.",
    },
    {
      key: "severityPriority",
      value: `- **Severidad:** ${severityText}\n- **Prioridad:** ${priorityText}`,
    },
    {
      key: "environment",
      value: environment || "No especificado.",
    },
  ];

  const body = sections
    .map(({ key, value }) => {
      const variants = toneTemplates[key]?.[selectedTone] ?? toneTemplates[key]["formal"];
      const header = variants[headerVariant] ?? variants[0];

      return `${header}\n\n${value}`;
    })
    .join("\n\n");

  const formattedTitle = title?.trim() || "Reporte de Error";
  return `# ${formattedTitle}\n\n${body}\n`;
}