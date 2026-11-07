<script lang="ts">
  import SlidePlano from '../SlidePlano.svelte';

  const datos = {
  "kicker": "La solución",
  "title": "Primero [[se deniega todo]]",
  "allow": [
    "read *",
    "git diff *",
    "npm test *"
  ],
  "deny": [
    "todo lo demás",
    "*.env",
    "*>*",
    "git * --output*"
  ],
  "rows": [
    {
      "cmd": "npm test",
      "kind": "new",
      "label": "permitido"
    },
    {
      "cmd": "npm test > f.txt",
      "kind": "del",
      "label": "denegado"
    },
    {
      "cmd": "git diff --output=f",
      "kind": "del",
      "label": "denegado"
    },
    {
      "cmd": "editar src/app.js",
      "kind": "del",
      "label": "denegado"
    }
  ],
  "note": "Cada permiso abierto abre una puerta. Gana la `última` regla que coincide."
};
</script>

<SlidePlano plantilla="rules" {datos} />
