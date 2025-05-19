<script lang="ts">
  /* IMPORTS */
  import Flex from '../atoms/Spacing/Flex.svelte';
  import { AlignItems, FlexDirection } from '../../types/styles';
  import Subtitle from '../atoms/Text/Subtitle.svelte';
  import Title from '../atoms/Text/Title.svelte';
  import Text from '../atoms/Text/Text.svelte';
  import { TextColorVariant } from '../../types/variants';
  import { Align, Size, TitleType } from '../../types/styles';
  import { isMobile } from '../../stores/device';

  /* ATTRIBUTES */
  /** The gap of the Hero */
  export let gap: number | string = 'var(--section-content-margin-vertical)';

  /** The align-items property of the Hero */
  export let align: AlignItems = AlignItems.CENTER;

  /** The title of the Hero */
  export let title: string = '';

  /** The pretitle of the Hero */
  export let pretitle: string = '';

  /** The title type of the Hero */
  export let titleType: TitleType = TitleType.H2;

  /** The subtitle of the Hero */
  export let subtitle: string = '';

  /** The color variant of the Hero */
  export let color: TextColorVariant.PRIMARY | TextColorVariant.WHITE = TextColorVariant.PRIMARY;

  /** The color variant of subtitle */
  export let subtitleColor: TextColorVariant.BLACK | TextColorVariant.WHITE = TextColorVariant.BLACK;

  /* VARIABLES */
  let textAlign: Align;

  const setTextAlign = (align: AlignItems) => {
    if (align === AlignItems.END) textAlign = Align.RIGHT;
    else if (align === AlignItems.START) textAlign = Align.LEFT;
    else textAlign = Align.CENTER;
  };

  /* HOOKS */
  $: setTextAlign(align);
</script>

<div class="Hero" style:gap={typeof gap === 'number' ? `${gap}rem` : gap} style:align-items={align}>
  <Flex direction={FlexDirection.COLUMN} gap={3} {align}>
    {#if pretitle}
    <Text color={color === TextColorVariant.PRIMARY ? TextColorVariant.BLACK : color} size={Size.XLARGE} align={textAlign}>{pretitle}</Text>
  {/if}
    <Title type={titleType} align={textAlign} color={color}>{title}</Title>
    {#if subtitle}
      <Subtitle maxWidth="auto" size={$isMobile ? Size.MEDIUM : Size.LARGE} align={textAlign} color={subtitleColor}>
        {subtitle}
      </Subtitle>
    {/if}
  </Flex>
  <slot />
</div>

<style>
  .Hero {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
  }
</style>