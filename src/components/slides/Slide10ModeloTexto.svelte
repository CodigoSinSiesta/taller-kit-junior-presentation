<script lang="ts">
  import SlidePlano from '../SlidePlano.svelte';

  const datos = {
  "kicker": "Dos piezas",
  "title": "El modelo solo [[completa texto]]",
  "prefix": "function suma(a, b) { return",
  "note": "No ejecuta nada: elige la siguiente pieza, una y otra vez"
};
</script>

<SlidePlano plantilla="next-token" {datos} auto />
