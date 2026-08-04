"use client";

import { useState } from "react";
import type { BugReportFormValues } from "../types";

type BugReportFormProps = {
  onSubmit: (values: BugReportFormValues) => void;
};


const REQUIRED_FIELDS: (keyof BugReportFormValues)[] = [
  "title",
  "description",
  "steps",
  "expectedResult",
  "actualResult",
];

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

  
  const [errors, setErrors] = useState<string[]>([]);

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

    
    const missing = REQUIRED_FIELDS.filter(
      (field) => !String(form[field]).trim()
    );

    if (missing.length > 0) {
      setErrors(missing);
      return;
    }

    setErrors([]);
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {errors.length > 0 && (
        <div className="rounded border border-red-500 bg-red-50 p-3 text-red-700 text-sm">
          Completá los campos obligatorios antes de generar el reporte.
        </div>
      )}

      <div>
        <input
          name="title"
          placeholder="Título"
          value={form.title}
          onChange={handleChange}
          className={`border rounded p-2 w-full ${
            errors.includes("title") ? "border-red-500" : ""
          }`}
        />
        {errors.includes("title") && (
          <p className="text-red-600 text-xs mt-1">El título es obligatorio.</p>
        )}
      </div>

      <div>
        <textarea
          name="description"
          placeholder="Descripción"
          value={form.description}
          onChange={handleChange}
          className={`border rounded p-2 break-words w-full ${
            errors.includes("description") ? "border-red-500" : ""
          }`}
        />
        {errors.includes("description") && (
          <p className="text-red-600 text-xs mt-1">La descripción es obligatoria.</p>
        )}
      </div>

      <div>
        <textarea
          name="steps"
          placeholder="Pasos para reproducir"
          value={form.steps}
          onChange={handleChange}
          className={`border rounded p-2 break-words w-full ${
            errors.includes("steps") ? "border-red-500" : ""
          }`}
        />
        {errors.includes("steps") && (
          <p className="text-red-600 text-xs mt-1">Los pasos son obligatorios.</p>
        )}
      </div>

      <div>
        <textarea
          name="expectedResult"
          placeholder="Resultado esperado"
          value={form.expectedResult}
          onChange={handleChange}
          className={`border rounded p-2 break-words w-full ${
            errors.includes("expectedResult") ? "border-red-500" : ""
          }`}
        />
        {errors.includes("expectedResult") && (
          <p className="text-red-600 text-xs mt-1">El resultado esperado es obligatorio.</p>
        )}
      </div>

      <div>
        <textarea
          name="actualResult"
          placeholder="Resultado actual"
          value={form.actualResult}
          onChange={handleChange}
          className={`border rounded p-2 break-words w-full ${
            errors.includes("actualResult") ? "border-red-500" : ""
          }`}
        />
        {errors.includes("actualResult") && (
          <p className="text-red-600 text-xs mt-1">El resultado actual es obligatorio.</p>
        )}
      </div>

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

