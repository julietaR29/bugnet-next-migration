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

const labelClass = "block text-sm font-semibold text-zinc-200";
const fieldClass =
  "w-full rounded-lg border border-zinc-800 bg-black/35 px-3 py-2 text-sm text-zinc-100 shadow-inner transition placeholder:text-zinc-600 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500/20";
const textareaClass = `${fieldClass} break-words`;
const selectClass =
  "w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2.5 text-sm font-medium text-zinc-100 shadow-inner transition hover:border-pink-400/50 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500/20";
const errorFieldClass = "border-red-500 focus:border-red-400 focus:ring-red-500/20";

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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-lg border border-white/10 bg-zinc-950/70 p-6 shadow-2xl shadow-black/30"
    >
      {errors.length > 0 && (
        <div className="rounded-lg border border-red-400/30 bg-red-950/40 p-3 text-sm text-red-200">
          Completá los campos obligatorios antes de generar el reporte.
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="title" className={labelClass}>
          Título *
        </label>

        <input
          id="title"
          name="title"
          placeholder="Ej: Error al iniciar sesión"
          value={form.title}
          onChange={handleChange}
          className={`${fieldClass} ${errors.includes("title") ? errorFieldClass : ""}`}
        />

        {errors.includes("title") && (
          <p className="text-xs text-red-300">El título es obligatorio.</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="description" className={labelClass}>
          Descripción *
        </label>

        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder="Ej: Al presionar el botón Guardar..."
          value={form.description}
          onChange={handleChange}
          className={`${textareaClass} ${errors.includes("description") ? errorFieldClass : ""}`}
        />

        {errors.includes("description") && (
          <p className="text-xs text-red-300">La descripción es obligatoria.</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="steps" className={labelClass}>
          Pasos para reproducir *
        </label>

        <textarea
          id="steps"
          name="steps"
          rows={4}
          placeholder={"1.\n2.\n3."}
          value={form.steps}
          onChange={handleChange}
          className={`${textareaClass} ${errors.includes("steps") ? errorFieldClass : ""}`}
        />

        {errors.includes("steps") && (
          <p className="text-xs text-red-300">Los pasos son obligatorios.</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="expectedResult" className={labelClass}>
          Resultado esperado *
        </label>

        <textarea
          id="expectedResult"
          name="expectedResult"
          rows={3}
          placeholder="El sistema debería..."
          value={form.expectedResult}
          onChange={handleChange}
          className={`${textareaClass} ${errors.includes("expectedResult") ? errorFieldClass : ""}`}
        />

        {errors.includes("expectedResult") && (
          <p className="text-xs text-red-300">El resultado esperado es obligatorio.</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="actualResult" className={labelClass}>
          Resultado actual *
        </label>

        <textarea
          id="actualResult"
          name="actualResult"
          rows={3}
          placeholder="El botón no responde..."
          value={form.actualResult}
          onChange={handleChange}
          className={`${textareaClass} ${errors.includes("actualResult") ? errorFieldClass : ""}`}
        />

        {errors.includes("actualResult") && (
          <p className="text-xs text-red-300">El resultado actual es obligatorio.</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="environment" className={labelClass}>
          Entorno
        </label>

        <input
          id="environment"
          name="environment"
          placeholder="Chrome 138 - Windows 11"
          value={form.environment}
          onChange={handleChange}
          className={fieldClass}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="severity" className={labelClass}>
            Severidad
          </label>

          <select
            id="severity"
            name="severity"
            value={form.severity}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="low">Baja</option>
            <option value="medium">Media</option>
            <option value="high">Alta</option>
            <option value="critical">Crítica</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="priority" className={labelClass}>
            Prioridad
          </label>

          <select
            id="priority"
            name="priority"
            value={form.priority}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="low">Baja</option>
            <option value="medium">Media</option>
            <option value="high">Alta</option>
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="tone" className={labelClass}>
            Tono
          </label>

          <select
            id="tone"
            name="tone"
            value={form.tone}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="formal">Formal</option>
            <option value="direct">Directo</option>
            <option value="detailed">Detallado</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="headerVariant" className={labelClass}>
            Variante del encabezado
          </label>

          <select
            id="headerVariant"
            name="headerVariant"
            value={form.headerVariant}
            onChange={handleChange}
            className={selectClass}
          >
            <option value={0}>Variante 1</option>
            <option value={1}>Variante 2</option>
            <option value={2}>Variante 3</option>
            <option value={3}>Variante 4</option>
            <option value={4}>Variante 5</option>
            <option value={5}>Variante 6</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-pink-500 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-pink-950/30 transition hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
      >
        Generar reporte
      </button>
    </form>
  );
}
