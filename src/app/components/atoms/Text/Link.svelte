<script lang="ts">
  /* IMPORTS */
  import Icon from '../Text/Icon.svelte';
  import type { BaseEvent } from '../../../types/events.d.ts';
  import { Target } from '../../../types/targets';
  import { TextColorVariant } from '../../../types/variants';
  import { Size } from '../../../types/styles';
  import { scrollTo } from '../../../utils/scroll';

  /* ATTRIBUTES */
  /** The outside destination of the link */
  export let url: string | undefined = undefined;

  /** The color of the link */
  export let color: TextColorVariant | undefined = undefined;

  /** The size of the link */
  export let size: Size.SMALL | Size.MEDIUM | Size.LARGE | undefined = undefined;

  /* Font size of Text (non-standard) */
  export let fontSize: number | undefined = undefined;

  /** Is link disabled or not */
  export let disabled: boolean = false;

  /** The icon to be displayed on the left of the link */
  export let iconLeft: string = '';

  /** The icon to be displayed on the right of the link */
  export let iconRight: string = '';

  /** Where to open the link */
  export let target: Target = Target.SELF;

  /** To style visited link or not */
  export let visited: boolean = false;

  /** The name of the link for the aria-label and onClick callback */
  export let name: string = '';

  /** Whether to append to existing query parameters or replace them */
  // export let append: boolean = false;

  /** The callback to be called when the link is clicked */
  export let onClick: BaseEvent | undefined = undefined;

  /** To have underline or not  */
  export let underline: boolean = false;

  /* METHODS */
  const handleKeyDown = (e: KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!disabled && onClick) onClick({ name });
    }
  };

  const handleOnClick = (e: MouseEvent) => {
  if (disabled) return;
  if (onClick) {
    e.preventDefault();
    onClick({ name });
  }
};

  /* HOOKS */
  $: element = url ? 'a' : 'button';
  $: tagProps =
    element === 'a'
      ? { href: disabled ? undefined : url, target: url?.startsWith('mailto:') ? '_self' : target }
      : { disabled, role: 'button' };
  $: role = element === 'a' && !url ? 'button' : undefined;
</script>

<svelte:element
  this={element}
  class="Link {color ? `Link--${color}` : ''} {size ? `Link--${size}` : ''}"
  class:Link--disabled={disabled}
  class:Link--visited={visited}
  class:Link--underline={underline}
  class:Link--inheritColor={typeof color === undefined}
  style:font-size={fontSize ? `${fontSize}rem` : typeof size === undefined ? 'inherit' : 'auto'}
  tabindex={0}
  aria-disabled={disabled}
  href={disabled ? undefined : url}
  {role}
  on:click|stopPropagation={handleOnClick}
  on:keydown={handleKeyDown}
  {...tagProps}
>
  {#if iconLeft}
    <Icon size={size} icon={iconLeft} color={undefined} hoverColor={undefined} />
  {/if}
  <slot />
  {#if iconRight}
    <Icon size={size} icon={iconRight} color={undefined} hoverColor={undefined} />
  {/if}
</svelte:element>

<style>
  .Link {
    margin: 0;
    padding: 0;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 1rem;

    justify-content: center;
    text-align: center;
    border: none;
    background: transparent;
    font-size: inherit;
    color: inherit;

    transition-property: all;
    transition-duration: var(--transition-duration);
    transition-timing-function: var(--transition-timing);
  }

  .Link:hover {
    color: var(--color-text-primary-white);
  }

  .Link:active {
    opacity: 0.7;
  }

  .Link:focus-visible {
    outline: var(--outline-style-focus);
  }

  /* SIZE */

  .Link--xsmall {
    font-size: var(--font-size-p-xsmall);
  }

  .Link--small {
    font-size: var(--font-size-p-small);
  }

  .Link--medium {
    font-size: var(--font-size-p-mid);
  }

  .Link--large {
    font-size: var(--font-size-p-large);
  }

  .Link--xlarge {
    font-size: var(--font-size-p-xlarge);
  }

  /* COLOR */

  .Link--primary {
    background-image: var(--color-secondary);
    color: transparent;
    background-clip: text;
  }

  .Link--primary::hover {
    color: var(--color-text-primary-white);
  }

  .Link--white {
    color: var(--color-text-primary-white);
  }

  .Link--secondary-white {
    color: var(--color-text-secondary-white);
  }

  .Link--black {
    color: var(--color-text-primary-black);
  }

  .Link--secondary-black {
    color: var(--color-text-secondary-black);
  }

  .Link--linkedin {
    color: var(--color-text-linkedin);
  }

  .Link--linkedin:hover {
    color: #589FE5;
  }

  .Link--inheritColor {
    color: inherit;
  }

  /* VISITED */

  .Link--visited:visited {
    color: var(--color-primary-dark);
  }

  /* DISABLED */

  .Link--disabled,
  .Link--disabled:hover,
  .Link--disabled:focus,
  .Link--disabled:focus-visible {
    cursor: not-allowed;
    color: var(--color-text-disabled-dark);
    outline: none;
  }

  /* UNDERLINE */

  .Link--underline {
    text-decoration-line: underline;
    text-underline-position: auto;
  }
</style>
