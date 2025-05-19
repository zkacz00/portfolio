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
  import MenuMobile from "../components/organisms/MenuMobile.svelte";

  import { isDesktop } from "../stores/device";

  import { metaTags } from "../content/metaTags";

  /* VARIABLES */
  let isMenuOpen: boolean = false;

   /* METHODS */
  const toggleMenu = () => (isMenuOpen = !isMenuOpen);
</script>

<Meta {...metaTags.home} />

<div class="Home">
  <Nav {toggleMenu} />
  <MenuMobile isMenuOpen={$isDesktop ? false : isMenuOpen} {toggleMenu} />
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
    min-width: 40rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10rem;
    overflow-x: hidden;
  }

  :global(.Tablet) .Home {
    padding-top: 8rem;
  }

  :global(.Mobile) .Home {
    padding-top: 8rem;
  }
</style>
