<script lang="ts">
  /* IMPORTS */
  import Section from "../atoms/Spacing/Section.svelte";
  import Hero from "../organisms/Hero.svelte";
  import Projects from "../organisms/Projects.svelte";

  import { AlignItems } from "../../types/styles";

  import { projectsText } from "../../content/projects";
  import { language } from "../../stores/language";
  import { isDarkMode } from "../../stores/lightMode";
  import { TextColorVariant } from "../../types/variants";

  /* HOOKS */
  $: projectsContent = projectsText[$language];
</script>

<Section anchor="projects" color="white" clearSidePadding={true}>
  <div class="ProjectsSection__Hero">
    <Hero
      title={projectsContent.title}
      subtitle={projectsContent.subtitle}
      align={AlignItems.START}
      subtitleColor={$isDarkMode
        ? TextColorVariant.WHITE
        : TextColorVariant.BLACK}
    />
  </div>
  <Projects />
</Section>

<style>
  .ProjectsSection__Hero {
    width: 100%;
    padding: 0 var(--section-margin-horizontal);
  }
</style>
