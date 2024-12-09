<script lang="ts">
  import Project from '../molecules/Project.svelte';
  import projects from '../../content/projects';
</script>

<div class="Projects">
  {#each Object.keys(projects) as key, index}
    <Project
      reverse={(index % 2 !== 0)}
      image={projects[key].image}
      title={projects[key].title}
      subtitle={projects[key].subtitle}
      technologies={projects[key].technologies}
      description={projects[key].description}
      liveUrl={projects[key].liveUrl}
      githubUrl={projects[key].githubUrl}
    />
  {/each}
</div>

<style>
  .Projects {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--section-content-margin-vertical);
  }
</style>
