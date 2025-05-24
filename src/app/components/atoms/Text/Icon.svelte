<script lang="ts">
  /* IMPORTS */
  import { Size } from "../../../types/styles";
  import { TextColorVariant } from "../../../types/variants";

  /* ATTRIBUTES */
  /** The icon to be displayed */
  export let icon: string = "";

  /** The size of the icon */
  export let size: Size.SMALL | Size.MEDIUM | Size.LARGE | undefined = Size.SMALL;

  /* The color of the icon */
  export let color: TextColorVariant | undefined = undefined;

  /* The color of the icon on hover */
  export let hoverColor: TextColorVariant | undefined = undefined;

  /* If Icon is disabled */
  export let disabled: boolean = false;

  /* VARIABLES */
  let hoverStyle = `${hoverColor}Hover`;
</script>

<i
  class="Icon Icon--{color} {size
    ? `Icon--${size}`
    : ''} Icon--{hoverStyle} dripicons dripicons-{icon}"
  class:IconWrapper--disabled={disabled}
  class:Icon--inheritColor={typeof color === undefined}
  class:Icon--inheritColorHover={typeof hoverColor === undefined}
/>

<style>
  .Icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;

    transition-property: all;
    transition-duration: 0.4s;
    transition-timing-function: var(--transition-timing);
  }

  .Icon:hover {
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
  }

  .Icon--small {
    font-size: 3rem;
  }

  .Icon--large {
    font-size: 4rem;
  }

  /* Icon Color */
  .Icon--primary {
    background-image: var(--color-secondary);
    color: transparent;
    background-clip: text;
  }

  .Icon--primary:hover {
    color: white;
  }

  .Icon--white {
    color: var(--color-text-primary-white);
  }

  .Icon--black {
    color: var(--color-text-primary-black);
  }
</style>
