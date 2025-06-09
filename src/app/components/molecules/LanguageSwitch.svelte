<script lang="ts">
  import { MaxSize } from "../../types/styles";
  import RadioSwitch from "../atoms/Switches/RadioSwitch.svelte";
  import { language } from "../../stores/language";

  /* ATTRIBUTES */
  /** The width of the switch */
  export let width: MaxSize = MaxSize.DEFAULT;

  /* VARIABLES */
  let options: string[];
  let mobileOptions: string[];

  /* METHODS */
  const handleLanguageChange = (selected: string) => {
    language.set(selected as "Polish" | "English");
  };

  /* HOOKS */
  $: {
    options =
      $language === "Polish" ? ["Polski", "Angielski"] : ["Polish", "English"];
    mobileOptions = ["PL", "EN"];
  }
</script>

<div class={`LanguageSwitch LanguageSwitch--${width}`}>
  <RadioSwitch
    options={mobileOptions}
    selected={$language === "Polish" ? "PL" : "EN"}
    {width}
    on:change={(e) => {
      const selected = e.detail;
      handleLanguageChange(
        selected === "PL" ? "Polish" : selected === "EN" ? "English" : selected
      );
    }}
  />
</div>

<style>
  .LanguageSwitch {
    cursor: pointer;
  }

  .LanguageSwitch--fill {
    width: 100%;
  }
</style>
