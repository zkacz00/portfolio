<script lang="ts">
  import { MaxSize } from "../../types/styles";
  import RadioSwitch from "../atoms/Switches/RadioSwitch.svelte";

  /* ATTRIBUTES */
  /**  The width of the switch */
  export let width: MaxSize = MaxSize.DEFAULT;
</script>

<div class={`LanguageSwitch LanguageSwitch--${width}`}>
  <RadioSwitch options={["Polish", "English"]} selected="English" {width} />
</div>

<style>
  .LanguageSwitch--fill {
    width: 100%;
  }
</style>
