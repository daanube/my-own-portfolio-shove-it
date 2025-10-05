<script lang="ts" setup>
    import TimelineCardComponent from './TimelineCardComponent.vue';

    const laboralHistory1 = {
        companyName: "IA 2030",
        companyDuration: "2022-2025",
        tasksList: [
            "Desarrollo del actualizador automático para la aplicación de escritorio principal de la empresa.",
            "Mantenimiento y mejoras de dicha aplicación",
            "Reestructuración completa de una app web creada en Vue3.",
            "Pruebas como QA y creación de manuales de usuario.",
        ],
        showDemo: true  
    }
    const laboralHistory2 = {
        companyName: "Inside Market",
        companyDuration: "2022",
        tasksList: [
            "Desarrollo de una aplicación web de uso interno para el control, recepción y el ingreso de productos alimenticios que producen merma (frutas, hortalizas y verduras), para el cálculo de pérdida y el peso real ingresado al supermercado."
        ],
        showDemo: false
    }
    const laboralHistory3 = {
        companyName: "Teelo",
        companyDuration: "2021-2022",
        tasksList: [
            "Actualización y reestructuración visual de la App Web.",
            "Maquetado de secciones. Corrección de bugs visuales y de comportamiento.", 
            "Correcciones y mejoras para darle a la aplicación la identidad visual de la marca: Edición de imágenes para el uso dentro de 3 sites.", 
            "Estandarización a nivel de formularios, Responsive design, User Interface, User Experience."
        ],
        showDemo: true
    }
    const laboralHistory4 = {
        companyName: "Norkut",
        companyDuration: "2018-2021",
        tasksList: [
            "Depuración, modificación y adecuación de métodos de búsqueda, filtrado y ordenamiento del catálogo de productos de un eCommerce, en conjunto con el Consultor de Base de datos.",
            "Diseño e implementación de reportes, con Crystal Reports. Creación de las consultas necesarias para alimentar dichos reportes, a través de .Net Core y LINQ.",
            "Desarrollo de las correcciones necesarias a nivel de código, debido a una migración de SQL Server a PostgreSQL.",
            "Implementación, apoyo y seguimiento durante el periodo de prueba de la aplicación por parte del cliente. Desarrollo de las posteriores correcciones solicitadas por dicho cliente.", 
            "Creación de micro servicios (C#), modelos y entidades. Creación de métodos para su consumo desde Angular.",
            "Mejora de interfaces de usuario para ofrecer una mejor experiencia.",
        ],
        showDemo: true
    }
    const laboralHistory5 = {
        companyName: "BYOB",
        companyDuration: "2017-2018",
        tasksList: [
            "Creación de modelos y validaciones para módulos nuevos de la aplicación.",
            "Apoyo a otros desarrolladores en el desarrollo de diferentes módulos, modelos y métodos para el uso de bases de datos no relacionales."
        ],
        showDemo: false
    }
</script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>
    <article id="timelineArticle">
        <div class="timeline-grid-container">
            <div class="timeline-item1">
                <h2 class="sectionTitle" id="title">Historial laboral</h2>
            </div>
            <div class="repeatable-timeline-item">
                <div class="inner-timeline-item1">
                    <p class="companyName">
                        {{ laboralHistory1.companyName }}
                    </p>
                    <p class="companyDuration">
                        {{ laboralHistory1.companyDuration }}
                    </p>
                </div>
                <!-- <div class="inner-timeline-item2">
                    <v-icon
                        color="green-darken-2"
                        icon="mdi-arrow-right-bold-circle"
                        size="large"
                    ></v-icon>
                </div> -->
                <div class="inner-timeline-item3">
                    <TimelineCardComponent :companyInfo="laboralHistory1" ></TimelineCardComponent>  
                </div>
            </div>
            
            <div class="repeatable-timeline-item">
                <div class="inner-timeline-item1">
                    <TimelineCardComponent :companyInfo="laboralHistory2"></TimelineCardComponent>  
                </div>
                <!-- <div class="inner-timeline-item2">
                    <v-icon
                        color="green-darken-2"
                        icon="mdi-arrow-right-bold-circle"
                        size="large"
                    ></v-icon>
                </div> -->
                <div class="inner-timeline-item3">                    
                    <p class="companyName">
                        {{ laboralHistory2.companyName }}
                    </p>
                    <p class="companyDuration">
                        {{ laboralHistory2.companyDuration }}
                    </p>
                </div>
            </div>
            
            <div class="repeatable-timeline-item">
                <div class="inner-timeline-item1">
                    <p class="companyName">
                        {{ laboralHistory3.companyName }}
                    </p>
                    <p class="companyDuration">
                        {{ laboralHistory3.companyDuration }}
                    </p>
                    
                </div>
                <!-- <div class="inner-timeline-item2">
                    <v-icon
                        color="green-darken-2"
                        icon="mdi-arrow-right-bold-circle"
                        size="large"
                    ></v-icon>
                </div> -->
                <div class="inner-timeline-item3">
                    <TimelineCardComponent :companyInfo="laboralHistory3"></TimelineCardComponent>  
                </div>
            </div>
            
            <div class="repeatable-timeline-item">
                <div class="inner-timeline-item1">
                    <TimelineCardComponent :companyInfo="laboralHistory4"></TimelineCardComponent>  
                </div>
                <!-- <div class="inner-timeline-item2">
                    <v-icon
                        color="green-darken-2"
                        icon="mdi-arrow-right-bold-circle"
                        size="large"
                    ></v-icon>
                </div> -->
                <div class="inner-timeline-item3">
                    <p class="companyName">
                        {{ laboralHistory4.companyName }}
                    </p>
                    <p class="companyDuration">
                        {{ laboralHistory4.companyDuration }}
                    </p>
                </div>
            </div>
            
            <div class="repeatable-timeline-item">
                <div class="inner-timeline-item1">
                    <p class="companyName">
                        {{ laboralHistory5.companyName }}
                    </p>
                    <p class="companyDuration">
                        {{ laboralHistory5.companyDuration }}
                    </p>                    
                </div>
                <!-- <div class="inner-timeline-item2">
                    <v-icon
                        color="green-darken-2"
                        icon="mdi-arrow-right-bold-circle"
                        size="large"
                    ></v-icon>
                </div> -->
                <div class="inner-timeline-item3">
                    <TimelineCardComponent :companyInfo="laboralHistory5"></TimelineCardComponent>          
                </div>
            </div>

            <div class="timeline-item3">
                
            </div>
        </div>
    </article>
