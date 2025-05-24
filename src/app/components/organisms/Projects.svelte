<script lang="ts">
  import Project from '../molecules/Project.svelte';
  import { projects } from "../../content/projects";
  import { language } from "../../stores/language"; 

  /* HOOKS */
  $: currentLanguage = $language;
</script>

<div class="Projects">
  {#each Object.keys(projects) as key, index}
  {#if projects[key]}
    <Project
      reverse={(index % 2 !== 0)}
      image={projects[key].image}
      title={projects[key].title[currentLanguage]}
      subtitle={projects[key].subtitle[currentLanguage]}
      technologies={projects[key].technologies}
      description={projects[key].description[currentLanguage]}
      liveUrl={projects[key].liveUrl}
      githubUrl={projects[key].githubUrl}
      designUrl={projects[key].designUrl}
    />
    {/if}
  {/each}
</div>

<style>
  .Projects {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  }
</style>
