<script lang="ts">
  /* IMPORTS */
  import Flex from "../atoms/Spacing/Flex.svelte";
  import IconWrapper from "../atoms/Buttons/IconWrapper.svelte";

  import {
    Align,
    AlignItems,
    FlexDirection,
    JustifyContent,
    MaxSize,
    Size,
  } from "../../types/styles";

  import Text from "../atoms/Text/Text.svelte";
  import { isDesktop, isTablet, isMobile } from "../../stores/device";
  import { aboutText } from "../../content/about";
  import { language } from "../../stores/language";

  let age: number =
    new Date().getFullYear() -
    2000 -
    (new Date() < new Date(new Date().getFullYear(), 11, 26) ? 1 : 0);

  const getPolishAgeSuffix = (age: number): string => {
    const lastDigit = age % 10;
    const lastTwoDigits = age % 100;

    if (age === 1) return "rok";
    if (lastTwoDigits >= 12 && lastTwoDigits <= 14) return "lat";
    if (lastDigit >= 2 && lastDigit <= 4) return "lata";
    return "lat";
  };
  /* HOOKS */
  $: aboutContent = aboutText[$language];
  $: ageSuffix = getPolishAgeSuffix(age);
</script>

<div class="About__Icons">
  <Flex
    direction={$isTablet ? FlexDirection.COLUMN : FlexDirection.ROW}
    justify={$isMobile ? JustifyContent.START : JustifyContent.CENTER}
    align={$isTablet ? AlignItems.START : AlignItems.CENTER}
    height={MaxSize.FILL}
    gap={4}
  >
    <Flex
      direction={FlexDirection.ROW}
      justify={JustifyContent.START}
      width={MaxSize.ADJUST}
      gap={1.5}
    >
      <IconWrapper icon="user-id" isButton={false} />
      <Text align={Align.LEFT} size={Size.MEDIUM} wrap={false}>
        {`${age} ${$language === 'Polish' ? ageSuffix : aboutContent.age}`}
      </Text>
    </Flex>
    <Flex
      direction={FlexDirection.ROW}
      justify={JustifyContent.START}
      width={MaxSize.ADJUST}
      gap={1.5}
    >
      <IconWrapper icon="location" isButton={false} />
      <Text align={Align.LEFT} size={Size.MEDIUM}>
        {aboutContent.city},
        {#if $isDesktop}<br />{/if}
        {aboutContent.country}
      </Text>
    </Flex>
  </Flex>
</div>

<style>
  .About__Icons {
    width: 100%;
    height: 100%;
  }
</style>
