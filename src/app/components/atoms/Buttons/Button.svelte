<script lang="ts">
  /* IMPORTS */
  import Icon from "../Text/Icon.svelte";
  import type { BaseEvent } from "../../../types/events";
  import { ButtonVariant } from "../../../types/variants";
  import { Size, MaxSize } from "../../../types/styles";
  // import { goto } from '../../../utils/location';

  /* ATTRIBUTES */
  /** The name of the button for the onClick callback */
  export let name: string = "";

  /** The label of the button */
  export let label: string = "";

  /** The width of the button */
  export let width: MaxSize = MaxSize.DEFAULT;

  /** Is the button disabled */
  export let disabled = false;

  /** The variant of the button */
  export let variant: ButtonVariant = ButtonVariant.PRIMARY;

  /** The icon to be displayed on the left of the button */
  export let iconLeft: string = "";

  /** The icon to be displayed on the right of the button */
  export let iconRight: string = "";

  /** The color of the shadow */
  export let shadowColor: 'white' | 'black' = 'black';

  /** The callback to be called when the link is clicked */
  export let onClick: BaseEvent | undefined = undefined;

  /** The href for the button */
  export let url: string | undefined = undefined;

  /** Whether to append to existing query parameters or replace them */
  // export let append: boolean = false;

  /* METHODS */
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!disabled && onClick) onClick({ name });
      // if (url) goto(url, append);
    }
  };

  const handleOnClick = (e: MouseEvent) => {
    if (disabled) return;
    if (onClick) {
      e.preventDefault();
      return onClick({ name });
    }
    // if (url) goto(url, append);
  };

  /* HOOKS */
  $: element = url ? "a" : "button";
  $: tagProps =
    element === "a" ? { href: disabled ? undefined : url } : { disabled };
  $: role = element === "a" && !url ? "button" : undefined;
</script>

<svelte:element
  this={element}
  class="Button Button--{variant}"
  class:Button--disabled={disabled}
  class:Button--fill={width === MaxSize.FILL}
  aria-disabled={disabled ? "true" : "false"}
  tabindex={0}
  aria-label={label}
  {role}
  on:click|stopPropagation={handleOnClick}
  on:keydown={handleKeyDown}
  {...tagProps}
  style:box-shadow={shadowColor=== "black" ? 'var(--box-shadow-small)' : 'var(--box-shadow-small-white)'}
>
  {#if iconLeft}
    <Icon size={Size.SMALL} icon={iconLeft} />
  {/if}
  <slot />
  {#if iconRight}
    <Icon size={Size.SMALL} icon={iconRight} />
  {/if}
</svelte:element>

<style>
  .Button {
    text-decoration: none;
    display: flex;
    color: var(--color-text-primary-white);
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
    padding: 1rem;
    cursor: pointer;
    height: 5.5rem;
    font-size: var(--font-size-p-small);
    border: none;
    font-weight: var(--font-weight-medium);
    border-radius: 2rem;

    transition-property: all;
    transition-duration: var(--transition-duration);
    transition-timing-function: var(--transition-timing);

    /* WIDTH = DEFAULT */

    min-width: 17.5rem;
  }

  :global(.Mobile) .Button {
    height: 6.5rem;
    font-size: var(--font-size-p-large);
  }

  /* WIDTH = FILL */

  .Button--fill {
    width: 100%;
  }

  .Button:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  .Button:active {
    opacity: 0.7;
  }
  .Button:focus-visible {
    outline: var(--outline-style-focus);
  }

  /* VARIANT = PRIMARY */

  .Button--primary {
    background: var(--color-primary);
  }
  .Button--primary:hover {
    color: var(--color-orange);
    background: var(--color-primary-white);
  }

  /* VARIANT = PRIMARY_WHITE */

  .Button--primary-white {
    color: var(--color-orange);
    background: var(--color-primary-white);
    border: 2px solid rgba(255, 255, 255);
  }
  .Button--primary-white:hover {
    color: var(--color-primary-white);
    background: rgba(255, 255, 255, 0.2);
  }

  /* VARIANT = SECONDARY */

  .Button--secondary {
    background-image: var(--color-secondary);
    color: transparent;
    background-clip: text;
    border-radius: 2rem;
  }
  .Button--secondary:hover {
    color: var(--color-primary-white);
    background: rgba(0, 0, 0, 0.2);
    border: 2px solid transparent;
  }

  /* VARIANT = SECONDARY_WHITE */

  .Button--secondary-white {
    background: transparent;
    color: var(--color-primary-white);
    border: 2px solid var(--color-primary-white);
  }
  .Button--secondary-white:hover {
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid rgba(255, 255, 255);
  }

  /* VARIANT = SECONDARY_BLACK */

  .Button--secondary-black {
    background: transparent;
    color: var(--color-primary-black);
    border: 2px solid var(--color-primary-black);
  }
  .Button--secondary-black:hover {
    border: 2px solid var(--color-orange);
    background-image: var(--color-secondary);
    color: transparent;
    background-clip: text;
    border-radius: 2rem;
  }

  /* VARIANT = CONTEXTUAL */

  .Button--contextual {
    color: var(--color-primary-white);
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid transparent;
  }

  /* DISABLED */

  .Button--disabled,
  .Button--disabled:hover,
  .Button--disabled:active,
  .Button--disabled:focus-visible, 
  .Button--contextual.Button--disabled {
    color: rgba(255, 255, 255, 0.8);
    background: rgba(0, 0, 0, 0.5);
    border: 2px solid transparent;
    cursor: not-allowed;
    transform: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 1);
  }
</style>
