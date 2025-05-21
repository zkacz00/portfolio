<script lang="ts">
  /* IMPORTS */
  import Image from '../atoms/Images/Image.svelte';
  import Grid from '../atoms/Grid/Grid.svelte';
  import Col from '../atoms/Grid/Col.svelte';
  import Title from '../atoms/Text/Title.svelte';
  import Text from '../atoms/Text/Text.svelte';
  import Flex from '../atoms/Spacing/Flex.svelte';
  import Button from '../atoms/Buttons/Button.svelte';

  import { ImageBehavior, Align, Size, AlignItems, TitleType, FlexDirection, JustifyContent, FlexWrap, FontWeight, MaxSize } from '../../types/styles';
  import { ButtonVariant, LogoColorVariant, TextColorVariant } from '../../types/variants';
  import { type ProjectImage } from '../../content/projects';

  import { isDesktop, isTablet, isMobile } from '../../stores/device';
  import Logo from '../atoms/Images/Logo.svelte';
  import type { LogoName } from '../../types/logoNames';
  import IconWrapper from '../atoms/Buttons/IconWrapper.svelte';

  import { projectsText } from "../../content/projects";
  import { language } from "../../stores/language"; 

  /* ATTRIBUTES */
  /** Whether the hero layout should be reversed or not (false - image on the right, true - image on the left) */
  export let reverse: boolean = false;

  /** The title */
  export let title: string = '';

  /** The title type */
  export let titleType: TitleType = TitleType.H3;

  /** The asset id of the hero */
  export let subtitle: string = '';

  /** The short description of the hero */
  export let technologies: Array<{key: LogoName, title: string}> = [];

  /** The description of the hero */
  export let description: Array<{ icon: string; title: string; content: string }> = [];

  /** The project image */
  export let image: ProjectImage;

  /** The url for the project image and title */
  export let url: string | undefined = undefined;

  /* To add underline for title link */
  export let titleUnderline: boolean = true;

  /* Is image a link */
  export let isImageLink: boolean = true;

  /* Live url */
  export let liveUrl: {name: string, active: boolean} | undefined;

  /* GitHub url */
  export let githubUrl: {name: string, active: boolean} | undefined;

  /* Design url */
  export let designUrl: {name: string, active: boolean} | undefined;
  
  /* HOOKS */
  $: projectsContent = projectsText[$language];

  $: imageStyle = `position: absolute; right: -20rem; bottom: 0; height: 100%`;
  $: imageStyleReversed = `position: absolute; left: -20rem; bottom: 0; height: 100%`;
  $: imageStyleMobile = `position: absolute; left: -6rem; bottom: 0; width: 130%`;
</script>

<div class="Project">
  <Grid align={AlignItems.CENTER}>
    <Col desktop={6} tablet={6} order={!$isDesktop ? 1 : reverse ? 1 : 3}>
      <div class="Project__ImageWrapper">
        <Image
          url={isImageLink && url ? url : undefined}
          transition={url ? true : false}
          behavior={ImageBehavior.CONTAIN}
          file={image.file}
          alt={image.alt}
          style={$isMobile ? imageStyleMobile : reverse ? imageStyleReversed : imageStyle}
        />
      </div>
    </Col>
    {#if $isDesktop}<Col desktop={1} order={2}></Col>{/if}
    <Col desktop={5} tablet={6} order={!$isDesktop ? 3 : reverse ? 3 : 1}>
      <div class="Project__Text">
        <Flex direction={FlexDirection.COLUMN} align={AlignItems.START} gap={2}>
          <Title type={titleType} align={Align.LEFT} url={url} underline={titleUnderline}>{title}</Title>
          <Text size={Size.XLARGE} color={TextColorVariant.BLACK} align={Align.LEFT} fontWeight={FontWeight.MEDIUM}>{subtitle}</Text>
        </Flex>
        <Flex direction={FlexDirection.COLUMN} align={AlignItems.START} gap={$isMobile ? 4 : 3}>
          {#each description as item}
          <Flex direction={FlexDirection.COLUMN} align={AlignItems.START} gap={1}>
            <Flex direction={FlexDirection.ROW} justify={JustifyContent.START} gap={1.5}>
              <IconWrapper icon={item.icon} isButton={false} />
              <Text align={Align.LEFT} size={Size.LARGE} fontWeight={FontWeight.MEDIUM}>{item.title}</Text>
            </Flex>
            <Text align={Align.LEFT} size={Size.SMALL}>{item.content}</Text>
          </Flex>
          {/each}
        </Flex>
        <Flex direction={FlexDirection.ROW} justify={JustifyContent.START} wrap={FlexWrap.WRAP} gap={2}>
          {#each technologies as technology}
          <div class="Project__IconBox">
              <Logo color={LogoColorVariant.DEFAULT} logo={technology.key} size={Size.XSMALL} link={true} />
              <Text fontWeight={FontWeight.MEDIUM} fontSize={1} align={Align.CENTER} color={TextColorVariant.WHITE_SECONDARY}>{technology.title.toUpperCase()}</Text>
          </div>
          {/each}
        </Flex>
        <Flex direction={!$isDesktop  ? FlexDirection.COLUMN : FlexDirection.ROW} justify={JustifyContent.START} gap={!$isDesktop ? 2 : 3}>
          {#if liveUrl}<Button width={!$isDesktop ? MaxSize.FILL : MaxSize.DEFAULT} variant={ButtonVariant.PRIMARY} url={liveUrl.name} disabled={!liveUrl.active && true}>{projectsContent.liveButton}</Button>{/if}
          {#if githubUrl}<Button width={!$isDesktop ? MaxSize.FILL : MaxSize.DEFAULT} variant={ButtonVariant.SECONDARY} url={githubUrl.name} disabled={!githubUrl.active && true}>{projectsContent.githubButton}</Button>{/if}
          {#if designUrl}<Button width={!$isDesktop ? MaxSize.FILL : MaxSize.DEFAULT} variant={ButtonVariant.SECONDARY} url={designUrl.name} disabled={!designUrl.active && true}>{projectsContent.designButton}</Button>{/if}
        </Flex>
      </div>
    </Col>
  </Grid>
</div>

<style>
  .Project {
    min-height: 60rem;
    width: 100%;
  }

  .Project__Text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    gap: 3rem;
  }

  .Project__ImageWrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .Project__IconBox {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  :global(.Tablet) .Project__ImageWrapper, :global(.Mobile) .Project__ImageWrapper {
    display: flex;
    justify-content: center;
    height: min-content;
    min-height: 40rem;
    margin: 2rem 0 0;
  }
  :global(.Mobile) .Project__Text {
    gap: 4rem;
  }
</style>
