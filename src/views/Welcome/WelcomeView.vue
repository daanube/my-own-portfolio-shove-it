<script setup lang="ts">
    import SideBarLayout from '../../layouts/SideBarLayout.vue';
</script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>

    <SideBarLayout>
        <div class="row" id="welcome">
            <div class="col-12 slotArea">
                <div id="welcomeHeadImg">
                    <div class="welcomeHead">
                        DAVID NUÑEZ
                        DESARROLLADOR
                    </div>
                </div>
                <article id="welcomeArticle">
                    <h3 id="welcomeArticleTitle">Hola, wapo</h3>
                </article>
            </div>
        </div>
    </SideBarLayout>

</template>

<!-- //////////////////////////////////////////////////////////////////////// -->

<style lang="css">
    .welcomeHead {
        margin: 0 auto;
        padding: 0;
        width: 100%;
        color: #fff;
        text-align: center;
        font-size: 140px;
        font-weight: bolder;
    }
    #welcomeHeadImg {
        /* display: flex; */
        align-content: center;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 45%;
        background-image: url("/src/assets/images/bgs/michelle-ding-unsplash.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        filter: saturate(0.5);
        line-height: 8rem;
    }
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
