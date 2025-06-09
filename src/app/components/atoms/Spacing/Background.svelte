<script lang="ts">
  import { ImageBehavior, MaxSize } from "../../../types/styles";
  import { isDarkMode } from "../../../stores/lightMode";
  import Image from "../Images/Image.svelte";
  import { isDesktop } from "../../../stores/device";

  /* VARIABLES */
  /** The color of the background */
  export let color: "main" | "white" | "black" | "black-solid" = "main";

  /** The height of the background */
  export let height: MaxSize = MaxSize.DEFAULT;

  /* VARIABLES */
  let splashesImageStyle: string = `z-index: -1; top: 0; right: 0; width: 100%; height: auto; overflow: hidden; border-radius:  1rem; overflow: hidden;`;
  let splashesImageMobileStyle: string = `z-index: -1; top: 0; right: 0; width: auto; height: 100%; overflow: hidden; border-radius:  1rem; overflow: hidden;`;
  let splashesImageContentStyle: string = `height: 100%;`;
</script>

<div
  class="Background Background--{color}"
  class:Background--reversed={$isDarkMode}
  class:Background--fill={height === MaxSize.FILL}
>
  <div class="Background__Content">
    <slot />
  </div>
  {#if color === "main"}
    <div class="Background__Image">
      <Image
        alt="splashes"
        file={"splashes-square.png"}
        style={$isDesktop ? splashesImageStyle : splashesImageMobileStyle}
        contentStyle={splashesImageContentStyle}
        behavior={ImageBehavior.COVER}
      />
    </div>
  {/if}
</div>

<style>
  .Background {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    position: relative;

    transition-property: all;
    transition-duration: var(--transition-duration);
    transition-timing-function: var(--transition-timing);
  }

  /* HEIGHT = FILL */

  .Background--fill {
    min-height: calc(100vh - 8rem - 4rem);
    height: fit-content;
  }

  .Background__Image {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    overflow: hidden;
    border-radius: var(--border-radius-section);
  }

  .Background__Content {
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    justify-content: center;
  }

  /* BACKGROUND */

  .Background--main {
    background-image: var(--color-primary);
    border-radius: var(--border-radius-section);
  }

  .Background--white {
    background-color: var(--color-primary-white);
    border-radius: var(--border-radius-section);
  }

  .Background--white.Background--reversed {
    background-color: var(--color-gradient-black);
    border-radius: var(--border-radius-section);
  }

  .Background--black {
    background: var(--color-gradient-black);
  }

  .Background--black.Background--reversed {
    background: var(--color-gradient-grey);
  }
</style>
