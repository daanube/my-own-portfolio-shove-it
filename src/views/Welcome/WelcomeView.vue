<script setup lang="ts">
    import SideBarLayout from '../../layouts/SideBarLayout.vue';
    import Header from '../Components/Header.vue';

    const welceomeTitle = "DAVID NUÑEZ DESARROLLADOR";
    const bgUrl = "/src/assets/images/bgs/michelle-ding-unsplash.jpg";
</script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>

    <SideBarLayout>
        <div class="row" id="welcome">
            <div class="col-12 slotArea">
                <Header :head-text='welceomeTitle' :image-url='`url(${bgUrl})`' ></Header>
                <article id="welcomeArticle">
                    <h3 id="welcomeArticleTitle">Hola, wapo</h3>
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
        /* width: 90%; */
        margin: 1rem auto;
        padding: 1rem;
        height: 10rem;
        display: flex;
    }
    #welcomeArticleTitle {
        width: 100%;
        text-align: center;
        padding: 1rem;
    }
</style>
