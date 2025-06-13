<script lang="ts">
  /* IMPORTS */

  import Link from "../atoms/Text/Link.svelte";
  import Text from "../atoms/Text/Text.svelte";
  import Flex from "../atoms/Spacing/Flex.svelte";
  import { AlignItems, FlexDirection, MaxSize } from "../../types/styles";
  import { TextColorVariant } from "../../types/variants";
  import { isMobile, isTablet } from "./../../stores/device";
  import { scrollTo } from "../../utils/scroll";
  import { myCvPlUrl, myCvEnUrl } from "../../content/urls";
  import { footerText } from "../../content/footer";
  import { language } from "../../stores/language";

  /* METHODS */
  const handleHeroClick = () => scrollTo("home");
  const handleAboutClick = () => scrollTo("about");
  const handleExperienceClick = () => scrollTo("experience");
  const handleSkillsClick = () => scrollTo("skills");
  const handlePortfolioClick = () => scrollTo("projects");
  const handleContactClick = () => scrollTo("contact");
  const handleCVClick = () => {
    window.open(myCvUrl, "_blank");
  };

  /* HOOKS */
  $: myCvUrl = ($language === "Polish") ? myCvPlUrl : ($language === "English") ? myCvEnUrl : myCvEnUrl;
  $: footerContent = footerText[$language];
  $: labelFontSize = 2.5;
  $: linkFontSize = 2.25;
</script>

<div class="FooterLinks">
  <Flex
    direction={$isTablet ? FlexDirection.ROW : FlexDirection.COLUMN}
    width={MaxSize.DEFAULT}
    height={MaxSize.DEFAULT}
    align={AlignItems.START}
    gap={$isMobile ? 5 : 8}
  >
      <Flex
        direction={FlexDirection.COLUMN}
        width={MaxSize.DEFAULT}
        height={MaxSize.DEFAULT}
        align={AlignItems.START}
        gap={4}
      >
        <Text fontSize={labelFontSize} color={TextColorVariant.WHITE}
          >{footerContent.coreLabel}</Text
        >

        <Flex
          direction={FlexDirection.COLUMN}
          width={MaxSize.DEFAULT}
          height={MaxSize.DEFAULT}
          align={AlignItems.START}
          gap={2}
        >
          <Link
            url="#home"
            onClick={handleHeroClick}
            fontSize={linkFontSize}
            color={TextColorVariant.WHITE_SECONDARY}
            >{footerContent.homeLabel}</Link
          >
          <Link
            url="#about"
            onClick={handleAboutClick}
            fontSize={linkFontSize}
            color={TextColorVariant.WHITE_SECONDARY}
            >{footerContent.aboutLabel}</Link
          >
          <Link
            url="#skills"
            onClick={handleSkillsClick}
            fontSize={linkFontSize}
            color={TextColorVariant.WHITE_SECONDARY}
            >{footerContent.skillsLabel}</Link
          >
          <Link
            url="#projects"
            onClick={handlePortfolioClick}
            fontSize={linkFontSize}
            color={TextColorVariant.WHITE_SECONDARY}
            >{footerContent.portfolioLabel}</Link
          >
        </Flex>
      </Flex>
    
      <Flex
        direction={FlexDirection.COLUMN}
        width={MaxSize.DEFAULT}
        height={MaxSize.DEFAULT}
        align={AlignItems.START}
        gap={4}
      >
        <Text fontSize={labelFontSize} color={TextColorVariant.WHITE}
          >{footerContent.exploreLabel}</Text
        >
        <Flex
          direction={FlexDirection.COLUMN}
          width={MaxSize.DEFAULT}
          height={MaxSize.DEFAULT}
          align={AlignItems.START}
          gap={2}
        >
          <Link
            url="#experience"
            onClick={handleExperienceClick}
            fontSize={linkFontSize}
            color={TextColorVariant.WHITE_SECONDARY}
            >{footerContent.experienceLabel}</Link
          >
          <Link
            url="#home"
            onClick={handleCVClick}
            fontSize={linkFontSize}
            color={TextColorVariant.WHITE_SECONDARY}
            >{footerContent.cvLabel}</Link
          >
          <Link
            url="#contact"
            onClick={handleContactClick}
            fontSize={linkFontSize}
            color={TextColorVariant.WHITE_SECONDARY}
            >{footerContent.contactLabel}</Link
          >
        </Flex>
      </Flex>
    
  </Flex>
</div>
