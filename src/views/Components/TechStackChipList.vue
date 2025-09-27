<script lang="ts" setup>
    const stackList = [
        {
            name: "TypeScript",
            icon: "mdi mdi-language-typescript"
        },
        {
            name: "JavaScript",
            icon: "mdi mdi-language-javascript"
        },
        {
            name: "CSS3",
            icon: "mdi mdi-language-css3"
        },
        {
            name: "HTML5",
            icon: "mdi mdi-language-html5"
        },
        {
            name: "C#",
            icon: "mdi mdi-language-csharp"
        },
        {
            name: "Angular11+",
            icon: "mdi mdi-angular"
        },
        {
            name: "Vue3",
            icon: "mdi mdi-vuejs"
        }
    ]
</script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>
    <article class="stackListArticle">
        <v-chip-group v-for="tech in stackList">
            <v-chip :prepend-icon="tech.icon" :link="false">
              {{tech.name}}
            </v-chip>
        </v-chip-group>
    </article>
</template>

<!-- //////////////////////////////////////////////////////////////////////// -->

<style lang="css" scoped>
    .stackListArticle {
        margin-top: 1rem;
        padding: 0 1rem;
        display: flex;
        flex-flow: row;
        color: var(--baseColor);
    }
</style>
