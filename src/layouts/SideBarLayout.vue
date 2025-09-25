<script setup lang="ts">
  import FooterView from '../components/FooterView.vue';
  import SideBarView from '../components/SideBarView.vue';
</script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>
  <div class="two-column-layout">
    <header>
      <SideBarView />
    </header>

    <main>
      <slot />
      <button class="goUpBtn"></button>
      <FooterView />
    </main>
  </div>


</template>

<!-- //////////////////////////////////////////////////////////////////////// -->

<style scoped lang="css">
    .two-column-layout {
        display: flex;
        @media (max-width: 768px) {
            flex-direction: column;
        }
        /* background-image: url('../assets/images/josua-brieden-7jOTppsu8HI-unsplashMini.jpg');
        background-position: center;
        background-size: cover; */
    }

    header {
        /* height: 100vh; */
        min-width: 3rem;
    }

    main {
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
        background-color: var(--darkColor-3);
    }

    slot {
      flex-basis: 100%;
    }

    .goUpBtn {
      width: 3rem;
      height: 3rem;
      background-color: var(--baseColor);
      position: fixed;
      bottom: 50px;
      right: 50px;
      border: solid 3px #fff;
      border-radius: 50% !important;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5) !important;
    }

    .goUpBtn:focus-visible, .goUpBtn:focus {
      outline: unset;
    }

    .goUpBtn:hover {

    }

</style>
