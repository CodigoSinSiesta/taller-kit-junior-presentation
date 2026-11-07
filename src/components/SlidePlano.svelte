<script lang="ts">
  // Diapositiva hecha con una plantilla del motor de vídeo (public/planos/).
  // La monta y la anima src/scripts/planos.ts; aquí solo se declaran la plantilla y sus datos.
  let {
    plantilla,
    datos = {},
    auto = false,
    fuente = '',
  } = $props<{ plantilla: string; datos?: object; auto?: boolean; fuente?: string }>();
</script>

<div class="swiper-slide plano" data-plantilla={plantilla} data-datos={JSON.stringify(datos)} data-auto={auto ? '1' : undefined}>
  <div class="plano-escena"></div>
  {#if fuente}<p class="plano-fuente">{fuente}</p>{/if}
  <p class="plano-aviso">Gira el móvil para verla mejor</p>
</div>
