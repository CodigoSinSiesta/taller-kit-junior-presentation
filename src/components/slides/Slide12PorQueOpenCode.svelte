<script lang="ts">
  import SlidePlano from '../SlidePlano.svelte';

  const datos = {
  "kicker": "La herramienta",
  "title": "Por qué usamos [[OpenCode]]",
  "command": "$ opencode",
  "providers": [
    {
      "logo": "github",
      "name": "Copilot",
      "lit": true
    },
    {
      "logo": "anthropic",
      "name": "Anthropic"
    },
    {
      "logo": "openrouter",
      "name": "OpenRouter"
    },
    {
      "logo": "deepseek",
      "name": "DeepSeek"
    },
    {
      "logo": "ollama",
      "name": "Ollama"
    }
  ],
  "tagline": {
    "lead": "Sin ataduras:",
    "rest": " el mismo harness con el proveedor que use tu empresa."
  }
};
</script>

<SlidePlano plantilla="model-switch" {datos} auto />
