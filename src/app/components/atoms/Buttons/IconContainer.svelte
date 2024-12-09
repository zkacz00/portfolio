<script lang="ts">
  /* IMPORTS */
  import Icon from "../Text/Icon.svelte";
  import { ButtonVariant } from "../../../types/variants";
  import { Size } from "../../../types/styles";
  import type { BaseEvent } from "../../../types/events.d.ts";

  /* ATTRIBUTES */
  /** The name of the button for accessibility and onClick callback */
  export let name: string = "";

  /** The label of the button for aria-label and visible label */
  export let label: string = "";

  // /** The size of the button */
  // export let size: Size.SMALL | Size.MEDIUM | Size.LARGE = Size.SMALL;

  /** The variant of the button */
  export let variant:
    | ButtonVariant.PRIMARY
    | ButtonVariant.PRIMARY_WHITE
    | ButtonVariant.PRIMARY_BLACK
    | ButtonVariant.SECONDARY_WHITE = ButtonVariant.PRIMARY;

  /** The transparent background */
  export let transparentBcg: boolean = false;

  /** The icon to be displayed inside the button */
  export let icon: string = "";

  /** The callback to be called when the button is clicked */
  export let onClick: BaseEvent = ({ name }) => {};

  /** If button should be toggled */
  export let toggle: boolean = false;

  /** If button is active */
  export let isActive = false;

  /** If it's a div or a button */
  export let isButton: boolean = true;

  /* METHODS */
  const handleKeyDown = (e: KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (isButton) onClick({ name });
    }
  };

  const checkOnClick = (e: MouseEvent) => {
    e.stopPropagation();
    if (toggle) isActive = !isActive;
    if (isButton) onClick({ name });
  };

  /* HOOKS */
  $: element = isButton ? 'button' : 'div';
  $: role = element === 'button' ? 'button' : undefined;
</script>

<svelte:element
  this={element}
  class="IconContainer IconContainer--{variant}"
  class:IconContainer--active={isActive && toggle}
  class:IconContainer--transparentBcg={transparentBcg}
  class:IconContainer--block={!isButton}
  tabindex={0}
  aria-label={label}
  on:click={checkOnClick}
  on:keydown={handleKeyDown}
  {role}
>
  {#if icon}
    <Icon {icon} color={undefined} size={undefined} />
  {/if}
  <slot />
</svelte:element>

<style>
  .IconContainer {
    display: flex;
    color: var(--color-text-primary);
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
    padding: 1rem;
    cursor: pointer;
    user-select: none;
    border: none;
    width: 5.5rem;
    height: 5.5rem;
    font-size: 3rem;
    border-radius: 2rem;
    box-shadow: var(--box-shadow-small);

    transition-property: all;
    transition-duration: 0.8s;
    transition-timing-function: var(--transition-timing);
  }

  .IconContainer--block {
    cursor: default;
  }

  .IconContainer:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  .IconContainer:active {
    opacity: 0.8;
  }
  .IconContainer:focus-visible {
    outline: var(--outline-style-focus);
  }

  /* VARIANT = PRIMARY */

  .IconContainer--primary {
    background: var(--color-secondary);
    color: var(--color-primary-white);
  }
  .IconContainer--primary:hover {
    background: rgba( 255, 255, 255, 0.1 );
    color: var(--color-orange);
  }

  /* VARIANT = PRIMARY_WHITE */

  .IconContainer--primary-white {
    background: var(--color-primary-white);
    color: var(--color-orange);
  }
  .IconContainer--primary-white:hover {
    opacity: 0.6;
  }

  /* VARIANT = SECONDARY_WHITE */

  .IconContainer--secondary-white {
    background: transparent;
    border: 0.25rem solid var(--color-primary-white);
    color: var(--color-primary-white);
  }
  .IconContainer--primary-white:hover {
    opacity: 0.6;
  }

  /* VARIANT = PRIMARY_BLACK */

  .IconContainer--primary-black {
    background: var(--color-primary-black);
    color: var(--color-primary-white);
  }
  .IconContainer--primary-black:hover {
    opacity: 0.6;
  }

  /* DISABLED */

  .IconContainer--disabled,
  .IconContainer--disabled:hover,
  .IconContainer--disabled:active,
  .IconContainer--disabled:focus-visible {
    background: var(--color-disabled);
    color: var(--color-text-disabled);
    outline: none;
    cursor: not-allowed;
  }

  .IconContainer--contextual.IconContainer--disabled {
    background: transparent;
    color: var(--color-text-disabled-dark);
  }

  /* TRANSPARENT BACKGROUND */

  .IconContainer--transparentBcg {
    background: transparent;
  }

</style>
