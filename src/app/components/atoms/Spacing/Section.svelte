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

  /** The size of padding */
  export let size: Size.SMALL | Size.LARGE = Size.LARGE;

  /** The color of the background */
  export let color: 'main' | 'white' | 'black' | 'transparent' = 'black';

  /** The height of the background */
  export let height: MaxSize = MaxSize.DEFAULT;
</script>

<section
  id={anchor}
  class={`Section Section--${size} Section--${color}`}
  class:Section--clear-padding-top={clearTopPadding}
  class:Section--clear-padding-bottom={clearBottomPadding}
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
  }

  /* BACKGROUND */


  .Section--main {
    background-image: var(--color-primary);
    border-radius:  var(--border-radius-section)
  }

  .Section--white {
    background-color: var(--color-primary-white);
    border-radius:  var(--border-radius-section)
  }

  .Section--black {
    background: var(--color-gradient-black);
  }

  .Section--transparent {
    background-color: transparent;
  }

  /* SIZE */


.Section--large {
  padding: var(--section-margin-vertical) var(--section-margin-horizontal);
}

.Section--small {
  padding: var(--section-margin-vertical) var(--section-margin-horizontal);
  /* padding: 8rem var(--section-margin-horizontal); */
}

  /* PADDING */

  .Section--clear-padding-top {
    padding-top: 0;
  }

  .Section--clear-padding-bottom {
    padding-bottom: 0;
  }

</style>