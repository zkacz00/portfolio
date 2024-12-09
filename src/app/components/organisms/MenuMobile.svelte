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
    JustifyContent,
    FlexDirection,
    MaxSize,
  } from "../../types/styles";
  import {
    ButtonVariant,
    LogoColorVariant,
    TextColorVariant,
  } from "../../types/variants";
  import { offset } from "../../stores/router";
  import { isMobile } from "../../stores/device";
  import NavList from "../molecules/NavList.svelte";
  import LanguageSwitch from "../molecules/LanguageSwitch.svelte";
  import Logo from "../atoms/Images/Logo.svelte";
  import { LogoName } from "../../types/logoNames";

  /* ATTRIBUTES */
  /** Function to open and close menu */
  export let toggleMenu: () => void = () => {};

  /** If MenuMobile is open or closed */
  export let isMenuOpen: boolean = false;

  /* METHODS */
  const handleFeaturesClick = () => {
    toggleMenu();
    scrollTo("VisionSection", -$offset, "auto");
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
  $: document.body.style.overflowY =
    $isMobile && isMenuOpen ? "hidden" : "auto";
</script>

<div class="MenuMobile MenuMobile--{isMenuOpen ? 'open' : 'closed'}">
  <Flex direction={FlexDirection.COLUMN} align={AlignItems.START} gap={6}>
    <Flex direction={FlexDirection.COLUMN} align={AlignItems.START} gap={4}>
      <NavList />
      <Flex
        width={MaxSize.DEFAULT}
        height={MaxSize.DEFAULT}
        align={AlignItems.START}
        gap={2}
      >
        <Logo
          logo={LogoName.GITHUB}
          color={LogoColorVariant.WHITE}
          size={Size.XSMALL}
        />
        <Logo
          logo={LogoName.LINKEDIN}
          color={LogoColorVariant.WHITE}
          size={Size.XSMALL}
        />
      </Flex>
    </Flex>
    <Flex
      direction={FlexDirection.COLUMN}
      height={MaxSize.DEFAULT}
      gap={2}
      justify={JustifyContent.START}
    >
      <Button width={MaxSize.FILL} variant={ButtonVariant.CONTEXTUAL}>Work with me</Button>
      <LanguageSwitch width={MaxSize.FILL} />
    </Flex>
  </Flex>
</div>

<style>
  .MenuMobile {
    visibility: hidden;
    position: fixed;
    width: 100vw;
    top: 6.5rem;
    right: 0;
    height: calc(100vh - 6.5rem);
    z-index: 100;
    background: var(--color-primary-black);
    padding: 2rem;
    padding-top: 6rem;
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

  :global(.Mobile) .MenuMobile--open {
    visibility: visible;
    right: 0;
  }
</style>
