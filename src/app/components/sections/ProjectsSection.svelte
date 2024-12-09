<script lang="ts">
  /* IMPORTS */
  import Section from "../atoms/Spacing/Section.svelte";
  import Hero from "../organisms/Hero.svelte";
  import Projects from "../organisms/Projects.svelte";

  import { AlignItems } from "../../types/styles";
  import Background from "../atoms/Spacing/Background.svelte";
</script>

  <Section anchor="ProjectsSection" color="white">
    <Hero
      title="My Projects"
      subtitle="Here you will find some of the personal and clients projects that I created with each project containing its own case study"
      align={AlignItems.START}
    />
    <Projects />
  </Section>
