<script setup lang="ts">
    import SideBarLayout from '../../layouts/SideBarLayout.vue';
    import ArticleComponent from '../Components/ArticleComponent.vue';
    import MainTitleComponent from '../Components/MainTitleComponent.vue';
    
    const title = "Venta y reparto de productos";
    const bgUrl = "/src/assets/images/bgs/keyboard-mechanical-keyboard-3196030_1280-min.jpg";
    const articleText = "Hola, soy delivery";  
</script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>

    <SideBarLayout>
        <div class="row mainTitle" id="delivery">
            <div class="col-12 slotArea">
                <MainTitleComponent :mainTitleText='title' :image-url='`url(${bgUrl})`' />
                <ArticleComponent :articleText="articleText"/>
            </div>
        </div>
    </SideBarLayout>

</template>

<!-- //////////////////////////////////////////////////////////////////////// -->

<style lang="css">
    
</style>
