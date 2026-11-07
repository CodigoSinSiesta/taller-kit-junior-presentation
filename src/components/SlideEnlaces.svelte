<script lang="ts">
  // Sustituye a SlideResources del theme: su QR es un dibujo decorativo que no se puede escanear.
  import QRCode from 'qrcode';
  import SlideShell from '@codigosinsiesta/theme/slides/SlideShell.svelte';
  import Eyebrow from '@codigosinsiesta/theme/components/Eyebrow.svelte';

  type Enlace = { title: string; url: string; tag?: string };

  let {
    eyebrow = '',
    title = '',
    titleHighlight = '',
    takeaways = [] as string[],
    links = [] as Enlace[],
    qrUrl = '',
    qrTitle = '',
    closing = '',
  } = $props<{
    eyebrow?: string;
    title?: string;
    titleHighlight?: string;
    takeaways?: string[];
    links?: Enlace[];
    qrUrl?: string;
    qrTitle?: string;
    closing?: string;
  }>();

  const MARGEN = 4;
  const modulos = $derived(QRCode.create(qrUrl, { errorCorrectionLevel: 'M' }).modules);
  const lado = $derived(modulos.size + MARGEN * 2);
  const celdas = $derived.by(() => {
    const resultado: { x: number; y: number }[] = [];
    for (let y = 0; y < modulos.size; y++) {
      for (let x = 0; x < modulos.size; x++) {
        if (modulos.get(y, x)) resultado.push({ x: x + MARGEN, y: y + MARGEN });
      }
    }
    return resultado;
  });

  const partes = $derived(title.split(titleHighlight));

  function resaltar(texto: string) {
    return texto.replaceAll(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  }
</script>

<SlideShell bgPreset="cierre">
  <div class="cabecera">
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2>{partes[0]}<span class="resalte">{titleHighlight}</span>{partes[1]}</h2>
  </div>

  <div class="rejilla">
    <div class="columna">
      {#each takeaways as idea, i}
        <p class="idea"><span class="numero">{i + 1}</span><span>{@html resaltar(idea)}</span></p>
      {/each}
      {#each links as enlace}
        <a class="enlace" href={enlace.url}>
          <strong>{enlace.title}</strong>
          {#if enlace.tag}<small>{enlace.tag}</small>{/if}
        </a>
      {/each}
    </div>

    <figure>
      <svg viewBox="0 0 {lado} {lado}" role="img" aria-label="Código QR: {qrTitle}" shape-rendering="crispEdges">
        <rect width={lado} height={lado} fill="#FAF9F6" />
        {#each celdas as celda}
          <rect x={celda.x} y={celda.y} width="1" height="1" fill="#0f172a" />
        {/each}
      </svg>
      <figcaption>{qrTitle}</figcaption>
    </figure>
  </div>

  {#if closing}<p class="cierre">{closing}</p>{/if}
</SlideShell>

<style>
  .cabecera {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }
  h2 {
    margin: 0;
    font-family: var(--font-display);
    font-size: 2.6rem;
    line-height: 1.1;
    color: var(--color-tinta);
  }
  .resalte {
    background: linear-gradient(135deg, var(--color-electrico), var(--color-cielo));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .rejilla {
    display: grid;
    grid-template-columns: 1fr 270px;
    gap: var(--spacing-xl);
    align-items: center;
  }
  .columna {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .idea {
    display: flex;
    gap: 14px;
    align-items: baseline;
    margin: 0;
    font-size: 1.15rem;
    line-height: 1.35;
    color: var(--color-tinta2);
  }
  .numero {
    font-family: var(--font-mono);
    font-weight: 700;
    color: var(--color-cielo);
  }
  .idea :global(strong) {
    color: var(--color-tinta);
  }
  .enlace {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding: 14px 20px;
    border: 1px solid rgba(96, 165, 250, 0.22);
    border-radius: 12px;
    background: rgba(30, 58, 138, 0.18);
    color: var(--color-tinta);
    font-size: 1.1rem;
    text-decoration: none;
  }
  .enlace small {
    font-family: var(--font-mono);
    font-size: 0.95rem;
    color: var(--color-cielo);
  }
  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 0;
  }
  svg {
    width: 250px;
    height: 250px;
    border-radius: 12px;
  }
  figcaption {
    font-family: var(--font-mono);
    font-size: 1rem;
    color: var(--color-tinta2);
  }
  .cierre {
    margin: 0;
    font-size: 1.15rem;
    color: var(--color-tinta);
  }
</style>
