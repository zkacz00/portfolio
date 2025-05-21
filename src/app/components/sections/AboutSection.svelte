<script lang="ts">
  /* IMPORTS */
  import Meta from "../atoms/Meta/Meta.svelte";
  import Section from "../atoms/Spacing/Section.svelte";
  import Flex from "../atoms/Spacing/Flex.svelte";
  import Hero from "../organisms/Hero.svelte";
  import Grid from "../atoms/Grid/Grid.svelte";
  import Col from "../atoms/Grid/Col.svelte";
	import AboutIcons from './../molecules/AboutIcons.svelte';

  import { TextColorVariant } from "../../types/variants";
  import {
    Align,
    AlignItems,
    FlexDirection,
    FontWeight,
    ImageBehavior,
    MaxSize,
    Size,
    TitleType,
  } from "../../types/styles";

  import { metaTags } from "../../content/metaTags";
  import { aboutImage } from "../../content/about";

  import Text from "../atoms/Text/Text.svelte";
  import Span from "../atoms/Text/Span.svelte";
  import Image from "../atoms/Images/Image.svelte";
  import { isMobile, isTablet, isDesktop } from "../../stores/device";
  import { aboutText } from "../../content/about";
  import { language } from "../../stores/language";

  /* HOOKS */
  $: aboutContent = aboutText[$language];
</script>

<Meta {...metaTags.home} />

<Section anchor="about" color="white">
    <Flex gap={2} direction={FlexDirection.COLUMN}>
      <Grid gap={$isMobile ? 4 : $isTablet ? 4 :10}>
        <Col desktop={4} tablet={4}>
          <Flex direction={FlexDirection.COLUMN} gap={4}>
            <div class="About__Image">
              <Image
                behavior={ImageBehavior.CONTAIN}
                file={aboutImage.file}
                alt={aboutImage.alt}
                contentStyle={$isMobile ? "max-height: 46rem;" : ""}
              />
            </div>
            {#if $isDesktop}
              <AboutIcons />
            {/if}
          </Flex>
        </Col>
        {#if $isTablet}
          <Col desktop={0} tablet={2} mobile={0}>
            <AboutIcons />
          </Col>
        {/if}
        <Col desktop={8} tablet={6} >
          <div class="About__Content">
            <Flex direction={FlexDirection.COLUMN} gap={$isDesktop ? 5 : 4} height={MaxSize.FILL}>
              <Hero title={aboutContent.title} titleType={TitleType.H2} align={AlignItems.START} />
              <Flex direction={FlexDirection.COLUMN} gap={3}>
                <Flex direction={FlexDirection.ROW}>
                  <Text align={Align.LEFT} size={Size.XLARGE}>
                    {#each aboutContent.paragraph1 as part}
                      <Span
                        color={part.highlight ? TextColorVariant.PRIMARY : undefined}
                        fontWeight={part.bold ? FontWeight.MEDIUM : undefined}
                        >{part.text}</Span
                      >
                    {/each}
                  </Text>
                </Flex>
                <Flex direction={FlexDirection.ROW}>
                  <Text align={Align.LEFT} size={Size.MEDIUM}>
                    {#each aboutContent.paragraph2 as part}
                      <Span
                        color={part.highlight ? TextColorVariant.PRIMARY : undefined}
                        fontWeight={part.bold ? FontWeight.MEDIUM : undefined}
                        >{part.text}</Span
                      >
                    {/each}
                  </Text>
                  </Flex>
                <Flex direction={FlexDirection.ROW}>
                  <Text align={Align.LEFT} size={Size.MEDIUM}>
                    {#each aboutContent.paragraph3 as part}
                      <Span
                        color={part.highlight ? TextColorVariant.PRIMARY : undefined}
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
