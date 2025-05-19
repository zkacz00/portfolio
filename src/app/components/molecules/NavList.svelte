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
  $: fontSize = $isDesktop ? 2.25 : $isTablet ? 4 : $isMobile ? 3.5 : 2.25;
</script>

<Link
  url="#about"
  onClick={handleAboutClick}
  fontSize={fontSize}
  color={!$isDesktop ? TextColorVariant.WHITE : TextColorVariant.WHITE_SECONDARY}
  >{navContent.aboutLabel}</Link
>
<Link
  url="#skills"
  onClick={handleSkillsClick}
  fontSize={fontSize}
  color={!$isDesktop ? TextColorVariant.WHITE : TextColorVariant.WHITE_SECONDARY}
  >{navContent.skillsLabel}</Link
>
<Link
  url="#projects"
  onClick={handlePortfolioClick}
  fontSize={fontSize}
  color={!$isDesktop ? TextColorVariant.WHITE : TextColorVariant.WHITE_SECONDARY}
  >{navContent.portfolioLabel}</Link
>
<Link
  url="#experience"
  onClick={handleExperienceClick}
  fontSize={fontSize}
  color={!$isDesktop ? TextColorVariant.WHITE : TextColorVariant.WHITE_SECONDARY}
  >{navContent.experienceLabel}</Link
>
<Link
  url="#contact"
  onClick={handleContactClick}
  fontSize={fontSize}
  color={!$isDesktop ? TextColorVariant.WHITE : TextColorVariant.WHITE_SECONDARY}
  >{navContent.contactLabel}</Link
>
