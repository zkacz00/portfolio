<script lang="ts">
  /* IMPORTS */
  import Flex from "../atoms/Spacing/Flex.svelte";
  import Text from "../atoms/Text/Text.svelte";
  import Title from "../atoms/Text/Title.svelte";

  import {
    Align,
    FlexDirection,
    FontWeight,
    MaxSize,
    Size,
    TitleType,
  } from "../../types/styles";
  import { TextColorVariant } from "../../types/variants";
  import { isMobile, isTablet } from "../../stores/device";

  /* ATTRIBUTES */
  /** The title of the Hero */
  export let title: string = "";

  /** The subtitle of the Hero */
  export let subtitle: string = "";
</script>

<Flex direction={FlexDirection.COLUMN}>
  <Flex direction={FlexDirection.COLUMN} height={MaxSize.FILL} gap={$isMobile ? 2 : $isTablet ? 3 : 4}>
    <Title
      color={TextColorVariant.PRIMARY}
      type={TitleType.H3}
      align={Align.CENTER}
      fontWeight={FontWeight.REGULAR}>{title} <slot /></Title
    >
    <Text
      color={TextColorVariant.WHITE}
      size={Size.LARGE}
      align={Align.CENTER}
      fontWeight={FontWeight.REGULAR}>{subtitle}</Text
    >
  </Flex>
</Flex>
