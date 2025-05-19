<!--
  @description
    A Backround component that can be used to wrap other components.
-->

<script lang="ts">
  import { MaxSize } from '../../../types/styles';

  /* VARIABLES */
  /** The color of the background */
  export let color: 'main' | 'white' | 'black' | 'black-solid' = 'main';

  /** The height of the background */
  export let height: MaxSize = MaxSize.DEFAULT;
</script>

<div 
  class="Background Background--{color}" 
  class:Background--fill={height === MaxSize.FILL}
>
  <slot />
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
    box-shadow: var(--box-shadow-small);
    
    transition-property: all;
    transition-duration: var(--transition-duration);
    transition-timing-function: var(--transition-timing);
  }

  /* HEIGHT = FILL */

  .Background--fill {
    min-height: calc(100vh - 8rem - 4rem);
    height: fit-content;
  }

  /* BACKGROUND */

  .Background--main {
    background-image: var(--color-primary);
    border-radius:  var(--border-radius-section)
  }

  .Background--white {
    background-color: var(--color-primary-white);
    border-radius:  var(--border-radius-section)
  }

  .Background--black {
    background: var(--color-gradient-black);
  }
</style>
