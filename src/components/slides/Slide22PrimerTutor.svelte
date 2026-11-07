<script lang="ts">
  import SlidePlano from '../SlidePlano.svelte';

  const datos = {
  "kicker": "Primer intento",
  "title": "Le prohibí escribir, y [[delegó]]",
  "director": {
    "name": "tutor",
    "glyph": "user"
  },
  "subs": [
    {
      "name": "edit",
      "note": "denegado",
      "glyph": "file"
    },
    {
      "name": "shell",
      "note": "denegado",
      "glyph": "tool"
    },
    {
      "name": "subagente",
      "note": "sí podía escribir",
      "glyph": "sub",
      "lit": true
    }
  ]
};
</script>

<SlidePlano plantilla="orchestra" {datos} />
