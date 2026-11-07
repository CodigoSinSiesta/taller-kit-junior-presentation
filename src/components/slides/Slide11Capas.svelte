<script lang="ts">
  import SlidePlano from '../SlidePlano.svelte';

  const datos = {
  "kicker": "Dos piezas",
  "title": "El modelo es el motor; [[el harness, el coche]]",
  "items": [
    {
      "t": "Tú",
      "s": "Pides, revisas y decides"
    },
    {
      "t": "Instrucciones",
      "s": "AGENTS.md, tu perfil y tus comandos"
    },
    {
      "t": "Harness · OpenCode",
      "s": "Bucle, herramientas y permisos",
      "lit": true
    },
    {
      "t": "Modelo · GitHub Copilot",
      "s": "Predice el siguiente texto"
    }
  ]
};
</script>

<SlidePlano plantilla="layers" {datos} />
