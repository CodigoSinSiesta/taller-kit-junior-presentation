<script lang="ts">
  import SlideHandsOn from '@codigosinsiesta/theme/slides/SlideHandsOn.svelte';

  const props = {
  "eyebrow": "Ejercicio 2 · 8 min",
  "title": "Delega tu primer ticket",
  "titleHighlight": "Delega",
  "intro": "Eres nuevo. La caja no cuadra y te lo han asignado a ti. Usa el agente `build`.",
  "steps": [
    {
      "title": "Mira el problema",
      "body": "Lee `tickets/TICKET-101.md`.",
      "code": "npm run caja",
      "codeLang": "bash"
    },
    {
      "title": "Delégalo",
      "body": "Pídele: **Resuelve tickets/TICKET-101.md**."
    },
    {
      "title": "Comprueba que está",
      "body": "Las dos cifras deben coincidir.",
      "code": "npm run caja",
      "codeLang": "bash"
    },
    {
      "title": "Cierra OpenCode",
      "body": "**No leas lo que ha cambiado.** Viene un examen."
    }
  ]
};
</script>

<SlideHandsOn {...props} />
