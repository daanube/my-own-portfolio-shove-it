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
        height: 100vh;
        flex-basis: 10%;
    }

    main {
        flex-basis: 90%;
        /* margin-top: 10px; */
        /* padding: 20px; */
        display: flex;
        flex-direction: column;
    }

    slot {
      flex-basis: 90%;
    }
</style>
