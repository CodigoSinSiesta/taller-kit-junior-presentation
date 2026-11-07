// Anima las diapositivas hechas con plantillas del motor de vídeo.
// Cada paso entra al pulsar →; con `auto`, entran solos. Las plantillas son funciones puras del tiempo.
type Montaje = { steps: number; update: (lt: number, D: number, at: (i: number) => number) => void };
type Plano = { montaje: Montaje; inicio: number; tiempos: number[]; paso: number; auto: boolean };

declare const TPLRT: { base: string; mount: (raiz: HTMLElement, nombre: string, datos: object) => Montaje };

const CADENCIA_AUTO = 1.3;
const movimientoReducido = matchMedia('(prefers-reduced-motion: reduce)').matches;
const planos = new WeakMap<HTMLElement, Plano>();
let activo: HTMLElement | null = null;

const tiempo = (p: Plano) => (performance.now() - p.inicio) / 1000;

// En un móvil en vertical el lienzo se ajusta al ancho y la diapositiva avisa de que conviene girarlo.
const vertical = matchMedia('(max-width: 759px) and (orientation: portrait)');

function escalar() {
  const escala = vertical.matches ? innerWidth / 1920 : Math.min(innerWidth / 1920, innerHeight / 1080);
  document.documentElement.style.setProperty('--escala-plano', String(escala));
}

function revelar(p: Plano) {
  p.paso += 1;
  p.tiempos[p.paso] = tiempo(p);
}

function dibujar(p: Plano, instante: number) {
  p.montaje.update(instante, 10, (i) => p.tiempos[i] ?? Infinity);
}

function preparar(diapositiva: HTMLElement) {
  let plano = planos.get(diapositiva);
  if (!plano) {
    const escena = diapositiva.querySelector<HTMLElement>('.plano-escena')!;
    plano = {
      montaje: TPLRT.mount(escena, diapositiva.dataset.plantilla!, JSON.parse(diapositiva.dataset.datos!)),
      inicio: 0,
      tiempos: [],
      paso: 0,
      auto: diapositiva.dataset.auto === '1',
    };
    planos.set(diapositiva, plano);
  }
  plano.inicio = performance.now();
  plano.tiempos = [];
  plano.paso = 0;
  return plano;
}

function fotograma() {
  const plano = activo && planos.get(activo);
  if (plano) {
    const t = tiempo(plano);
    const pendiente = plano.paso < plano.montaje.steps;
    if (pendiente && plano.paso === 0 && t > 0.5) revelar(plano);
    else if (pendiente && plano.auto && t > 0.5 + plano.paso * CADENCIA_AUTO) revelar(plano);
    dibujar(plano, t);
  }
  requestAnimationFrame(fotograma);
}

function entrar(diapositiva: HTMLElement) {
  activo = diapositiva.classList.contains('plano') ? diapositiva : null;
  if (!activo) return;
  const plano = preparar(activo);
  if (movimientoReducido) {
    for (let i = 1; i <= plano.montaje.steps; i++) plano.tiempos[i] = -10;
    plano.paso = plano.montaje.steps;
    activo = null;
    dibujar(plano, 100);
  }
}

// Con un paso pendiente, → lo revela en vez de cambiar de diapositiva.
document.addEventListener('avanzar', (e) => {
  const plano = activo && planos.get(activo);
  if (plano && plano.paso < plano.montaje.steps) {
    e.preventDefault();
    revelar(plano);
  }
});
document.addEventListener('diapositiva', (e) => entrar((e as CustomEvent<HTMLElement>).detail));
addEventListener('resize', escalar);

TPLRT.base = `${document.documentElement.dataset.base}planos/logos/`;
escalar();
const inicial = document.querySelector<HTMLElement>('.swiper-slide.activa');
if (inicial) entrar(inicial);
if (!movimientoReducido) requestAnimationFrame(fotograma);
