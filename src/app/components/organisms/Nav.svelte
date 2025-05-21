<script lang="ts">
  /* IMPORTS */
  import Button from "../atoms/Buttons/Button.svelte";
  import Logo from "../atoms/Images/Logo.svelte";
  import Flex from "../../components/atoms/Spacing/Flex.svelte";
  import NavList from "../molecules/NavList.svelte";
  import MenuMobile from "./MenuMobile.svelte";
  import IconWrapper from "../atoms/Buttons/IconWrapper.svelte";

  import {
    Size,
    MaxSize,
    AlignItems,
    Align,
    FlexDirection,
  } from "../../types/styles";
  import {
    ButtonVariant,
    LogoColorVariant,
    TextColorVariant,
  } from "../../types/variants";
  import { LogoName } from "../../types/logoNames";
  import LanguageSwitch from "../molecules/LanguageSwitch.svelte";
  import { isDesktop, isTablet, isMobile } from "./../../stores/device";
  import { scrollTo } from "../../utils/scroll";
  import { navText } from "../../content/nav";
  import { language } from "../../stores/language";
  import Image from "../atoms/Images/Image.svelte";
  import MenuButton from "../atoms/Buttons/MenuButton.svelte";
  import Link from "../atoms/Text/Link.svelte";

  /* ATTRIBUTES */
  export let toggleMenu: () => void;
  export let isMenuOpen: boolean = false;

  /* VARIABLES */
  const logoImageStyle: string = "height: 4rem; width: auto;";

  /* METHODS */
  const handleContactClick = () => scrollTo("contact");
  const handleToggleMenuClick = () => toggleMenu();
  const handleHeroClick = () => {
    if (isMenuOpen === true) toggleMenu(); 
    scrollTo("home");
  }

  /* HOOKS */
  $: navContent = navText[$language];
</script>

<nav class="Nav" id="Nav">
  <div class="Nav__ContentWrapper">
    <Link url="#home" onClick={handleHeroClick}>
      <Image alt="zb-logo" file="zb-logo.png" style={logoImageStyle} />
    </Link>
    {#if $isDesktop}
      <div class="Nav__Content">
        <Flex
          width={MaxSize.DEFAULT}
          height={MaxSize.DEFAULT}
          align={AlignItems.CENTER}
          gap={4}
          direction={FlexDirection.ROW}
        >
          <Flex
            width={MaxSize.DEFAULT}
            height={MaxSize.DEFAULT}
            align={AlignItems.START}
            gap={3}
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
          <Flex
            width={MaxSize.DEFAULT}
            height={MaxSize.DEFAULT}
            align={AlignItems.START}
            gap={2}
          >
            <Button
              variant={ButtonVariant.CONTEXTUAL}
              url="#contact"
              onClick={handleContactClick}>{navContent.workButton}</Button
            >
            <LanguageSwitch />
          </Flex>
          <MenuButton isOpen={isMenuOpen} onClick={handleToggleMenuClick} />
        </Flex>
      </div>
    {:else}
      <Flex
        width={MaxSize.DEFAULT}
        height={MaxSize.DEFAULT}
        align={AlignItems.CENTER}
        gap={2}
        direction={FlexDirection.ROW}
      >
        {#if $isTablet}
          <Button
            variant={ButtonVariant.CONTEXTUAL}
            url="#contact"
            onClick={handleContactClick}>{navContent.workButton}</Button
          >
        {/if}
        <LanguageSwitch />
        <MenuButton isOpen={isMenuOpen} onClick={handleToggleMenuClick} />
      </Flex>
      <!-- <MenuMobile isMenuOpen={$isDesktop ? false : isMenuOpen} {toggleMenu} /> -->
    {/if}
  </div>
</nav>

<style>
  .Nav {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    height: 10rem;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(0.4rem);
    z-index: 999;
  }

  .Nav__ContentWrapper {
    width: 100%;
    max-width: var(--content-max-width);
    padding: 0 var(--section-margin-horizontal);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  :global(.Tablet) .Nav {
    height: 8rem;
  }

  :global(.Mobile) .Nav {
    height: 8rem;
  }
</style>
