<script lang="ts">
  /* IMPORTS */
  import Section from "../atoms/Spacing/Section.svelte";
  import Flex from "../atoms/Spacing/Flex.svelte";
  import Grid from "../atoms/Grid/Grid.svelte";
  import Col from "../atoms/Grid/Col.svelte";
  import AboutIcons from "./../molecules/AboutIcons.svelte";

  import { ButtonVariant, TextColorVariant } from "../../types/variants";
  import {
    Align,
    AlignItems,
    FlexDirection,
    FontWeight,
    ImageBehavior,
    JustifyContent,
    MaxSize,
    Size,
    TitleType,
  } from "../../types/styles";

  import { aboutImage } from "../../content/about";
  import { isDarkMode } from "../../stores/lightMode";
  import { myCvPlUrl, myCvEnUrl } from "../../content/urls";

  import Text from "../atoms/Text/Text.svelte";
  import Span from "../atoms/Text/Span.svelte";
  import Image from "../atoms/Images/Image.svelte";
  import { isMobile, isTablet, isDesktop } from "../../stores/device";
  import { aboutText } from "../../content/about";
  import { language } from "../../stores/language";
  import Title from "../atoms/Text/Title.svelte";
  import Button from "../atoms/Buttons/Button.svelte";
  import { heroText } from "../../content/hero";

  /* METHODS */
  const handleDownloadCV = () => {
    window.open(myCvUrl, "_blank");
  };

  /* HOOKS */
  $: myCvUrl = ($language === "Polish") ? myCvPlUrl : ($language === "English") ? myCvEnUrl : myCvEnUrl;
  $: aboutContent = aboutText[$language];
  $: heroContent = heroText[$language];
</script>

<Section anchor="about" color="white">
  <Flex gap={2} direction={FlexDirection.COLUMN}>
    <Grid gap={$isMobile ? 4 : $isTablet ? 4 : 8}>
      <Col desktop={4} tablet={8} mobile={2}>
        <Flex
          direction={FlexDirection.COLUMN}
          gap={$isTablet ? 2 : 4}
          height={MaxSize.FILL}
        >
          <div class="About__Image">
            <Image
              behavior={ImageBehavior.CONTAIN}
              file={$isDarkMode
                ? "zofia-real-picture-dark.webp"
                : aboutImage.file}
              alt={aboutImage.alt}
              contentStyle={$isMobile
                ? "max-height: 46rem;"
                : $isTablet
                  ? "max-height: 46rem;"
                  : ""}
            />
          </div>
          {#if $isDesktop}
            <AboutIcons />
          {/if}
        </Flex>
      </Col>
      <Col desktop={8} tablet={8} mobile={2}>
        <div class="About__Content">
          <Flex
            direction={FlexDirection.COLUMN}
            align={AlignItems.START}
            gap={$isDesktop ? 5 : 4}
            height={MaxSize.FILL}
            justify={$isTablet ? JustifyContent.END : JustifyContent.CENTER}
          >
            <Title type={TitleType.H2} align={Align.LEFT}>
              {aboutContent.title}
            </Title>
            <Flex direction={FlexDirection.COLUMN} gap={3}>
              <Flex direction={FlexDirection.ROW}>
                <Text
                  align={Align.LEFT}
                  size={$isDesktop ? Size.XLARGE : Size.SMALL}
                >
                  {#each aboutContent.paragraph1 as part}
                    <Span
                      color={part.highlight
                        ? TextColorVariant.PRIMARY
                        : $isDarkMode
                          ? TextColorVariant.WHITE
                          : TextColorVariant.BLACK}
                      fontWeight={part.bold ? FontWeight.MEDIUM : undefined}
                      >{part.text}</Span
                    >
                  {/each}
                </Text>
              </Flex>
              <Flex direction={FlexDirection.ROW}>
                <Text
                  align={Align.LEFT}
                  size={$isDesktop ? Size.LARGE : Size.SMALL}
                >
                  {#each aboutContent.paragraph2 as part}
                    <Span
                      color={part.highlight
                        ? TextColorVariant.PRIMARY
                        : $isDarkMode
                          ? TextColorVariant.WHITE
                          : TextColorVariant.BLACK}
                      fontWeight={part.bold ? FontWeight.MEDIUM : undefined}
                      >{part.text}</Span
                    >
                  {/each}
                </Text>
              </Flex>
              <Flex direction={FlexDirection.ROW}>
                <Text
                  align={Align.LEFT}
                  size={$isDesktop ? Size.LARGE : Size.SMALL}
                >
                  {#each aboutContent.paragraph3 as part}
                    <Span
                      color={part.highlight
                        ? TextColorVariant.PRIMARY
                        : $isDarkMode
                          ? TextColorVariant.WHITE
                          : TextColorVariant.BLACK}
                      fontWeight={part.bold ? FontWeight.MEDIUM : undefined}
                      >{part.text}</Span
                    >
                  {/each}
                </Text>
              </Flex>
              {#if !$isDesktop}
                  <AboutIcons />
                  {#if $isMobile}
                  <Button
                    variant={ButtonVariant.PRIMARY}
                    onClick={handleDownloadCV}
                    width={MaxSize.FILL}>{heroContent.downloadCV}</Button
                  >
                  {/if}
              {/if}
            </Flex>
          </Flex>
        </div>
      </Col>
    </Grid>
  </Flex>
</Section>

<style>
  .About__Content {
    height: 100%;
  }

  .About__Image {
    width: 100%;
  }
</style>
