<script lang="ts">
  import SlidePlano from '../SlidePlano.svelte';

  const datos = {
  "kicker": "El problema",
  "title": "Las tareas con las que aprendías [[ya las hace un modelo]]",
  "items": [
    {
      "pre": "−",
      "n": 13,
      "suf": "%",
      "sufSmall": true,
      "label": "de empleo relativo de 22 a 25 años en las ocupaciones más expuestas a la IA",
      "lit": true
    }
  ]
};
</script>

<SlidePlano plantilla="stat" {datos} fuente="EE. UU. · Brynjolfsson, Chandar y Chen, Stanford, 2025" />
