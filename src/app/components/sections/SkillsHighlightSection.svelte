<script lang="ts">
  /* IMPORTS */
  import Section from "../atoms/Spacing/Section.svelte";
  import Highlight from "../organisms/Highlight.svelte";
  import { skillsText } from "../../content/skillsHighlight";
  import { language } from "../../stores/language";

  /* HOOKS */
  $: skillsContent = skillsText[$language];
</script>

<Section anchor="skills-highlight" color="black">
    <Highlight title={skillsContent.title} subtitle={skillsContent.subtitle} />
</Section>
