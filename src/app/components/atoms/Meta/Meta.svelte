<script lang="ts">
  /* IMPORTS */
  import { TwitterCardType, type OpenGraph, type Twitter } from '../../../types/meta';

  /* ATTRIBUTES */
  export let title: string = '';
  export let description: string = '';
  export let robots: string = 'index, follow';
  export let canonical: string = '';

  export let og: OpenGraph | undefined = undefined;
  export let twitter: Twitter | undefined = undefined;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="robots" content={robots} />
  <link rel="canonical" href={canonical} />

  <meta property="og:title" content={og?.title || title} />
  <meta property="og:description" content={og?.description || description} />
  <meta property="og:url" content={og?.url || canonical} />
  {#if og?.type}
    <meta property="og:type" content={og.type?.toLowerCase()} />
    {#if og.type === 'article'}
      {#if og.article?.publishedTime}
        <meta property="article:published_time" content={og.article.publishedTime} />
      {/if}

      {#if og.article?.modifiedTime}
        <meta property="article:modified_time" content={og.article.modifiedTime} />
      {/if}

      {#if og.article?.expirationTime}
        <meta property="article:expiration_time" content={og.article.expirationTime} />
      {/if}

      {#if og.article?.authors && og.article.authors.length}
        {#each og.article.authors as author}
          <meta property="article:author" content={author} />
        {/each}
      {/if}

      {#if og.article?.section}
        <meta property="article:section" content={og.article.section} />
      {/if}

      {#if og.article?.tags && og.article.tags.length}
        {#each og.article.tags as tag}
          <meta property="article:tag" content={tag} />
        {/each}
      {/if}
    {:else if og.type?.toLowerCase() === 'video.movie' || og.type.toLowerCase() === 'video.episode' || og.type.toLowerCase() === 'video.tv_show' || (og.type.toLowerCase() === 'video.other' && og.video)}
      {#if og.video?.actors && og.video.actors.length}
        {#each og.video.actors as actor}
          {#if actor.profile}
            <meta property="video:actor" content={actor.profile} />
          {/if}
          {#if actor.role}
            <meta property="video:actor:role" content={actor.role} />
          {/if}
        {/each}
      {/if}

      {#if og.video?.directors && og.video.directors.length}
        {#each og.video.directors as director}
          <meta property="video:director" content={director} />
        {/each}
      {/if}

      {#if og.video?.writers && og.video.writers.length}
        {#each og.video.writers as writer}
          <meta property="video:writer" content={writer} />
        {/each}
      {/if}

      {#if og.video?.duration}
        <meta property="video:duration" content={og.video.duration.toString()} />
      {/if}

      {#if og.video?.releaseDate}
        <meta property="video:release_date" content={og.video.releaseDate} />
      {/if}

      {#if og.video?.tags && og.video.tags.length}
        {#each og.video.tags as tag}
          <meta property="video:tag" content={tag} />
        {/each}
      {/if}

      {#if og.video?.series}
        <meta property="video:series" content={og.video.series} />
      {/if}
    {/if}
  {/if}

  {#if og?.images && og.images.length}
    {#each og.images as image}
      <meta property="og:image" content={image.url} />
      {#if image.alt}
        <meta property="og:image:alt" content={image.alt} />
      {/if}
      {#if image.width}
        <meta property="og:image:width" content={image.width.toString()} />
      {/if}
      {#if image.height}
        <meta property="og:image:height" content={image.height.toString()} />
      {/if}
      {#if image.secureUrl}
        <meta property="og:image:secure_url" content={image.secureUrl.toString()} />
      {/if}
      {#if image.type}
        <meta property="og:image:type" content={image.type.toString()} />
      {/if}
    {/each}
  {/if}

  {#if og?.videos && og.videos.length}
    {#each og.videos as video}
      <meta property="og:video" content={video.url} />
      {#if video.width}
        <meta property="og:video:width" content={video.width.toString()} />
      {/if}
      {#if video.height}
        <meta property="og:video:height" content={video.height.toString()} />
      {/if}
      {#if video.secureUrl}
        <meta property="og:video:secure_url" content={video.secureUrl.toString()} />
      {/if}
      {#if video.type}
        <meta property="og:video:type" content={video.type.toString()} />
      {/if}
    {/each}
  {/if}

  {#if og?.audio && og.audio.length}
    {#each og.audio as audio}
      <meta property="og:audio" content={audio.url} />
      {#if audio.secureUrl}
        <meta property="og:audio:secure_url" content={audio.secureUrl.toString()} />
      {/if}
      {#if audio.type}
        <meta property="og:audio:type" content={audio.type.toString()} />
      {/if}
    {/each}
  {/if}

  {#if og?.locale}
    <meta property="og:locale" content={og.locale} />
  {/if}

  {#if og?.siteName}
    <meta property="og:site_name" content={og.siteName} />
  {/if}

  <meta name="twitter:title" content={twitter?.title || og?.title || title} />
  <meta name="twitter:description" content={twitter?.description || og?.description || description} />
  <meta name="twitter:card" content={twitter?.cardType || TwitterCardType.SUMMARY_LARGE_IMAGE} />
  <meta name="twitter:site" content={twitter?.site || '@robikiai'} />
  <meta name="twitter:creator" content={twitter?.handle || '@robikiai'} />
  {#if twitter?.image && twitter.imageAlt}
    <meta name="twitter:image" content={twitter.image} />
    <meta name="twitter:image:alt" content={twitter.imageAlt} />
  {/if}
</svelte:head>
