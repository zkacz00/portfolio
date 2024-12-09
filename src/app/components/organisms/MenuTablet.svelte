<!-- <script lang="ts">
  /* IMPORTS */
  import Button from '../atoms/Buttons/Button.svelte';
  import LinkOption from '../atoms/Options/LinkOption.svelte';
  import DropdownMenu from '../molecules/DropdownMenu.svelte';

  import { Align, MaxSize } from '../../types/styles';
  import { ButtonVariant } from '../../types/variants';

  import { FEATURES, FeatureFlags } from '../../utils/features';
  import { scrollTo, scrollToTop } from '../../utils/scroll';
  import { goto } from '../../utils/location';
  import { offset } from '../../stores/router';

  /* ATTRIBUTES */
  /** Function to open and close menu */
  export let toggleMenu: () => void;

  /** If MenuTablet is open or closed */
  export let isMenuOpen: boolean = false;

  /* VARIABLES */
  const isLogin: boolean = FEATURES[FeatureFlags.LOGIN];
  const isPricing: boolean = FEATURES[FeatureFlags.PRICING];
  const isFeatures: boolean = FEATURES[FeatureFlags.FEATURES];
  const isBlog: boolean = FEATURES[FeatureFlags.BLOG];

  /* METHODS */
  const handleFeaturesClick = () => {
    toggleMenu();
    if (isFeatures) return () => goto('/features');
    if (window.location.pathname === '/') return scrollTo('VisionSection', -$offset, 'auto');
    window.location.href = '/#VisionSection';
  };

  const handleGoto = (url: string) => {
    if (window.location.pathname === url) isMenuOpen = false;
    else {
      scrollToTop(0, 'auto');
      return goto(url);
    }
  };

  const handleCompanyClick = () => handleGoto('/company/');
  const handleContactClick = () => handleGoto('/contact/');
  const handlePricingClick = () => handleGoto('/pricing/');
  const handleBlogClick = () => handleGoto('/blog/');
  const handleLoginClick = () => handleGoto('/login/');
</script>

<DropdownMenu bind:isMenuOpen top="10rem" right="4rem" background="dark">
  <LinkOption
    id="option-0"
    width={MaxSize.FILL}
    align={Align.LEFT}
    variant={ButtonVariant.CONTEXTUAL}
    url={isFeatures ? '/features/' : '/#VisionSection'}
    onClick={handleFeaturesClick}>Features</LinkOption
  >
  <LinkOption
    width={MaxSize.FILL}
    align={Align.LEFT}
    variant={ButtonVariant.CONTEXTUAL}
    url="/company/"
    onClick={handleCompanyClick}>Company</LinkOption
  >
  <LinkOption
    width={MaxSize.FILL}
    align={Align.LEFT}
    variant={ButtonVariant.CONTEXTUAL}
    url="/contact/"
    onClick={handleContactClick}>Contact Us</LinkOption
  >
  {#if isPricing}
    <LinkOption
      width={MaxSize.FILL}
      align={Align.LEFT}
      variant={ButtonVariant.CONTEXTUAL}
      url="/pricing/"
      onClick={handlePricingClick}>Pricing</LinkOption
    >
  {/if}
  {#if isBlog}
    <LinkOption
      width={MaxSize.FILL}
      align={Align.LEFT}
      variant={ButtonVariant.CONTEXTUAL}
      url="/blog/"
      onClick={handleBlogClick}>Blog</LinkOption
    >
  {/if}
  {#if isLogin}
    <LinkOption
      width={MaxSize.FILL}
      align={Align.LEFT}
      variant={ButtonVariant.CONTEXTUAL}
      url="/login/"
      onClick={handleLoginClick}>Sign Up</LinkOption
    >
    <LinkOption
      width={MaxSize.FILL}
      align={Align.LEFT}
      variant={ButtonVariant.CONTEXTUAL}
      url="/login/"
      onClick={handleLoginClick}>Log In</LinkOption
    >
  {:else}
    <Button width={MaxSize.FILL} variant={ButtonVariant.SECONDARY} disabled={true}>Coming Soon</Button>
  {/if}
</DropdownMenu> -->
