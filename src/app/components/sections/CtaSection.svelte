<script lang="ts">
  /* IMPORTS */
  import Section from "../atoms/Spacing/Section.svelte";
  import Background from "../atoms/Spacing/Background.svelte";

  import Highlight from "../organisms/Highlight.svelte";
  import Span from "../atoms/Text/Span.svelte";
  import { isMobile } from "../../stores/device";
</script>

<Background color="black">
  <Section anchor="CTASection">
    <Highlight
      title="I Am Currently Looking For a Job!"
      subtitle="Feel free to contact me 😃"
    ><Span>👀</Span></Highlight>
  </Section>
</Background>
