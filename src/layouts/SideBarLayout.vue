<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { useGoTo } from 'vuetify'
  import Footer from '../components/FooterComponent.vue';
  import SideBar from '../components/SideBarComponent.vue';

  const goUp = useGoTo()
  const options = computed(() => ({
    duration: 500,
    easing: 'easeInOutCubic',
    offset: 0,
  }))

  window.onscroll = function() {
    scrollFunction()
  };
  const showBtn = ref(true)
  const lastScrollPosition = ref(0)

  function scrollFunction() {
    // Get the current scroll position
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
    // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
    if (currentScrollPosition < 0) {
      return
    }
    // Here we determine whether we need to show or hide the navbar
    showBtn.value = currentScrollPosition < lastScrollPosition.value
    // Set the current scroll position as the last scroll position
    lastScrollPosition.value = currentScrollPosition
  }

</script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>
  <div class="two-column-layout" id="two-column-layout">
    <header>
      <SideBar />
    </header>

    <main id="main">
      <slot />
      <button 
        id="goUpBtn" @click="goUp(0, options)"
        :class="{ 'btn--hidden': showBtn }"
      >
         <v-icon
            color="var(--baseColor)"
            icon="mdi mdi-chevron-up"
            size="large"
          />
      </button>
      <Footer />
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
    }

    header {
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

    #goUpBtn {
      position: fixed;
      bottom: 50px;
      right: 50px;
      z-index: 999;
      width: 3rem;
      height: 3rem;
      cursor: pointer;
      background-color: var(--darkColor-3);
      border: solid 3px var(--lightColor-1);
      border-radius: 50% !important;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5) !important;
      will-change: transform;
      transition: transform 450ms;
      transition-property: transform, opacity;
      transition-duration: 450ms;
      padding: 0;
    }

    #goUpBtn:focus-visible, #goUpBtn:focus {
      outline: unset;
    }

    #goUpBtn:hover {
      transform: translateY(-10px);
    }

    .btn--hidden {
      opacity: 0;
    }
</style>
