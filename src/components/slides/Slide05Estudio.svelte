<script lang="ts">
  import SlidePlano from '../SlidePlano.svelte';

  const datos = {
  "kicker": "La evidencia",
  "title": "Con IA acabaron igual de rápido y [[aprendieron menos]]",
  "items": [
    {
      "n": 50,
      "suf": "%",
      "sufSmall": true,
      "label": "de nota en el test con IA"
    },
    {
      "n": 67,
      "suf": "%",
      "sufSmall": true,
      "label": "de nota en el test a mano",
      "cy": true,
      "lit": true
    },
    {
      "n": 23,
      "suf": " / 25",
      "sufSmall": true,
      "label": "minutos con IA y a mano: sin diferencia significativa"
    }
  ]
};
</script>

<SlidePlano plantilla="stat" {datos} fuente="Pequeño, a corto plazo y de una sola biblioteca · Anthropic, enero de 2026" />
