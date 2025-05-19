<script lang="ts">
/* VARIABLES */
  /** The value of the progress */
  export let value: number = 0;
</script>

<div class="ProgressBar">
  <div class="ProgressBar__BarWrapper">
  <div class="ProgressBar__Bar" style="width: {value}%"></div>
</div>
</div>

<style>
  .ProgressBar {
    width: 100%;
    height: 1.5rem;
    border-radius: 1rem;
    overflow: hidden;
    border: 2px solid transparent;
    background-image: var(--color-secondary);    
  }

  .ProgressBar__BarWrapper {
    width: 100%;
    height: 100%;
    background-color: var(--color-primary-white);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.25rem;
  }

  .ProgressBar__Bar {
    height: 0.75rem;
    background-image: var(--color-secondary);
    transition: width 0.3s ease;
    border-radius: 1rem;
  }
</style>
