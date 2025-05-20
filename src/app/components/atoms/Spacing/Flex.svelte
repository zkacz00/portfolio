<!--
  @description
    A flexbox component that can be used to wrap other components.
    It can be used to set the direction of the flexbox.
    It can also be used to set the justify and align of the flexbox.
-->

<script lang="ts">
  import { AlignItems, JustifyContent, FlexDirection, MaxSize, FlexWrap } from '../../../types/styles';

  /* ATTRIBUTES */
  /** The direction of the flexbox */
  export let direction: FlexDirection = FlexDirection.ROW;

  /** How to justify the content horizontally */
  export let justify: JustifyContent = JustifyContent.CENTER;

  /** How to align the items vertically */
  export let align: AlignItems = AlignItems.CENTER;

  /** The spacing between each item */
  export let gap: number | undefined = 4;

  /** The column gap in ram */
  export let columnGap: number | undefined = undefined;

  /** The row gap in ram */
  export let rowGap: number | undefined = undefined;

  /** The height of the Flex */
  export let height: MaxSize = MaxSize.DEFAULT;

  /** The width of the Flex */
  export let width: MaxSize = MaxSize.FILL;

  /** The flex-wrap of the Flex */
  export let wrap: FlexWrap = FlexWrap.NOWRAP;

  /** The order of the Flex */
  export let order: number | undefined = undefined;

  /** The position of the Flex */
  export let position: string | undefined = undefined;

  /* ATTRIBUTES */
  let widthStyle = width === MaxSize.FILL ? '100%' : MaxSize.ADJUST ? 'max-content' : 'auto';
  let heightStyle = height === MaxSize.FILL ? '100%' : 'auto';

</script>

<div
  class="Flex Flex--{height}"
  style:flex-direction={direction}
  style:justify-content={justify}
  style:align-items={align}
  style:flex-wrap={wrap}
  style:gap="{gap}rem"
  style:height={heightStyle}
  style:width={widthStyle}
  style:column-gap={`${columnGap}rem`}
  style:row-gap={`${rowGap}rem`}
  style:order={order}
  style:position={position}
>
  <slot />
</div>

<style>
  .Flex {
    display: flex;
  }
</style>
