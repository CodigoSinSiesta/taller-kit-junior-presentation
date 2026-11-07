<script lang="ts">
  import SlideStatement from '@codigosinsiesta/theme/slides/SlideStatement.svelte';

  const props = {
  "eyebrow": "En el trabajo",
  "statement": "El commit lleva tu nombre. Lo que no sepas explicar, no lo entregues.",
  "highlight": "no lo entregues",
  "align": "center"
};
</script>

<SlideStatement {...props} />
