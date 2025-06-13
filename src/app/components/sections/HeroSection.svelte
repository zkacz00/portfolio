<script lang="ts">
  /* IMPORTS */
  import Section from "../atoms/Spacing/Section.svelte";

  import {
    Align,
    AlignItems,
    FlexDirection,
    FontWeight,
    JustifyContent,
    Size,
    TitleType,
    ImageBehavior,
    MaxSize,
  } from "../../types/styles";

  import Text from "../atoms/Text/Text.svelte";
  import Title from "../atoms/Text/Title.svelte";
  import Flex from "../atoms/Spacing/Flex.svelte";
  import {
    ButtonVariant,
    LogoColorVariant,
    TextColorVariant,
  } from "../../types/variants";
  import IconWrapper from "../atoms/Buttons/IconWrapper.svelte";
  import Logo from "../atoms/Images/Logo.svelte";
  import { LogoName } from "../../types/logoNames";
  import Button from "../atoms/Buttons/Button.svelte";
  import Grid from "../atoms/Grid/Grid.svelte";
  import Col from "../atoms/Grid/Col.svelte";
  import Image from "../atoms/Images/Image.svelte";
  import { isTablet, isMobile } from "../../stores/device";
  import { myCvPlUrl, myCvEnUrl } from "../../content/urls";
  import { heroText } from "../../content/hero";
  import { language } from "../../stores/language";
  import { isDarkMode } from "../../stores/lightMode";

  import { Target } from "../../types/targets";

  /* VARIABLES */
  let splashesImageStyle = `
    z-index: 0; 
    top: 0; 
    right: 0; 
    position: absolute; 
    width: 100%; 
    height: max-content; 
    overflow: hidden; 
    border-radius: 1rem; 
    overflow: hidden;
`;
  let splashesImageContentStyle: string = `height: 100%;`;
  let splashesImageStyleTablet: string = `
    z-index: 0; 
    top: 0; 
    right: 0; 
    position: absolute; 
    width: 100%; 
    height: max-content;
    overflow: hidden; 
    border-radius:  1rem; 
    overflow: hidden;`;
  let splashesImageStyleMobile: string = `
    z-index: 0; 
    transform: scaleY(-1); 
    top: auto; 
    bottom: 0; 
    right: 0; 
    position: absolute; 
    height: auto; width: 110%; 
    overflow: hidden; 
    border-radius:  1rem; 
    overflow: hidden;`;

  let flowerImageStyle: string = `
    z-index: 0; bottom: -5rem; 
    right: calc(50% - 24rem); 
    position: absolute; 
    height: 100%; 
    width: max-content; 
    overflow: hidden;`;
  let flowerImageStyleTablet: string = `
    z-index: 0; 
    bottom: 0; 
    left: 35%; 
    position: absolute; 
    height: 60rem; 
    width: max-content; 
    overflow: hidden;`;
  let flowerImageStyleMobile: string = `z-index: 0; 
    height: 40rem; 
    width: max-content;`;

  /* METHODS */
  const handleDownloadCV = () => {
    window.open(myCvUrl, "_blank");
  };

  /* HOOKS */
  $: myCvUrl = ($language === "Polish") ? myCvPlUrl : ($language === "English") ? myCvEnUrl : myCvEnUrl;
  $: heroContent = heroText[$language];
</script>

<Section
  anchor="home"
  color="white"
  clearBottomPadding={true}
  clearTopPadding={true}
  clearSidePadding={true}
>
  <div class="HeroContainer">
    <Grid gap={0}>
      <Col desktop={5} tablet={3} mobile={2}>
        <div class="HeroContainer__Content">
          <Flex
            direction={FlexDirection.COLUMN}
            align={AlignItems.START}
            gap={4}
          >
            <Text
              fontSize={$isTablet ? 3 : 2.75}
              color={$isDarkMode
                ? TextColorVariant.WHITE
                : TextColorVariant.BLACK}
              align={Align.LEFT}>{heroContent.greeting}</Text
            >

            <Title type={TitleType.H1} align={Align.LEFT}
              >{heroContent.title1}<br />{heroContent.title2}</Title
            >

            <Text
              fontSize={2.5}
              color={$isDarkMode
                ? TextColorVariant.WHITE
                : TextColorVariant.BLACK}
              fontWeight={FontWeight.MEDIUM}
              align={Align.LEFT}
              >{heroContent.subtitle}
            </Text>

            <Flex
              direction={FlexDirection.ROW}
              gap={$isMobile ? 6 : 2}
              justify={JustifyContent.START}
              align={AlignItems.START}
              width={MaxSize.DEFAULT}
            >
              {#if !$isMobile}
                <Button
                  variant={ButtonVariant.PRIMARY}
                  onClick={handleDownloadCV}
                  width={MaxSize.DEFAULT}>{heroContent.downloadCV}</Button
                >
              {/if}
              <Flex
                direction={FlexDirection.ROW}
                gap={2}
                width={MaxSize.DEFAULT}
                order={$isMobile ? 2 : 1}
              >
                <IconWrapper variant={ButtonVariant.PRIMARY_BLACK}
                  ><Logo
                    logo={LogoName.GITHUB}
                    color={LogoColorVariant.WHITE}
                    isFocus={false}
                    target={Target.BLANK}
                  /></IconWrapper
                >

                <IconWrapper variant={ButtonVariant.PRIMARY_BLACK}
                  ><Logo
                    logo={LogoName.LINKEDIN}
                    color={LogoColorVariant.WHITE}
                    isFocus={false}
                    target={Target.BLANK}
                  /></IconWrapper
                >
              </Flex>
            </Flex>
          </Flex>
        </div>
      </Col>
      <Col desktop={7} tablet={5} mobile={2}>
        <div class="HeroContainer__Image">
          <Image
            alt="splashes"
            file={$isDarkMode
              ? "splashes-color-dark.webp"
              : "splashes-color.webp"}
            style={$isMobile
              ? splashesImageStyleMobile
              : $isTablet
                ? splashesImageStyleTablet
                : splashesImageStyle}
            contentStyle={splashesImageContentStyle}
            behavior={ImageBehavior.COVER}
            loading="eager"
            decoding="async"
          />

          <Image
            alt="flower"
            file={$isMobile ? "flower-cropped.webp" : "flower.webp"}
            style={$isMobile
              ? flowerImageStyleMobile
              : $isTablet
                ? flowerImageStyleTablet
                : flowerImageStyle}
            behavior={ImageBehavior.COVER}
            loading="eager"
            decoding="async"
          />
        </div>
      </Col>
    </Grid>
  </div>
</Section>

<style>
  .HeroContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    overflow: hidden;
  }

  .HeroContainer__Content {
    width: 100%;
    height: 100%;
    padding: calc(16rem + var(--section-margin-vertical)) 0 12rem
      var(--section-margin-horizontal);
    z-index: 20;
    position: relative;
  }

  .HeroContainer__Image {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  :global(.Tablet) .HeroContainer__Content {
    padding-top: calc(4rem + var(--section-margin-vertical));
    padding-bottom: var(--section-margin-vertical);
  }

  :global(.Mobile) .HeroContainer__Image {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 40rem;
  }

  :global(.Mobile) .HeroContainer__Content {
    padding: calc(0.5rem + var(--section-margin-vertical))
      var(--section-margin-horizontal) 0 var(--section-margin-horizontal);
  }
</style>
