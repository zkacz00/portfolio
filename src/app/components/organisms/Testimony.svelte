<script lang="ts">
  /* IMPORTS */
  import Flex from "../atoms/Spacing/Flex.svelte";
  import Grid from "../atoms/Grid/Grid.svelte";
  import Col from "../atoms/Grid/Col.svelte";
  import Text from "../atoms/Text/Text.svelte";
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
  import Image from "../atoms/Images/Image.svelte";
  import { type Testimonial } from "./../../content/testimonials";
  import Span from "../atoms/Text/Span.svelte";
  import Title from "../atoms/Text/Title.svelte";
  import { testimonialsUtils } from "./../../content/testimonials";

  /* ATTRIBUTES */
  /** The testimony content */
  export let testimony: Testimonial;

  /** If the testimony is reversed */
  export let reversed: boolean = false;

  /* VARIABLES */
  const imageStyle: string = "width: 100%;";
  const reversedQuotesImageStyle: string = "width: 100%; transform: scale(-1, -1);";
</script>

<div class="Testimony">
  <Grid gap={10}>
    <Col desktop={5} order={reversed ? 1 : 0}>
      <Flex direction={FlexDirection.COLUMN} gap={3}>
        <div class="Testimony__ImageWrapper">
          <Image
            behavior={ImageBehavior.CONTAIN}
            file={testimony.image.file}
            alt={testimony.image.alt}
            style={imageStyle}
          />
        </div>
      </Flex>
    </Col>
    <Col desktop={7} order={reversed ? 0 : 1}>
      <Flex
        direction={FlexDirection.COLUMN}
        align={AlignItems.START}
        justify={JustifyContent.CENTER}
        gap={4}
        height={MaxSize.FILL}
      >
        <Flex
          direction={FlexDirection.ROW}
          align={AlignItems.CENTER}
          justify={JustifyContent.START}
          height={MaxSize.ADJUST}
        >
          <div class="Testimony__QuotesImageWrapper">
            <Image
              style={imageStyle}
              behavior={ImageBehavior.CONTAIN}
              alt="quotes picture"
              file={testimonialsUtils.quotesImage}
            />
          </div>
        </Flex>
        <Text
          align={Align.LEFT}
          size={Size.MEDIUM}
          color={TextColorVariant.WHITE}
        >
          {testimony.name}
          <Span
            size={Size.MEDIUM}
            color={TextColorVariant.WHITE}
            fontWeight={FontWeight.EXTRALIGHT}
          >
            {testimony.job}
          </Span></Text
        >
        <Title type={TitleType.H3} color={TextColorVariant.WHITE}
          >{testimony.title}</Title
        >
        <Text
          align={Align.LEFT}
          size={Size.LARGE}
          fontWeight={FontWeight.LIGHT}
          color={TextColorVariant.WHITE}>{testimony.opinion}</Text
        >
        <Flex
        direction={FlexDirection.ROW}
        align={AlignItems.CENTER}
        justify={JustifyContent.END}
        height={MaxSize.ADJUST}
      >
        <div class="Testimony__QuotesImageWrapper">
          <Image
            style={reversedQuotesImageStyle}
            behavior={ImageBehavior.CONTAIN}
            alt="quotes picture"
            file={testimonialsUtils.quotesImage}
          />
        </div>
      </Flex>
      </Flex>
    </Col>
  </Grid>
</div>

<style>
  .Testimony {
    width: 100%;
  }

  .Testimony__ImageWrapper {
    width: 100%;
    height: auto;
  }

  .Testimony__QuotesImageWrapper {
    width: 8rem;
    height: 8rem;
  }
</style>