</template>

<!-- //////////////////////////////////////////////////////////////////////// -->

<style lang="css" scoped>
    #timelineArticle {
        margin: 2rem 0;    
    }

    #title {
        text-align: center;
        color: var(--baseColor);
        /* font-size: 1.5rem; */
        padding-bottom: 0.2rem;
        margin-bottom: 1rem;
        border-bottom-color: var(--baseColor);
        border-bottom-width: medium;
        border-bottom-style: outset;
    }

    .timeline-grid-container {
        width: 70%;
        margin: 2rem auto;
        display: grid;
        grid-template-areas:
            'header'
            'floor1'
            'floor2'
            'floor3'
            'floor4'
            'floor5'
            'footer';
        gap: 10px;
    }

    .repeatable-timeline-item {
        grid-template-columns: auto auto min-content auto auto;
        display: grid;
        grid-template-areas:
            'header header header header header'
            'left left main right right'
            'footer footer footer footer footer';
        gap: 10px;
        margin-top: 1rem;
    }
    
    .repeatable-timeline-item2 {
        grid-template-columns: auto auto min-content auto auto;
        display: grid;
        grid-template-areas:
            'header header header header header'
            'left left main right right'
            'footer footer footer footer footer';
        gap: 10px;
    }

    .iteration1 {
        grid-area: floor1;
    }
    .iteration2 {
        grid-area: floor2;
    }
    .iteration3 {
        grid-area: floor3;        
    }
    .iteration4 {
        grid-area: floor4;
    }
    .iteration5 {
        grid-area: floor5;
    }

    .timeline-grid-container > div,
    .timeline-item2 > div {
        font-size: 16px;
    }

    .timeline-item1 {
        grid-area: header;
        text-align: center;
        color: #ffffff;
        display: flex;
        flex-direction: column;
    }

    .timeline-item3 {
        grid-area: footer;
        color: #ffffff;
        text-align: center;
        align-content: center;
        height: 2rem;
    }

    .inner-timeline-item1 {
        grid-area: left;
        color: #ffffff;
        text-align: center;
        align-content: center;
    }

    .inner-timeline-item2 {
        grid-area: main;
        display: flex;
        align-items: anchor-center;
    }

    .inner-timeline-item3 {
        grid-area: right;
        color: #ffffff;
        text-align: center;
        align-content: center;
    }

    i.v-icon {
        color: var(--darkColor-1);
        font-size: 3rem;
    }

    .repeatable-timeline-item:nth-child(odd) i.v-icon  {
        rotate: 180deg;
    }

    .companyName {
        font-size: 4rem;
        font-weight: 600;
        margin: -0.5rem auto 0 auto;
        padding: 0;
        letter-spacing: -5px;
        color: var(--lightColor-1);
    }
    
    .companyDuration {
        margin-top: -1rem;
        color: var(--darkColor-1);
    }
    /* @media (min-width: 900px) {
        .timeline-grid-container { grid-template-columns: repeat(1, 1fr); }
    } */

</style>
