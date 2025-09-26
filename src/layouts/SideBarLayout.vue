<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { useGoTo } from 'vuetify'
  import FooterView from '../components/FooterView.vue';
  import SideBarView from '../components/SideBarView.vue';

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
      <SideBarView />
    </header>

    <main id="main">
      <slot />
      <button id="goUpBtn" @click="goUp(0, options)"
        :class="{ 'btn--hidden': showBtn }"
      />
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
      background-color: var(--baseColor);
      border: solid 3px #fff;
      border-radius: 50% !important;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5) !important;
      will-change: transform;
      transition: transform 450ms;
    }

    #goUpBtn:focus-visible, #goUpBtn:focus {
      outline: unset;
    }

    #goUpBtn:hover {
      transform: translateY(-10px);
    }

    .btn--hidden {
      display: none;
      transition: opacity 250ms 300ms;
    }
</style>
