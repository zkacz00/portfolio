<script lang="ts">
  /* IMPORTS */
  import Section from "../atoms/Spacing/Section.svelte";
  import Hero from "../organisms/Hero.svelte";
  import Background from "../atoms/Spacing/Background.svelte";
  import Grid from "../atoms/Grid/Grid.svelte";
  import Col from "../atoms/Grid/Col.svelte";
  import SkillBox from "../molecules/SkillBox.svelte";
  import Image from "../atoms/Images/Image.svelte";

  import { TextColorVariant } from "../../types/variants";
  import { AlignItems, FlexDirection, ImageBehavior } from "../../types/styles";
  import { skills, skillsImage } from "../../content/skills";
  import Container from "../atoms/Spacing/Container.svelte";
  import Flex from "../atoms/Spacing/Flex.svelte";
  import { isMobile, isDesktop } from "../../stores/device";

  /* VARIABLES */
  const imageStyle: string = "position: absolute; left: 24px; top: 0; width: max-content;";
</script>

  <Section anchor="SkillsSection" color="white">
    <Background color="main">
      <Container>
        <Grid>
          <Col desktop={9}>
            <Flex direction={FlexDirection.COLUMN} gap={4}>
            <Hero
              title="Skills"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              align={AlignItems.START}
              color={TextColorVariant.WHITE}
              subtitleColor={TextColorVariant.WHITE}
            />
            <Grid gap={1}>
              <Col desktop={6} tablet={3} mobile={2} order={1}><SkillBox skill={skills.frontEnd} /></Col>
              <Col desktop={6} tablet={3} mobile={2} order={2}><SkillBox skill={skills.backEnd} /></Col>
              <Col desktop={4} tablet={3} mobile={2} order={3}><SkillBox skill={skills.design} /></Col>
              <Col desktop={4} tablet={3} mobile={2} order={4}><SkillBox skill={skills.interpersonal} /></Col>
              <Col desktop={4} tablet={3} order={5}><SkillBox skill={skills.languages} /></Col>
              <Col desktop={12} tablet={3} order={6}><SkillBox skill={skills.lacking} /></Col>
            </Grid>
          </Flex>
          </Col>
          {#if !$isMobile}
          <Col desktop={3}>
            <div class="SkillsSection__ImageWrapper">
              <Image
                behavior={ImageBehavior.CONTAIN}
                file={skillsImage.file}
                alt={skillsImage.alt}
                style={imageStyle}
              />
            </div>
          </Col>
          {/if}
        </Grid>
      </Container>
    </Background>
  </Section>

<style>
  .SkillsSection__ImageWrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
