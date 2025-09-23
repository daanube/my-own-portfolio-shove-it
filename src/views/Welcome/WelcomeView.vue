<script setup lang="ts">
    import SideBarLayout from '../../layouts/SideBarLayout.vue';
    import MainTitleComponent from '../Components/MainTitleComponent.vue';
    import ArticleComponent from '../Components/ArticleComponent.vue';
import TimelineComponent from '../Components/TimelineComponent.vue';

    const welcomeTitle = "DAVID NUÑEZ DESARROLLADOR";
    const bgUrl = "/src/assets/images/bgs/michelle-ding-unsplash.jpg";
    const articleText = "Hola, wapo";  
</script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>

    <SideBarLayout>
        <div class="row mainTitle" id="welcome">
            <div class="col-12 slotArea">
                <MainTitleComponent :mainTitleText='welcomeTitle' :image-url='`url(${bgUrl})`' />
                <TimelineComponent />
                <ArticleComponent :articleText="articleText"/>
            </div>
        </div>
    </SideBarLayout>

</template>

<!-- //////////////////////////////////////////////////////////////////////// -->

<style lang="css">
    
</style>
