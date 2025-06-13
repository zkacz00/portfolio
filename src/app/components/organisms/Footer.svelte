<script lang="ts">
  import { isMobile, isTablet } from "./../../stores/device";
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
  import Link from "../atoms/Text/Link.svelte";
  import { scrollTo } from "../../utils/scroll";
  import ModeButton from "../atoms/Buttons/ModeButton.svelte";

  import { Target } from "../../types/targets";

  /* VARIABLES */
  let logoImageStyle: string = "height: 4rem; width: auto;";
  let flowerImageStyle: string = `z-index: 0; top: 4rem; right: -16rem; position: absolute; width: 100%; overflow: hidden;`;
  let flowerImageStyleTablet: string = `z-index: 0; top: 6rem; right: -10rem; position: absolute; width: 100%; overflow: hidden;`;
  let flowerImageStyleMobile: string = `z-index: 0; bottom: -22rem; right: -5rem; position: absolute; width: 130%; overflow: hidden;`;

  /* METHODS */
  const handleHeroClick = () => scrollTo("home");

  /* HOOKS */
  $: footerContent = footerText[$language];
</script>

  <div class="Footer">
    <Grid>
      <Col desktop={4} tablet={3} mobile={1}>
        <Flex
          direction={FlexDirection.COLUMN}
          align={AlignItems.START}
          gap={$isTablet ? 10 : 12}
        >
          <Link url="#home" onClick={handleHeroClick}>
            <Image alt="zb-logo" file="zb-logo.webp" style={logoImageStyle} loading="eager" decoding="async" />
          </Link>
          <FooterLinks />
        </Flex>
      </Col>
      <Col desktop={8} tablet={5} mobile={1}>
          <div class="Footer__Image">
            {#if !$isMobile}
              <Image
                alt="splashes"
                file="flower-footer-shapes.webp"
                style={flowerImageStyle}
                loading="eager"
                decoding="async"
              />
            {/if}
              <Image
                alt="splashes"
                file={$isMobile
                  ? "flower-footer-mobile.webp"
                  : "flower-footer-picture.webp"}
                style={$isMobile
                  ? flowerImageStyleMobile
                  : $isTablet
                    ? flowerImageStyleTablet
                    : flowerImageStyle}
                loading="eager"
                decoding="async"
              />
            
          </div>
      </Col>
    </Grid>
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
          justify={JustifyContent.CENTER}
          width={MaxSize.ADJUST}
        >
          <Flex
            width={MaxSize.DEFAULT}
            height={MaxSize.DEFAULT}
            align={AlignItems.CENTER}
            gap={$isMobile ? 4 : 3}
          >
            <Logo
              logo={LogoName.GITHUB}
              color={LogoColorVariant.WHITE}
              size={Size.SMALL}
              target={Target.BLANK}
            />
            <Logo
              logo={LogoName.LINKEDIN}
              color={LogoColorVariant.WHITE}
              size={Size.SMALL}
              target={Target.BLANK}
            />
          </Flex>
          <Flex
            width={MaxSize.DEFAULT}
            height={MaxSize.DEFAULT}
            align={AlignItems.CENTER}
            gap={$isMobile ? 2 : 3}
          >
            <LanguageSwitch />
            <ModeButton />
          </Flex>
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
    gap: 10rem;
  }

  .Footer__Image {
    height: 100%;
    width: 100%;
    position: relative;
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
