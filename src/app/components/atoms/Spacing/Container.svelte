<script lang="ts">
  import { size } from '../../../stores/device';
  import { isNumber, isString } from '../../../types/checks';
  import { ScreenSize } from '../../../types/screen';

  /* ATTRIBUTES */
  /** The max width of a container */
  export let width: string | number = '100%';

  /** The max height of a container */
  export let height: string | number = '100%';

  /** The padding of the container */
  export let p: number | string | undefined = undefined;
  export let pTablet: number | string | undefined = undefined;
  export let pMobile: number | string | undefined = undefined;
  export let pVertical: number | string | undefined = undefined;
  export let pHorizontal: number | string | undefined = undefined;

  /* METHODS */
  const toSize = (size: string | number): string => {
    return isNumber(size) ? `${size}rem` : size || '100%';
  };

  const setPadding = (
    size: string,
    desktop: number | string | undefined,
    tablet: number | string | undefined = desktop,
    mobile: number | string | undefined = tablet,
    vertical: number | string | undefined,
    horizontal: number | string | undefined
  ) => {
    let currentPadding = size === ScreenSize.DESKTOP ? desktop : size === ScreenSize.TABLET ? tablet : mobile;
    let verticalPadding = isString(vertical) ? vertical : `${vertical}rem` || 'auto';
    let horizontalPadding = isString(horizontal) ? horizontal : `${horizontal}rem` || 'auto';

    if (vertical !== undefined && horizontal !== undefined) {
      return `${verticalPadding} ${horizontalPadding}`;
    } else if (vertical !== undefined) {
      return `${verticalPadding} ${currentPadding}`;
    } else if (horizontal !== undefined) {
      return `${currentPadding} ${horizontalPadding}`;
    } else {
      return isString(currentPadding) ? currentPadding : `${currentPadding}rem` || 'auto';
    }
  };
</script>

<div
  class="Container"
  style:width={toSize(width)}
  style:height={toSize(height)}
  style:padding={setPadding($size, p, pTablet, pMobile, pVertical, pHorizontal)}
>
  <slot />
</div>

<style>
  .Container {
    margin: 0;
    box-sizing: border-box;
    padding: var(--section-content-margin-vertical) var(--section-content-margin-horizontal);
  }

  :global(.Mobile) .Container {
    padding: var(--section-content-margin-vertical) 2.5rem;
  }
</style>
