<script lang="ts">
  /* IMPORTS */
  import Section from "../atoms/Spacing/Section.svelte";
  import Footer from "../organisms/Footer.svelte";
  import { onMount } from 'svelte';

  let isVisible = false;

  onMount(() => {
    isVisible = true;
  });
</script>

<Section anchor="footer" clearBottomPadding={true} color="black">
  <div class="FooterSection" class:FooterSection--visible={isVisible}>
    <Footer />
  </div>
</Section>

<style>
  .FooterSection {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .FooterSection--visible {
    opacity: 1;
    transform: translateY(0);
  }
</style>
