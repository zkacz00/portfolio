<script lang="ts">
  /* IMPORTS */
  import Section from "../atoms/Spacing/Section.svelte";
  import Hero from "../organisms/Hero.svelte";
  import ExperienceBox from "../molecules/ExperienceBox.svelte";
  import Flex from "../atoms/Spacing/Flex.svelte";
  import Span from "../atoms/Text/Span.svelte";
  import Highlight from "../organisms/Highlight.svelte";

  import { AlignItems, FlexDirection } from "../../types/styles";
  import { TextColorVariant } from "../../types/variants";

  import { isMobile, isDesktop, isTablet } from "../../stores/device";

  import { experienceText, experienceEls } from "../../content/experience";
  import { language } from "../../stores/language";
  import { ctaText } from "../../content/cta";

  /* HOOKS */
  $: experienceContent = experienceText[$language];
  $: experienceData = experienceEls[$language];
  $: ctaContent = ctaText[$language];
</script>

<Section anchor="experience">
  <Flex direction={FlexDirection.COLUMN} gap={$isDesktop ? 16 : $isTablet ? 10 : 10}>
    <Flex direction={FlexDirection.COLUMN}>
    <Hero
      title={experienceContent.title}
      subtitle={experienceContent.subtitle}
      align={AlignItems.START}
      color={TextColorVariant.PRIMARY}
      subtitleColor={TextColorVariant.WHITE}
    />
    <Flex direction={FlexDirection.COLUMN} gap={$isMobile ? 0 : 1}>
      {#each experienceData as experienceEl}
        <ExperienceBox {experienceEl} />
      {/each}
    </Flex>
  </Flex>
    <Highlight title={ctaContent.title} subtitle={ctaContent.subtitle}>
      <Span>👀</Span>
    </Highlight>
  </Flex>
</Section>
