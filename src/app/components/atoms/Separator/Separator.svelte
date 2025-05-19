<script lang="ts">
  /* IMPORTS */
  import { Direction } from '../../../types/directions';
  import { Size } from '../../../types/styles';

  /* ATTRIBUTES */
  /** The direction of the separator */
  export let direction: Direction= Direction.HORIZONTAL;

  /** The color of the separator */
  export let color: "primary" | "black" = "black";

  /** The size of the separator */
  export let size: Size | undefined = undefined;

</script>

<div class="Separator Separator--{direction} Separator--{color}" class:Separator--large={size === Size.LARGE}>
</div>

<style>

  .Separator {
    background-color: var(--color-primary-black);
    border-radius: var(--border-radius-small);
  }

  .Separator--horizontal {
    height: 0.5rem;
    width: 100%;
  }

  .Separator--vertical {
    height: 100%;
    width: 0.5rem;
  }

  .Separator--large {
    height: 2rem;
  }

  .Separator--primary {
    background-image: var(--color-primary);
  }

  .Separator--black {
    background-color: var(--color-primary-black);
  }

</style>
