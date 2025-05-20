<script lang="ts">
  /* IMPORTS */
  import { size } from '../../../stores/device';
  import { ScreenSize } from '../../../types/screen';

  /* ATTRIBUTES */
  /** The number of columns to span on desktop */
  export let desktop: number = 12;

  /** The number of columns to span on tablet */
  export let tablet: number = 6;

  /** The number of columns to span on mobile */
  export let mobile: number = 2;

  /** The number of columns to span on desktop, tablet and mobile */
  export let span: number | undefined = undefined;

  /** The order of grid-column */
  export let order: number | undefined = undefined;

  /** The max-height of the column */
  export let maxheight: number | undefined = undefined;

  /* METHODS */
  if (span) desktop = tablet = mobile = span;

  const getSpan = (size: string) => {
    if (size === ScreenSize.DESKTOP) return Math.max(desktop, 1);
    if (size === ScreenSize.TABLET) return Math.max(tablet, 1);
    if (size === ScreenSize.MOBILE) return Math.max(mobile, 1);
  };
</script>

<div class="Col" style:order style:grid-column={`span ${getSpan($size)}`} style:maxheight={`${maxheight}rem`} style:height='100%'>
  <slot />
</div>
