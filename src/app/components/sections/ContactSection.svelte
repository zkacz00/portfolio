<script lang="ts">
  /* IMPORTS */
  import Section from "../atoms/Spacing/Section.svelte";
  import Hero from "../organisms/Hero.svelte";
  import Button from "../atoms/Buttons/Button.svelte";

  import {
    ButtonVariant,
    LogoColorVariant,
    TextColorVariant,
  } from "../../types/variants";
  import {
    Align,
    AlignItems,
    FlexDirection,
    JustifyContent,
    MaxSize,
    Size,
  } from "../../types/styles";
  import Background from "../atoms/Spacing/Background.svelte";
  import Grid from "../atoms/Grid/Grid.svelte";
  import Col from "../atoms/Grid/Col.svelte";
  import Icon from "../atoms/Text/Icon.svelte";
  import Text from "../atoms/Text/Text.svelte";
  import Flex from "../atoms/Spacing/Flex.svelte";
  import Logo from "../atoms/Images/Logo.svelte";
  import { LogoName } from "../../types/logoNames";
  import Container from "../atoms/Spacing/Container.svelte";
  import { isMobile, isDesktop } from "../../stores/device";
  import Link from "../atoms/Text/Link.svelte";
  import {
    myLinkedinUrl,
    myEmail,
    myLinkedinUrlShort,
  } from "../../content/urls";
  import { contactText } from "../../content/contact";
  import { language } from "../../stores/language";

  /* METHODS */
  const handleEmailClick = () => {
    window.location.href = `mailto:${myEmail}`;
  };

  /* HOOKS */
  $: contactContent = contactText[$language];
</script>

<Section anchor="contact" color="white">
  <Background>
    <Container>
      <Grid gap={$isDesktop ? 3 : 4}>
        <Col desktop={5} tablet={6} mobile={3}>
          <Hero
            title={contactContent.title}
            subtitle={contactContent.subtitle}
            align={AlignItems.START}
            color={TextColorVariant.WHITE}
            subtitleColor={TextColorVariant.WHITE}
          >
            <Flex
              direction={$isMobile ? FlexDirection.COLUMN : FlexDirection.ROW}
              gap={2}
              justify={JustifyContent.START}
            >
              <Button
                width={$isDesktop ? MaxSize.DEFAULT : MaxSize.FILL}
                variant={ButtonVariant.PRIMARY_WHITE}
                shadowColor="white">{contactContent.downloadCV}</Button
              >
              <Button
                onClick={handleEmailClick}
                width={$isDesktop ? MaxSize.DEFAULT : MaxSize.FILL}
                variant={ButtonVariant.SECONDARY_WHITE}
                shadowColor="white">{contactContent.emailMe}</Button
              >
            </Flex>
          </Hero>
        </Col>
        {#if $isDesktop}<Col desktop={2}></Col>{/if}
        <Col desktop={5} tablet={6} mobile={3}>
          <Flex direction={FlexDirection.COLUMN} width={MaxSize.FILL} gap={2}>
            <div class="ContactSection__InfoBox">
              <div class="ContactSection__InfoIcon">
                <Flex height={MaxSize.FILL} width={MaxSize.FILL}>
                  <Icon
                    color={TextColorVariant.PRIMARY}
                    size={Size.LARGE}
                    icon="mail"
                  />
                </Flex>
              </div>
              <Flex
                direction={FlexDirection.COLUMN}
                gap={0}
                align={AlignItems.START}
              >
                <Text
                  color={TextColorVariant.BLACK}
                  size={Size.SMALL}
                  align={Align.LEFT}>{contactContent.emailLabel}</Text
                >
                <Text
                  color={TextColorVariant.PRIMARY}
                  size={Size.MEDIUM}
                  align={Align.LEFT}>{myEmail}</Text
                >
              </Flex>
            </div>
            <div class="ContactSection__InfoBox">
              <div class="ContactSection__InfoIcon">
                <Flex height={MaxSize.FILL} width={MaxSize.FILL}>
                  <Icon
                    color={TextColorVariant.PRIMARY}
                    size={Size.LARGE}
                    icon="phone"
                  />
                </Flex>
              </div>
              <Flex
                direction={FlexDirection.COLUMN}
                gap={0}
                align={AlignItems.START}
              >
                <Text
                  color={TextColorVariant.BLACK}
                  size={Size.SMALL}
                  align={Align.LEFT}>{contactContent.phoneLabel}</Text
                >
                <Text
                  color={TextColorVariant.PRIMARY}
                  size={Size.LARGE}
                  align={Align.LEFT}>{contactContent.phoneNr}</Text
                >
              </Flex>
            </div>
            <div class="ContactSection__InfoBox">
              <div class="ContactSection__InfoIcon">
                <Flex height={MaxSize.FILL} width={MaxSize.FILL}>
                  <Logo
                    logo={LogoName.LINKEDIN}
                    color={LogoColorVariant.DEFAULT}
                    size={Size.MEDIUM}
                  />
                </Flex>
              </div>
              <Flex
                direction={FlexDirection.COLUMN}
                gap={0}
                align={AlignItems.START}
              >
                <Text
                  color={TextColorVariant.BLACK}
                  size={Size.SMALL}
                  align={Align.LEFT}>{contactContent.linkedinLabel}</Text
                >
                <Link
                  color={TextColorVariant.LINKEDIN}
                  size={Size.MEDIUM}
                  url={myLinkedinUrl}>{myLinkedinUrlShort}</Link
                >
              </Flex>
            </div>
          </Flex>
        </Col>
      </Grid>
    </Container>
  </Background>
</Section>

<style>
  .ContactSection__InfoBox {
    background-color: var(--color-primary-white);
    width: 100%;
    padding: 2rem;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    border-radius: 4rem;
    box-shadow: var(--box-shadow-small-white);
    word-break: break-all;
  }

  .ContactSection__InfoIcon {
    width: 7rem;
    display: flex;
    justify-content: center;
  }

  :global(.Mobile) .ContactSection__InfoBox {
    border-radius: 2rem;
    padding: 1rem;
  }
</style>
