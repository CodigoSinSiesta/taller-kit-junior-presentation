<script lang="ts">
  import SlidePlano from '../SlidePlano.svelte';

  const datos = {
  "kicker": "Ejemplo real",
  "title": "Copilot Free: [[decide qué pasa con tus datos]]",
  "button": "Guardar",
  "rows": [
    {
      "label": "Plan",
      "v": "Copilot Free"
    },
    {
      "label": "Cupo mensual",
      "v": "se reinicia el día 1"
    },
    {
      "label": "Allow GitHub to use my data for AI model training",
      "tog": true,
      "on": false
    }
  ]
};
</script>

<SlidePlano plantilla="config" {datos} />
