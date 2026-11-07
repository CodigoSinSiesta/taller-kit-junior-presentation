<script lang="ts">
  import { onMount } from 'svelte';

  let actual = $state(0);
  let total = $state(0);
  let diapositivas: HTMLElement[] = [];

  // Pantallas estrechas o bajas: la diapositiva se reordena a tamaño natural y se desplaza (ver global.css).
  const COMPACTO = '(max-width: 759px), (max-height: 499px)';

  // Busca la mayor escala con la que la diapositiva cabe entera, a lo alto y a lo ancho, sea cual sea la pantalla.
  function encajar(diapositiva: HTMLElement) {
    const contenido = diapositiva.querySelector<HTMLElement>('.csi-slide-content');
    if (!contenido) return;
    if (matchMedia(COMPACTO).matches) {
      contenido.style.removeProperty('zoom');
      return;
    }
    const disponible = window.innerHeight - 100;
    let minimo = 0.6;
    let maximo = 1.45 * Math.max(1, window.innerWidth / 1280);
    for (let i = 0; i < 8; i++) {
      const escala = (minimo + maximo) / 2;
      contenido.style.setProperty('zoom', String(escala));
      const cabe = contenido.getBoundingClientRect().height <= disponible && diapositiva.scrollWidth <= window.innerWidth + 1;
      if (cabe) minimo = escala;
      else maximo = escala;
    }
    contenido.style.setProperty('zoom', String(minimo));
  }

  function ir(indice: number) {
    actual = Math.max(0, Math.min(indice, total - 1));
    diapositivas.forEach((d, i) => d.classList.toggle('activa', i === actual));
    encajar(diapositivas[actual]);
    document.dispatchEvent(new CustomEvent('diapositiva', { detail: diapositivas[actual] }));
    history.replaceState(null, '', `#/${actual + 1}`);
    const contador = document.getElementById('slide-counter');
    if (contador) contador.textContent = `${String(actual + 1).padStart(2, '0')} / ${total}`;
  }

  // Las diapositivas con pasos usan → para revelarlos antes de cambiar de diapositiva.
  function avanzar() {
    if (document.dispatchEvent(new Event('avanzar', { cancelable: true }))) ir(actual + 1);
  }

  function desdeHash() {
    return (parseInt(location.hash.replace('#/', ''), 10) || 1) - 1;
  }

  onMount(() => {
    diapositivas = [...document.querySelectorAll<HTMLElement>('#deck .swiper-slide')];
    total = diapositivas.length;
    ir(desdeHash());

    const teclado = (e: KeyboardEvent) => {
      if (['ArrowRight', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); avanzar(); }
      if (['ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); ir(actual - 1); }
      if (e.key === 'Home') ir(0);
      if (e.key === 'End') ir(total - 1);
    };
    const hash = () => ir(desdeHash());
    const redimensionar = () => encajar(diapositivas[actual]);
    let inicioX = 0;
    const tocar = (e: TouchEvent) => { inicioX = e.touches[0].clientX; };
    const soltar = (e: TouchEvent) => {
      const distancia = e.changedTouches[0].clientX - inicioX;
      if (distancia < -60) avanzar();
      if (distancia > 60) ir(actual - 1);
    };

    window.addEventListener('keydown', teclado);
    window.addEventListener('hashchange', hash);
    window.addEventListener('resize', redimensionar);
    window.addEventListener('touchstart', tocar);
    window.addEventListener('touchend', soltar);
    return () => {
      window.removeEventListener('keydown', teclado);
      window.removeEventListener('hashchange', hash);
      window.removeEventListener('resize', redimensionar);
      window.removeEventListener('touchstart', tocar);
      window.removeEventListener('touchend', soltar);
    };
  });
</script>

<nav class="navegacion" aria-label="Navegación de la presentación">
  <button onclick={() => ir(actual - 1)} disabled={actual === 0} aria-label="Diapositiva anterior">←</button>
  <button onclick={avanzar} disabled={actual >= total - 1} aria-label="Diapositiva siguiente">→</button>
</nav>

<style>
  .navegacion {
    position: fixed;
    right: 16px;
    bottom: 8px;
    z-index: 50;
    display: flex;
    gap: 8px;
  }
  button {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    border: 1px solid rgba(96, 165, 250, 0.22);
    background: rgba(30, 58, 138, 0.28);
    color: var(--color-tinta);
    font-size: 18px;
    cursor: pointer;
  }
  button:disabled {
    opacity: 0.35;
    cursor: default;
  }
</style>
