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

  import { metaTags } from "../../content/metaTags";
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
  import { aboutImage } from "../../content/about";

  /* VARIABLES */
  let splashesImageStyle: string = `top: 0; right: 0; position: absolute; height: 80%; border-radius:  var(--border-radius-section); overflow: hidden;`;
  let splashesImageContentStyle: string = `height: 100%;`;

  // let faceImageStyle: string = `display: flex; align-items: flex-start; top: 0; right: 0; position: absolute; height: 100%; border-radius:  var(--border-radius-section); overflow: hidden;`;
  // let faceImageContentStyle: string = `height: 120%;`;

  /* METHODS */
  const handleDownloadCV = () => {
    window.open(myCvUrl, "_blank");
  };

  /* HOOKS */
  $: heroContent = heroText[$language];
</script>

<Meta {...metaTags.home} />

<Section
  anchor="hero"
  color="white"
  clearBottomPadding={true}
  clearTopPadding={true}
  clearSidePadding={true}
>
  <div class="HeroContainer">
    <Grid>
      <Col desktop={8}>
        <Flex direction={FlexDirection.COLUMN} align={AlignItems.START} gap={$isDesktop ? 4 : 5}>
          <Text
            fontSize={$isDesktop ? 4 : $isTablet ? 4 : 3}
            color={TextColorVariant.BLACK}
            align={Align.LEFT}>{heroContent.greeting}</Text
          >
          <Title type={TitleType.H1} align={Align.LEFT}
            >{heroContent.title1}<br />{heroContent.title2}</Title
          >
          <Text
            size={Size.LARGE}
            color={TextColorVariant.BLACK}
            fontWeight={FontWeight.MEDIUM}
            >{heroContent.subtitle}
          </Text>
          <Flex
            direction={FlexDirection.ROW}
            gap={2}
            justify={JustifyContent.START}
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
            <Button variant={ButtonVariant.PRIMARY} onClick={handleDownloadCV}
              >{heroContent.downloadCV}</Button
            >
          </Flex>
        </Flex>
      </Col>
      {#if !$isMobile}
        <Col desktop={4}>
          <div class="HeroContainer__Image">
            <Image
              alt="splashes"
              file="splashes-color.png"
              style={splashesImageStyle}
              contentStyle={splashesImageContentStyle}
            />
            <!-- <Image
              alt="Zofia"
              file="zofia-face.png"
              style={faceImageStyle}
              contentStyle={faceImageContentStyle}
            /> -->
          </div>
        </Col>
      {/if}
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
    padding: calc(10rem + var(--section-margin-vertical))
      var(--section-margin-horizontal) var(--section-margin-vertical);
    overflow: hidden;
  }

  .HeroContainer__Image {
    height: 100%;
    width: 100%;
  }

  :global(.Tablet) .HeroContainer {
    padding-top: calc(5rem + var(--section-margin-vertical));
  }

  @media (max-width: 768px) {
    .HeroContainer__Image {
      display: none;
    }
  }

  :global(.Mobile) .HeroContainer {
    padding-top: calc(3rem + var(--section-margin-vertical));
  }
</style>
