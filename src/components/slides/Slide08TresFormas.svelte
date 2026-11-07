<script lang="ts">
  import SlidePlano from '../SlidePlano.svelte';

  const datos = {
  "kicker": "Por qué un agente",
  "title": "Tres formas, [[cuánto hacen por ti]]",
  "cols": [
    "Ve tu proyecto",
    "Cambia ficheros",
    "Ejecuta órdenes",
    "Decide el paso"
  ],
  "rows": [
    {
      "name": "Chat",
      "cells": [
        "no",
        "no",
        "no",
        "no"
      ]
    },
    {
      "name": "Autocompletado",
      "cells": [
        "parcial",
        "si aceptas",
        "no",
        "no"
      ]
    },
    {
      "name": "Agente",
      "lit": true,
      "cells": [
        "ok",
        "ok",
        "ok",
        "ok"
      ]
    }
  ]
};
</script>

<SlidePlano plantilla="matrix" {datos} />
