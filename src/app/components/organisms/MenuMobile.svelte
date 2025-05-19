<script lang="ts">
  /* IMPORTS */
  import Link from "../atoms/Text/Link.svelte";
  import Flex from "../atoms/Spacing/Flex.svelte";
  import Button from "../atoms/Buttons/Button.svelte";

  import { scrollTo, scrollToTop } from "../../utils/scroll";
  import { goto } from "$app/navigation";
  import {
    Size,
    AlignItems,
    FlexDirection,
    MaxSize,
  } from "../../types/styles";
  import {
    ButtonVariant,
    LogoColorVariant,
  } from "../../types/variants";
  import { offset } from "../../stores/router";
  import { isDesktop, isMobile } from "../../stores/device";
  import NavList from "../molecules/NavList.svelte";
  import Logo from "../atoms/Images/Logo.svelte";
  import { LogoName } from "../../types/logoNames";
  import { navText } from "../../content/nav";
  import { language } from "../../stores/language";

  /* ATTRIBUTES */
  /** Function to open and close menu */
  export let toggleMenu: () => void = () => {};

  /** If MenuMobile is open or closed */
  export let isMenuOpen: boolean = false;

  /* METHODS */
  const handleFeaturesClick = () => {
    toggleMenu();
    scrollTo("VisionSection", "auto", -$offset);
    if (window.location.pathname !== "/") {
      window.location.href = "/#VisionSection";
    }
  };

  const handleGoto = (url: string) => {
    toggleMenu();
    if (window.location.pathname !== url) {
      scrollToTop(0, "auto");
      return goto(url);
    }
  };

  /* HOOKS */
  $: 
    if (typeof window !== 'undefined') {
      const { document } = window;
      document.body.style.overflowY = !$isDesktop && isMenuOpen ? "hidden" : "auto";
    }
  $: navContent = navText[$language];
</script>

<div class="MenuMobile MenuMobile--{isMenuOpen ? 'open' : 'closed'}">
  <Flex direction={FlexDirection.COLUMN} align={AlignItems.START} gap={4}>
    <NavList {toggleMenu} />
    <Flex
      width={MaxSize.DEFAULT}
      height={MaxSize.DEFAULT}
      align={AlignItems.START}
      gap={2}
    >
      <Logo
        logo={LogoName.GITHUB}
        color={LogoColorVariant.WHITE}
        size={Size.SMALL}
      />
      <Logo
        logo={LogoName.LINKEDIN}
        color={LogoColorVariant.WHITE}
        size={Size.SMALL}
      />
    </Flex>
    {#if $isMobile}
      <Button width={MaxSize.FILL} variant={ButtonVariant.PRIMARY}>
        {navContent.workButton}
      </Button>
    {/if}
  </Flex>
</div>

<style>
  .MenuMobile {
    visibility: hidden;
    position: fixed;
    width: 100vw;
    top: 8rem;
    right: 0;
    height: calc(100vh - 8rem);
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(0.4rem);
    padding: 4rem 4rem;
    overflow-y: auto;
    border-radius: 0;
    transition:
      right 0.3s ease-out,
      visibility 0.3s ease-out;
  }

  .MenuMobile--closed {
    right: -150vw;
  }

  .MenuMobile--open {
    right: -150vw;
  }

  :global(.Tablet) .MenuMobile--open {
    visibility: visible;
    right: 0;
  }

  :global(.Mobile) .MenuMobile {
    padding: 4rem 2rem;
  }

  :global(.Mobile) .MenuMobile--open {
    visibility: visible;
    right: 0;
  }
</style>
