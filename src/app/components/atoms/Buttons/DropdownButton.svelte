<script lang="ts">
  /* IMPORTS */
  import Icon from '../Text/Icon.svelte';

  import { MaxSize, Size } from '../../../types/styles';
  import { TextColorVariant } from '../../../types/variants';
  // import { handleEnterKey, focusNextTabbableElement } from '../../../utils/keyboard';

  /* ATTRIBUTES */
  /** The width of the input */
  export let width: MaxSize = MaxSize.DEFAULT;

  /** The label for button */
  export let label: string = 'Choose Language';

  /** If DropdownButton__Menu is open or closed */
  export let isMenuOpen: boolean = false;

  /** The selected option */
  export let selectedOption: string | undefined = undefined;

  /** Is the button disabled */
  export let disabled = false;

  /** To allow to clear the option or not */
  export let allowClearOption: boolean = true;

  /* VARIABLES */
  let isLabelUp: boolean = false;

  /* METHODS */
  const toggleMenu = () => (isMenuOpen = !isMenuOpen);
  const handleClearSelectedOption = () => (selectedOption = undefined);
  const handleKeyClear = (e: KeyboardEvent) => {
    // e.stopPropagation();
    // if (!disabled) {
    //   handleEnterKey(e, handleClearSelectedOption);
    // }
  };
  const handleKeyDown = (e: KeyboardEvent) => {
    // e.stopPropagation();
    // if (!disabled) {
    //   handleEnterKey(e, () => {
    //     toggleMenu();
    //     setTimeout(focusNextTabbableElement, 0);
    //   });
    // }
  };

  /* HOOKS */
  $: isLabelUp = selectedOption ? true : false;
</script>

<div
  class="DropdownButton"
  class:DropdownButton--disabled={disabled}
  class:DropdownButton--fill={width === MaxSize.FILL}
  aria-disabled={disabled}
  tabindex={-1}
  aria-labelledby="dropdown-label"
  aria-expanded={isMenuOpen}
  role="button"
  on:click|stopPropagation|preventDefault={toggleMenu}
  on:keydown={handleKeyDown}
>
  <div class="DropdownButton__Content" class:DropdownButton__Content--selected={!selectedOption}>
    <div class="DropdownButton__Label" class:DropdownButton__Label--up={isLabelUp} id="dropdown-label">
      {label}
    </div>
    {#if selectedOption}
      <div class="DropdownButton__Text">
        {selectedOption}
      </div>
    {/if}
  </div>
  <div class="DropdownButton__Icons">
    {#if selectedOption && !allowClearOption}
      <div
        class="DropdownButton__Icon DropdownButton__Icon--clear"
        role="button"
        aria-label="Clear selection"
        tabindex={0}
        on:click|stopPropagation|preventDefault={handleClearSelectedOption}
        on:keydown={handleKeyClear}
      >
        <Icon
          size={Size.SMALL}
          icon="cross"
          color={undefined}
          hoverColor={disabled ? undefined : TextColorVariant.PRIMARY}
        />
      </div>
    {/if}
    <div
      class={`DropdownButton__Icon DropdownButton__Icon--arrow DropdownButton__Icon--arrow--${isMenuOpen ? 'up' : 'down'}`}
      role="button"
      aria-label="Open menu"
      tabindex={0}
      on:click|stopPropagation|preventDefault={toggleMenu}
      on:keydown={handleKeyDown}
    >
      <Icon icon="chevron-down" color={undefined} hoverColor={disabled ? undefined : TextColorVariant.PRIMARY} />
    </div>
  </div>
</div>

<style>
  .DropdownButton {
    min-height: 5.5rem;
    height: fit-content;
    display: flex;
    align-items: center;
    background-color: var(--color-secondary);
    overflow: hidden;
    border: none;
    justify-content: flex-start;
    cursor: pointer;
    color: var(--color-text-placeholder);
    border-radius: 2rem;
    box-shadow: var(--box-shadow-small);
    
    /* WIDTH = DEFAULT */

    width: 30rem;
  }

  /* WIDTH = FILL */

  .DropdownButton--fill {
    width: 100%;
  }

  .DropdownButton:hover {
    background-color: var(--color-secondary-light);
  }

  .DropdownButton__Content {
    padding: 1rem 1rem 1rem 1.5rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    flex-direction: column;
    gap: 0.25rem;
  }

  .DropdownButton__Content--selected {
    justify-content: center;
  }

  .DropdownButton__Icons {
    padding: 1rem 1.5rem 1rem 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: fit-content;
    height: 100%;
    flex-direction: row;
    gap: 1rem;
    color: inherit;
  }

  /* DROPDOWN__LABEL */

  .DropdownButton__Label {
    cursor: pointer;
    z-index: 0;
    padding: 0;
    line-height: 1;
    width: 100%;
    transition: all 0.05s ease-in;
    font-size: var(--font-size-p-small);
    text-align: left;
  }

  .DropdownButton__Label--up {
    width: 100%;
    font-size: var(--font-size-p-xsmall);
  }

  /* DROPDOWN__TEXT */

  .DropdownButton__Text {
    width: 100%;
    color: var(--color-text-primary);
    font-size: var(--font-size-p-small);
    line-height: 1;
    text-align: left;
  }

  /* DROPDOWN__ICON */

  .DropdownButton__Icon {
    z-index: 2;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    font-size: 2rem;
  }

  .DropdownButton__Icon--arrow--up {
    transform: rotate(180deg);
  }

  .DropdownButton__Icon:focus-visible {
    outline: var(--outline-style-focus);

  }

  /* DISABLED */

  .DropdownButton--disabled,
  .DropdownButton--disabled:hover,
  .DropdownButton--disabled:active,
  .DropdownButton--disabled:focus-visible {
    background: var(--color-disabled);
    color: var(--color-text-disabled);
    outline: none;
    cursor: not-allowed;
  }
</style>
