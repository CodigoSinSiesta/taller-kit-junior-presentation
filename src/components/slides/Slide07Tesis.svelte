<script lang="ts">
  import SlideStatement from '@codigosinsiesta/theme/slides/SlideStatement.svelte';

  const props = {
  "eyebrow": "La idea de hoy",
  "statement": "El riesgo no es usar IA. Es delegar lo que necesitabas aprender.",
  "highlight": "delegar lo que necesitabas aprender",
  "align": "center"
};
</script>

<SlideStatement {...props} />
