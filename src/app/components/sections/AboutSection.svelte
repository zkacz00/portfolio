<script lang="ts">
  /* IMPORTS */
  import Meta from "../atoms/Meta/Meta.svelte";
  import Section from "../atoms/Spacing/Section.svelte";
  import Flex from "../atoms/Spacing/Flex.svelte";
  import Hero from "../organisms/Hero.svelte";
  import Grid from "../atoms/Grid/Grid.svelte";
  import Col from "../atoms/Grid/Col.svelte";
  import AboutIcons from "./../molecules/AboutIcons.svelte";

  import { TextColorVariant } from "../../types/variants";
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

  import Text from "../atoms/Text/Text.svelte";
  import Span from "../atoms/Text/Span.svelte";
  import Image from "../atoms/Images/Image.svelte";
  import { isMobile, isTablet, isDesktop } from "../../stores/device";
  import { aboutText } from "../../content/about";
  import { language } from "../../stores/language";
  import Title from "../atoms/Text/Title.svelte";

  /* HOOKS */
  $: aboutContent = aboutText[$language];
</script>

<Section anchor="about" color="white">
  <Flex gap={2} direction={FlexDirection.COLUMN}>
    <Grid gap={$isMobile ? 4 : $isTablet ? 4 : 10}>
      <Col desktop={4} tablet={3}>
        <Flex direction={FlexDirection.COLUMN} gap={$isTablet ? 2 : 4}>
          <div class="About__Image">
            <Image
              behavior={ImageBehavior.CONTAIN}
              file={$isDarkMode ? "zofia-real-picture-dark.png" : aboutImage.file}
              alt={aboutImage.alt}
              contentStyle={$isMobile ? "max-height: 46rem;" : ""}
            />
          </div>
          {#if !$isMobile}
            <AboutIcons />
          {/if}
        </Flex>
      </Col>
      <Col desktop={8} tablet={5}>
        <div class="About__Content">
          <Flex
            direction={FlexDirection.COLUMN}
            align={AlignItems.START}
            gap={$isDesktop ? 5 : 4}
            height={MaxSize.FILL}
            justify={$isTablet ? JustifyContent.END : JustifyContent.CENTER}
          >
            <Title
              type={TitleType.H2}
              align={Align.LEFT}
            >
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
                        : $isDarkMode ? TextColorVariant.WHITE : TextColorVariant.BLACK }
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
                        : $isDarkMode ? TextColorVariant.WHITE : TextColorVariant.BLACK }
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
                        : $isDarkMode ? TextColorVariant.WHITE : TextColorVariant.BLACK }
                      fontWeight={part.bold ? FontWeight.MEDIUM : undefined}
                      >{part.text}</Span
                    >
                  {/each}
                </Text>
              </Flex>
              {#if $isMobile}
                <AboutIcons />
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
    width: 100%;
    height: 100%;
  }

  .About__Image {
    width: 100%;
  }
</style>
