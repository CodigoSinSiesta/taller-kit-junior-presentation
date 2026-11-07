<script lang="ts">
  import SlidePlano from '../SlidePlano.svelte';

  const datos = {
  "kicker": "Dos agentes",
  "title": "Elegir cuál usar [[también es el oficio]]",
  "cards": [
    {
      "glyph": "tool",
      "name": "build",
      "role": "hace el trabajo",
      "tools": [
        "editar",
        "ejecutar",
        "subagentes"
      ],
      "model": "cuando ya sabes hacerlo"
    },
    {
      "glyph": "user",
      "name": "tutor",
      "role": "te obliga a hacerlo",
      "tools": [
        "leer",
        "buscar",
        "lanzar tests"
      ],
      "model": "cuando necesitas aprender",
      "lit": true
    }
  ]
};
</script>

<SlidePlano plantilla="agent-card" {datos} />
