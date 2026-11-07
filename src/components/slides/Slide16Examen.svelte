<script lang="ts">
  import SlideList from '@codigosinsiesta/theme/slides/SlideList.svelte';

  const props = {
  "eyebrow": "El examen · 7 min · sin agente",
  "title": "Tu responsable te pregunta",
  "titleHighlight": "te pregunta",
  "columns": 2,
  "items": [
    {
      "title": "¿Qué estaba mal?",
      "body": "Explícalo con tus palabras."
    },
    {
      "title": "¿Por qué el IVA va por línea?",
      "body": "¿Quién lo exige?"
    },
    {
      "title": "¿Cuándo se rompió?",
      "body": "¿Qué commit lo introdujo y por qué?"
    },
    {
      "title": "¿Por qué no lo vieron los tests?",
      "body": "¿Qué test añadirías?"
    }
  ]
};
</script>

<SlideList {...props} />
