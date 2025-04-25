<script lang="ts">
  /* IMPORTS */
  import Section from "../atoms/Spacing/Section.svelte";
  import Hero from "../organisms/Hero.svelte";
  import ExperienceBox from "../molecules/ExperienceBox.svelte";
  import Flex from "../atoms/Spacing/Flex.svelte";

  import { AlignItems, FlexDirection } from "../../types/styles";
  import { TextColorVariant } from "../../types/variants";

	import { isMobile } from '../../stores/device';

  import { experienceText, experienceEls } from "../../content/experience";
  import { language } from "../../stores/language"; 

  /* HOOKS */
  $: experienceContent = experienceText[$language];
  $: experienceData = experienceEls[$language];
</script>

<Section anchor="experience" clearBottomPadding={true}>
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
</Section>
