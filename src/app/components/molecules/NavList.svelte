<script lang="ts">
  /* IMPORTS */
  import Link from "../atoms/Text/Link.svelte";
  import { TextColorVariant } from "../../types/variants";
  import { isDesktop, isMobile } from "../../stores/device";
  import { scrollTo } from "../../utils/scroll";
  import { navText } from "../../content/nav";
  import { language } from "../../stores/language";
  import { myCvUrl } from "../../content/urls";
  import Reveal from "../atoms/Spacing/Reveal.svelte";

  /* ATTRIBUTES */
  /** Function to open and close menu */
  export let toggleMenu: () => void = () => {};

  /* METHODS */
  const handleClick = (location: string) => {
    if (toggleMenu) {
      scrollTo(location, "auto");
      toggleMenu();
    } else {
      scrollTo(location);
    }
  };

  const handleHeroClick = () => handleClick("home");
  const handleAboutClick = () => handleClick("about");
  const handleExperienceClick = () => handleClick("experience");
  const handleSkillsClick = () => handleClick("skills");
  const handlePortfolioClick = () => handleClick("projects");
  const handleContactClick = () => handleClick("contact");
  const handleCVClick = () => {
    window.open(myCvUrl, "_blank"); 
  };

  /* HOOKS */
  $: navContent = navText[$language];
  $: fontSize = $isDesktop ? 4 : $isMobile ? 2.5 : 3;
</script>

{#each [{ label: navContent.homeLabel, click: handleHeroClick, selected: true }, { label: navContent.aboutLabel, click: handleAboutClick }, { label: navContent.skillsLabel, click: handleSkillsClick }, { label: navContent.portfolioLabel, click: handlePortfolioClick }, { label: navContent.experienceLabel, click: handleExperienceClick }, { label: navContent.cvLabel, click: handleCVClick }, { label: navContent.contactLabel, click: handleContactClick }] as item, index}
  <Reveal once={false} reset={true} delay={0.2 + index / 6} duration={index / 6} direction="left" disabled={false}>
    <div class="LinkItem {item.selected ? 'LinkItem--selected' : ''}">
      <Link
        url="#"
        onClick={item.click}
        {fontSize}
        color={item.selected
          ? TextColorVariant.WHITE
          : TextColorVariant.WHITE_SECONDARY}
      >
        {item.label}
      </Link>
    </div>
  </Reveal>
{/each}

<style>
  .LinkItem {
    position: relative;
  }

  .LinkItem:after {
    position: absolute;
    content: "";
    top: 55%;
    margin-top: -2px;
    left: 0;
    width: 0;
    height: 4px;
    opacity: 1;
    background: var(--color-orange);
    border-radius: 2px;
    z-index: 1;
    transition: width 200ms ease-in-out;
    pointer-events: none;
  }

  .LinkItem:hover:after,
  .LinkItem--selected:after {
    width: 100%;
  }
</style>
