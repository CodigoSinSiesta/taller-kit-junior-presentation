<script lang="ts">
  import SlidePlano from '../SlidePlano.svelte';

  const datos = {
  "kicker": "Por dentro",
  "title": "Un agente es [[un bucle]]",
  "orbitSecs": 6,
  "steps": [
    {
      "name": "Lee"
    },
    {
      "name": "Razona"
    },
    {
      "name": "Actúa",
      "lit": true
    },
    {
      "name": "Observa"
    }
  ],
  "side": {
    "glyph": "tool",
    "text": "leer · editar · ejecutar"
  }
};
</script>

<SlidePlano plantilla="loop" {datos} auto />
