<script lang="ts">
  /* IMPORTS */
  import Section from "../atoms/Spacing/Section.svelte";
  import Hero from "../organisms/Hero.svelte";
  import Projects from "../organisms/Projects.svelte";

  import { AlignItems } from "../../types/styles";

  import { projectsText } from "../../content/projects";
  import { language } from "../../stores/language"; 

  /* HOOKS */
  $: projectsContent = projectsText[$language];
</script>

  <Section anchor="projects" color="white">
    <Hero
      title={projectsContent.title}
      subtitle={projectsContent.subtitle}
      align={AlignItems.START}
    />
    <Projects />
  </Section>
