<script lang="ts">
  /* IMPORTS */
  import Icon from "../Text/Icon.svelte";

  import type { BaseEvent } from "../../../types/events.d.ts";
  import { Size, MaxSize } from "../../../types/styles";
  import { ButtonVariant } from "../../../types/variants";
  // import { goto } from '../../../utils/location';

  /* ATTRIBUTES */
  /** The name of the button for the aria-label and onClick callback */
  export let name: string = "";

  /** The variant of the button */
  export let variant: ButtonVariant.PRIMARY | ButtonVariant.PRIMARY_WHITE =
    ButtonVariant.PRIMARY;

  /** The label of the button */
  export let label: string = "";

  /** The width of the button */
  export let width: MaxSize = MaxSize.DEFAULT;

  /** Is the button disabled */
  export let disabled = false;

  /** The url for tag */
  export let url: string | undefined = undefined;

  /** The size of the button */
  export let size: Size.SMALL | Size.LARGE = Size.LARGE;

  /** The icon to be displayed on the left of the button */
  export let iconLeft: string = "";

  /** The icon to be displayed on the right of the button */
  export let iconRight: string = "";

  /** The callback to be called when the button is clicked */
  export let onClick: BaseEvent | undefined = undefined;

  /** If button is in loading state */
  export let isLoading: boolean = false;

  /* METHODS */
  const handleKeyDown = (e: KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!disabled && onClick) {
        onClick({ name });
      }
    }
  };

  const handleOnClick = (e: MouseEvent) => {
    if (disabled) return;
    if (onClick) return onClick({ name });
  };

  /* HOOKS */
  $: isInteractive = !disabled && (typeof onClick === "function" || url);
</script>

<a
  class="Tag Tag--{size} Tag--{variant}"
  class:Tag--disabled={disabled}
  class:Tag--fill={width === MaxSize.FILL}
  class:Tag--loading={isLoading}
  class:Tag--interactive={isInteractive}
  { ...(isInteractive ? { tabindex: 0 } : {}) }
  aria-label={label}
  aria-disabled={disabled ? "true" : "false"}
  on:click|stopPropagation|preventDefault={isInteractive ? handleOnClick : null}
  on:keydown={isInteractive ? handleKeyDown : null}
  href={isInteractive && url ? url : undefined}
>
  {#if iconLeft}
    <Icon size={Size.SMALL} icon={iconLeft} />
  {/if}
  <slot />
  {#if iconRight}
    <Icon size={Size.SMALL} icon={iconRight} />
  {/if}
</a>

<style>
  .Tag {
    text-decoration: none;
    display: flex;
    color: var(--color-orange);
    justify-content: center;
    align-items: center;
    text-align: left;
    width: fit-content;
    position: relative;
    cursor: auto;

    transition-property: all;
    transition-duration: var(--transition-duration);
    transition-timing-function: var(--transition-timing);
  }

  /* INTERACTIVE */

  .Tag--interactive {
    cursor: pointer;
  }

  .Tag--interactive:hover {
    opacity: 0.6;
  }
  .Tag--interactive:active {
    opacity: 0.8;
  }
  .Tag--interactive:focus-visible {
    outline: var(--outline-style-focus);
  }

  /* VARIANT */

  .Tag--primary::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 1.25rem;
    padding: 2px;
    background: var(--color-secondary);
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    box-shadow: var(--box-shadow-small);
  }

  .Tag--primary-white {
    border: 0.25rem solid var(--color-primary-white);
    color: var(--color-text-primary-white);
    border-radius: 1.25rem;
  }

  /* WIDTH */

  .Tag--fill {
    width: 100%;
  }

  /* SIZE */

  .Tag--small {
    min-height: 3rem;
    gap: 0.5rem;
    padding: 0.5rem 0.5rem;
    font-size: var(--font-size-p-xsmall);
  }

  .Tag--large {
    min-height: 3.5rem;
    gap: 1rem;
    padding: 0.5rem 1rem;
    font-size: var(--font-size-p-small);
  }

  /* DISABLED */

  .Tag--disabled,
  .Tag--disabled:hover,
  .Tag--disabled:active,
  .Tag--disabled:focus-visible {
    border-color: var(--color-disabled);
    color: var(--color-text-disabled);
    outline: none;
    cursor: not-allowed;
  }
</style>
