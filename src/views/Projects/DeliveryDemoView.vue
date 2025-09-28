<script setup lang="ts">
    import SideBarLayout from '../../layouts/SideBarLayout.vue';
    import Article from '../../components/ArticleComponent.vue';
    import MainTitle from '../../components/MainTitleComponent.vue';
    
    const title = "Venta y reparto de productos";
    const bgUrl = "/images/bgs/keyboard-mechanical-keyboard-3196030_1280-min.jpg";
    const articleText = "Hola, soy delivery";  
</script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>

    <SideBarLayout>
        <div class="row mainTitle" id="delivery">
            <div class="col-12 slotArea">
                <MainTitle :mainTitleText='title' :image-url='`url(${bgUrl})`' />
                <Article :articleText="articleText" />
            </div>
        </div>
    </SideBarLayout>

</template>

<!-- //////////////////////////////////////////////////////////////////////// -->

<style lang="css">
    
</style>
