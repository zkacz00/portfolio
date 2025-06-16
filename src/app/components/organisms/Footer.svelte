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
  let flowerImageStyle: string = `z-index: 0; width: 90%; `;
  let flowerImageStyleTablet: string = `z-index: 0; width: 90%;`;
  let flowerImageStyleMobile: string = `z-index: 0; bottom: -15rem; right: -4rem; position: absolute; width: 130%; overflow: hidden;`;

  /* METHODS */
  const handleHeroClick = () => scrollTo("home");

  /* HOOKS */
  $: footerContent = footerText[$language];
</script>

<div class="Footer">
  <div class="Footer__Content">
    <Grid>
      <Col desktop={4} tablet={3} mobile={1}>
        <Flex
          direction={FlexDirection.COLUMN}
          align={AlignItems.START}
          gap={$isTablet ? 10 : 12}
        >
          <Link url="#home" onClick={handleHeroClick}>
            <Image
              alt="zb-logo"
              file="zb-logo.webp"
              style={logoImageStyle}
              loading="eager"
              decoding="async"
            />
          </Link>
          <FooterLinks />
        </Flex>
      </Col>
      <Col desktop={8} tablet={5} mobile={1}>
        <div class="Footer__Image">
          <Image
            alt="splashes"
            file={$isMobile
              ? "flower-footer-mobile.webp"
              : "flower-footer.webp"}
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
  </div>
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
  }

  .Footer__Content {
    padding-left: var(--section-margin-horizontal);
    width: 100%;
  }

  .Footer__Image {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .Footer__BottomPanel {
    width: -webkit-fill-available;
    padding: 5rem 0;
    margin: 0 var(--section-margin-horizontal);
    border-top: rgba(255, 255, 255, 0.2) 0.5px solid;
  }

  :global(.Mobile) .Footer {
    flex-direction: column;
  }

  :global(.Mobile) .Footer__Image {
    position: relative;
  }
</style>
