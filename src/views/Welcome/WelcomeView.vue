<script setup lang="ts">
    import SideBarLayout from '../../layouts/SideBarLayout.vue';
    import MainTitle from '../../components/MainTitleComponent.vue';
    import Article from '../../components/ArticleComponent.vue';
    import Timeline from '../../components/TimelineComponent.vue';
    import TechStackChipList from '../../components/TechStackChipListComponent.vue';

    const welcomeMainTitle = "DAVID NUÑEZ DESARROLLADOR";
    const bgUrl = "/images/bgs/michelle-ding-unsplash.jpg";
    const aboutTitle = "Sobre mí";
    const aboutText = "Desarrollador con más de 5 años de experiencia en proyectos de lotería, retail, atención médica y delivery; me he desempeñado en el área de Front-End, así como he brindado apoyo en tareas variadas para diferentes equipos de Back-End. Gracias a esto, he aprendido diversas herramientas, tanto técnicas como de análisis, que me otorgan una perspectiva amplia y que, a su vez, me permiten abordar proyectos donde se requiera crear soluciones con diferentes enfoques. Asimismo, cuento con experiencia en Desarrollo Web con JavaScript, TypeScript, Angular y Vue, y para escritorio con C# y WPF. Por último, cuento con experiencia en la creación de reportes con Crystal Reports.";  
    const expYears = "años";
    const upright = "Orientado \n a FrontEnd";
    const downright = "Que se yo, otra vez";
    const availability = "Disponible para trabajar";
</script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>

    <SideBarLayout>
        <div class="row mainTitle" id="mainTitle">
            <div class="col-12 slotArea">
                <MainTitle :mainTitleText='welcomeMainTitle' :image-url='`url(${bgUrl})`' />
                <article id="welcomeArticle">
                    <v-chip id="availability" prepend-icon="mdi-check-circle" :link="false">
                        {{ availability }}
                    </v-chip>
                    <!-- <h2 id="welcomeArticleTitle">
                        titulo, que se yo
                    </h2> -->
                    <div id="expGrid">
                        <div id="expNumberContainer">
                            <p id="expNumber">
                                5+
                            </p>
                            <p id="expYears">
                                {{expYears}}
                            </p>
                        </div>
                        <div class="gridRight" id="upright">
                            {{ upright }}
                        </div>
                        <div class="gridRight" id="downright">
                            {{ downright }}
                        </div>
                    </div>                    
                </article>
                <!-- <p class="falta"> </p> -->
                <TechStackChipList />
                <Timeline />
                <Article :about="true" :articleTitle="aboutTitle" :articleText="aboutText" />
            </div>
        </div>
    </SideBarLayout>

</template>

<!-- //////////////////////////////////////////////////////////////////////// -->

<style lang="css">
    .falta {
        color: var(--baseColor);
        text-align: center;
        padding: 1rem;
    }

    #expGrid{
        display: grid;
        grid-template-areas: 'left upright' 'left downright';
        gap: 5px;
        background-color: var(--darkColor-2);
        padding: 10px;
        /* height: 10rem; */
    }
    #expNumberContainer {
        grid-area: left;
        /* background-color: green; */
        padding: 10px;
    }
    #expNumber {
        font-size: 10rem;
        font-weight: 600;
        margin: -1rem auto 0 auto;
        padding: 0;
        width: 50%;
        letter-spacing: -20px;
    }
    #expYears {
        font-size: 2rem;
        font-weight: 600;
        margin: -2.5rem auto 0 auto;
        padding: 0;
        padding-bottom: 1rem;
        line-height: 1.2;
        letter-spacing: 16px;
        text-transform: uppercase;
        width: 50%;
    }
    .gridRight{
        background-color: var(--darkColor-3);
        padding: 10px;
        border-radius: 25px;
    }
    #upright {
        grid-area: upright;
        white-space: pre-line;
        font-size: 2rem;
        font-weight: 700;
    }
    #downright {
        grid-area: downright;
    }
    #welcomeArticleTitle {
        display: flex;
    }
    #welcomeArticle {
        width: 50%;
        color: var(--baseColor);
        text-align: center;
        padding: 1rem;
        margin: 0 auto;
    }
    #availability {
        margin: 2rem auto;
        padding: 0 1rem;
        display: flex;
        flex-flow: row;
        color: var(--baseColor);
        width: 10rem;
    }
</style>
