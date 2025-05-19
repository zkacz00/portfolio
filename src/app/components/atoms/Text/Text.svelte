<script lang="ts">
  /* IMPORTS */
  import { Align, Size, FontWeight } from '../../../types/styles';
  import { TextColorVariant } from '../../../types/variants';

  /* ATTRIBUTES */
  /* Font size of Text */
  export let size: Size | undefined = Size.LARGE;

  /* Font size of Text (non-standard) */
  export let fontSize: number | undefined = undefined;

  /* Text Align */
  export let align: Align = Align.CENTER;

  /* Text color */
  export let color: TextColorVariant = TextColorVariant.BLACK;

  /* Font weight */
  export let fontWeight: FontWeight = FontWeight.REGULAR;

  /* Text wrap */
  export let wrap: boolean = true;

  /** The style of text */
  export let style: string = '';
</script>

<p
  class="Text Text--{size} Text--{fontWeight} Text--{align} Text--{color}"
  style:text-wrap-mode={wrap ? 'wrap' : 'nowrap'}
  style:font-size={fontSize ? `${fontSize}rem` : 'auto'}
  style:font-weight={fontWeight}
  style={style}
>
  <slot />
</p>

<style>
  .Text {
    margin: 0;
    line-height: 1.6;
  }

  /* Text Align */
  .Text--left {
    text-align: left;
  }

  .Text--center {
    text-align: center;
  }

  .Text--right {
    text-align: right;
  }

  /* Font Size */
  .Text--xsmall {
    font-size: var(--font-size-p-xsmall);
  }

  .Text--small {
    font-size: var(--font-size-p-small);
  }

  .Text--medium {
    font-size: var(--font-size-p-mid);
  }

  .Text--large {
    font-size: var(--font-size-p-large);
  }

  .Text--xlarge {
    font-size: var(--font-size-p-xlarge);
  }

  /* Text Color */
  .Text--primary {
    background-image: var(--color-secondary);
    color: transparent;
    background-clip: text;
  }

  .Text--white {
    color: var(--color-text-primary-white);
  }

  .Text--secondary-white {
    color: var(--color-text-secondary-white);
  }

  .Text--black {
    color: var(--color-text-primary-black);
  }

  .Text--secondary-black {
    color: var(--color-text-secondary-black);
  }

  .Text--linkedin {
    color: var(--color-text-linkedin);
  }

  :global(.Mobile) .Text {
    line-height: 1.45;
  }
</style>
