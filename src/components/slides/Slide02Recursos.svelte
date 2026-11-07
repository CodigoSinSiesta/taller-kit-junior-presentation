<script lang="ts">
  import SlideEnlaces from '../SlideEnlaces.svelte';
  import { DECK_URL, KIT_REPO, STARTER_REPO } from '../../config/workshop';
</script>

<SlideEnlaces
  eyebrow="Antes de empezar"
  title="Abre esto mientras hablamos"
  titleHighlight="mientras hablamos"
  links={[
    { title: 'Proyecto del taller', url: STARTER_REPO, tag: 'Crea aquí tu Codespace' },
    { title: 'Tu kit', url: KIT_REPO, tag: 'Para el ejercicio 3' },
    { title: 'Esta presentación', url: DECK_URL },
  ]}
  qrUrl={STARTER_REPO}
  qrTitle="Proyecto del taller"
  closing="Copilot activado y entrenamiento desactivado: lo tienes en la guía previa."
/>
