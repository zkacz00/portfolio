<script lang="ts">
    let animate = false;
  
    export let visible = true;

    $: if (visible) {
        animate = false;
        setTimeout(() => {
            animate = true;
        }, 50);
    }
</script>
  
  <div class="LogoGrid {animate ? 'LogoGrid--animate' : ''}">
    <div class="Square Square--orange" style="--x: 0; --y: 0;" />
    <div class="Square Square--orange" style="--x: 1; --y: 0;" />
    <div class="Square Square--red" style="--x: 2; --y: 0;" />
    <div class="Square Square--white" style="--x: 0; --y: 1;" />
    <div class="Square Square--orange" style="--x: 1; --y: 1;" />
    <div class="Square Square--orange" style="--x: 2; --y: 1;" />
  </div>
  
  <style>
    .LogoGrid {
      width: 29.625rem;
      height: 13.375rem;
      display: grid;
      grid-template-columns: repeat(3, 5rem);
      grid-template-rows: repeat(2, 5rem);
      column-gap: 4.4rem;
      row-gap: 2.5rem;
      position: relative;
    }
  
    .Square {
      width: 5.5rem;
      height: 5.125rem;
      border-radius: 1.5rem;
      opacity: 0;
    }
  
    .Square--orange {
      background-color: #f75f1e;
      animation: fadeInOrange 1s cubic-bezier(0.25, 1.25, 0.5, 1) forwards;
    }
  
    .Square--white {
      background-color: #ffffff;
      animation: fadeInWhite 1s cubic-bezier(0.25, 1.25, 0.5, 1) forwards;
      transform: rotate(var(--r, 28deg)) scale(0.4) translateX(2.5rem);
    }
  
    .Square--red {
      background-color: #f91d12;
      margin-left: 5.75rem;
      animation: fadeInRed 1s cubic-bezier(0.25, 1.25, 0.5, 1) forwards;
    }
  
    .Square:nth-child(1) {
      animation-delay: 0.2s;
    }
    .Square:nth-child(2) {
      animation-delay: 0.4s;
    }
    .Square:nth-child(5) {
      animation-delay: 0.6s;
      margin-top: 1rem;
      margin-left: 2.5rem;
    }
    .Square:nth-child(6) {
      animation-delay: 0.8s;
      margin-top: 1rem;
      margin-left: 2.5rem;
    }
    .Square--red {
      animation-delay: 1s;
      transform: rotate(var(--r, 28deg)) scale(0.4) translateX(2.5rem);
    }
    .Square--white {
      animation-delay: 1s;
      margin-left: 2rem;
      transform: rotate(var(--r, 28deg)) scale(0.4) translateY(2.5rem);
    }
  
    @keyframes fadeInOrange {
      to {
        transform: rotate(var(--r, 0deg)) scale(1.1) translateY(0);
        opacity: 1;
      }
    }
  
    @keyframes fadeInWhite {
      to {
        transform: rotate(var(--r, 28deg)) scale(1.1) translateY(1rem);
        opacity: 1;
      }
    }
  
    @keyframes fadeInRed {
      to {
        transform: rotate(var(--r, 0deg)) scale(1) translateY(0) translateX(0);
        opacity: 1;
      }
    }
  
    .LogoGrid--animate .Square {
      animation-play-state: running;
    }
  </style>
  