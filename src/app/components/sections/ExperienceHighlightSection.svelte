<script lang="ts">
  /* IMPORTS */
  import Section from "../atoms/Spacing/Section.svelte";
  import Background from "../atoms/Spacing/Background.svelte";
  import Highlight from "../organisms/Highlight.svelte";
  
  import { experienceText } from "../../content/experienceHighlight";
  import { language } from "../../stores/language"; 

  /* HOOKS */
  $: experienceContent = experienceText[$language];
</script>

<Background color="black">
  <Section anchor="experience-highlight" >
    <Highlight
      title={experienceContent.title}
      subtitle={experienceContent.subtitle}
    />
  </Section>
</Background>
