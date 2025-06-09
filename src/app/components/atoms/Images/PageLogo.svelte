<script lang="ts">
  /* IMPORTS */
  import Logo from '../Images/Logo.svelte';
  import Flex from '../Spacing/Flex.svelte';

  import { Size, AlignItems, FlexDirection } from '../../../types/styles';
  import { LogoColorVariant } from '../../../types/variants';

  /* ATTRIBUTES */
  export let page: string = 'Blog';
</script>

<div class="PageLogo">
  <Flex direction={FlexDirection.ROW} align={AlignItems.BASELINE}>
    <Logo 
    size={Size.SMALL} 
    color={LogoColorVariant.WHITE} 
  />
    <span class="PageLogo__Text"> | {page}</span>
  </Flex>
</div>

<style>
  .PageLogo {
    color: var(--color-primary-white);
    position: relative;
  }

  .PageLogo__Text {
    padding-left: 1rem;
    position: absolute;
    left: 100%;
    width: max-content;
    font-size: 3.5rem;
  }
</style>
