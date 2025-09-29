<script lang="ts" setup>
    import TimelineCardComponent from './TimelineCardComponent.vue';

    const laboralHistory1 = {
        companyName: "IA 2030",
        companyDuration: "2022-2025",
        tasksList: [
            "Responsabilidad más larga para ver como se ve más texto",
            "Responsabilidad 2",
            "Responsabilidad 3",
        ]  
    }
    const laboralHistory2 = {
        companyName: "Inside Market",
        companyDuration: "2022",
        tasksList: [
            "Responsabilidad más larga para ver como se ve más texto",
            "Responsabilidad 2",
            "Responsabilidad 3",
        ]  
    }
    const laboralHistory3 = {
        companyName: "Teelo",
        companyDuration: "2021-2022",
        tasksList: [
            "Responsabilidad más larga para ver como se ve más texto",
            "Responsabilidad 2",
            "Responsabilidad 3",
        ]  
    }
    const laboralHistory4 = {
        companyName: "Norkut",
        companyDuration: "2018-2021",
        tasksList: [
            "Responsabilidad más larga para ver como se ve más texto",
            "Responsabilidad 2",
            "Responsabilidad 3",
        ]  
    }
    const laboralHistory5 = {
        companyName: "BYOB",
        companyDuration: "2017-2018",
        tasksList: [
            "Responsabilidad más larga para ver como se ve más texto",
            "Responsabilidad 2",
            "Responsabilidad 3",
        ]  
    }
</script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>
    <article id="timelineArticle">
        <div class="timeline-grid-container">
            <div class="timeline-item1">
                <h2 id="title">Historial laboral</h2>
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
        font-size: 1.5rem;
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
        /* height: 2rem; */
        display: flex;
        flex-direction: column;
    }

    .timeline-item3 {
        grid-area: footer;
        color: #ffffff;
        text-align: center;
        height: 2rem;
    }

    .inner-timeline-item1 {
        grid-area: left;
        color: #ffffff;
        text-align: center;
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
    }

    i.v-icon {
        color: var(--darkColor-1);
        font-size: 3rem;
    }

    .repeatable-timeline-item:nth-child(odd) i.v-icon  {
        rotate: 180deg;
    }

    .companyName {
        font-size: 6rem;
        font-weight: 600;
        margin: -0.5rem auto 0 auto;
        padding: 0;
        letter-spacing: -5px;
    }

    .companyDuration {
        margin-top: -1rem;
    }
    /* @media (min-width: 900px) {
        .timeline-grid-container { grid-template-columns: repeat(1, 1fr); }
    } */

</style>
