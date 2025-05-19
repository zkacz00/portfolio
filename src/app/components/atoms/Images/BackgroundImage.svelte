<script lang="ts">
  /* IMPORTS */
  // import { isWEBPAvailable } from '../../../utils/browsers';
  import { ImageBehavior, ImageFit, ImageFocus } from '../../../types/styles';
  import { ImageExtension } from '../../../types/extensions';

  /* ATTRIBUTES */
  /** The asset id of the image */
  export let assetId: string = '';

  /** The unique id of the image */
  export let uniqueId: string = '';

  /** The file name of the image including extension */
  export let file: string = '';

  /** The alt text of the image */
  export let alt: string = '';

  /** The title text of the image */
  export let title: string = '';

  /** The extension of the image */
  export let ext: ImageExtension = ImageExtension.WEBP;

  /** The object-fit behavior of the image */
  export let behavior: ImageBehavior = ImageBehavior.CONTAIN;

  /** The quality of the image between 0 and 100 */
  export let quality: number = 100;

  /** The width of the image */
  export let width: number = 0;

  /** The height of the image */
  export let height: number = 0;

  /** The fit of the image */
  export let fit: ImageFit = ImageFit.FILL;

  /** The focus of the image */
  export let focus: ImageFocus = ImageFocus.CENTER;

  /** The cropping radius of the image */
  export let radius: number = 0;

  /** The device pixel ratio of the image */
  export let dpi: number = 1;

  /* VARIABLES */
  let localWidth: number = width;
  let localHeight: number = height;
  let clientWidth: number = 0;
  let clientHeight: number = 0;

  /* METHODS */
  /* Auto sets the client size of the image */
  const clientSize = (w: number, h: number): void => {
    /* If either of these are set we don't need to auto set them for caching */
    if (!width && !height) {
      localWidth = w;
      localHeight = h;
    }
  };

  let src: string = '';

  /* Gets a new url whenever a prop updates */
  const getUrl = (
    assetId: string,
    uniqueId: string,
    file: string,
    ext: 'webp' | 'png' | 'jpg',
    quality: number,
    fit: 'pad' | 'fill' | 'scale' | 'crop' | 'thumb',
    focus:
      | 'center'
      | 'top'
      | 'right'
      | 'left'
      | 'bottom'
      | 'top_right'
      | 'top_left'
      | 'bottom_right'
      | 'bottom_left'
      | 'face'
      | 'faces',
    radius: number,
    width: number,
    localWidth: number,
    height: number,
    localHeight: number,
    dpi: number
  ): string => {
    let url = `https://images.ctfassets.net/dftkr9apurxl/${assetId}/${uniqueId}/${file}`;

    // if (!isWEBPAvailable() && ext === 'webp') {
    //   ext = 'png';
    // }

    width = width ? Math.round(parseInt(width.toString(), 10)) : Math.round(localWidth);
    height = height ? Math.round(parseInt(height.toString(), 10)) : Math.round(localHeight);

    url += `?fm=${ext}`;

    if (quality > -1 && quality < 101) url += `&q=${quality}`;
    if (fit) url += `&fit=${fit}`;
    if (focus) url += `&f=${focus}`;
    if (radius) url += `&r=${radius}`;
    if (width && height) url += `&w=${width * dpi}&h=${height * dpi}`;

    return url;
  };

  /* HOOKS */
  $: clientSize(clientWidth, clientHeight);
  $: src = getUrl(
    assetId,
    uniqueId,
    file,
    ext,
    quality,
    fit,
    focus,
    radius,
    width,
    localWidth,
    height,
    localHeight,
    dpi
  );
</script>

<div
  class="BackgroundImage__Container"
  bind:clientWidth
  bind:clientHeight
  style:height={height ? `${height}px` : '100%'}
  style:width={width ? `${width}px` : '100%'}
>
  <slot />
  <img
    class="BackgroundImage__Image"
    {src}
    {alt}
    {title}
    style:object-fit={behavior}
    decoding="async"
    loading="eager"
    width={width ? width : clientWidth}
    height={height ? height : clientHeight}
  />
</div>

<style>
  .BackgroundImage__Container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .BackgroundImage__Image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1000;
  }
</style>
