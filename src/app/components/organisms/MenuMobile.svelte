<script lang="ts">
  import Link from "../atoms/Text/Link.svelte";
  import Flex from "../atoms/Spacing/Flex.svelte";
  import Button from "../atoms/Buttons/Button.svelte";
  import { isMobile } from "../../stores/device";
  import NavList from "../molecules/NavList.svelte";
  import Image from "../atoms/Images/Image.svelte";
  import { navText } from "../../content/nav";
  import { language } from "../../stores/language";
  import {
    FlexDirection,
    AlignItems,
    JustifyContent,
    MaxSize
  } from "../../types/styles";
  import {
    ButtonVariant,
  } from "../../types/variants";

  /* ATTRIBUTES */
  export let toggleMenu: () => void = () => {};
  export let isMenuOpen: boolean = false;

  /* VARIABLES */
  let flowerImageStyle: string = `top: 20rem; right: -20rem; position: absolute; height: 60%; overflow: hidden;`;

  /* METHODS */
  const handleKey = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleMenu();
    }
  }

  /* HOOKS */
  $: navContent = navText[$language];
  $: if (typeof window !== 'undefined') {
    document.body.style.overflowY = isMenuOpen ? "hidden" : "auto";
  }
</script>

<div
  class="Overlay"
  class:visible={isMenuOpen}
  tabindex="0"
  role="button"
  aria-label="Close menu"
  on:click={toggleMenu}
  on:keydown={handleKey}
/>

<div class="MenuMobile" class:MenuMobile--open={isMenuOpen}>
  <div
    class="MenuMobile__Content"
  >
    <NavList {toggleMenu} />
    {#if $isMobile}
      <Button width={MaxSize.FILL} variant={ButtonVariant.PRIMARY}>
        {navContent.workButton}
      </Button>
    {/if}
    </div>
    <div class="MenuMobile__Image" class:MenuMobile__Image--open={isMenuOpen}>
      <Image alt="splashes" file="flower-footer-shapes.png" style={flowerImageStyle} />
    </div>
    <div class="MenuMobile__Image" class:MenuMobile__Image--open={isMenuOpen}>
      <Image alt="splashes" file="flower-footer-picture.png" style={flowerImageStyle} />
    </div>
</div>

<style>
  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(0.5rem);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease, visibility 0.5s ease;
    z-index: 899;
    cursor: pointer;
  }

  .Overlay.visible {
    opacity: 1;
    visibility: visible;
  }

  .MenuMobile {
    position: fixed;
    top: 0;
    right: 0;
    padding: 14rem var(--section-margin-horizontal) 4rem;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(0.5rem);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    opacity: 0;
    transform: scale(1.1);
    clip-path: circle(0% at 100% 0%);
    transition:
      clip-path 0.6s ease-in-out,
      opacity 0.3s ease,
      transform 0.5s ease;
    z-index: 900;
    pointer-events: none;
  }

  .MenuMobile--open {
    opacity: 1;
    transform: scale(1);
    clip-path: circle(150% at 50% 50%);
    pointer-events: auto;
  }

  .MenuMobile__Content {
    animation: fadeInMenu 0.6s ease forwards;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 3rem;;
  }

  @keyframes fadeInMenu {
    from {
      opacity: 0;
      transform: translateY(2rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .MenuMobile__Image {
    width: 100%;
  }

  :global(.Mobile) .MenuMobile {
    padding: 2rem;
  }
</style>
