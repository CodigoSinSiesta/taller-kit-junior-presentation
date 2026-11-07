<script lang="ts">
  import SlideHandsOn from '@codigosinsiesta/theme/slides/SlideHandsOn.svelte';

  const props = {
  "eyebrow": "Ejercicio 1 · 15 min",
  "title": "Tu entorno, listo para trabajar",
  "titleHighlight": "listo",
  "intro": "El mismo entorno por dos caminos: Codespaces o dev container. Guion: `ejercicios/01-entorno.md`.",
  "steps": [
    {
      "title": "Abre el proyecto",
      "body": "Si sale **Modo restringido**, confía en la carpeta."
    },
    {
      "title": "Conecta tu cuenta",
      "body": "`/connect` → **GitHub Copilot**, aunque salga con ✓.",
      "code": "opencode",
      "codeLang": "bash"
    },
    {
      "title": "Elige un modelo de Copilot",
      "body": "Con `/models`. Pídele: **Responde solo: funciona**."
    },
    {
      "title": "Comprueba tu entorno",
      "body": "Debe acabar en **Entorno listo**.",
      "code": "./scripts/validate.sh",
      "codeLang": "bash"
    }
  ]
};
</script>

<SlideHandsOn {...props} />
