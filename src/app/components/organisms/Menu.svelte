<script lang="ts">
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
    MaxSize,
  } from "../../types/styles";
  import { ButtonVariant } from "../../types/variants";
  import Col from "../atoms/Grid/Col.svelte";
  import Grid from "../atoms/Grid/Grid.svelte";
  import Reveal from "../atoms/Spacing/Reveal.svelte";
  import { scrollTo } from "../../utils/scroll";

  /* ATTRIBUTES */
  export let toggleMenu: () => void = () => {};
  export let isMenuOpen: boolean = false;

  /* VARIABLES */
  let flowerImageStyle: string = `z-index: 0; top: -2rem; right: -22rem; position: absolute; width: 100%; overflow: hidden;`;
  let flowerImageStyleMobile: string = `z-index: 0; top: 1rem; right: -4rem; position: absolute; height: 100%; width: 110%; overflow: hidden;`;
  
  /* METHODS */
  const handleKey = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMenu();
    }
  };

  const handleContactClick = () => {
    if (toggleMenu) {
      scrollTo("contact", "auto");
      toggleMenu();
    } else {
      scrollTo("contact");
    }
  };

  /* HOOKS */
  $: navContent = navText[$language];
  $: if (typeof window !== "undefined") {
    document.body.style.overflowY = isMenuOpen ? "hidden" : "auto";
  }
</script>

<div
  class="Overlay"
  class:Overlay--visible={isMenuOpen}
  tabindex="0"
  role="button"
  aria-label="Close menu"
  on:click={toggleMenu}
  on:keydown={handleKey}
/>

<div class="Menu" class:Menu--visible={isMenuOpen}>
  <Grid>
    <Col desktop={4} tablet={3} mobile={1}>
      <div class="Menu__Content" class:Menu__Content--visible={isMenuOpen}>
        <Flex direction={FlexDirection.COLUMN} gap={4} align={AlignItems.START}>
          <NavList {toggleMenu} />
        </Flex>
        {#if $isMobile}
        <Reveal once={false} reset={true} delay={0.2 + 8 / 6} duration={8 / 6} direction="left">
          <Button width={MaxSize.FILL} variant={ButtonVariant.PRIMARY} onClick={handleContactClick}>
            {navContent.workButton}
          </Button>
          </Reveal>
        {/if}
      </div>
    </Col>
    <Col desktop={8} tablet={5} mobile={1}>
      <Reveal once={false} reset={true} delay={0.4} duration={0.4} direction="left" disabled={false}>
        <div class="Menu__Image" class:Menu__Image--open={isMenuOpen}>
          {#if !$isMobile}
            <Image
              alt="splashes"
              file="flower-footer-shapes.webp"
              style={flowerImageStyle}
              loading="eager"
              decoding="async"
            />
          {/if}
          <Reveal once={false} reset={true} delay={0.6} duration={0.6} direction="left" disabled={false}>
            <Image
              alt="splashes"
              file={$isMobile
                ? "flower-footer-mobile.webp"
                : "flower-footer-picture.webp"}
              style={$isMobile ? flowerImageStyleMobile : flowerImageStyle}
              loading="eager"
              decoding="async"
            />
          </Reveal>
        </div>
      </Reveal>
    </Col>
  </Grid>
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
    transition:
      opacity 0.5s ease,
      visibility 0.5s ease;
    z-index: 899;
    cursor: pointer;
  }

  .Overlay--visible {
    opacity: 1;
    visibility: visible;
  }

  .Menu {
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

  .Menu--visible {
    opacity: 1;
    transform: scale(1);
    clip-path: circle(150% at 50% 50%);
    pointer-events: auto;
  }

  .Menu__Content {
    animation: fadeInMenu 0.6s ease forwards;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 6rem;

    display: none;
  }

  .Menu__Content--visible {
    display: flex;;
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

  .Menu__Image {
    width: 100%;
    height: 100%;
    position: relative;
  }

  :global(.Mobile) .Menu {
    justify-content: flex-start;
    padding: 20rem var(--section-margin-horizontal) 4rem;
  }
</style>
