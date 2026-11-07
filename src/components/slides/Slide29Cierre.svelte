<script lang="ts">
  import SlideEnlaces from '../SlideEnlaces.svelte';
  import { KIT_REPO } from '../../config/workshop';
</script>

<SlideEnlaces
  eyebrow="Cierre"
  title="Te llevas un kit y un criterio"
  titleHighlight="un criterio"
  takeaways={[
    'Delega lo que ya sabes. **Aprende lo que aún no.**',
    'Un agente es un bucle con herramientas: **tú pones los frenos**.',
    'Lo que no sepas explicar, **no lo entregues**.',
    'Antes de pegar nada, **pregunta qué está permitido**.',
  ]}
  links={[
    { title: 'Alejandro de la Fuente', url: 'https://tellmealex.dev', tag: 'tellmealex.dev · @TellMeAlex' },
  ]}
  qrUrl={KIT_REPO}
  qrTitle="kit-junior"
  closing="Tu próximo paso: usa el tutor en tu siguiente ticket real."
/>
