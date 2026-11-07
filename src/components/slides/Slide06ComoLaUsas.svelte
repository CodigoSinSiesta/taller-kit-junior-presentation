<script lang="ts">
  import SlidePlano from '../SlidePlano.svelte';

  const datos = {
  "kicker": "La clave",
  "title": "No importa si la usas, sino [[cómo]]",
  "tag": "delegar",
  "rows": [
    {
      "myth": "Que lo resuelva todo",
      "real": "Pídele que te explique el [[concepto]]"
    },
    {
      "myth": "Que depure por ti",
      "real": "Pregunta [[por qué]] funciona"
    },
    {
      "myth": "Aceptar sin entender",
      "real": "Sigue [[pensando tú]]",
      "lit": true
    }
  ]
};
</script>

<SlidePlano plantilla="myth" {datos} fuente="Delegar mucho: menos de un 40 % · Hacer preguntas conceptuales: un 65 % o más · Anthropic, 2026" />
