<script lang="ts">
  /* IMPORTS */
  import Section from "../atoms/Spacing/Section.svelte";
  import Highlight from "../organisms/Highlight.svelte";
  import { experienceText } from "../../content/experienceHighlight";
  import { language } from "../../stores/language";

  /* HOOKS */
  $: experienceContent = experienceText[$language];
</script>

<Section anchor="experience-highlight" color="black">
    <Highlight
      title={experienceContent.title}
      subtitle={experienceContent.subtitle}
    />
</Section>
