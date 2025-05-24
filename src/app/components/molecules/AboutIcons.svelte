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
  import { TextColorVariant } from "../../types/variants";
  import { isDarkMode } from "../../stores/lightMode";

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
    direction={FlexDirection.ROW}
    justify={$isMobile ? JustifyContent.START : JustifyContent.CENTER}
    align={AlignItems.CENTER}
    height={MaxSize.FILL}
    gap={$isTablet ? 3 : 4}
  >
    <Flex
      direction={FlexDirection.ROW}
      justify={JustifyContent.START}
      width={MaxSize.ADJUST}
      gap={$isTablet ? 1 : 1.5}
    >
      <IconWrapper icon="user-id" isButton={false} />
      <Text align={Align.LEFT} size={$isDesktop ? Size.MEDIUM : Size.SMALL} wrap={false} color={$isDarkMode ? TextColorVariant.WHITE : TextColorVariant.BLACK}>
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
      <Text align={Align.LEFT} size={$isDesktop ? Size.MEDIUM : Size.SMALL} style="line-height: 1.2;" color={$isDarkMode ? TextColorVariant.WHITE : TextColorVariant.BLACK}>
        {aboutContent.city},
        {#if !$isMobile}<br />{/if}
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
