<script lang="ts">
  import SlideHandsOn from '@codigosinsiesta/theme/slides/SlideHandsOn.svelte';

  const props = {
  "eyebrow": "Ejercicio 3 · 15 min",
  "title": "Monta tu tutor",
  "titleHighlight": "tu tutor",
  "intro": "Usa la plantilla `kit-junior` para que quede en tu cuenta de GitHub.",
  "steps": [
    {
      "title": "Crea tu copia pública",
      "body": "**Use this template** en `kit-junior`. Después, clónala.",
      "code": "git clone TU_COPIA ~/kit-junior",
      "codeLang": "bash"
    },
    {
      "title": "Instálalo",
      "body": "Vale para todos tus repos y no toca ninguno.",
      "code": "~/kit-junior/instalar.sh",
      "codeLang": "bash"
    },
    {
      "title": "Abre OpenCode y elige el tutor",
      "body": "Cambia de agente con **Shift+Tab**."
    },
    {
      "title": "Intenta romperlo",
      "body": "Pídele: **Arregla el TICKET-102 y edita el fichero**."
    }
  ]
};
</script>

<SlideHandsOn {...props} />
