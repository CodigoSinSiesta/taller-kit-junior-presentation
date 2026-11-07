<script lang="ts">
  import SlidePlano from '../SlidePlano.svelte';

  const datos = {
  "kicker": "Las dos horas",
  "title": "Del susto a [[tu propio kit]]",
  "items": [
    {
      "k": "0:00",
      "t": "Entender"
    },
    {
      "k": "0:25",
      "t": "Tu entorno"
    },
    {
      "k": "0:40",
      "t": "Delegar y examinarte"
    },
    {
      "k": "1:10",
      "t": "Montar tu tutor"
    },
    {
      "k": "1:30",
      "t": "Aprender con él"
    },
    {
      "k": "1:45",
      "t": "Hacerlo tuyo",
      "lit": true
    }
  ]
};
</script>

<SlidePlano plantilla="timeline" {datos} auto />
