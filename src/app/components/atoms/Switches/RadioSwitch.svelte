<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  /* IMPORTS */
  import { handleArrowKeys, handleEnterKey } from '../../../utils/keyboard';
  import { removeDuplicatesFromArray } from '../../../utils/array';
  import { Direction } from "../../../types/directions";
  import { TextColorVariant } from '../../../types/variants';
  import { MaxSize } from '../../../types/styles';

  /* ATTRIBUTES */
  export let label: string = "";

  /** If the button is disabled or not */
  export let disabled: boolean = false;

  /** Options for the switch */
  export let options: Array<string> = ["Pay yearly", "Pay monthly"];

  /** The number of selected option (starting from 0) */
  export let selected: string = "Pay yearly";

  /**  The width of the switch */
  export let width: MaxSize = MaxSize.DEFAULT;

  /* METHODS */
  options = removeDuplicatesFromArray(options);

  const handleClick = (option: string) => {
    if (disabled) return;
    selected = option;
    dispatch('change', option);
  };

  const handleChangeOption = (option: "next" | "previous") => {
    if (disabled) return;
    const currentIndex = options.indexOf(selected);
    const nextIndex = (currentIndex + 1) % options.length;
    const previousIndex = (currentIndex - 1 + options.length) % options.length;
    selected =
      option === "next"
        ? options[nextIndex]
        : option === "previous"
          ? options[previousIndex]
          : selected;
  };
  const handleNextOption = () => {
    handleChangeOption("next");
  };
  const handlePreviousOption = () => {
    handleChangeOption("previous");
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    handleArrowKeys(
      event,
      Direction.HORIZONTAL,
      () => handleNextOption(),
      () => handlePreviousOption()
    );
    handleEnterKey(event, () => handleNextOption());
  };
</script>

<button
  class="RadioSwitch RadioSwitch--{width}"
  class:RadioSwitch--disabled={disabled}
  aria-disabled={disabled}
  aria-label={label}
  tabindex={0}
  role="radiogroup"
  on:keydown={handleKeyDown}
>
  <button
    class="RadioSwitch__Option RadioSwitch__Option--{width}"
    class:RadioSwitch__Option--selected={selected === options[0]}
    tabindex={-1}
    role="radio"
    aria-checked={selected === options[0] ? "true" : "false"}
    on:click={() => handleClick(options[0])}
  >
    {options[0]}
  </button>
  <button
    class="RadioSwitch__Option RadioSwitch__Option--{width}"
    class:RadioSwitch__Option--selected={selected === options[1]}
    tabindex={-1}
    role="radio"
    aria-checked={selected === options[1] ? "true" : "false"}
    on:click={() => handleClick(options[1])}
  >
    {options[1]}
  </button>
</button>

<style>
  .RadioSwitch {
    display: flex;
    flex-direction: row;
    color: var(--color-primary-white);
    font-size: 2rem;
    padding: 0;
    border-radius: 2rem;
    background: rgba(255, 255, 255, 0.15);
    height: 5.5rem;
    box-shadow: var(--box-shadow-small);
  }

  /* RadioSwitch__Option */

  .RadioSwitch__Option {
    cursor: pointer;
    padding: 0 1.5rem;
    font-size: 2rem;
    color: inherit;
    border-radius: 2rem;
    height: 100%;
    min-width: 8rem;
  }

  .RadioSwitch__Option--selected {
    background-image: var(--color-primary);
  }

  .RadioSwitch--fill, .RadioSwitch--fill .RadioSwitch__Option {
    width: 100%;
  }

  :global(.Mobile) .RadioSwitch {
    height: 5rem;
  }
</style>


<!-- <style>
  .RadioSwitch {
    position: relative;
    display: flex;
    width: auto;
    height: 6.5rem;
    padding: 0.5rem;
    gap: 0.5rem;
    justify-content: flex-start;
    align-items: center;
    flex-shrink: 0;

    background: var(--color-secondary-dark);
    border: var(--border-secondary-light);
  }

  /* RadioSwitch__Option */

  .RadioSwitch__Option {
    z-index: 2;
    width: 17rem;

    height: 5.5rem;
    color: var(--color-text-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: var(--font-size-p-small);
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition:
      background-color 0.1s ease-out,
      color 0.1s ease-out;
  }

  .RadioSwitch__Option--fill {
    width: 100%;
  }

  .RadioSwitch__Option--small {
    width: 10rem;
  }

  .RadioSwitch:focus-visible,
  .RadioSwitch__Option:focus-visible {
    outline: var(--outline-style-focus);
  }

  .RadioSwitch__Option:hover {
    color: var(--color-primary-light);
  }

  .RadioSwitch__Option--selected {
    background-color: var(--color-primary);
  }

  .RadioSwitch__Option--selected:hover {
    background-color: var(--color-primary-light);
    color: var(--color-text-primary);
  }

  .RadioSwitch__Option--selected:active {
    background-color: var(--color-primary-dark);
    color: var(--color-text-primary);
  }

  /* DISABLED */

  .RadioSwitch--disabled,
  .RadioSwitch--disabled:focus-visible {
    cursor: not-allowed;
    background-color: var(--color-disabled);
    outline: none;
  }

  .RadioSwitch--disabled .RadioSwitch__Option {
    cursor: not-allowed;
    color: var(--color-text-disabled);
  }

  .RadioSwitch--disabled .RadioSwitch__Option--selected,
  .RadioSwitch--disabled .RadioSwitch__Option--selected:hover,
  .RadioSwitch--disabled .RadioSwitch__Option--selected:active {
    cursor: not-allowed;
    color: var(--color-text-primary);
    background-color: var(--color-primary);
  }
</style> -->
