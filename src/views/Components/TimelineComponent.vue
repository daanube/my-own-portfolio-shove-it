<script lang="ts" setup>
    import TimelineCardComponent from './TimelineCardComponent.vue';

    const items = [
        {
        color: '#fff',
        icon: 'mdi-star',
        },
        {
        color: '#fff',
        icon: 'mdi-book-variant',
        },
        {
        color: '#fff',
        icon: 'mdi-airballoon',
        },
        {
        color: '#fff',
        icon: 'mdi-layers-triple',
        },
    ]

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
        <!-- <v-timeline align="center" truncate-line="both">
            <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :dot-color="item.color"
            :icon="item.icon"
            fill-dot
            >
            <v-card>
                <v-card-title :class="['text-h6']">
                Lorem Ipsum Dolor
                </v-card-title>
                <v-card-text class="text--primary">
                <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
                <v-btn
                    :color="item.color"
                    variant="outlined"
                >
                    Button
                </v-btn>
                </v-card-text>
            </v-card>
            </v-timeline-item>
        </v-timeline> -->
        <div class="timeline-grid-container">
            <div class="timeline-item1">
                <div id="title">Historial laboral</div>
            </div>
            <div class="repeatable-timeline-item">
                <div class="inner-timeline-item1">
                    
                </div>
                <div class="inner-timeline-item2">
                    <v-icon
                        color="green-darken-2"
                        icon="mdi-arrow-right-bold-circle"
                        size="large"
                    ></v-icon>
                </div>
                <div class="inner-timeline-item3">
                    <TimelineCardComponent :companyInfo="laboralHistory1" ></TimelineCardComponent>  
                </div>
            </div>
            
            <div class="repeatable-timeline-item">
                <div class="inner-timeline-item1">
                    <!-- <p>inside market</p> -->
                    <TimelineCardComponent :companyInfo="laboralHistory2"></TimelineCardComponent>  
                </div>
                <div class="inner-timeline-item2">
                    <v-icon
                        color="green-darken-2"
                        icon="mdi-arrow-right-bold-circle"
                        size="large"
                    ></v-icon>
                </div>
                <div class="inner-timeline-item3">
                    
                </div>
            </div>
            
            <div class="repeatable-timeline-item">
                <div class="inner-timeline-item1">
                    
                </div>
                <div class="inner-timeline-item2">
                    <v-icon
                        color="green-darken-2"
                        icon="mdi-arrow-right-bold-circle"
                        size="large"
                    ></v-icon>
                </div>
                <div class="inner-timeline-item3">
                    <TimelineCardComponent :companyInfo="laboralHistory3"></TimelineCardComponent>  
                </div>
            </div>
            
            <div class="repeatable-timeline-item">
                <div class="inner-timeline-item1">
                    <TimelineCardComponent :companyInfo="laboralHistory4"></TimelineCardComponent>  
                </div>
                <div class="inner-timeline-item2">
                    <v-icon
                        color="green-darken-2"
                        icon="mdi-arrow-right-bold-circle"
                        size="large"
                    ></v-icon>
                </div>
                <div class="inner-timeline-item3">
                </div>
            </div>
            
            <div class="repeatable-timeline-item">
                <div class="inner-timeline-item1">
                    
                </div>
                <div class="inner-timeline-item2">
                    <v-icon
                        color="green-darken-2"
                        icon="mdi-arrow-right-bold-circle"
                        size="large"
                    ></v-icon>
                </div>
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
    :root {
      /* --v-border-color: #fff !important; */
    }
    #title {
        text-align: center;
        color: var(--baseColor);
        font-size: 1.5rem;
        padding-bottom: 0.2rem;
        border-bottom-color: var(--baseColor);
        border-bottom-width: medium;
        border-bottom-style: outset;
    }
    /* .v-timeline--vertical.v-timeline {
        height: 50%;   
    } */
    /* .v-timeline-divider__after {
        background: rgba(255, 255, 255, 1);
    } */

    .timeline-grid-container {
        width: 60%;
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
        /* background-color: white; */
        /* padding: 10px; */
    }

    /* .repeatable-timeline-item1 { */
    .repeatable-timeline-item {
        /* grid-area: main1; */
        grid-template-columns: auto auto min-content auto auto;
        display: grid;
        grid-template-areas:
            'header header header header header'
            'left left main right right'
            'footer footer footer footer footer';
        gap: 10px;
        /* background-color: rgb(233, 5, 119); */
        /* padding: 10px; */
        margin-top: 1rem;
    }
    
    .repeatable-timeline-item2 {
        grid-template-columns: auto auto min-content auto auto;
        /* grid-area: main2; */
        display: grid;
        grid-template-areas:
            'header header header header header'
            'left left main right right'
            'footer footer footer footer footer';
        gap: 10px;
        /* background-color: rgb(233, 5, 119); */
        /* padding: 10px; */
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
        /* padding: 10px; */
        font-size: 16px;
    }
    .timeline-item1 {
        grid-area: header;
        /* background-color: purple; */
        text-align: center;
        color: #ffffff;
        height: 2rem;
    }

    .timeline-item3 {
        grid-area: footer;
        /* background-color: #0099cc; */
        color: #ffffff;
        text-align: center;
        height: 2rem;
    }

    .inner-timeline-item1 {
        grid-area: left;
        /* background-color: green; */
        color: #ffffff;
        text-align: center;
        /* height: 5rem; */
    }
    .inner-timeline-item2 {
        grid-area: main;
        /* background-color: blue; */
        display: flex;
        align-items: anchor-center;
    }
    .inner-timeline-item3 {
        grid-area: right;
        /* background-color: #0099cc; */
        color: #ffffff;
        text-align: center;
        /* height: 5rem; */
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
