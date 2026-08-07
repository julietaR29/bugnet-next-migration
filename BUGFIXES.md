# BUGFIXES

## Resumen inicial
Este documento recoge la revisión de la arquitectura y la estructura del proyecto antes de completar la documentación final. Aquí se documenta el estado actual, los hallazgos preliminares y el checklist de validación.

## Estado actual del proyecto
- Proyecto basado en Next.js 16 con App Router.
- Estructura mínima de páginas en `app/page.tsx` y `app/reports/page.tsx`.
- Archivo de configuración `next.config.ts` presente pero sin opciones específicas.
- `eslint.config.mjs` utiliza las reglas de `eslint-config-next` y `eslint-config-next/core-web-vitals`.
- No hay código de negocio implementado para generación o guardado de reportes de bugs: solo pantallas estáticas.

## Observaciones de arquitectura
- La aplicación usa Next.js con `app/` y `layout.tsx`, lo cual es adecuado para proyectos modernos.
- La navegación es básica y accesible: existe un menú con `Inicio` y `Reportes`.
- No se observa una capa de datos, formularios ni gestión de estado para la funcionalidad principal del TP.
- No hay validación de entradas ni persistencia de reportes (localStorage, API, DB, etc.).

## Revisión de estructura de carpetas
- `app/` contiene las páginas principales y el layout.
- `app/reports/` aporta una página de reportes, pero no funcional.
- `public/` solo contiene recursos estáticos de iconos.
- No hay carpetas para componentes reutilizables, utilidades, servicios o datos.

## Comparación con la consigna del TP3
Basado en el título y el objetivo del proyecto, se espera que BugNet incluya:
- Generación de reportes de bugs en formato Markdown.
- Entrada de datos mediante un formulario de reporte.
- Listado de reportes y vistas detalladas de cada reporte.
- Persistencia o descarga de reportes (almacenamiento local o backend).
- Navegación entre creación de reportes y visualización de reportes.

### Estado actual frente a la consigna
- La aplicación tiene páginas estáticas de `Inicio` y `Reportes`.
- No existe actualmente la lógica para crear o guardar reportes.
- No se implementa la exportación o visualización en formato Markdown.
- No hay rutas dinámicas ni detalles de reportes individuales.
- La documentación de instalación y ejecución sí está cubierta.

### Conclusión de la comparación
- La base de la arquitectura es correcta para avanzar.
- Sin embargo, la funcionalidad principal del TP3 todavía no está implementada.
- Este proyecto se encuentra en un estado inicial: estructura, navegación y calidad de build son válidos, pero la aplicación no cumple completamente la consigna funcional.

## Observaciones preliminares sobre calidad
- El README es el que trae un template de `create-next-app` y requiere actualización completa.
- La configuración de lint está presente, pero aún no se ha verificado su ejecución.
- El proyecto parece listo para un primer build, aunque puede requerir actualización de dependencias según la versión de Next.js y React.

## Checklist inicial de validación
- [x] `BUGFIXES.md` creado.
- [ ] Revisar la consigna completa del TP3 y contrastarla con la implementación.
- [x] Ejecutar `pnpm lint` y documentar resultados.
- [x] Ejecutar `pnpm build` y documentar errores o advertencias.
- [ ] Completar `README.md` con instalación, uso y estructura del proyecto.
- [ ] Identificar los cambios necesarios para cumplir la consigna.
- [ ] Añadir observaciones finales y conclusiones en este documento.

## Resultados de validación
### pnpm lint
- `pnpm lint` se ejecutó correctamente.
- No se reportaron errores ni advertencias de ESLint.
- El proyecto cumple con la validación de lint actual.

### pnpm build
- `pnpm build` compiló exitosamente.
- El build generó las rutas estáticas `/` y `/reports`.
- No hubo errores de compilación.
- Se detectó una advertencia de Next.js sobre el root del workspace:
  - "Next.js inferred your workspace root, but it may not be correct."
  - Esto ocurre porque hay múltiples lockfiles en la jerarquía de carpetas (`C:\Users\Usuario\pnpm-lock.yaml` y `pnpm-workspace.yaml`).
  - Recomendación: establecer `turbopack.root` en `next.config.ts` o eliminar un lockfile no necesario.

## Próximos pasos
1. Revisar la consigna completa del TP3 y contrastarla con la implementación.
2. Actualizar `README.md` con la documentación completa.
3. Registrar hallazgos de arquitectura y estructura de carpetas.
4. Añadir observaciones finales y conclusiones en este documento.

## Checklist final de validación
- [x] `BUGFIXES.md` creado y actualizado.
- [x] `README.md` actualizado con descripción, estructura, instalación y scripts.
- [x] `pnpm lint` ejecutado sin errores.
- [x] `pnpm build` ejecutado exitosamente.
- [x] Hallazgos de arquitectura y estructura documentados.
- [x] Comparación con la consigna del TP3 documentada.
- [ ] Implementación funcional completa de TP3 (pendiente).
- [ ] Ajuste de advertencia de root de workspace en `next.config.ts` (recomendado).
- [ ] Cierre final de observaciones y decisiones de entrega.
