<script lang="ts">
  import { ButtonVariant } from "../../../types/variants";
  import IconWrapper from "./IconWrapper.svelte";
  import { lightMode, isDarkMode } from '../../../stores/lightMode';

  /* METHODS */
  const toggleMode = () => {
    lightMode.set($isDarkMode ? 'Light' : 'Dark');
  };
</script>

<IconWrapper
  variant={ButtonVariant.SECONDARY}
  icon={$isDarkMode ? "brightness-max" : "brightness-medium"}
  onClick={toggleMode}
/>
