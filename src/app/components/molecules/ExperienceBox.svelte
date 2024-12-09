<script lang="ts">
  /* IMPORTS */
  import Image from "../atoms/Images/Image.svelte";
  import Grid from "../atoms/Grid/Grid.svelte";
  import Col from "../atoms/Grid/Col.svelte";
  import Title from "../atoms/Text/Title.svelte";
  import Subtitle from "../atoms/Text/Subtitle.svelte";
  import Text from "../atoms/Text/Text.svelte";
  import Flex from "../atoms/Spacing/Flex.svelte";
  import Tag from "../atoms/Buttons/Tag.svelte";
  import Separator from "../atoms/Separator/Separator.svelte";

  import {
    ImageBehavior,
    Align,
    Size,
    AlignItems,
    TitleType,
    FlexDirection,
    JustifyContent,
    FlexWrap,
    MaxSize,
    FontWeight,
  } from "../../types/styles";
  import { ButtonVariant, TextColorVariant } from "../../types/variants";
  import { experienceUtils, type ExperienceEl } from "../../content/experience";

  import Container from "../atoms/Spacing/Container.svelte";

  /* ATTRIBUTES */

  /** The experience object */
  export let experienceEl: ExperienceEl;

  /* VARIABLES */
  let isHovered: boolean = false;

  /* HOOKS */
  // $: if (isHovered === true) {TextColorVariant.BLACK = TextColorVariant.WHITE; tagVariant = ButtonVariant.PRIMARY_WHITE};
  // $: if (isHovered === false) {TextColorVariant.BLACK = TextColorVariant.BLACK; tagVariant = ButtonVariant.PRIMARY};
</script>

<div class="ExperienceBox" role="group" on:mouseenter={() => isHovered = true} on:mouseleave={() => isHovered = false}>
  <Container>
  <Grid>
    <Col desktop={4} tablet={4}>
      <Flex
        align={AlignItems.START}
        direction={FlexDirection.COLUMN}
        gap={0}
        height={MaxSize.FILL}
      >
        <Text align={Align.LEFT} size={Size.XSMALL} color={TextColorVariant.BLACK}>{experienceUtils.what}</Text
        >
        <Title
          color={TextColorVariant.BLACK}
          align={Align.LEFT}
          type={TitleType.H3}
          fontWeight={FontWeight.MEDIUM}
          >{experienceEl.title}</Title
        >
      </Flex>
    </Col>
    <Col desktop={3} tablet={2}>
      <Flex align={AlignItems.START} direction={FlexDirection.COLUMN} gap={2} height={MaxSize.FILL}>
        <Flex align={AlignItems.START} direction={FlexDirection.COLUMN} gap={0}>
          <Text color={TextColorVariant.BLACK} align={Align.LEFT} size={Size.XSMALL}
            >{experienceUtils.where}</Text
          >
          <Text color={TextColorVariant.BLACK} align={Align.LEFT} size={Size.MEDIUM} fontWeight={FontWeight.MEDIUM}
            >{experienceEl.location}</Text
          >
        </Flex>
        <Flex align={AlignItems.START} direction={FlexDirection.COLUMN} gap={0}>
          <Text color={TextColorVariant.BLACK} align={Align.LEFT} size={Size.XSMALL}
            >{experienceUtils.when}</Text
          >
          <Text color={TextColorVariant.BLACK} align={Align.LEFT} size={Size.MEDIUM} fontWeight={FontWeight.MEDIUM}>{experienceEl.date}</Text>
        </Flex>
      </Flex>
    </Col>
    <Col desktop={5}>
      <Flex align={AlignItems.START} direction={FlexDirection.COLUMN} gap={2} height={MaxSize.FILL}>
        <Text
          align={Align.LEFT}
          size={Size.SMALL}
          color={TextColorVariant.BLACK}>{experienceEl.description}</Text
        >
        <Flex
          direction={FlexDirection.ROW}
          justify={JustifyContent.START}
          wrap={FlexWrap.WRAP}
          gap={0.5}
        >
          {#each experienceEl.technologies as technology}
          <Tag variant={ButtonVariant.PRIMARY}>{technology}</Tag>
          {/each}
        </Flex>
      </Flex>
    </Col>
  </Grid>
  </Container>
</div>

<style>
  .ExperienceBox {
    width: 100%;
    background-color: var(--color-primary-white);
    border-radius:  var(--border-radius-section);
    box-shadow: var(--box-shadow-small);
  }

  /* .ExperienceBox:hover {
    background-image: var(--color-primary);
    border-radius:  var(--border-radius-section)
  } */
  
    /* :global(.Tablet) .ExperienceBox__Image {
      height: 50rem;
    }
  
    :global(.Tablet) .ExperienceBox__Text,
    :global(.Mobile) .ExperienceBox__Text {
      gap: 2rem;
    }
  
    :global(.Mobile) .ExperienceBox__Image {
      height: 40rem;
    }  */
</style>
