<script lang="ts" setup>
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
</script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>
    <article>
        <p id="title">Historial laboral</p>
        <v-timeline align="center" truncate-line="both">
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
        </v-timeline>
        <div class="timeline-grid-container">
            <div class="timeline-item1">
                
            </div>
            <div class="repeatable-timeline-item">
                <div class="inner-timeline-item1">
                    
                </div>
                <div class="inner-timeline-item2">
                    
                </div>
                <div class="inner-timeline-item3">
                    <p>ia 2030</p>
                </div>
            </div>
            
            <div class="repeatable-timeline-item">
                <div class="inner-timeline-item1">
                    <p>inside market</p>
                </div>
                <div class="inner-timeline-item2">
                    
                </div>
                <div class="inner-timeline-item3">
                    
                </div>
            </div>
            
            
            <div class="repeatable-timeline-item">
                <div class="inner-timeline-item1">
                    
                </div>
                <div class="inner-timeline-item2">
                    
                </div>
                <div class="inner-timeline-item3">
                    <!-- <p>teelo</p> -->
                </div>
            </div>
            
            <div class="repeatable-timeline-item">
                <div class="inner-timeline-item1">
                    <p>norkut</p>
                </div>
                <div class="inner-timeline-item2">
                    
                </div>
                <div class="inner-timeline-item3">
                </div>
            </div>
            
            <div class="repeatable-timeline-item">
                <div class="inner-timeline-item1">
                    
                </div>
                <div class="inner-timeline-item2">
                    
                </div>
                <div class="inner-timeline-item3">
                    <p>byob</p>
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
      --v-border-color: #fff !important;
    }
    #title {
        text-align: center;
        color: #fff;
        font-size: 2rem;
    }
    /* .v-timeline--vertical.v-timeline {
        height: 50%;   
    } */
    .v-timeline-divider__after {
        background: rgba(255, 255, 255, 1);
    }

    .timeline-grid-container {
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
        background-color: white;
        padding: 10px;
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
        background-color: rgb(233, 5, 119);
        padding: 10px;
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
        background-color: rgb(233, 5, 119);
        padding: 10px;
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
        padding: 10px;
        font-size: 16px;
    }
    
    .timeline-item1 {
        grid-area: header;
        background-color: purple;
        text-align: center;
        color: #ffffff;
        height: 2rem;
    }

    .timeline-item3 {
        grid-area: footer;
        background-color: #0099cc;
        color: #ffffff;
        text-align: center;
        height: 2rem;
    }

    .inner-timeline-item1 {
        grid-area: left;
        background-color: green;
        color: #ffffff;
        text-align: center;
        height: 5rem;
    }
    .inner-timeline-item2 {
        grid-area: main;
        background-color: blue;
        height: 5rem;
        padding: 0 3rem;
        width: 3rem;
    }
    .inner-timeline-item3 {
        grid-area: right;
        background-color: #0099cc;
        color: #ffffff;
        text-align: center;
        height: 5rem;
    }
</style>
