<script lang="ts">
  /* IMPORTS */
  // import { isWEBPAvailable } from '../../../utils/browsers';
  import { ImageBehavior } from '../../../types/styles';
  import { Target } from '../../../types/targets';

  /* ATTRIBUTES */
  /** With border radius or not */
  export let borderRadius: boolean = false;

  /** The alt text of the image */
  export let alt: string = '';

  /** The title text of the image */
  export let title: string = '';

  /** The object-fit behavior of the image */
  export let behavior: ImageBehavior = ImageBehavior.CONTAIN;

  /** The url link for the image */
  export let url: string | undefined = undefined;

  /** Where to open the link */
  export let target: Target = Target.SELF;

  /** To use transition or not */
  export let transition: boolean = false;

  /** The type of image */
  export let type: 'default' | 'logo' = 'default';

  /** The src of image file */
  export let file: string = '';

  /** The style of image */
  export let style: string = '';
</script>

<div
  class="Image"
  style={style}
>
  {#if !!url}
    <a
      class="Image__Link"
      class:Image__Link--logo={type === 'logo'}
      {target}
      href={url}
      tabindex={0}
      style:border-radius={borderRadius ? '1rem' : 'none'}
    >
      <img
        class="Image__Content"
        class:Image__Content--link={url}
        class:Image__Content--transition={transition}
        src={file}
        {alt}
        {title}
        style:object-fit={behavior}
        style:border-radius={borderRadius ? '1rem' : 'none'}
        decoding="async"
        loading="lazy"
      />
    </a>
  {:else}
    <img
      class="Image__Content"
      src={file}
      {alt}
      {title}
      style:object-fit={behavior}
      decoding="async"
      loading="lazy"
      style:border-radius={borderRadius ? '1rem' : 'none'}
    />
  {/if}
</div>

<style>
  .Image {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: auto;
  }

  .Image__Link {
    width: 100%;
    height: 100%;
    outline: none;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;
  }

  .Image__Link--logo {
    overflow: visible;
    box-sizing: content-box;
  }

  .Image__Content {
    width: 100%;
    height: 100%;
  }

  .Image__Content--transition {
    transition: transform 400ms cubic-bezier(0.4, 0, 0.25, 1) 0ms;
  }

  .Image__Content--transition:hover {
    transform: scale(1.015);
  }

  .Image__Link:focus-visible .Image__Content--link {
    border: var(--outline-style-focus);
    outline: none;
  }

  .Image__Link:focus-visible .Image__Content--transition:hover {
    transform: none;
  }

  .Image__Link--logo:focus-visible .Image__Content--link {
    border: none;

    outline: var(--outline-style-focus);
  }
</style>