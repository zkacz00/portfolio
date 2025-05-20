<!--
  @description
    A Page section component that can be used to wrap other components.
-->

<script lang="ts">
  import { Size, MaxSize } from "../../../types/styles";

  /* VARIABLES */
  /** The anchor for the container */
  export let anchor: string = '';

  /** Whether to remove padding top */
  export let clearTopPadding: boolean = false;

  /** Whether to remove padding bottom */
  export let clearBottomPadding: boolean = false;

  /** Whether to remove padding on sides */
  export let clearSidePadding: boolean = false;

  /** The color of the background */
  export let color: 'main' | 'white' | 'black' | 'transparent' = 'black';

  /** The height of the background */
  export let height: MaxSize = MaxSize.DEFAULT;
</script>

<section
  id={anchor}
  class={`Section Section--${color}`}
  class:Section--clear-padding-top={clearTopPadding}
  class:Section--clear-padding-bottom={clearBottomPadding}
  class:Section--clear-padding-sides={clearSidePadding}
  class:Section--fill={height === MaxSize.FILL}
>
  <slot />
</section>

<style>
  .Section {
    width: 100%;
    max-width: var(--content-max-width);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--section-content-margin-vertical);
    padding: var(--section-margin-vertical) var(--section-margin-horizontal);
  }

  /* BACKGROUND */

  .Section--main {
    background-image: var(--color-primary);
    border-radius:  1rem;
  }

  .Section--white {
    background: var(--color-gradient-white);
    border-radius:  1rem;
  }

  .Section--black {
    background: var(--color-gradient-black);
  }

  .Section--transparent {
    background-color: transparent;
  }

  /* PADDING */

  .Section--clear-padding-top {
    padding-top: 0;
  }

  .Section--clear-padding-bottom {
    padding-bottom: 0;
  }

  .Section--clear-padding-sides {
    padding-right: 0;
    padding-left: 0;
  }

  :global(.Mobile) .Section--black {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  :global(.Mobile) .Section--clear-padding-top {
    padding-top: 0;
  }

  :global(.Mobile) .Section--clear-padding-bottom {
    padding-bottom: 0;
  }
</style>