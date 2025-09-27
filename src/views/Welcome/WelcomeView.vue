<script setup lang="ts">
    import SideBarLayout from '../../layouts/SideBarLayout.vue';
    import MainTitleComponent from '../Components/MainTitleComponent.vue';
    import ArticleComponent from '../Components/ArticleComponent.vue';
    import TimelineComponent from '../Components/TimelineComponent.vue';
    import TechStackChipList from '../Components/TechStackChipList.vue';

    const welcomeTitle = "DAVID NUÑEZ DESARROLLADOR";
    const bgUrl = "/src/assets/images/bgs/michelle-ding-unsplash.jpg";
    const articleText = "Soy un Desarrollador Web con más de 5 años de experiencia en proyectos de lotería, retail, atención médica y delivery, desempeñándome en el área de Front-End, y como apoyo en tareas varias a los diferentes equipos de Back-End. Esto me ha dado las herramientas tanto técnicas como de análisis para tener una perspectiva amplia y poder abordar proyectos y crear soluciones desde varios enfoques. Cuento con experiencia en Desarrollo Web con JavaScript, TypeScript, Angular y Vue, y en escritorio con C# y WPF. Creación de reportes con Crystal Reports.";  
</script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>

    <SideBarLayout>
        <div class="row mainTitle" id="mainTitle">
            <div class="col-12 slotArea">
                <MainTitleComponent :mainTitleText='welcomeTitle' :image-url='`url(${bgUrl})`' />
                <ArticleComponent :articleText="articleText"/>
                <TechStackChipList />
                <TimelineComponent />
            </div>
        </div>
    </SideBarLayout>

</template>

<!-- //////////////////////////////////////////////////////////////////////// -->

<style lang="css">
    
</style>
