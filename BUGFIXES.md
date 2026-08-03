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
Basado en el título y el objetivo del proyecto:
- Se espera una aplicación capaz de generar reportes de bugs en formato Markdown.
- El proyecto actual aún no implementa la lógica de generación de reportes.
- Falta la interfaz para crear un nuevo reporte y la visualización detallada de reportes.
- Falta documentación de las rutas, de la forma de ejecutar la aplicación y de las dependencias.

## Observaciones preliminares sobre calidad
- El README es el que trae un template de `create-next-app` y requiere actualización completa.
- La configuración de lint está presente, pero aún no se ha verificado su ejecución.
- El proyecto parece listo para un primer build, aunque puede requerir actualización de dependencias según la versión de Next.js y React.

## Checklist inicial de validación
- [x] `BUGFIXES.md` creado.
- [ ] Revisar la consigna completa del TP3 y contrastarla con la implementación.
- [ ] Ejecutar `pnpm lint` y documentar resultados.
- [ ] Ejecutar `pnpm build` y documentar errores o advertencias.
- [ ] Completar `README.md` con instalación, uso y estructura del proyecto.
- [ ] Identificar los cambios necesarios para cumplir la consigna.
- [ ] Añadir observaciones finales y conclusiones en este documento.

## Próximos pasos
1. Ejecutar `pnpm lint`.
2. Ejecutar `pnpm build`.
3. Actualizar `README.md` con la documentación completa.
4. Registrar todos los resultados y errores aquí en `BUGFIXES.md`.
