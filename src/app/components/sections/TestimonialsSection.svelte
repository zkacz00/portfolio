<script lang="ts">
  /* IMPORTS */
  import Section from "../atoms/Spacing/Section.svelte";
  import Container from "../atoms/Spacing/Container.svelte";
  import Background from "../atoms/Spacing/Background.svelte";
  import {
    testimonials,
    testimonialsUtils,
  } from "./../../content/testimonials";
  import Testimony from "../organisms/Testimony.svelte";
  import Hero from "../organisms/Hero.svelte";
  import Subtitle from "../atoms/Text/Subtitle.svelte";
  import { Align, AlignItems, FlexDirection, Size } from "../../types/styles";
  import { TextColorVariant } from "../../types/variants";
  import Flex from "../atoms/Spacing/Flex.svelte";
</script>

<Section anchor="TestimonialsSection" color="white">
  <Flex direction={FlexDirection.COLUMN} gap={1}>
    <Background>
      <Container>
        <Hero
          title={testimonialsUtils.title}
          align={AlignItems.START}
          color={TextColorVariant.WHITE}
        />
        <Subtitle align={Align.LEFT} size={Size.SMALL}>
          {testimonialsUtils.subtitle}</Subtitle
        >
      </Container>
    </Background>
    <Background>
      <Container>
        <Testimony testimony={testimonials[0]} />
      </Container>
    </Background>
    <Background>
      <Container>
        <Testimony testimony={testimonials[1]} reversed={true} />
      </Container>
    </Background>
  </Flex>
</Section>
