<script lang="ts">
  /* IMPORTS */
  import Section from "../atoms/Spacing/Section.svelte";
  import Hero from "../organisms/Hero.svelte";
  import ExperienceBox from "../molecules/ExperienceBox.svelte";

  import { AlignItems, FlexDirection } from "../../types/styles";
  import { TextColorVariant } from "../../types/variants";

  import { experienceEls } from "../../content/experience";
  import Flex from "../atoms/Spacing/Flex.svelte";
</script>

<Section anchor="ExperienceSection" clearBottomPadding={true}>
  <Hero
    title="Experience"
    subtitle="Here you will find some of the personal and clients projects that I created with each project containing its own case study"
    align={AlignItems.START}
    color={TextColorVariant.PRIMARY}
    subtitleColor={TextColorVariant.WHITE}
  />
  <Flex direction={FlexDirection.COLUMN} gap={1}>
    {#each experienceEls as experienceEl}
      <ExperienceBox {experienceEl} />
    {/each}
  </Flex>
</Section>
