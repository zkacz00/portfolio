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
  } from "../../types/styles";
  import { metaTags } from "../../content/metaTags";
  import Text from "../atoms/Text/Text.svelte";
  import Title from "../atoms/Text/Title.svelte";
  import Flex from "../atoms/Spacing/Flex.svelte";
  import { ButtonVariant, LogoColorVariant, TextColorVariant } from "../../types/variants";
  import IconContainer from "../atoms/Buttons/IconContainer.svelte";
  import Logo from "../atoms/Images/Logo.svelte";
  import { LogoName } from "../../types/logoNames";
  import Button from "../atoms/Buttons/Button.svelte";
  import Grid from "../atoms/Grid/Grid.svelte";
  import Col from "../atoms/Grid/Col.svelte";
</script>

<Meta {...metaTags.home} />

<Section anchor="HeroSection" color="white">
  <div class="HeroContainer">
    <Grid>
      <Col desktop={8}>
        <Flex direction={FlexDirection.COLUMN} align={AlignItems.START}>
          <Text fontSize={5} color={TextColorVariant.BLACK} align={Align.LEFT}>Hi, I'm Zofia,</Text
          >
          <Title type={TitleType.H1} align={Align.LEFT}>DEVELOPER<br />& UI/UX DESIGNER</Title>
          <Text
            size={Size.LARGE}
            color={TextColorVariant.BLACK}
            fontWeight={FontWeight.MEDIUM}
            >Nice to meet you 😊
          </Text>
          <Flex
            direction={FlexDirection.ROW}
            gap={2}
            justify={JustifyContent.START}
          >
            <IconContainer variant={ButtonVariant.PRIMARY_BLACK}
              ><Logo logo={LogoName.GITHUB} color={LogoColorVariant.WHITE} /></IconContainer
            >
            <IconContainer variant={ButtonVariant.PRIMARY_BLACK}
              ><Logo logo={LogoName.LINKEDIN} color={LogoColorVariant.WHITE} /></IconContainer
            >
            <Button variant={ButtonVariant.PRIMARY}>Download my CV</Button>
          </Flex>
        </Flex>
      </Col>
    </Grid>
  </div>
</Section>

<style>
  .HeroContainer {
    margin-top: 9rem;
    height: 440px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
