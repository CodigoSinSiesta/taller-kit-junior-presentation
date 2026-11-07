<script lang="ts">
  import SlidePlano from '../SlidePlano.svelte';

  const datos = {
  "kicker": "Tus datos",
  "title": "Lo que envías [[sale de tu ordenador]]",
  "columns": [
    {
      "label": "adelante",
      "tone": "ok",
      "items": [
        "proyectos de juguete",
        "código de tus prácticas",
        "documentación pública"
      ]
    },
    {
      "label": "pregunta antes",
      "tone": "am",
      "items": [
        "código de tu empresa",
        "herramientas sin aprobar",
        "logs internos"
      ]
    },
    {
      "label": "nunca",
      "tone": "bad",
      "lit": true,
      "items": [
        "claves y contraseñas",
        "datos personales",
        "datos de clientes"
      ]
    }
  ]
};
</script>

<SlidePlano plantilla="permissions" {datos} />
