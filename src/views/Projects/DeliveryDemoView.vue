<script setup lang="ts">
    import SideBarLayout from '../../layouts/SideBarLayout.vue';
    import Article from '../../components/ArticleComponent.vue';
    import MainTitle from '../../components/MainTitleComponent.vue';
    import WindowShape from '../../components/WindowShapeComponent.vue';
    
    const title = "Venta y reparto de productos";
    const bgUrl = "/images/bgs/keyboard-mechanical-keyboard-3196030_1280-min.jpg";
    const articleText = "demo info";  
</script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>

    <SideBarLayout>
        <div class="row mainTitle" id="delivery">
            <div class="col-12 slotArea">
                <MainTitle :mainTitleText='title' :image-url='`url(${bgUrl})`' />
                
                <!-- demo info -->
                <Article :articleText="articleText" />
                
                <WindowShape>
                    <MainTitle :mainTitleText='title' :image-url='`url(${bgUrl})`' />
                </WindowShape>

            </div>
        </div>
    </SideBarLayout>

</template>

<!-- //////////////////////////////////////////////////////////////////////// -->

<style lang="css">
    
</style>
