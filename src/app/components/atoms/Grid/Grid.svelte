<script lang="ts">
  import { AlignItems, JustifyContent } from '../../../types/styles';
  import { size } from '../../../stores/device';
  import { ScreenSize } from '../../../types/screen';

  /* ATTRIBUTES */
  /** The number of rows */
  export let rows: number | undefined = undefined;

  /** The value of justify-content */
  export let justify: JustifyContent | undefined = undefined;

  /** The value of align-items */
  export let align: AlignItems | undefined = undefined;

  /** The gap in ram */
  export let gap: number | undefined = undefined;

  /** The column gap in ram */
  export let columnGap: number | undefined = undefined;

  /** The row gap in ram */
  export let rowGap: number | undefined = undefined;

  /* METHODS */
  const getColumns = (size: string) => {
    if (size === ScreenSize.DESKTOP) return 12;
    if (size === ScreenSize.TABLET) return 8;
    if (size === ScreenSize.MOBILE) return 2;
  };
</script>

<div
  class="Grid"
  style:justify-content={justify && justify}
  style:align-items={align && align}
  style:grid-template-columns={`repeat(${getColumns($size)}, minmax(0px, 1fr))`}
  style:grid-template-rows={rows && `repeat(${rows}, minmax(0px, 1fr))`}
  style:gap={`${gap}rem`}
  style:column-gap={`${columnGap}rem`}
  style:row-gap={`${rowGap}rem`}
>
  <slot />
</div>

<style>
  .Grid {
    width: 100%;
    display: grid;
    gap: var(--gap-grid);
  }
</style>
