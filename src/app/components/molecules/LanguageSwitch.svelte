<script lang="ts">
  import { MaxSize } from "../../types/styles";
  import RadioSwitch from "../atoms/Switches/RadioSwitch.svelte";
  import { language } from "../../stores/language";
  import { isMobile } from "../../stores/device";

  /* ATTRIBUTES */
  /** The width of the switch */
  export let width: MaxSize = MaxSize.DEFAULT;

  /* VARIABLES */
  let options: string[];
  let mobileOptions: string[];

  /* METHODS */
  const handleLanguageChange = (selected: string) => {
    language.set(selected as 'Polish' | 'English');
  };

  /* HOOKS */
  $: {
    options = $language === 'Polish' ? ['Polski', 'Angielski'] : ['Polish', 'English'];
    mobileOptions = ['PL', 'ENG'];
  }
</script>

<div class={`LanguageSwitch LanguageSwitch--${width}`}>
  <RadioSwitch 
    options={mobileOptions}
    selected={$language === 'Polish' ? 'PL' : 'ENG'}
    width={width}
    on:change={(e) => {
      const selected = e.detail;
      handleLanguageChange(
        (selected === 'PL') ? 'Polish' : (selected === 'ENG' ) ? 'English' : selected
      );
    }} 
  />
</div>

<style>
  .LanguageSwitch--fill {
    width: 100%;
  }
</style>