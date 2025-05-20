<script lang="ts">
  import { isMobile } from "./../../stores/device";
  import Logo from "../atoms/Images/Logo.svelte";
  import Text from "../atoms/Text/Text.svelte";
  import Flex from "../atoms/Spacing/Flex.svelte";
  import FooterLinks from "../molecules/FooterLinks.svelte";
  import {
    Size,
    MaxSize,
    AlignItems,
    FlexDirection,
    Align,
    JustifyContent,
  } from "../../types/styles";
  import { LogoColorVariant, TextColorVariant } from "../../types/variants";
  import { LogoName } from "../../types/logoNames";
  import Grid from "../atoms/Grid/Grid.svelte";
  import Col from "../atoms/Grid/Col.svelte";
  import LanguageSwitch from "./../molecules/LanguageSwitch.svelte";

  import { footerText } from "../../content/footer";
  import { language } from "../../stores/language";
  import Image from "../atoms/Images/Image.svelte";

  /* VARIABLES */
  let logoImageStyle: string = "height: 4rem; width: auto;";
  let flowerImageStyle: string = `top: 12rem; right: -20rem; position: absolute; height: 70%; overflow: hidden;`;

  /* HOOKS */
  $: footerContent = footerText[$language];
</script>

<div class="Footer">
  <Flex direction={FlexDirection.COLUMN} align={AlignItems.START} gap={12} position="relative">
    <Image alt="zb-logo" file="zb-logo.png" style={logoImageStyle} />
    <FooterLinks />
    <div class="Footer__Image">
      <Image alt="flower" file="flower-footer.png" style={flowerImageStyle} />
    </div>
  </Flex>
  <div class="Footer__BottomPanel">
    <Flex
      direction={$isMobile ? FlexDirection.COLUMN : FlexDirection.ROW}
      justify={JustifyContent.BETWEEN}
      align={$isMobile ? AlignItems.START : AlignItems.CENTER}
    >
      <Text
        size={Size.XSMALL}
        align={Align.LEFT}
        color={TextColorVariant.WHITE_SECONDARY}
      >
        {footerContent.signature}
      </Text>
      <Flex
        order={$isMobile ? -1 : 2}
        direction={FlexDirection.ROW}
        align={AlignItems.CENTER}
        justify={JustifyContent.END}
        width={MaxSize.ADJUST}
      >
        <Flex
          width={MaxSize.DEFAULT}
          height={MaxSize.DEFAULT}
          align={AlignItems.START}
          gap={$isMobile ? 4 : 3}
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
        <LanguageSwitch />
      </Flex>
    </Flex>
  </div>
</div>

<style>
  .Footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 8rem;
    /* position: relative; */
  }

  .Footer__Image {
    height: 100%;
    width: 100%;
  }

  .Footer__BottomPanel {
    width: 100%;
    padding: 5rem 0;
    border-top: rgba(255, 255, 255, 0.2) 0.5px solid;
  }

  :global(.Mobile) .Footer {
    flex-direction: column;
  }
</style>
