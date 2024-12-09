<script lang="ts">
  /* IMPORTS */

  import Link from "../atoms/Text/Link.svelte";
  import Text from "../atoms/Text/Text.svelte";
  import Flex from "../atoms/Spacing/Flex.svelte";
  import {
    AlignItems,
    Size,
    FontWeight,
    FlexDirection,
    MaxSize,
  } from "../../types/styles";
  import { TextColorVariant } from "../../types/variants";
  import { isMobile } from './../../stores/device';

  // import { scrollTo, scrollToTop } from '../../utils/scroll';
  // import { offset } from '../../stores/router';
  // import { goto } from '../../utils/location';

  /* HANDLERS */
  // const handleGoto = (url: string) => {
  // if (window.location.pathname === url) return scrollToTop(0, 'auto');
  // else {
  //   scrollToTop(0, 'auto');
  //   return goto(url);
  // }
  // };

  // const handleCompanyClick = () => handleGoto('/company/');
  // const handleLogInClick = () => handleGoto('/login/');
  // const handlePricingClick = () => handleGoto('/pricing/');
  // const handleContactClick = () => handleGoto('/contact/');
  // const handleQAClick = () => handleGoto('/qa/');
  // const handleBlogClick = () => handleGoto('/blog/');
</script>

<div class="FooterLinks">
  <Flex
    direction={$isMobile ? FlexDirection.COLUMN : FlexDirection.ROW}
    width={MaxSize.DEFAULT}
    height={MaxSize.DEFAULT}
    align={AlignItems.START}
    gap={10}
  >
    <Flex
      direction={FlexDirection.COLUMN}
      width={MaxSize.DEFAULT}
      height={MaxSize.DEFAULT}
      align={AlignItems.START}
      gap={2}
    >
      <Text size={Size.SMALL} color={TextColorVariant.WHITE}>Core</Text>
      <Link size={Size.SMALL} color={TextColorVariant.WHITE_SECONDARY}>Home</Link>
      <Link size={Size.SMALL} color={TextColorVariant.WHITE_SECONDARY}>About</Link>
      <Link size={Size.SMALL} color={TextColorVariant.WHITE_SECONDARY}>Experience</Link>
      <Link size={Size.SMALL} color={TextColorVariant.WHITE_SECONDARY}>Skills</Link>
    </Flex>
    <Flex
      direction={FlexDirection.COLUMN}
      width={MaxSize.DEFAULT}
      height={MaxSize.DEFAULT}
      align={AlignItems.START}
      gap={2}
    >
      <Text size={Size.SMALL} color={TextColorVariant.WHITE}>Explore</Text>
      <Link size={Size.SMALL} color={TextColorVariant.WHITE_SECONDARY}>Portfolio</Link>
      <Link size={Size.SMALL} color={TextColorVariant.WHITE_SECONDARY}>CV</Link>
      <Link size={Size.SMALL} color={TextColorVariant.WHITE_SECONDARY}>Testimonials</Link>
      <Link size={Size.SMALL} color={TextColorVariant.WHITE_SECONDARY}>Contact</Link>
    </Flex>
  </Flex>
</div>
