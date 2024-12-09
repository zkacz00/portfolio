<script lang="ts">
  /* IMPORTS */
  import { Align, TitleType, FontWeight } from "../../../types/styles";
  import { TextColorVariant } from "../../../types/variants";

  /* ATTRIBUTES */
  /* The type of title */
  export let type: TitleType = TitleType.H3;

  /* The color of the title */
  export let color: TextColorVariant = TextColorVariant.PRIMARY;

  /* The text align of the title */
  export let align: Align = Align.CENTER;

  /* The url for the title */
  export let url: string | undefined = undefined;

  /* To add underline for title link */
  export let underline: boolean = true;

  /* Font weight */
  export let fontWeight: FontWeight = FontWeight.MEDIUM;
</script>

<svelte:element
  this={type}
  class="Title Title--{color} Title--{align}"
  class:Title--underline={url && underline}
  style:font-weight={fontWeight}
>
  {#if url}
    <a class="Title__LinkWrapper" href={url} tabindex={0}>
      <slot />
    </a>
  {:else}
    <slot />
  {/if}
</svelte:element>

<style>
  .Title {
    margin: 0;
    letter-spacing: 0.1rem;
    text-decoration: none;
  }

  /* TITLE__LINK */

  .Title__LinkWrapper {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
    border: 1px solid transparent;
    box-sizing: border-box;
  }

  .Title__LinkWrapper:focus-visible {
    outline: none;
    border: var(--outline-style-focus);
    box-sizing: border-box;
  }

  .Title--underline:hover {
    text-decoration: underline;
    text-underline-position: auto;
  }

  /* TEXT ALIGN */

  .Title--left {
    text-align: left;
  }

  .Title--center {
    text-align: center;
  }

  .Title--right {
    text-align: right;
  }

  /* COLOR */
  .Title--primary {
    background-image: var(--color-secondary);
    color: transparent;
    background-clip: text;
  }

  .Title--white {
    color: var(--color-text-primary-white);
  }

  .Title--secondary-white {
    color: var(--color-text-secondary-white);
  }

  .Title--black {
    color: var(--color-text-primary-black);
  }

  .Title--secondary-black {
    color: var(--color-text-secondary-black);
  }

  .Title--linkedin {
    color: var(--color-text-linkedin);
  }

  /* TYPE */
  h1.Title {
    font-size: var(--font-size-h1);
  }

  h2.Title {
    font-size: var(--font-size-h2);
  }

  h3.Title {
    font-size: var(--font-size-h3);
  }

  h4.Title {
    font-size: var(--font-size-h4);
  }

  h5.Title {
    font-size: var(--font-size-h5);
  }
</style>
