<script lang="ts">
  /* IMPORTS */
  import Grid from "../atoms/Grid/Grid.svelte";
  import Col from "../atoms/Grid/Col.svelte";
  import Title from "../atoms/Text/Title.svelte";
  import Text from "../atoms/Text/Text.svelte";
  import Flex from "../atoms/Spacing/Flex.svelte";
  import Tag from "../atoms/Buttons/Tag.svelte";
  import Container from "../atoms/Spacing/Container.svelte";

  import {
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
  import { experienceText, type ExperienceEl } from "../../content/experience";
  import { language } from "../../stores/language";
  import { isTablet } from "../../stores/device";
  import { isDarkMode } from "../../stores/lightMode";

  /* ATTRIBUTES */

  /** The experience object */
  export let experienceEl: ExperienceEl;

  /** The id */
  export let id: number = 1;

  /* VARIABLES */
  let isHovered: boolean = false;

  /* HOOKS */
  $: experienceContent = experienceText[$language];
</script>

<div class={`ExperienceBoxWrapper ExperienceBoxWrapper--${id}`}>
    <div
      class="ExperienceBox"
      class:ExperienceBox--dark={$isDarkMode}
      role="group"
      on:mouseenter={() => (isHovered = true)}
      on:mouseleave={() => (isHovered = false)}
    >
      <Container>
        <Grid gap={$isTablet ? 3 : 4}>
          <Col desktop={4} tablet={8}>
            <Flex
              align={AlignItems.START}
              direction={FlexDirection.COLUMN}
              gap={0}
              height={MaxSize.FILL}
            >
              <Text
                align={Align.LEFT}
                size={Size.XSMALL}
                color={$isDarkMode
                  ? TextColorVariant.WHITE_SECONDARY
                  : TextColorVariant.BLACK}>{experienceContent.what}</Text
              >
              <Title
                color={$isDarkMode
                  ? TextColorVariant.WHITE
                  : TextColorVariant.BLACK}
                align={Align.LEFT}
                type={TitleType.H3}
                fontWeight={FontWeight.MEDIUM}>{experienceEl.title}</Title
              >
            </Flex>
          </Col>
          <Col desktop={3} tablet={8}>
            <Flex
              align={AlignItems.START}
              direction={FlexDirection.COLUMN}
              gap={2}
              height={MaxSize.FILL}
            >
              <Flex
                align={AlignItems.START}
                direction={FlexDirection.COLUMN}
                gap={0}
              >
                <Text
                  color={$isDarkMode
                    ? TextColorVariant.WHITE_SECONDARY
                    : TextColorVariant.BLACK}
                  align={Align.LEFT}
                  size={Size.XSMALL}>{experienceContent.where}</Text
                >
                <Text
                  color={$isDarkMode
                    ? TextColorVariant.WHITE
                    : TextColorVariant.BLACK}
                  align={Align.LEFT}
                  size={Size.MEDIUM}
                  fontWeight={FontWeight.MEDIUM}>{experienceEl.location}</Text
                >
              </Flex>
              <Flex
                align={AlignItems.START}
                direction={FlexDirection.COLUMN}
                gap={0}
              >
                <Text
                  color={$isDarkMode
                    ? TextColorVariant.WHITE_SECONDARY
                    : TextColorVariant.BLACK}
                  align={Align.LEFT}
                  size={Size.XSMALL}>{experienceContent.when}</Text
                >
                <Text
                  color={$isDarkMode
                    ? TextColorVariant.WHITE
                    : TextColorVariant.BLACK}
                  align={Align.LEFT}
                  size={Size.MEDIUM}
                  fontWeight={FontWeight.MEDIUM}>{experienceEl.date}</Text
                >
              </Flex>
            </Flex>
          </Col>
          <Col desktop={5} tablet={8}>
            <Flex
              align={AlignItems.START}
              direction={FlexDirection.COLUMN}
              gap={2}
              height={MaxSize.FILL}
            >
              <Text
                align={Align.LEFT}
                size={Size.SMALL}
                color={$isDarkMode
                  ? TextColorVariant.WHITE
                  : TextColorVariant.BLACK}>{experienceEl.description}</Text
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
  
</div>

<style>
  .ExperienceBox {
    width: 100%;
    background: var(--color-gradient-white);
    border-radius: var(--border-radius-section);
    box-shadow: var(--box-shadow-small);
  }

  .ExperienceBox--dark {
    background: var(--color-gradient-black-secondary);
  }

  .ExperienceBoxWrapper--1,
  .ExperienceBoxWrapper--3 {
    transform: rotate(1deg);
    z-index: 1;
  }

  .ExperienceBoxWrapper--2 {
    transform: rotate(-1deg);
    z-index: 2;
  }

  .ExperienceBoxWrapper--3 {
    z-index: 0;
  }
</style>
