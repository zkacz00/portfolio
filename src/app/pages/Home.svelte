<script lang="ts">
  import { onMount } from 'svelte';
  import { scrollToTop } from '../utils/scroll'; // Adjust path if needed

  /* IMPORTS */
  import Nav from "../components/organisms/Nav.svelte";
  import HeroSection from "../components/sections/HeroSection.svelte";
  import AboutSection from "../components/sections/AboutSection.svelte";
  import HighlightsSection from "../components/sections/ExperienceHighlightSection.svelte";
  import ProjectsSection from "../components/sections/ProjectsSection.svelte";
  import SkillsSection from "../components/sections/SkillsSection.svelte";
  import ExperienceSection from "../components/sections/ExperienceSection.svelte";
  import ContactSection from "../components/sections/ContactSection.svelte";
  import FooterSection from "../components/sections/FooterSection.svelte";
  import ScrollingTextSection from "../components/sections/ScrollingTextSection.svelte";
  import SkillsHighlightSection from "../components/sections/SkillsHighlightSection.svelte";
  import Menu from "../components/organisms/Menu.svelte";
  import LoadingOverlay from '../components/organisms/LoadingOverlay.svelte';

  /* VARIABLES */
  let isMenuOpen = false;
  let loadingComplete = false;
  let hideOverlay = false;

  const toggleMenu = () => (isMenuOpen = !isMenuOpen);

  onMount(() => {
    scrollToTop();

    setTimeout(() => {
      loadingComplete = true;
      setTimeout(() => {
        hideOverlay = true;
      }, 1300);
    }, 1500);
  });
</script>

<LoadingOverlay visible={!loadingComplete} />

<div class="Home" class:Home--noScroll={!loadingComplete}>
  <Nav {isMenuOpen} {toggleMenu} />
  <Menu {isMenuOpen} {toggleMenu} />
  <HeroSection />
  <ScrollingTextSection />
  <AboutSection />
  <HighlightsSection />
  <SkillsSection />
  <SkillsHighlightSection />
  <ProjectsSection />
  <ExperienceSection />
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
    background-color: rgb(35, 35, 35);
  }

  .Home--noScroll {
    overflow: hidden;
    height: 100vh;
  }

  :global(.DarkMode) .Home {
    background-color: rgb(45, 45, 45);
  }

  :global(.Tablet) .Home {
    padding-top: 8rem;
  }

  :global(.Mobile) .Home {
    padding-top: 8rem;
  }
</style>
