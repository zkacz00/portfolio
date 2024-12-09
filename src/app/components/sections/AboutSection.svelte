<script lang="ts">
  /* IMPORTS */
  import Meta from "../atoms/Meta/Meta.svelte";
  import Section from "../atoms/Spacing/Section.svelte";
  import Flex from "../atoms/Spacing/Flex.svelte";
  import Hero from "../organisms/Hero.svelte";
  import Grid from "../atoms/Grid/Grid.svelte";
  import Col from "../atoms/Grid/Col.svelte";
  import IconContainer from "../atoms/Buttons/IconContainer.svelte";

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

  import { metaTags } from "../../content/metaTags";
  import { aboutImage } from "../../content/about";

  import Text from "../atoms/Text/Text.svelte";
  import Span from "../atoms/Text/Span.svelte";
  import Image from "../atoms/Images/Image.svelte";
  import { isMobile, isTablet } from "../../stores/device";

  const infoElements = [
    { icon: "user-id", text: "24 yrs" },
    { icon: "location", text: "Poland, Lublin" },
  ];
</script>

<Meta {...metaTags.home} />

<Section anchor="AboutSection" color="white">
    <Flex gap={2} direction={FlexDirection.COLUMN}>
      <Grid gap={$isMobile ? 3 : $isTablet ? 6 :10}>
        <Col desktop={5} tablet={2}>
          {#if $isMobile}
          <Hero
            title="About me"
            titleType={TitleType.H2}
            align={AlignItems.START}
          ></Hero>
          {/if}
          <Flex direction={FlexDirection.COLUMN} gap={4}>
            <div class="About__Image">
              <Image
                behavior={ImageBehavior.CONTAIN}
                file={aboutImage.file}
                alt={aboutImage.alt}
              />
            </div>
            <div class="About__Icons">
              <Flex
                direction={FlexDirection.ROW}
                justify={JustifyContent.CENTER}
                gap={4}
              >
                {#each infoElements as item}
                  <Flex
                    direction={FlexDirection.ROW}
                    justify={JustifyContent.START}
                    width={MaxSize.ADJUST}
                    gap={1.5}
                  >
                    <IconContainer icon={item.icon} isButton={false} />
                    <Text align={Align.LEFT} size={Size.MEDIUM}
                      >{item.text}</Text
                    >
                  </Flex>
                {/each}
              </Flex>
            </div>
          </Flex>
        </Col>
        <Col desktop={7} tablet={4}>
          <div class="About__Content">
            <Flex direction={FlexDirection.COLUMN} gap={5}>
              {#if !$isMobile}
              <Hero
                title="About me"
                titleType={TitleType.H2}
                align={AlignItems.START}
              ></Hero>
              {/if}
              <Flex direction={FlexDirection.COLUMN} gap={3}>
                <Flex direction={FlexDirection.ROW}>
                  <Text align={Align.LEFT} size={Size.XLARGE}>
                    <Span
                      color={TextColorVariant.PRIMARY}
                      fontWeight={FontWeight.MEDIUM}>Hello, World</Span
                    > 👋 I'm a front-end focused <Span
                      fontWeight={FontWeight.MEDIUM}
                      >web developer & designer</Span
                    > from <Span fontWeight={FontWeight.MEDIUM}>Poland</Span>,
                    and I'm very <Span
                      color={TextColorVariant.PRIMARY}
                      fontWeight={FontWeight.MEDIUM}>passionate</Span
                    > and <Span
                      color={TextColorVariant.PRIMARY}
                      fontWeight={FontWeight.MEDIUM}>dedicated</Span
                    >
                    to my work.
                  </Text>
                </Flex>
                <Flex direction={FlexDirection.ROW}>
                  <Text align={Align.LEFT} size={Size.MEDIUM}>
                    <Span fontWeight={FontWeight.MEDIUM}
                      >My name is
                      <Span
                        color={TextColorVariant.PRIMARY}
                        fontWeight={FontWeight.MEDIUM}>Zofia Kaczmarczyk</Span
                      >.
                    </Span>
                    With
                    <Span fontWeight={FontWeight.MEDIUM}>
                      <Span
                        color={TextColorVariant.PRIMARY}
                        fontWeight={FontWeight.MEDIUM}
                      >
                        ~2 years
                      </Span>
                      experience
                    </Span>
                    as a professional a graphic designer, I have acquired the skills
                    and knowledge necessary to make your project a success. I
                    <Span
                      color={TextColorVariant.PRIMARY}
                      fontWeight={FontWeight.MEDIUM}>thrive</Span
                    > on both
                    <Span fontWeight={FontWeight.MEDIUM}
                      >creative and logical challenges</Span
                    >, and I am
                    <Span
                      color={TextColorVariant.PRIMARY}
                      fontWeight={FontWeight.MEDIUM}>dedicated</Span
                    > to bringing projects to life with
                    <Span fontWeight={FontWeight.MEDIUM}
                      >pixel-perfect precision.</Span
                    >
                    Crafting
                    <Span fontWeight={FontWeight.MEDIUM}
                      >versatile and functional components</Span
                    > while using the latest technologies to create
                    <Span fontWeight={FontWeight.MEDIUM}
                      >elegant web applications</Span
                    > is what I <Span
                      color={TextColorVariant.PRIMARY}
                      fontWeight={FontWeight.MEDIUM}>love</Span
                    > to do.</Text
                  >
                </Flex>
                <Flex direction={FlexDirection.ROW}>
                  <Text align={Align.LEFT} size={Size.MEDIUM}>
                    <Span
                      color={TextColorVariant.PRIMARY}
                      fontWeight={FontWeight.MEDIUM}>My career goal</Span
                    >
                    is to work on
                    <Span fontWeight={FontWeight.MEDIUM}>dynamic projects</Span>
                    that will allow me to
                    <Span
                      color={TextColorVariant.PRIMARY}
                      fontWeight={FontWeight.MEDIUM}>collaborate</Span
                    >
                    with
                    <Span fontWeight={FontWeight.MEDIUM}>talented teams</Span>
                    and further
                    <Span
                      color={TextColorVariant.PRIMARY}
                      fontWeight={FontWeight.MEDIUM}>advance</Span
                    >
                    my
                    <Span fontWeight={FontWeight.MEDIUM}
                      >professional development.</Span
                    >
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </div>
        </Col>
      </Grid>
    </Flex>
</Section>

<style>
  .About__Content,
  .About__Icons {
    width: 100%;
  }

  .About__Image {
    /* height: 367px; */
    width: 100%;
  }

  :global(.Mobile) .About__Image {
    width: 90%;
  }
</style>
