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
  export let disabled: boolean = false;
  export let options: Array<string> = ["Pay yearly", "Pay monthly"];
  export let selected: string = "Pay yearly";
  export let width: MaxSize = MaxSize.DEFAULT;

  /* INTERNAL */
  options = removeDuplicatesFromArray(options);
  let sliderEl: HTMLDivElement;
  let isAnimating = false;

  /* HANDLERS */
  const animateSlider = (option: string) => {
    if (!sliderEl) return;

    isAnimating = true;
    sliderEl.classList.add('RadioSwitch__Slider--active');

    setTimeout(() => {
      sliderEl.classList.remove('RadioSwitch__Slider--active');
      isAnimating = false;
    }, 300);
  };

  const handleClick = (option: string) => {
    if (disabled || selected === option) return;
    animateSlider(option);
    selected = option;
    dispatch('change', option);
  };

  const handleChangeOption = (option: "next" | "previous") => {
    if (disabled) return;
    const currentIndex = options.indexOf(selected);
    const nextIndex = (currentIndex + 1) % options.length;
    const previousIndex = (currentIndex - 1 + options.length) % options.length;
    const newOption =
      option === "next"
        ? options[nextIndex]
        : options[previousIndex];

    animateSlider(newOption);
    selected = newOption;
    dispatch('change', newOption);
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
  <div
    class="RadioSwitch__Slider"
    bind:this={sliderEl}
    style="transform: translateX({selected === options[0] ? '0%' : '100%'})"
  ></div>

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
    position: relative;
    display: flex;
    flex-direction: row;
    color: var(--color-primary-white);
    font-size: 2rem;
    padding: 0;
    border-radius: 2rem;
    background: rgba(255, 255, 255, 0.2);
    height: 5.5rem;
    box-shadow: var(--box-shadow-small);
    overflow: hidden;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .RadioSwitch:active {
    background: rgba(255, 255, 255, 0.1);
  }

  .RadioSwitch__Slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-image: var(--color-primary);
    border-radius: 2rem;
    transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), scale 0.4s ease;
    transform-origin: center;
    z-index: 1;
    cursor: pointer;
  }

  .RadioSwitch__Slider--active {
  scale: 1.4 0.85; /* increased scale for bigger droplet effect */
  transition: transform 0.4s ease-out, scale 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 0 1.2rem rgba(255, 255, 255, 0.4);
}

  .RadioSwitch__Option {
    position: relative;
    z-index: 2;
    flex: 1;
    cursor: pointer;
    padding: 0 1.25rem;
    font-size: 2rem;
    color: var(--color-secondary-white);
    border-radius: 2rem;
    height: 100%;
    width: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    transition: color 0.3s ease;
  }

  .RadioSwitch__Option--selected {
    color: var(--color-primary-white);
  }

  .RadioSwitch--fill,
  .RadioSwitch--fill .RadioSwitch__Option {
    width: 100%;
  }

  :global(.Mobile) .RadioSwitch {
    height: 5rem;
  }

  .RadioSwitch:focus-visible {
    border: var(--outline-style-focus);
    outline: none;
  }
</style>
