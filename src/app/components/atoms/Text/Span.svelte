<script lang="ts">
  /* IMPORTS */
  import { Align, Size, FontWeight } from "../../../types/styles";
  import { TextColorVariant } from "../../../types/variants";

  /* ATTRIBUTES */
  /** The color of the span */
  export let color: TextColorVariant = TextColorVariant.BLACK;

  /** The font weight of the span */
  export let fontWeight: FontWeight = FontWeight.REGULAR;

  /** The size of the span */
  export let size: Size | undefined = undefined;

  /** Text alignment */
  //   export let align: Align = Align.LEFT;
</script>

<span
  class="Span Span--{size} Span--{fontWeight} Span--{color}"
  style:font-weight={fontWeight}
>
  <slot />
</span>

<style>
  .Span {
    margin: 0;
    line-height: 1.6;
  }

  /* Font Size */
  .Span--xsmall {
    font-size: var(--font-size-p-xsmall);
  }

  .Span--small {
    font-size: var(--font-size-p-small);
  }

  .Span--medium {
    font-size: var(--font-size-p-mid);
  }

  .Span--large {
    font-size: var(--font-size-p-large);
  }

  .Span--xlarge {
    font-size: var(--font-size-p-xlarge);
  }

  /* Text Color */
  .Span--primary {
    background-image: var(--color-secondary);
    color: transparent;
    background-clip: text;
  }

  .Span--white {
    color: var(--color-text-primary-white);
  }

  .Span--black {
    color: var(--color-text-primary-black);
  }
</style>
