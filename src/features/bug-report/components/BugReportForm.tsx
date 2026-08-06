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

    const missing = REQUIRED_FIELDS.filter((field) => !String(form[field]).trim());

    if (missing.length > 0) {
      setErrors(missing);
      return;
    }

    setErrors([]);
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-xl border border-gray-200 bg-white/80 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/80">
      {errors.length > 0 && (
        <div className="rounded border border-red-300 bg-red-50 p-3 text-sm text-red-700 dark:border-red-700 dark:bg-red-950/40 dark:text-red-300">
          Completá los campos obligatorios antes de generar el reporte.
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
          Título *
        </label>

        <input
          id="title"
          name="title"
          placeholder="Ej: Error al iniciar sesión"
          value={form.title}
          onChange={handleChange}
          className={`w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 ${
            errors.includes("title") ? "border-red-500" : ""
          }`}
        />

        {errors.includes("title") && (
          <p className="text-xs text-red-600">El título es obligatorio.</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
          Descripción *
        </label>

        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder="Ej: Al presionar el botón Guardar..."
          value={form.description}
          onChange={handleChange}
          className={`w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm break-words transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 ${
            errors.includes("description") ? "border-red-500" : ""
          }`}
        />

        {errors.includes("description") && (
          <p className="text-xs text-red-600">La descripción es obligatoria.</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="steps" className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
          Pasos para reproducir *
        </label>

        <textarea
          id="steps"
          name="steps"
          rows={4}
          placeholder={"1.\n2.\n3."}
          value={form.steps}
          onChange={handleChange}
          className={`w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm break-words transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 ${
            errors.includes("steps") ? "border-red-500" : ""
          }`}
        />

        {errors.includes("steps") && (
          <p className="text-xs text-red-600">Los pasos son obligatorios.</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="expectedResult" className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
          Resultado esperado *
        </label>

        <textarea
          id="expectedResult"
          name="expectedResult"
          rows={3}
          placeholder="El sistema debería..."
          value={form.expectedResult}
          onChange={handleChange}
          className={`w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm break-words transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 ${
            errors.includes("expectedResult") ? "border-red-500" : ""
          }`}
        />

        {errors.includes("expectedResult") && (
          <p className="text-xs text-red-600">El resultado esperado es obligatorio.</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="actualResult" className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
          Resultado actual *
        </label>

        <textarea
          id="actualResult"
          name="actualResult"
          rows={3}
          placeholder="El botón no responde..."
          value={form.actualResult}
          onChange={handleChange}
          className={`w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm break-words transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 ${
            errors.includes("actualResult") ? "border-red-500" : ""
          }`}
        />

        {errors.includes("actualResult") && (
          <p className="text-xs text-red-600">El resultado actual es obligatorio.</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="environment" className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
          Entorno
        </label>

        <input
          id="environment"
          name="environment"
          placeholder="Chrome 138 - Windows 11"
          value={form.environment}
          onChange={handleChange}
          className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="severity" className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
          Severidad
        </label>

        <select
          id="severity"
          name="severity"
          value={form.severity}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm font-medium text-gray-900 shadow-sm transition duration-150 ease-in-out hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"
        >
          <option value="low">Baja</option>
          <option value="medium">Media</option>
          <option value="high">Alta</option>
          <option value="critical">Crítica</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="priority" className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
          Prioridad
        </label>

        <select
          id="priority"
          name="priority"
          value={form.priority}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm font-medium text-gray-900 shadow-sm transition duration-150 ease-in-out hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"
        >
          <option value="low">Baja</option>
          <option value="medium">Media</option>
          <option value="high">Alta</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="tone" className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
          Tono
        </label>

        <select
          id="tone"
          name="tone"
          value={form.tone}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm font-medium text-gray-900 shadow-sm transition duration-150 ease-in-out hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"
        >
          <option value="formal">Formal</option>
          <option value="direct">Directo</option>
          <option value="detailed">Detallado</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="headerVariant" className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
          Variante del encabezado
        </label>

        <select
          id="headerVariant"
          name="headerVariant"
          value={form.headerVariant}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm font-medium text-gray-900 shadow-sm transition duration-150 ease-in-out hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"
        >
          <option value={0}>Variante 1</option>
          <option value={1}>Variante 2</option>
          <option value={2}>Variante 3</option>
          <option value={3}>Variante 4</option>
          <option value={4}>Variante 5</option>
          <option value={5}>Variante 6</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full rounded bg-blue-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
      >
        Generar reporte
      </button>
    </form>
  );
}