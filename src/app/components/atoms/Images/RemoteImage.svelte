<script lang="ts">
    /* IMPORTS */
    // import { isWEBPAvailable } from '../../../utils/browsers';
    import { ImageBehavior, ImageFit, ImageFocus } from '../../../types/styles';
    import { ImageExtension } from '../../../types/extensions';
    import { Target } from '../../../types/targets';
  
    /* ATTRIBUTES */
    /** With border radius or not */
    export let borderRadius: boolean = true;
  
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
  
    /** The file name of the image including extension */
    export let file: string = '';
  
  </script>
  <div
    class="RemoteImage"
  >
    {#if !!url}
      <a
        class="RemoteImage__Link"
        class:RemoteImage__Link--logo={type === 'logo'}
        {target}
        href={url}
        tabindex={0}
        style:border-radius={borderRadius ? '1rem' : 'none'}
      >
        <img
          class="RemoteImage__Content"
          class:RemoteImage__Content--link={url}
          class:RemoteImage__Content--transition={transition}
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
        class="RemoteImage__Content"
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
    .RemoteImage {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .RemoteImage__Link {
      width: 100%;
      height: 100%;
      outline: none;
      box-sizing: border-box;
      overflow: hidden;
    }
  
    .RemoteImage__Link--logo {
      overflow: visible;
      box-sizing: content-box;
    }
  
    .RemoteImage__Content {
      width: 100%;
      height: 100%;
    }
  
    .RemoteImage__Content--transition {
      transition: transform 400ms cubic-bezier(0.4, 0, 0.25, 1) 0ms;
    }
  
    .RemoteImage__Content--transition:hover {
      transform: scale(1.015);
    }
  
    .RemoteImage__Link:focus-visible .RemoteImage__Content--link {
      border: var(--outline-style-focus);
      outline: none;
    }
  
    .RemoteImage__Link:focus-visible .RemoteImage__Content--transition:hover {
      transform: none;
    }
  
    .RemoteImage__Link--logo:focus-visible .RemoteImage__Content--link {
      border: none;
  
      outline: var(--outline-style-focus);
    }
  </style>
  