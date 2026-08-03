# BugNet

Generador de reportes de bugs construido con Next.js 16, React 19 y TypeScript.

## Descripción

BugNet es una aplicación web para generar y mostrar reportes de bugs en formato Markdown. Actualmente la implementación inicial incluye páginas básicas de inicio y reportes, junto con la configuración de build y lint, pero aún requiere desarrollar la lógica principal de creación, edición y persistencia de reportes.

## Tecnologías utilizadas

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Estructura del proyecto

- `app/`
  - `layout.tsx` — layout global y navegación.
  - `page.tsx` — página de inicio.
  - `reports/page.tsx` — página de reportes.
- `public/` — recursos estáticos.
- `next.config.ts` — configuración de Next.js.
- `eslint.config.mjs` — configuración de ESLint.
- `package.json` — scripts y dependencias.
- `BUGFIXES.md` — análisis de calidad, hallazgos y checklist.

## Instalación

```bash
pnpm install
```

## Comandos disponibles

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

### Detalles de los comandos

- `pnpm dev` — inicia el servidor de desarrollo.
- `pnpm build` — genera el build de producción.
- `pnpm start` — levanta la aplicación en modo producción luego de `pnpm build`.
- `pnpm lint` — ejecuta ESLint sobre el proyecto.

## Validación de calidad

- `pnpm lint` se ejecutó correctamente y no reportó errores.
- `pnpm build` compiló exitosamente y generó las páginas estáticas `/` y `/reports`.
- Se detectó una advertencia de Next.js sobre la detección del root del workspace:
  - Next.js encontró múltiples lockfiles y usó `C:\Users\Usuario\pnpm-lock.yaml` como root.
  - Recomendación: ajustar `turbopack.root` en `next.config.ts` o eliminar un lockfile innecesario.

## Estado actual

- La aplicación funciona como un sitio estático de demostración.
- No está implementada la lógica de generación ni guardado de reportes de bugs.
- Las páginas actuales son:
  - `/` — inicio.
  - `/reports` — listado de reportes (estático).

## Observaciones

- La arquitectura base está correcta para un proyecto Next.js moderno.
- Falta definir y agregar componentes reutilizables, servicios y gestión de estado para la funcionalidad principal.
- Es necesario incorporar las rutas y la UI para crear, ver y descargar reportes en Markdown.

## Recomendaciones para continuar

1. Implementar una página o formulario para crear reportes de bugs.
2. Añadir persistencia local o backend para guardar reportes.
3. Extender `app/reports` con vistas dinámicas de reportes.
4. Ajustar `next.config.ts` para evitar la advertencia de root de workspace.
5. Completar la documentación de la consigna del TP3 y comparar la funcionalidad con el entregable requerido.

## Checklist de entrega

- [x] Documentación de instalación y uso.
- [x] Documentación de estructura del proyecto.
- [x] Ejecución de `pnpm lint` y `pnpm build`.
- [ ] Desarrollo de la funcionalidad de generación de reportes.
- [ ] Implementación de persistencia de reportes.
- [ ] Comparación completa con la consigna TP3.
