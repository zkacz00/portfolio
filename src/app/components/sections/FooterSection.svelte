<script lang="ts">
  /* IMPORTS */
  import Section from "../atoms/Spacing/Section.svelte";
  import Background from "../atoms/Spacing/Background.svelte";
  import Footer from "../organisms/Footer.svelte";
</script>

<Background color="black">
  <Section anchor="footer" clearBottomPadding={true} color='transparent'>
    <Footer />
  </Section>
</Background>
