<script lang="ts">
  // Portada animada para dejarla de fondo mientras te presentas.
  // El HTML ya trae la conversación completa: sin JS o con movimiento reducido se ve quieta.
  // La escritura en bucle está en src/scripts/terminal-portada.ts.
  import SlideShell from '@codigosinsiesta/theme/slides/SlideShell.svelte';
  import { CONVERSACION } from '../config/conversacion';

  const AVATAR = 'https://www.gravatar.com/avatar/8461e0b8674185c1df153079e820504b?s=240';
</script>

<SlideShell bgPreset="identidad">
  <div class="fondo" aria-hidden="true">
    <div class="rejilla"></div>
    <div class="orbe orbe-1"></div>
    <div class="orbe orbe-2"></div>
    <div class="orbe orbe-3"></div>
  </div>

  <div class="portada">
    <div class="columna">
      <h1>Kit de supervivencia para <span class="resalte">juniors</span></h1>
      <p class="subtitulo">¿Y si la IA, en lugar de hacer el trabajo por ti, te enseñara a aprender más rápido que nunca?</p>

      <div class="autor">
        <img src={AVATAR} alt="Alejandro de la Fuente" width="72" height="72" />
        <div>
          <p class="nombre">Alejandro de la Fuente</p>
          <p class="cargo">Expert Architect · NTT Data · Digital Architecture</p>
          <p class="enlaces">
            <a href="https://tellmealex.dev">tellmealex.dev</a>
            <a href="https://github.com/TellMeAlex">@TellMeAlex</a>
            <a href="https://es.linkedin.com/in/alejandro-de-la-fuente">LinkedIn</a>
          </p>
        </div>
      </div>
    </div>

    <figure class="terminal" aria-label="Conversación de ejemplo con el tutor">
      <figcaption>
        <span class="luz roja"></span><span class="luz ambar"></span><span class="luz verde"></span>
        <span class="titulo">tutor · kit-junior</span>
      </figcaption>
      <div id="terminal-portada" class="lineas">
        {#each CONVERSACION as linea}
          <p class={linea.quien}>{linea.texto}</p>
        {/each}
      </div>
    </figure>
  </div>
</SlideShell>

<style>
  .fondo {
    position: fixed;
    inset: 0;
    z-index: -1;
    overflow: hidden;
    pointer-events: none;
  }
  .rejilla {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(96, 165, 250, 0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(96, 165, 250, 0.07) 1px, transparent 1px);
    background-size: 60px 60px;
    animation: mover-rejilla 28s linear infinite;
  }
  .orbe {
    position: absolute;
    border-radius: 50%;
    filter: blur(70px);
    will-change: transform;
    animation: flotar 12s ease-in-out infinite alternate;
  }
  .orbe-1 {
    top: -12%;
    right: 8%;
    width: 46vw;
    height: 46vw;
    background: rgba(59, 130, 246, 0.22);
  }
  .orbe-2 {
    bottom: -22%;
    left: -6%;
    width: 40vw;
    height: 40vw;
    background: rgba(30, 58, 138, 0.42);
    animation-duration: 15s;
  }
  .orbe-3 {
    top: 42%;
    left: 44%;
    width: 22vw;
    height: 22vw;
    background: rgba(147, 197, 253, 0.1);
    animation-duration: 9s;
  }
  @keyframes mover-rejilla {
    to { background-position: 60px 60px; }
  }
  @keyframes flotar {
    to { transform: translateY(-30px); }
  }

  .portada {
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
    gap: 36px;
    align-items: center;
  }
  .columna {
    display: flex;
    flex-direction: column;
    gap: 16px;
    container-type: inline-size;
  }
  h1 {
    margin: 0;
    font-family: var(--font-display);
    /* «supervivencia» no se puede partir: con la columna estrecha la letra baja para que quepa. */
    font-size: min(3.5rem, 15cqi);
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.02em;
    color: var(--color-tinta);
  }
  .resalte {
    background: linear-gradient(135deg, var(--color-electrico), var(--color-cielo));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .subtitulo {
    margin: 0;
    font-size: 1.15rem;
    line-height: 1.45;
    color: var(--color-tinta2);
  }
  .autor {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 8px;
    padding: 14px 18px;
    border: 1px solid rgba(96, 165, 250, 0.22);
    border-radius: 14px;
    background: rgba(30, 58, 138, 0.18);
    backdrop-filter: blur(10px);
  }
  .autor img {
    flex: none;
    border-radius: 50%;
  }
  /* Sin esto la fila de enlaces fija el ancho mínimo y el texto se sale de la tarjeta. */
  .autor > div {
    min-width: 0;
  }
  .autor p {
    margin: 0;
  }
  .nombre {
    font-weight: 600;
    font-size: 1.05rem;
    color: var(--color-tinta);
  }
  .cargo {
    font-size: 15px;
    color: var(--color-tinta2);
  }
  .enlaces {
    display: flex;
    flex-wrap: wrap;
    gap: 2px 14px;
    margin-top: 4px !important;
    font-size: 15px;
  }
  .enlaces a {
    color: var(--color-cielo);
  }

  .terminal {
    margin: 0;
    overflow: hidden;
    border: 1px solid rgba(96, 165, 250, 0.22);
    border-radius: 14px;
    background: rgba(10, 22, 40, 0.82);
    box-shadow: 0 16px 48px rgba(10, 22, 40, 0.5);
    backdrop-filter: blur(10px);
  }
  figcaption {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 11px 14px;
    border-bottom: 1px solid rgba(96, 165, 250, 0.16);
    font-family: var(--font-mono);
    font-size: 15px;
    color: var(--color-tinta2);
  }
  .luz {
    width: 11px;
    height: 11px;
    border-radius: 50%;
  }
  .roja { background: var(--color-err); }
  .ambar { background: var(--color-warn); }
  .verde { background: var(--color-ok); }
  .titulo {
    margin-left: 8px;
  }
  .lineas {
    height: 380px;
    padding: 16px;
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 15px;
    line-height: 1.45;
  }
  .lineas :global(p) {
    min-height: 1.45em;
    margin: 0 0 12px;
  }
  .lineas :global(.alumno) {
    color: var(--color-tinta);
  }
  .lineas :global(.alumno)::before {
    content: '› ';
    color: var(--color-cielo);
  }
  .lineas :global(.tutor) {
    color: var(--color-cielo2);
  }
  .lineas :global(.escribiendo)::after {
    content: '▌';
    margin-left: 2px;
    color: var(--color-cielo);
    animation: cursor 1s steps(2) infinite;
  }
  @keyframes cursor {
    50% { opacity: 0; }
  }

  @media (max-width: 759px), (max-height: 499px) {
    .portada {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    h1 {
      font-size: min(2.4rem, 15cqi);
    }
    .autor {
      align-items: flex-start;
    }
    .enlaces {
      flex-wrap: wrap;
    }
    .lineas {
      height: 230px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .rejilla,
    .orbe {
      animation: none;
    }
  }
</style>
