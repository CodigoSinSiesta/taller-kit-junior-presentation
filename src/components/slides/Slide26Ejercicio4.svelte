<script lang="ts">
  import SlideHandsOn from '@codigosinsiesta/theme/slides/SlideHandsOn.svelte';

  const props = {
  "eyebrow": "Ejercicio 4 · 15 min",
  "title": "Resuelve tú el segundo ticket",
  "titleHighlight": "tú",
  "intro": "Tras usar un cupón, el café se abarata para todos. Ahora escribes tú.",
  "steps": [
    {
      "title": "Reproduce el problema",
      "body": "Lee `tickets/TICKET-102.md`.",
      "code": "npm run cupon",
      "codeLang": "bash"
    },
    {
      "title": "Pide ayuda, no la solución",
      "body": "Usa `/mapa`, `/explica` y `/pista`."
    },
    {
      "title": "Arréglalo y añade un test",
      "body": "Escribes tú. Pásalo con `npm test`."
    },
    {
      "title": "Examínate",
      "body": "Usa `/revisa` y después `/examen`."
    }
  ]
};
</script>

<SlideHandsOn {...props} />
