"use client";

import { useState } from "react";
import type { BugReportFormValues } from "../types";

type BugReportFormProps = {
  onSubmit: (values: BugReportFormValues) => void;
};

export default function BugReportForm({
  onSubmit,
}: BugReportFormProps) {
  const [form, setForm] = useState<BugReportFormValues>({
    title: "",
    description: "",
    steps: "",
    expectedResult: "",
    actualResult: "",
    severity: "medium",
    priority: "medium",
    environment: "",
    tone: "formal",
    headerVariant: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "headerVariant" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        name="title"
        placeholder="Título"
        value={form.title}
        onChange={handleChange}
        className="border rounded p-2"
      />

      <textarea
        name="description"
        placeholder="Descripción"
        value={form.description}
        onChange={handleChange}
        className="border rounded p-2"
      />

      <textarea
        name="steps"
        placeholder="Pasos para reproducir"
        value={form.steps}
        onChange={handleChange}
        className="border rounded p-2"
      />

      <textarea
        name="expectedResult"
        placeholder="Resultado esperado"
        value={form.expectedResult}
        onChange={handleChange}
        className="border rounded p-2"
      />

      <textarea
        name="actualResult"
        placeholder="Resultado actual"
        value={form.actualResult}
        onChange={handleChange}
        className="border rounded p-2"
      />

      <input
        name="environment"
        placeholder="Entorno"
        value={form.environment}
        onChange={handleChange}
        className="border rounded p-2"
      />

      <select
        name="severity"
        value={form.severity}
        onChange={handleChange}
        className="border rounded p-2"
      >
        <option value="low">Baja</option>
        <option value="medium">Media</option>
        <option value="high">Alta</option>
        <option value="critical">Crítica</option>
      </select>

      <select
        name="priority"
        value={form.priority}
        onChange={handleChange}
        className="border rounded p-2"
      >
        <option value="low">Baja</option>
        <option value="medium">Media</option>
        <option value="high">Alta</option>
      </select>

      <select
        name="tone"
        value={form.tone}
        onChange={handleChange}
        className="border rounded p-2"
      >
        <option value="formal">Formal</option>
        <option value="direct">Directo</option>
        <option value="detailed">Detallado</option>
      </select>

      <select
        name="headerVariant"
        value={form.headerVariant}
        onChange={handleChange}
        className="border rounded p-2"
      >
        <option value={0}>Variante 1</option>
        <option value={1}>Variante 2</option>
        <option value={2}>Variante 3</option>
        <option value={3}>Variante 4</option>
        <option value={4}>Variante 5</option>
        <option value={5}>Variante 6</option>
      </select>

      <button
        type="submit"
        className="rounded bg-blue-600 p-2 text-white"
      >
        Generar reporte
      </button>
    </form>
  );
}