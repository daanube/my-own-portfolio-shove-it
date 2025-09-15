<script setup lang="ts">
    import SideBarLayout from '../../layouts/SideBarLayout.vue';
</script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>

    <SideBarLayout>
        <div class="row" id="welcome">
            <div class="col-12 slotArea">
                <article id="welcomeArticle">
                    <h3>Hola, soy welcome</h3>
                </article>
            </div>
        </div>
    </SideBarLayout>

</template>

<!-- //////////////////////////////////////////////////////////////////////// -->

<style lang="css">
    #welcomeArticle {
        border-radius: 5px;
        background-color: aliceblue;
        width: 80%;
        margin: 0 auto;
        padding: 1rem;
    }
</style>
