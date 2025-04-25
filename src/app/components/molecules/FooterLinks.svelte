<script lang="ts">
  /* IMPORTS */

  import Link from "../atoms/Text/Link.svelte";
  import Text from "../atoms/Text/Text.svelte";
  import Flex from "../atoms/Spacing/Flex.svelte";
  import {
    AlignItems,
    Size,
    FlexDirection,
    MaxSize,
  } from "../../types/styles";
  import { TextColorVariant } from "../../types/variants";
  import { isMobile } from './../../stores/device';
  import { scrollTo } from "../../utils/scroll";
  import { myCvUrl } from "../../content/urls";
  import { footerText } from "../../content/footer";
  import { language } from "../../stores/language"; 

  /* METHODS */
  const handleHeroClick = () => scrollTo("hero");
  const handleAboutClick = () => scrollTo("about");
  const handleExperienceClick = () => scrollTo("experience");
  const handleSkillsClick = () => scrollTo("skills");
  const handlePortfolioClick = () => scrollTo("projects");
  const handleContactClick = () => scrollTo("contact");
  const handleCVClick = () => {window.open(myCvUrl, "_blank")};

  /* HOOKS */
  $: footerContent = footerText[$language];
</script>

<div class="FooterLinks">
  <Flex
    direction={$isMobile ? FlexDirection.COLUMN : FlexDirection.ROW}
    width={MaxSize.DEFAULT}
    height={MaxSize.DEFAULT}
    align={AlignItems.START}
    gap={$isMobile ? 5 : 12}
  >
    <Flex
      direction={FlexDirection.COLUMN}
      width={MaxSize.DEFAULT}
      height={MaxSize.DEFAULT}
      align={AlignItems.START}
      gap={2}
    >
      <Text size={Size.SMALL} color={TextColorVariant.WHITE}>{footerContent.coreLabel}</Text>
      <Link url="#hero" onClick={handleHeroClick} size={Size.SMALL} color={TextColorVariant.WHITE_SECONDARY}>{footerContent.homeLabel}</Link>
      <Link url="#about" onClick={handleAboutClick} size={Size.SMALL} color={TextColorVariant.WHITE_SECONDARY}>{footerContent.aboutLabel}</Link>
      <Link url="#skills" onClick={handleSkillsClick} size={Size.SMALL} color={TextColorVariant.WHITE_SECONDARY}>{footerContent.skillsLabel}</Link>
      <Link url="#experience" onClick={handleExperienceClick} size={Size.SMALL} color={TextColorVariant.WHITE_SECONDARY}>{footerContent.experienceLabel}</Link>
    </Flex>
    <Flex
      direction={FlexDirection.COLUMN}
      width={MaxSize.DEFAULT}
      height={MaxSize.DEFAULT}
      align={AlignItems.START}
      gap={2}
    >
      <Text size={Size.SMALL} color={TextColorVariant.WHITE}>{footerContent.exploreLabel}</Text>
      <Link url="#projects" onClick={handlePortfolioClick} size={Size.SMALL} color={TextColorVariant.WHITE_SECONDARY}>{footerContent.portfolioLabel}</Link>
      <Link url="#hero" onClick={handleCVClick} size={Size.SMALL} color={TextColorVariant.WHITE_SECONDARY}>{footerContent.cvLabel}</Link>
      <Link url="#contact" onClick={handleContactClick} size={Size.SMALL} color={TextColorVariant.WHITE_SECONDARY}>{footerContent.contactLabel}</Link>
    </Flex>
  </Flex>
</div>
