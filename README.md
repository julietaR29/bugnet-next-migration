# BugNet - Migración a Next.js

Proyecto académico desarrollado como migración de **BugNet**, originalmente construido con React + Vite, hacia **Next.js 16** utilizando **App Router**, **React 19** y **TypeScript**.

## Descripción

BugNet es una aplicación web que permite generar reportes de errores (bugs) en formato Markdown mediante un formulario interactivo. El usuario puede completar la información del incidente, obtener una vista previa del reporte generado y copiar o descargar el contenido para utilizarlo en plataformas de seguimiento de incidencias.

La migración mantiene la funcionalidad principal del proyecto original y adapta su arquitectura al ecosistema de Next.js.

## Funcionalidades

Actualmente el proyecto incorpora las siguientes funcionalidades:

- Generación de reportes de bugs en formato Markdown.
- Formulario con validación de campos obligatorios.
- Vista previa del reporte generado.
- Copia del contenido al portapapeles.
- Descarga del reporte en formato `.md`.
- Persistencia de reportes mediante Local Storage.
- Navegación entre las secciones principales de la aplicación.
- Soporte para modo claro y modo oscuro.
- Metadata básica para SEO mediante App Router.
- Generación de `robots.txt` y `sitemap.xml`.

## Tecnologías utilizadas

- Next.js 16
- React 19
- TypeScript
- App Router
- Tailwind CSS 4
- ESLint
- pnpm

## Estructura principal del proyecto

```text
app/
│── layout.tsx
│── page.tsx
│── globals.css
│── reports/
│   └── page.tsx
│── robots.ts
│── sitemap.ts

src/
├── components/
│   └── ThemeToggle.tsx
└── features/
    └── bug-report/
        ├── components/
        ├── utils/
        └── types.ts

public/
```

## Rutas disponibles

| Ruta | Descripción |
|------|-------------|
| `/` | Generador de reportes de bugs |
| `/reports` | Vista destinada a reportes guardados |

## Instalación

```bash
pnpm install
```

## Desarrollo

```bash
pnpm dev
```

## Compilación

```bash
pnpm build
```

## Verificación de calidad

```bash
pnpm lint
```

Se recomienda ejecutar `pnpm lint` y `pnpm build` antes de integrar nuevos cambios.

## Características implementadas

- Arquitectura basada en Next.js App Router.
- Componentes desarrollados con React y TypeScript.
- Generación dinámica de reportes Markdown.
- Persistencia local mediante Local Storage.
- Interfaz adaptada para modo claro y oscuro.
- Navegación principal entre Inicio y Reportes.
- Metadata y configuración SEO básica.
- Soporte para `robots.ts` y `sitemap.ts`.

## Estado del proyecto

Al momento de esta entrega:

- La aplicación compila correctamente.
- El flujo principal de generación de reportes funciona correctamente.
- La vista previa y la generación de Markdown se encuentran operativas.
- La persistencia local de reportes está implementada.
- El proyecto se encuentra preparado para futuras ampliaciones e integración de nuevas funcionalidades.

## Integrantes del equipo

- Julieta Rodríguez
- Carolina Pally
- Agustín Quintana
- Guillermina Gatti
- Lucas Laurido

## Licencia

Proyecto desarrollado con fines académicos.