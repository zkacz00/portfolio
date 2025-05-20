<script lang="ts">
  /* IMPORTS */
  import Link from "../atoms/Text/Link.svelte";
  import { Size } from "../../types/styles";
  import { TextColorVariant } from "../../types/variants";
  import { isDesktop, isTablet, isMobile } from "../../stores/device";
  import { scrollTo } from "../../utils/scroll";
  import { navText } from "../../content/nav";
  import { language } from "../../stores/language";

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

  const handleAboutClick = () => handleClick("about");
  const handleExperienceClick = () => handleClick("experience");
  const handleSkillsClick = () => handleClick("skills");
  const handlePortfolioClick = () => handleClick("projects");
  const handleContactClick = () => handleClick("contact");

  /* HOOKS */
  $: navContent = navText[$language];
  $: fontSize = $isDesktop ? 5 : $isTablet ? 4 : $isMobile ? 3.5 : 2.25;
</script>

<div class="LinkItem">
  <Link
    url="#about"
    onClick={handleAboutClick}
    {fontSize}
    color={!$isDesktop
      ? TextColorVariant.WHITE
      : TextColorVariant.WHITE_SECONDARY}>{navContent.aboutLabel}</Link
  >
</div>
<div class="LinkItem">
  <Link
    url="#skills"
    onClick={handleSkillsClick}
    {fontSize}
    color={!$isDesktop
      ? TextColorVariant.WHITE
      : TextColorVariant.WHITE_SECONDARY}>{navContent.skillsLabel}</Link
  >
</div>
<div class="LinkItem">
  <Link
    url="#projects"
    onClick={handlePortfolioClick}
    {fontSize}
    color={!$isDesktop
      ? TextColorVariant.WHITE
      : TextColorVariant.WHITE_SECONDARY}>{navContent.portfolioLabel}</Link
  >
</div>
<div class="LinkItem">
  <Link
    url="#experience"
    onClick={handleExperienceClick}
    {fontSize}
    color={!$isDesktop
      ? TextColorVariant.WHITE
      : TextColorVariant.WHITE_SECONDARY}>{navContent.experienceLabel}</Link
  >
</div>
<div class="LinkItem">
  <Link
    url="#contact"
    onClick={handleContactClick}
    {fontSize}
    color={!$isDesktop
      ? TextColorVariant.WHITE
      : TextColorVariant.WHITE_SECONDARY}>{navContent.contactLabel}</Link
  >
</div>

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

.LinkItem:hover:after {
    width: 100%;
}
</style>
