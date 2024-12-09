<script lang="ts">
  /* IMPORTS */
  import Section from "../atoms/Spacing/Section.svelte";
  import Flex from "../atoms/Spacing/Flex.svelte";
  import Background from "../atoms/Spacing/Background.svelte";
  import Grid from "../atoms/Grid/Grid.svelte";
  import Col from "../atoms/Grid/Col.svelte";
  import Text from "../atoms/Text/Text.svelte";

  import { Align, FlexDirection, FontWeight, Size } from "../../types/styles";
  import { TextColorVariant } from "../../types/variants";
</script>

<div class="ScrollingTextSection">
  <Section anchor="ScrollingTextSection" size={Size.SMALL}>
    <div class="GoodbyeContent">
    <Flex direction={FlexDirection.ROW} gap={1}>
      {#each Array(4) as _}
        <Text
          color={TextColorVariant.WHITE}
          size={Size.XLARGE}
          align={Align.LEFT}
          fontWeight={FontWeight.MEDIUM}
          wrap={false}
          >Psst, I'm currently looking for a job! 👀 If you would be interested,
          let me know 😁</Text
        >
        <Text
          color={TextColorVariant.WHITE}
          size={Size.XLARGE}
          align={Align.LEFT}
          fontWeight={FontWeight.MEDIUM}
          wrap={false}>Psst, I'm currently looking for a job! 👀 If you would be interested,
          let me know 😁</Text
        >
      {/each}
    </Flex>
  </div>
  </Section>
</div>

<style>
  .ScrollingTextSection {
    overflow: hidden; /* Hide overflow to prevent scrollbars */
    white-space: nowrap; /* Prevent text wrapping */
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .GoodbyeContent {
    display: inline-flex; /* Use inline-flex for horizontal scrolling */
    animation: scroll 10s linear infinite; /* Animation for scrolling */
  }

  @keyframes scroll {
    0% {
      transform: translateX(100%); /* Start from the right */
    }
    100% {
      transform: translateX(-100%); /* Move to the left */
    }
  }
</style>
