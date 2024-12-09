<script lang="ts">
  /* IMPORTS */
  import Button from "../atoms/Buttons/Button.svelte";
  import IconContainer from "../atoms/Buttons/IconContainer.svelte";
  import Logo from "../atoms/Images/Logo.svelte";
  import Flex from "../../components/atoms/Spacing/Flex.svelte";
  import NavList from "../molecules/NavList.svelte";
  import MenuMobile from "./MenuMobile.svelte";

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
  import Text from "../atoms/Text/Text.svelte";
  import { isDesktop, isTablet } from "./../../stores/device";
  import { focusNextTabbableElement } from "../../utils/keyboard";

  /* VARIABLES */
  let isMenuOpen: boolean = false;

  /* METHODS */
  // const toggleMenu = () => (isMenuOpen = !isMenuOpen);

  // const handleClickOutside = (event: MouseEvent) => {
  //   const menuElement = document.getElementById('MenuTablet');
  //   if ($isTablet && isMenuOpen && menuElement && !menuElement.contains(event.target as Node)) {
  //     toggleMenu();
  //   }
  // };

  // const handleToggleMenuClick = () => {
  //   toggleMenu();
  //   if ($isTablet && isMenuOpen) setTimeout(focusNextTabbableElement, 0);
  // };

  /* HOOKS */
  // $: if (isMenuOpen) window.addEventListener('click', handleClickOutside);
  // $: if (!isMenuOpen) window.removeEventListener('click', handleClickOutside);
  // offset.set(64);
</script>

<nav class="Nav" id="Nav">
  <div class="Nav__ContentWrapper">
    <Text
      size={Size.XLARGE}
      align={Align.LEFT}
      color={TextColorVariant.PRIMARY}
    >
      ZK
    </Text>
    {#if $isDesktop}
      <div class="Nav__Content">
        <Flex
          width={MaxSize.DEFAULT}
          height={MaxSize.DEFAULT}
          align={AlignItems.CENTER}
          gap={4}
          direction={FlexDirection.ROW}
        >
          {#if $isDesktop}
            <Flex
              direction={FlexDirection.ROW}
              width={MaxSize.DEFAULT}
              height={MaxSize.DEFAULT}
              align={AlignItems.CENTER}
              gap={4}
            >
              <NavList />
            </Flex>
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
            <Flex
              width={MaxSize.DEFAULT}
              height={MaxSize.DEFAULT}
              align={AlignItems.START}
              gap={2}
            >
              <Button variant={ButtonVariant.CONTEXTUAL}>Work with me</Button>
              <LanguageSwitch />
            </Flex>
          {:else}
            <div class="Nav__MenuButton">
              <IconContainer
                name="menu"
                icon="menu"
                label="Menu"
                toggle={true}
                transparentBcg={true}
              />
            </div>
          {/if}
        </Flex>
      </div>
    {:else}
      <!-- <div
      class="Nav__MenuTablet"
      class:Nav__MenuTablet--open={isMenuOpen}
      class:Nav__MenuTablet--closed={$isMobile || !isMenuOpen}
      id="MenuTablet"
    >
      <MenuTablet isMenuOpen={$isMobile ? false : isMenuOpen} {toggleMenu} />
    </div> -->
      <MenuMobile isMenuOpen={true} />
    {/if}
  </div>
</nav>

<style>
  .Nav {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    height: 9rem;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(0.4rem);
    z-index: 100;
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
  /* .Nav__MenuButton,
  .Nav__Content {
    display: flex;
  }

  .Nav__MenuTablet--open {
    display: flex;
  }

  .Nav__MenuTablet--closed {
    display: none;
  } */

  :global(.Tablet) .Nav {
    height: 7.5rem;
  }

  :global(.Mobile) .Nav {
    height: 6.5rem;
  }
</style>
