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
    <article>
        <div class="timeline-grid-container">
            <div class="timeline-item1">
                <div id="title">Historial laboral</div>
            </div>
            <div class="repeatable-timeline-item">
                <div class="inner-timeline-item1">
                    
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
                    
                </div>
            </div>
            
            <div class="repeatable-timeline-item">
                <div class="inner-timeline-item1">
                    
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
                </div>
            </div>
            
            <div class="repeatable-timeline-item">
                <div class="inner-timeline-item1">
                    
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
    #title {
        text-align: center;
        color: var(--baseColor);
        font-size: 1.5rem;
        padding-bottom: 0.2rem;
        border-bottom-color: var(--baseColor);
        border-bottom-width: medium;
        border-bottom-style: outset;
    }

    .timeline-grid-container {
        width: 50%;
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
        height: 2rem;
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

    /* @media (min-width: 900px) {
        .timeline-grid-container { grid-template-columns: repeat(1, 1fr); }
    } */

</style>
