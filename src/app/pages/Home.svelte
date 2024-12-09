<script lang="ts">
  /* IMPORTS */
  import Meta from "../components/atoms/Meta/Meta.svelte";
  import Nav from "../components/organisms/Nav.svelte";
  import HeroSection from "../components/sections/HeroSection.svelte";
  import AboutSection from "../components/sections/AboutSection.svelte";
  import HighlightsSection from "../components/sections/ExperienceHighlightSection.svelte";
  import ProjectsSection from "../components/sections/ProjectsSection.svelte";
  import SkillsSection from "../components/sections/SkillsSection.svelte";
  import ExperienceSection from "../components/sections/ExperienceSection.svelte";
  import TestimonialsSection from "../components/sections/TestimonialsSection.svelte";
  import CtaSection from "../components/sections/CtaSection.svelte";
  import ContactSection from "../components/sections/ContactSection.svelte";
  import FooterSection from "../components/sections/FooterSection.svelte";
  import ScrollingTextSection from "../components/sections/ScrollingTextSection.svelte";
  import SkillsHighlightSection from "../components/sections/SkillsHighlightSection.svelte";

  import { metaTags } from "../content/metaTags";
</script>

<Meta {...metaTags.home} />

<div class="Home">
  <Nav />
  <HeroSection />
  <ScrollingTextSection />
  <AboutSection />
  <HighlightsSection />
  <SkillsSection />
  <SkillsHighlightSection />
  <ProjectsSection />
  <ExperienceSection />
  <!-- <TestimonialsSection /> -->
  <CtaSection />
  <ContactSection />
  <FooterSection />
</div>

<style>
  .Home {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 9rem;
  }

  :global(.Tablet) .Home {
    padding-top: 7.5rem;
  }

  :global(.Mobile) .Home {
    padding-top: 6.5rem;
  }
</style>
