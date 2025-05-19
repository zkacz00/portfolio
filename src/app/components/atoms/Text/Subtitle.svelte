<script lang="ts">
  /* IMPORTS */
  import { Align, Size } from '../../../types/styles';
  import { TextColorVariant } from '../../../types/variants';

  /* ATTRIBUTES */
  /** The text-align of the subtitle */
  export let align: Align = Align.CENTER;

  /** The size of the subtitle */
  export let size: Size.SMALL | Size.MEDIUM | Size.LARGE = Size.MEDIUM;

  export let maxWidth: 'auto' | 'narrow' | 'wide' = 'narrow';

  /** The color of the subtitle */
  export let color: TextColorVariant = TextColorVariant.WHITE;
</script>

<p class="Subtitle Subtitle--{maxWidth} Subtitle--{align} Subtitle--{size} Subtitle--{color}">
  <slot />
</p>

<style>
  .Subtitle {
    font-size: var(--font-size-p-large);
    color: var(--color-text-secondary);
    margin: 0;
    line-height: 1.4;
  }

  /* ALIGN */

  .Subtitle--auto {
    max-width: auto;
  }

  .Subtitle--narrow {
    max-width: 130rem;
  }

  .Subtitle--wide {
    max-width: 150rem;
  }

  /* ALIGN */

  .Subtitle--left {
    text-align: left;
  }

  .Subtitle--right {
    text-align: right;
  }

  .Subtitle--center {
    text-align: center;
  }

  /* SIZE */

  .Subtitle--small {
    font-size: var(--font-size-p-mid);
  }

  .Subtitle--medium {
    font-size: var(--font-size-p-large);
  }

  .Subtitle--large {
    font-size: var(--font-size-p-xlarge);
  }

  /* COLOR */

  .Subtitle--primary {
    background-image: var(--color-secondary);
    color: transparent;
    background-clip: text;
  }

  .Subtitle--white {
    color: var(--color-text-primary-white);
  }

  .Subtitle--secondary-white {
    color: var(--color-text-secondary-white);
  }

  .Subtitle--black {
    color: var(--color-text-primary-black);
  }

  .Subtitle--secondary-black {
    color: var(--color-text-secondary-black);
  }

  .Subtitle--linkedin {
    color: var(--color-text-linkedin);
  }
</style>
