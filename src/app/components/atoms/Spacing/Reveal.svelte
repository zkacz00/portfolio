<script lang="ts">
  import { onMount } from "svelte";
  import { MaxSize } from "../../../types/styles";

  export let direction: "up" | "down" | "left" | "right" | "fade" | "scale" =
    "fade";
  export let offset: number = 1;
  export let duration: number = 0.8;
  export let delay: number = 0;
  export let threshold: number = 0.1;
  export let once: boolean = true;
  export let reset: boolean = false;
  export let width: MaxSize = MaxSize.DEFAULT
  export let disabled: boolean = true;

  let element: HTMLElement;
  let isRevealed: boolean = false;

  $: if (reset) {
    isRevealed = false;
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isRevealed = true;
          if (once && !reset) observer.unobserve(element);
        } else if (reset) {
          isRevealed = false;
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  });
</script>

<div
  bind:this={element}
  class="Reveal Reveal--{direction} Reveal--{width}"
  class:Reveal--revealed={isRevealed}
  class:Reveal--disabled={disabled}
  style={!disabled ? `
      --reveal-offset: ${offset}rem;
      --reveal-duration: ${0.4 + duration}s;
      --reveal-delay: ${delay}s;
    ` : ''}
>
  <slot />
</div>

<style>
  .Reveal {
    height: 100%;
    opacity: 0;
    transition:
      opacity var(--reveal-duration) ease-out var(--reveal-delay),
      transform var(--reveal-duration) ease-out var(--reveal-delay),
      scale var(--reveal-duration) ease-out var(--reveal-delay);
    will-change: opacity, transform, scale;
    display: flex;
    justify-content: center;
  }

  .Reveal--default {
    width: auto;
  }

  .Reveal--fill {
    width: 100%;
  }

  /* Direction Offsets */
  .Reveal--up {
    transform: translateY(var(--reveal-offset));
  }
  .Reveal--down {
    transform: translateY(calc(-1 * var(--reveal-offset)));
  }
  .Reveal--left {
    transform: translateX(var(--reveal-offset));
  }
  .Reveal--right {
    transform: translateX(calc(-1 * var(--reveal-offset)));
  }
  .Reveal--fade {
    transform: none;
  }
  .Reveal--scale {
    transform: scale(0.95);
  }

  .Reveal--revealed {
    opacity: 1;
    transform: none;
    scale: 1;
  }

  .Reveal--disabled {
  opacity: 1 !important;
  transform: none !important;
  scale: 1 !important;
  transition: none !important;
}
</style>
