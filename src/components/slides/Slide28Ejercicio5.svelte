<script lang="ts">
  import SlideHandsOn from '@codigosinsiesta/theme/slides/SlideHandsOn.svelte';

  const props = {
  "eyebrow": "Ejercicio 5 · 8 min",
  "title": "Adáptalo a ti",
  "titleHighlight": "a ti",
  "intro": "Edita tu repo `kit-junior` en GitHub: pulsa `.` y se abre el editor.",
  "steps": [
    {
      "title": "Rellena tu perfil",
      "body": "`skills/perfil-tutor/SKILL.md`: tecnología y exigencia."
    },
    {
      "title": "Pon tu plantilla",
      "body": "`skills/plantillas/SKILL.md`: la de tu PR o tu equipo."
    },
    {
      "title": "Abre un permiso",
      "body": "Si usas Maven: `mvn test *` en `agents/tutor.md`."
    },
    {
      "title": "Tráelo al entorno",
      "body": "Guarda en GitHub y actualiza tu copia.",
      "code": "git -C ~/kit-junior pull",
      "codeLang": "bash"
    }
  ]
};
</script>

<SlideHandsOn {...props} />
