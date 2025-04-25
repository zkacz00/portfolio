<script lang="ts">
  /* IMPORTS */
  import Section from "../atoms/Spacing/Section.svelte";
  import Text from "../atoms/Text/Text.svelte";

  import { Align, FontWeight, Size } from "../../types/styles";
  import { TextColorVariant } from "../../types/variants";
  import { scrollingText } from "../../content/scrollingText";
  import { language } from "../../stores/language"; 
  
  /* HOOKS */
  $: scrollingTextContent = scrollingText[$language];
</script>

<div class="ScrollingTextSection">
  <Section anchor="scrolling-text">
    <div class="ScrollingContent">
      <div class="ScrollingText">
        {#each Array(10) as _}
          <Text
            color={TextColorVariant.WHITE}
            size={Size.XLARGE}
            align={Align.LEFT}
            fontWeight={FontWeight.MEDIUM}
            wrap={false}
          >{scrollingTextContent}</Text>
        {/each}
      </div>
      <div class="ScrollingText">
        {#each Array(10) as _}
          <Text
            color={TextColorVariant.WHITE}
            size={Size.XLARGE}
            align={Align.LEFT}
            fontWeight={FontWeight.MEDIUM}
            wrap={false}
          >{scrollingTextContent}</Text>
        {/each}
      </div>
    </div>
  </Section>
</div>

<style>
  .ScrollingTextSection {
    overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .ScrollingContent {
    display: flex;
    width: fit-content;
  }

  .ScrollingText {
    display: flex;
    animation: scroll 100s linear infinite;
    white-space: nowrap;
    padding: 0 4rem;
    gap: 8rem
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .ScrollingContent:hover .ScrollingText {
    animation-play-state: paused;
  }
</style>
