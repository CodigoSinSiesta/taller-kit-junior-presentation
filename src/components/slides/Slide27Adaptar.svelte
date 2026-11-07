<script lang="ts">
  import SlidePlano from '../SlidePlano.svelte';

  const datos = {
  "kicker": "Hazlo tuyo",
  "title": "Tres capas para [[adaptar tu tutor]]",
  "sum": "En tu kit",
  "tags": {
    "new": "+ añades",
    "mod": "~ adaptas",
    "del": ""
  },
  "forms": {
    "new": [
      "añadido",
      "añadidos"
    ],
    "mod": [
      "adaptado",
      "adaptados"
    ],
    "del": [
      "",
      ""
    ]
  },
  "tree": [
    {
      "text": "kit-junior/"
    },
    {
      "text": "├─ opencode/"
    },
    {
      "text": "│  ├─ skills/perfil-tutor/",
      "st": "mod"
    },
    {
      "text": "│  ├─ skills/plantillas/",
      "st": "mod"
    },
    {
      "text": "│  ├─ agents/tutor.md",
      "st": "mod"
    },
    {
      "text": "│  └─ commands/tu-comando.md",
      "st": "new"
    },
    {
      "text": "└─ aprendizajes/tu-diario.md",
      "st": "new"
    }
  ]
};
</script>

<SlidePlano plantilla="filetree" {datos} />
