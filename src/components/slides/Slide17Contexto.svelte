<script lang="ts">
  import SlidePlano from '../SlidePlano.svelte';

  const datos = {
  "kicker": "En el trabajo",
  "title": "El agente solo sabe [[lo que hay aquí]]",
  "window": "lo que recibe el modelo",
  "blocks": [
    {
      "label": "Instrucciones del harness",
      "value": "fijo",
      "h": 62
    },
    {
      "label": "AGENTS.md",
      "value": "del repo",
      "h": 62
    },
    {
      "label": "Ficheros que ha leído",
      "value": "crece",
      "h": 110
    },
    {
      "label": "Historial",
      "value": "crece",
      "h": 110
    },
    {
      "label": "Tu mensaje",
      "value": "nuevo",
      "h": 62,
      "lit": true
    }
  ],
  "note": "Lo que no esté escrito, [[no existe]] para él."
};
</script>

<SlidePlano plantilla="prompt-assembly" {datos} />
