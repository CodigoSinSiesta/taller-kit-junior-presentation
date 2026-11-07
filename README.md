# Taller · Kit de supervivencia para juniors · Presentación

Presentación del taller de 2 horas de Código Sin Siesta. La práctica está en
[`taller-kit-junior-starter`](https://github.com/CodigoSinSiesta/taller-kit-junior-starter) y el kit que se llevan los
asistentes, en [`kit-junior`](https://github.com/CodigoSinSiesta/kit-junior).

29 diapositivas: el problema → qué es un agente → entorno y primer ticket → la IA en el trabajo → tu tutor → segundo ticket
→ adaptarlo → cierre.

## Desarrollo

```bash
pnpm install
pnpm dev      # http://localhost:4331/taller-kit-junior-presentation/
pnpm build
```

Navegación: `←` / `→`, espacio o los botones. `#/12` abre la diapositiva 12.

## Estructura

- `src/components/slides/`: una diapositiva por fichero, sobre las plantillas de `@codigosinsiesta/theme`.
- `src/components/SlideEnlaces.svelte`: recursos y cierre en dos columnas, con el `QRCode` del theme.
- `src/components/Navigation.svelte`: navegación y escala automática para llenar cualquier pantalla.
- `public/planos/`: plantillas copiadas del motor de vídeo (`motor/plantillas/`), más `escalera.js`, propia. Las monta `src/scripts/planos.ts`: `→` revela cada paso y, al acabar, pasa de diapositiva.
- `src/config/workshop.ts`: los enlaces del taller.
- `guia/`: notas del ponente, una por diapositiva. Lo marcado como PENDIENTE se comprueba antes de impartirlo.

## Despliegue

GitHub Pages con `.github/workflows/deploy.yml`, en <https://codigosinsiesta.com/taller-kit-junior-presentation/>.

## Licencia

Contenido de Código Sin Siesta · Alejandro de la Fuente.
