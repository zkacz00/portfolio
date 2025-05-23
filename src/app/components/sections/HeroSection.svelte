<script lang="ts">
  /* IMPORTS */
  import Meta from "../atoms/Meta/Meta.svelte";
  import Section from "../atoms/Spacing/Section.svelte";
  import Container from "../atoms/Spacing/Container.svelte";
  import Hero from "../organisms/Hero.svelte";
  import Background from "../atoms/Spacing/Background.svelte";

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
  import { isDesktop, isTablet, isMobile } from "../../stores/device";
  import { myCvUrl } from "../../content/urls";
  import { heroText } from "../../content/hero";
  import { language } from "../../stores/language";
  import { isDarkMode } from "../../stores/lightMode";

  /* VARIABLES */
  let splashesImageStyle: string = `z-index: 0; top: 0; right: 0; position: absolute; height: 75%; overflow: hidden; border-radius:  1rem; overflow: hidden;`;
  let splashesImageContentStyle: string = `height: 100%;`;
  let splashesImageStyleTablet: string = `z-index: 0; top: 0; right: 0; position: absolute; height: auto; width: 53%; overflow: hidden; border-radius:  1rem; overflow: hidden;`;
  let splashesImageStyleMobile: string = `z-index: 0; transform: scaleY(-1); top: auto; bottom: 0; right: 0; position: absolute; height: auto; width: 94%; overflow: hidden; border-radius:  1rem; overflow: hidden;`;

  let flowerImageStyle: string = `z-index: 1; top: 0; right: 30rem; position: absolute; height: 100%; overflow: hidden;`;
  let flowerImageStyleTablet: string = `z-index: 1; top: 0; right: 18rem; position: absolute; height: 100%; overflow: hidden;`;
  let flowerImageStyleMobile: string = `z-index: 1; height: 50rem;`;

  // let faceImageStyle: string = `display: flex; align-items: flex-start; top: 0; right: 0; position: absolute; height: 100%; border-radius:  var(--border-radius-section); overflow: hidden;`;
  // let faceImageContentStyle: string = `height: 120%;`;

  /* METHODS */
  const handleDownloadCV = () => {
    window.open(myCvUrl, "_blank");
  };

  /* HOOKS */
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
      <Col desktop={8}>
        <Flex direction={FlexDirection.COLUMN} align={AlignItems.START} gap={$isDesktop ? 4 : $isMobile ? 5 : 4}>
          <Text
            fontSize={3}
            color={$isDarkMode ? TextColorVariant.WHITE : TextColorVariant.BLACK}
            align={Align.LEFT}>{heroContent.greeting}</Text
          >
          <Title type={TitleType.H1} align={Align.LEFT}
            >{heroContent.title1}<br />{heroContent.title2}</Title
          >
          <Text
            fontSize={2.5}
            color={$isDarkMode ? TextColorVariant.WHITE : TextColorVariant.BLACK}
            fontWeight={FontWeight.MEDIUM}
            >{heroContent.subtitle}
          </Text>
          <Flex
            direction={$isMobile ? FlexDirection.COLUMN : FlexDirection.ROW}
            gap={$isMobile ? 6 : 2}
            justify={JustifyContent.START}
            align={AlignItems.START}
          >
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
              /></IconWrapper
            >
            <IconWrapper variant={ButtonVariant.PRIMARY_BLACK}
              ><Logo
                logo={LogoName.LINKEDIN}
                color={LogoColorVariant.WHITE}
              /></IconWrapper
            >
          </Flex>
            <Button variant={ButtonVariant.PRIMARY} onClick={handleDownloadCV} width={$isMobile ? MaxSize.FILL : MaxSize.DEFAULT}
              >{heroContent.downloadCV}</Button
            >
          </Flex>
        </Flex>
      </Col>
      <!-- {#if !$isMobile} -->
        <Col desktop={4}>
          <div class="HeroContainer__Image">
            <Image
              alt="splashes"
              file={$isDarkMode ? "splashes-color-dark.png" : "splashes-color.png"}
              style={$isMobile ? splashesImageStyleMobile : $isTablet ? splashesImageStyleTablet : splashesImageStyle}
              contentStyle={splashesImageContentStyle}
            />
            <Image
              alt="flower"
              file={$isMobile ? "flower-cropped.png" : "flower.png"}
              style={$isMobile ? flowerImageStyleMobile : $isTablet ? flowerImageStyleTablet : flowerImageStyle}
            />
          </div>
        </Col>
      <!-- {/if} -->
    </Grid>
  </div>
</Section>

<style>
  .HeroContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: calc(20rem + var(--section-margin-vertical))
      var(--section-margin-horizontal) 12rem;
    overflow: hidden;
  }

  .HeroContainer__Image {
    width: 100%;
  }

  :global(.Tablet) .HeroContainer {
    padding-top: calc(5rem + var(--section-margin-vertical));
  }

  /* @media (max-width: 768px) {
    .HeroContainer__Image {
      display: none;
    }
  } */

  :global(.Tablet) .HeroContainer {
    padding-top: calc(4rem + var(--section-margin-vertical));
    padding-bottom: var(--section-margin-vertical);
  }

  :global(.Mobile) .HeroContainer__Image {
    padding-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: auto;
  }

  :global(.Mobile) .HeroContainer {
    padding-top: calc(3rem + var(--section-margin-vertical));
    padding-bottom: 0;
  }
</style>
