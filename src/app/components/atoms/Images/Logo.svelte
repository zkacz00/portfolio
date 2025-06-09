<script lang="ts">
  /* IMPORTS */
  import Image from "../Images/Image.svelte";
  import logos from "../../../content/logos";
  import { LogoName } from "../../../types/logoNames";
  import { Target } from "../../../types/targets";
  import { ImageBehavior, Size } from "../../../types/styles";
  import { LogoColorVariant } from "../../../types/variants";

  /* ATTRIBUTES */
  /** The logo to display */
  export let logo: LogoName = LogoName.GITHUB;

  /** The color of the logo */
  export let color: LogoColorVariant = LogoColorVariant.DEFAULT;

  /** The size of the logo */
  export let size: Size.MEDIUM | Size.LARGE | Size.SMALL | Size.XSMALL =
    Size.MEDIUM;

  /** The object-fit behavior of the logo */
  export let behavior: ImageBehavior = ImageBehavior.CONTAIN;

  /** If logo is a link or not */
  export let link: boolean = true;

  /** Where to open the link */
  export let target: Target = Target.SELF;

  /** The style of image on focus*/
  export let isFocus: boolean = true;

  /* VARIABLES */
  let linkUrl: string | undefined;

  /* METHODS */
  $: linkUrl = link && logos[logo] ? logos[logo]?.url : undefined;
</script>

<div class="Logo Logo--{logo} Logo--{size}" class:Logo--link={link}>
  <Image
    target={target ?? target}
    {isFocus}
    url={link && linkUrl ? linkUrl : undefined}
    file={logos[logo]?.[color]?.file}
    alt={logos[logo]?.alt ?? ""}
    {behavior}
    type="logo"
    transition={false}
  />
</div>

<style>
  .Logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
  }

  .Logo--link {
    cursor: pointer;
  }

  /* SIZE */
  .Logo--xsmall {
    width: auto;
    height: 3rem;
  }

  .Logo--small {
    width: auto;
    height: 4rem;
  }

  .Logo--medium {
    width: auto;
    height: 7rem;
  }

  .Logo--large {
    width: auto;
    height: 8rem;
  }
</style>
