<script lang="ts">
  import LogoAnimation from "./../atoms/Images/LogoAnimation.svelte";

  /* ATTRIBUTES */
  export let visible: boolean = true;
</script>

<div
  class="LoadingOverlay"
  class:LoadingOverlay--visible={visible}
  class:LoadingOverlay--hidden={!visible}
>
  <div
    class="LoadingOverlay__Content"
    class:LoadingOverlay__Content--visible={visible}
    class:LoadingOverlay__Content--hidden={!visible}
  >
    <LogoAnimation />
  </div>
</div>

<style>
  .LoadingOverlay {
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
    background: var(--color-gradient-black);
    transition:
      clip-path 1.5s cubic-bezier(0.25, 1.25, 0.5, 1);
    clip-path: circle(0% at 100% 0%);
  }

  .LoadingOverlay--visible {
    clip-path: circle(150% at 50% 50%);
    opacity: 1;
  }

  .LoadingOverlay--hidden {
    clip-path: circle(0% at 100% 0%);
  }

  .LoadingOverlay__Content {
    transition: opacity 2s cubic-bezier(0.25, 1.25, 0.5, 1);
    opacity: 0.5;
  }

  .LoadingOverlay__Content--visible {
    opacity: 1;
  }

  .LoadingOverlay__Content--hidden {
    opacity: 0.5;
  }
</style>
