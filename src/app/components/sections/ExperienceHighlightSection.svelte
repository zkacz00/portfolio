<script lang="ts">
  /* IMPORTS */
  import Section from "../atoms/Spacing/Section.svelte";
  import Background from "../atoms/Spacing/Background.svelte";

  import Highlight from "../organisms/Highlight.svelte";
  import { Size } from "../../types/styles";
</script>

<Background color="black">
  <Section anchor="ExperienceHighlightSection" size={Size.SMALL}>
    <Highlight
      title="~2&nbsp;Years Experience"
      subtitle="As a Full-Stack Developer in a Remote and Fully English Work Enviroment... 💻"
    />
  </Section>
</Background>
