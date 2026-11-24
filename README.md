# P3.1 Maquetación con Vite y SASS

> S2DAW Diseño de Interfaces
> Autor: Houssam Koualla

## 1. Descripción

Se trata de la maquetación responsive de HoussiPlay, una web de cloud gaming, a partir del diseño hecho en Figma. Tiene dos páginas: la de inicio (`index.html`) y el formulario de inicio de sesión (`login.html`), con su versión de escritorio y su versión móvil.

Está hecho con Vite y SASS. Los estilos están repartidos en parciales dentro de `src/styles`:

- `_variables.scss`: las variables exportadas de Figma y alguna puesta a mano.
- `_mixins.scss`: el gestor de media queries con el mapa `$breakpoints` y los mixins `boton` y `flex-center`.
- `_globals.scss`: reenvía las variables y los mixins con `@forward`.
- `_layout.scss`: base del documento y el contenedor.
- `_components.scss`: cabecera, botones, tarjetas, página de inicio, página del login y pie.
- `main.scss`: junta todos los parciales con `@use`.

## 2. Cómo arrancarlo

```bash
npm install
npm run dev
npm run build
```

`npm run build` genera la carpeta `docs` para GitHub Pages.

## 3. Enlaces de interés

[Prototipo en Figma](https://www.figma.com/design/nHHFbMagdWJNCHgUHopW95/HoussiPlay?node-id=3-3)

[Enlace a la página desplegada en GitHub Pages](https://houssi755.github.io/P3.1-HoussiPlay/)
