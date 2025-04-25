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
    if(toggleMenu) {
      scrollTo(location, "auto"); 
      toggleMenu();
    }
    else {
      scrollTo(location);
    }
  }

  const handleAboutClick = () => handleClick("about");
  const handleExperienceClick = () => handleClick("experience");
  const handleSkillsClick = () => handleClick("skills");
  const handlePortfolioClick = () => handleClick("projects");
  const handleContactClick = () => handleClick("contact");

  /* HOOKS */
  $: navContent = navText[$language];
</script>

<Link
  url="#about"
  onClick={handleAboutClick}
  size={$isMobile ? Size.LARGE : $isTablet ? Size.MEDIUM : Size.SMALL}
  fontSize={!$isDesktop ? 2.5 : undefined}
  color={!$isDesktop ? TextColorVariant.WHITE : TextColorVariant.WHITE_SECONDARY}
  >{navContent.aboutLabel}</Link
>
<Link
  url="#skills"
  onClick={handleSkillsClick}
  size={$isMobile ? Size.LARGE : $isTablet ? Size.MEDIUM : Size.SMALL}
  fontSize={!$isDesktop ? 2.5 : undefined}
  color={!$isDesktop ? TextColorVariant.WHITE : TextColorVariant.WHITE_SECONDARY}
  >{navContent.skillsLabel}</Link
>
<Link
  url="#projects"
  onClick={handlePortfolioClick}
  size={$isMobile ? Size.LARGE : $isTablet ? Size.MEDIUM : Size.SMALL}
  fontSize={!$isDesktop ? 2.5 : undefined}
  color={!$isDesktop ? TextColorVariant.WHITE : TextColorVariant.WHITE_SECONDARY}
  >{navContent.portfolioLabel}</Link
>
<Link
  url="#experience"
  onClick={handleExperienceClick}
  size={$isMobile ? Size.LARGE : $isTablet ? Size.MEDIUM : Size.SMALL}
  fontSize={!$isDesktop ? 2.5 : undefined}
  color={!$isDesktop ? TextColorVariant.WHITE : TextColorVariant.WHITE_SECONDARY}
  >{navContent.experienceLabel}</Link
>
<Link
  url="#contact"
  onClick={handleContactClick}
  size={$isMobile ? Size.LARGE : $isTablet ? Size.MEDIUM : Size.SMALL}
  fontSize={!$isDesktop ? 2.5 : undefined}
  color={!$isDesktop ? TextColorVariant.WHITE : TextColorVariant.WHITE_SECONDARY}
  >{navContent.contactLabel}</Link
>
