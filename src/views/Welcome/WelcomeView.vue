<script setup lang="ts">
    import SideBarLayout from '../../layouts/SideBarLayout.vue';
    import MainTitle from '../../components/MainTitleComponent.vue';
    import Article from '../../components/ArticleComponent.vue';
    import Timeline from '../../components/TimelineComponent.vue';
    import TechStackChipList from '../../components/TechStackChipListComponent.vue';

    const welcomeTitle = "DAVID NUÑEZ DESARROLLADOR";
    const bgUrl = "/images/bgs/michelle-ding-unsplash.jpg";
    const articleTitle = "Sobre mí";
    const articleText = "Desarrollador con más de 5 años de experiencia en proyectos de lotería, retail, atención médica y delivery; me he desempeñado en el área de Front-End, así como he brindado apoyo en tareas variadas para diferentes equipos de Back-End. Gracias a esto, he aprendido diversas herramientas, tanto técnicas como de análisis, que me otorgan una perspectiva amplia y que, a su vez, me permiten abordar proyectos donde se requiera crear soluciones con diferentes enfoques. Asimismo, cuento con experiencia en Desarrollo Web con JavaScript, TypeScript, Angular y Vue, y para escritorio con C# y WPF. Por último, cuento con experiencia en la creación de reportes con Crystal Reports.";  
</script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>

    <SideBarLayout>
        <div class="row mainTitle" id="mainTitle">
            <div class="col-12 slotArea">
                <MainTitle :mainTitleText='welcomeTitle' :image-url='`url(${bgUrl})`' />
                <!-- <p class="falta"> </p> -->
                <TechStackChipList />
                <Timeline />
                <Article :about="true" :articleTitle="articleTitle" :articleText="articleText"/>
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
</style>
