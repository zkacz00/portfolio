<script lang="ts">
	import { isMobile } from './../../stores/device';
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

  /* HOOKS */
  $: footerContent = footerText[$language];
</script>

<div class="Footer">
  <Grid>
    <Col desktop={5}>
      <Flex direction={FlexDirection.COLUMN} align={AlignItems.START} gap={3}>
        <Text
          fontSize={4}
          align={Align.LEFT}
          color={TextColorVariant.PRIMARY}
        >
          ZB
        </Text>
      </Flex>
    </Col>
    <Col desktop={2}></Col>
    <Col desktop={5}>
      <Flex
        width={MaxSize.FILL}
        align={AlignItems.START}
        justify={$isMobile ? JustifyContent.START : JustifyContent.END}
        gap={5}
        direction={FlexDirection.ROW}
      >
        <FooterLinks />
      </Flex>
    </Col>
  </Grid>
  <div class="Footer__BottomPanel">
    <Flex direction={$isMobile ? FlexDirection.COLUMN : FlexDirection.ROW} justify={JustifyContent.BETWEEN}
    align={$isMobile ? AlignItems.START : AlignItems.CENTER}>
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
            size={$isMobile ? Size.SMALL : Size.XSMALL}
          />
          <Logo
            logo={LogoName.LINKEDIN}
            color={LogoColorVariant.WHITE}
            size={$isMobile ? Size.SMALL : Size.XSMALL}
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
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 5rem;
  }

  .Footer__BottomPanel {
    width: 100%;
    padding: 5rem 0;
  }

  :global(.Mobile) .Footer {
    flex-direction: column;
  }
</style>
