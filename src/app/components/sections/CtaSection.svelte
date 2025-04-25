<script lang="ts">
  /* IMPORTS */
  import Section from "../atoms/Spacing/Section.svelte";
  import Background from "../atoms/Spacing/Background.svelte";

  import Highlight from "../organisms/Highlight.svelte";
  import Span from "../atoms/Text/Span.svelte";

  import { ctaText } from "../../content/cta";
  import { language } from "../../stores/language";

  /* HOOKS */
  $: ctaContent = ctaText[$language];
</script>

<Background color="black">
  <Section anchor="cta">
    <Highlight
      title={ctaContent.title}
      subtitle={ctaContent.subtitle}
    ><Span>👀</Span></Highlight>
  </Section>
</Background>
