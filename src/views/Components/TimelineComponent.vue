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
        <v-timeline align="start">
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
    </article>
</template>

<!-- //////////////////////////////////////////////////////////////////////// -->

<style lang="css" scoped>
    #title {
        text-align: center;
        color: #fff;
        font-size: 2.5rem;
    }
    /* .v-timeline--vertical.v-timeline {
        height: 50%;   
    } */
    .v-timeline-divider__after {
        background: rgba(255, 255, 255, 1);
    }
</style>
