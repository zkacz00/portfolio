<script lang="ts">
	import ContactSection from './ContactSection.svelte';
  /* IMPORTS */
  import Section from "../atoms/Spacing/Section.svelte";
  import Hero from "../organisms/Hero.svelte";
  import Button from "../atoms/Buttons/Button.svelte";

  import { ButtonVariant, LogoColorVariant, TextColorVariant } from "../../types/variants";
  import { Align, AlignItems, FlexDirection, JustifyContent, MaxSize, Size } from "../../types/styles";
  import Background from "../atoms/Spacing/Background.svelte";
  import Grid from "../atoms/Grid/Grid.svelte";
  import Col from "../atoms/Grid/Col.svelte";
  import Icon from "../atoms/Text/Icon.svelte";
  import Text from "../atoms/Text/Text.svelte";
  import Flex from "../atoms/Spacing/Flex.svelte";
  import Logo from "../atoms/Images/Logo.svelte";
  import { LogoName } from '../../types/logoNames';
  import Container from '../atoms/Spacing/Container.svelte';
import { isMobile, isDesktop } from '../../stores/device';
</script>

  <Section anchor="ContactSection" color="white">
    <Background>
      <Container>
    <Grid>
      <Col desktop={5} tablet={3}>
        <Hero
          title="Lets talk!"
          subtitle="Got a question or proposal, or just want to say hello? Go ahead 😁"
          align={AlignItems.START}
          color={TextColorVariant.WHITE}
          subtitleColor={TextColorVariant.WHITE}
        >
        <Flex direction={$isMobile ? FlexDirection.COLUMN : FlexDirection.ROW} gap={2} justify={JustifyContent.START}>
          <Button width={$isMobile ? MaxSize.FILL : MaxSize.DEFAULT} variant={ButtonVariant.PRIMARY_WHITE} shadowColor="white">Download my CV</Button>
          <Button width={$isMobile ? MaxSize.FILL : MaxSize.DEFAULT} variant={ButtonVariant.SECONDARY_WHITE} shadowColor="white">Email me</Button>
        </Flex>
        </Hero>
      </Col>
      {#if $isDesktop}<Col desktop={2}></Col>{/if}
      <Col desktop={5} tablet={3}>
        <Flex direction={FlexDirection.COLUMN} width={MaxSize.FILL} gap={2}>
          <div class="ContactSection__InfoBox">
            <Flex height={MaxSize.FILL} width={MaxSize.ADJUST}>
              <Icon color={TextColorVariant.PRIMARY} icon="mail"/>
            </Flex>
            <Flex direction={FlexDirection.COLUMN} gap={0} align={AlignItems.START}>
              <Text color={TextColorVariant.BLACK} size={Size.SMALL} align={Align.LEFT}>Chat with me</Text>
              <!-- <Text color={TextColorVariant.PRIMARY} size={Size.LARGE} align={Align.LEFT}>zk.zofia.kaczmarczyk@gmail.com</Text> -->
            </Flex>
          </div>
          <div class="ContactSection__InfoBox">
            <Flex height={MaxSize.FILL} width={MaxSize.ADJUST}>
              <Icon color={TextColorVariant.PRIMARY} icon="phone"/>
            </Flex>
            <Flex direction={FlexDirection.COLUMN} gap={0} align={AlignItems.START}>
              <Text color={TextColorVariant.BLACK} size={Size.SMALL} align={Align.LEFT}>Call me</Text>
              <Text color={TextColorVariant.PRIMARY} size={Size.LARGE} align={Align.LEFT}>+48 793 367 966</Text>
            </Flex>
          </div>
          <div class="ContactSection__InfoBox">
            <Flex height={MaxSize.FILL} width={MaxSize.ADJUST}>
              <Logo logo={LogoName.LINKEDIN} color={LogoColorVariant.DEFAULT} size={Size.MEDIUM} />
            </Flex>
            <Flex direction={FlexDirection.COLUMN} gap={0} align={AlignItems.START}>
              <Text color={TextColorVariant.BLACK} size={Size.SMALL} align={Align.LEFT}>Reach me on Linkedin</Text>
              <Text color={TextColorVariant.LINKEDIN} size={Size.LARGE} align={Align.LEFT}>zkacz.linkedin.pl</Text>
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
  }

  :global(.Mobile) .ContactSection__InfoBox {
    border-radius: 2rem;
  }
</style>