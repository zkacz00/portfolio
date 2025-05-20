<script lang="ts">
  import { ButtonVariant } from "../../../types/variants";

  /* ATTRIBUTES */
  export let isOpen: boolean = false;
  export let onClick: () => void = () => {};
  export let variant: ButtonVariant = ButtonVariant.PRIMARY;

  /* METHODS */
  const handleClick = () => onClick();
</script>

<button
  class="MenuButton Button Button--{variant}"
  on:click={handleClick}
  aria-label="Menu Button"
>
  <div class="MenuButton__Icon" class:MenuButton__Icon--open={isOpen}>
    <div class="MenuButton__Line"></div>
    <div class="MenuButton__Line"></div>
    <div class="MenuButton__Line"></div>
  </div>
</button>

<style>
  .MenuButton {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 5rem;
    height: 5rem;
    border-radius: 2rem;
    background: transparent;
    border: none;
  }

  .MenuButton__Icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    gap: 5px;
    transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    cursor: pointer;
  }

  .MenuButton__Line {
    width: 100%;
    height: 4px;
    background: var(--color-secondary);
    transition:
      transform 0.5s cubic-bezier(0.77, 0, 0.175, 1),
      opacity 0.4s ease,
      width 0.3s ease;
    border-radius: 2px;
    transform-origin: center;
    pointer-events: none;
  }

  .MenuButton__Icon--open .MenuButton__Line:nth-child(1) {
    transform: rotate(45deg) translate(0.6rem, 1rem) scale(1.1);
    transition-delay: 0.05s;
  }

  .MenuButton__Icon--open .MenuButton__Line:nth-child(2) {
    transform: translateX(-1rem) scaleX(0.5);
    opacity: 0;
    transition-delay: 0.15s;
  }

  .MenuButton__Icon--open .MenuButton__Line:nth-child(3) {
    transform: rotate(-45deg) translate(0.6rem, -1rem) scale(1.1);
    transition-delay: 0.1s;
  }
</style>
