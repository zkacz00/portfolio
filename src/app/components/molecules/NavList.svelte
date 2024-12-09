<script lang="ts">
  /* IMPORTS */
  import Link from "../atoms/Text/Link.svelte";
  import { Size } from "../../types/styles";
  import { TextColorVariant } from "../../types/variants";
  import { isMobile } from "../../stores/device";
</script>

<Link size={$isMobile? Size.LARGE : Size.SMALL} color={$isMobile? TextColorVariant.WHITE : TextColorVariant.WHITE_SECONDARY}>About</Link>
<Link size={$isMobile? Size.LARGE : Size.SMALL} color={$isMobile? TextColorVariant.WHITE : TextColorVariant.WHITE_SECONDARY}>Experience</Link>
<Link size={$isMobile? Size.LARGE : Size.SMALL} color={$isMobile? TextColorVariant.WHITE : TextColorVariant.WHITE_SECONDARY}>Skills</Link>
<Link size={$isMobile? Size.LARGE : Size.SMALL} color={$isMobile? TextColorVariant.WHITE : TextColorVariant.WHITE_SECONDARY}>Portfolio</Link>
<Link size={$isMobile? Size.LARGE : Size.SMALL} color={$isMobile? TextColorVariant.WHITE : TextColorVariant.WHITE_SECONDARY}>Contact</Link>
