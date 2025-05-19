<script lang="ts">
  /* IMPORTS */
  import Section from "../atoms/Spacing/Section.svelte";
  import Background from "../atoms/Spacing/Background.svelte";
  import Highlight from "../organisms/Highlight.svelte";

	import { skillsText } from '../../content/skillsHighlight';
  import { language } from "../../stores/language"; 

  /* HOOKS */
  $: skillsContent = skillsText[$language];
</script>

<Background color="black">
  <Section anchor="skills-highlight">
    <Highlight
      title={skillsContent.title}
      subtitle={skillsContent.subtitle}
    />
  </Section>
</Background>
