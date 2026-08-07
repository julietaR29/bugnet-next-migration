# BugNet - Migración a Next.js

Migración del proyecto BugNet, desarrollado originalmente con React + Vite, a Next.js 16 con App Router y TypeScript.

## Descripción

BugNet es una aplicación web para generar reportes de bugs en formato Markdown. La migración conserva la identidad visual del proyecto original y adapta su estructura al modelo de rutas y layout de Next.js.

## Tecnologías utilizadas

- Next.js 16
- React 19
- TypeScript
- App Router
- Tailwind CSS 4
- ESLint
- pnpm

## Estructura del proyecto

```txt
app/
  layout.tsx
  page.tsx
  reports/
    page.tsx
  robots.ts
  sitemap.ts

features/
  about/
  bug-report/
  polillas/

shared/
  components/
  lib/

public/
```
## Rutas iniciales

- `/`: pantalla principal con el generador de reportes.
- `/reports`: pantalla para reportes guardados.

## Comandos disponibles

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
```

## Notas de migración

- La ruta original `/reportes` se preparó como `/reports` en la estructura interna del proyecto.
- En pantalla se mantiene el texto en español para conservar la experiencia del usuario.
- La estructura `features/` y `shared/` replica la organización general del proyecto original.
- Los componentes interactivos del generador usan `"use client"` porque manejan estado, eventos y APIs del navegador.
- Se incorporaron metadatos, Open Graph, `robots.ts`, `sitemap.ts` y mejoras básicas de accesibilidad.

## Validación de calidad

- Se debe ejecutar `pnpm lint` antes de integrar cambios.
- Se debe ejecutar `pnpm build` antes de la entrega final.
- El README debe mantenerse sincronizado con la estructura real del repositorio.

## Checklist de entrega

- [x] Proyecto base en Next.js con App Router.
- [x] Rutas `/` y `/reports`.
- [x] Layout global y navegación.
- [x] Estructura base `features/` y `shared`.
- [x] Metadatos, Open Graph, sitemap y robots.
- [x] Generador inicial de reportes en Markdown.
- [ ] Persistencia o listado funcional de reportes guardados.
- [ ] Comparación final contra el proyecto original.
- [ ] Deploy final.