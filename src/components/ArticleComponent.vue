<script lang="ts" setup>
    import { ref } from 'vue';
    import Contact from './ContactComponent.vue';

    const props = defineProps({
        articleTitle: {
            type: String,
            default: "",
            required: false,
        },
        articleText: {
            type: String,
            default: "",
            required: true,
        },
        about:{
            type: Boolean,
            default: false,
            required: false
        }
    });

    const textParts = ref<Array<String>>([]);
    textParts.value = props.articleText.split(".");
    console.log(textParts.value);

</script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>
    <article id="Article">
        <h2 id="ArticleTitle" v-if=props.articleTitle>{{ props.articleTitle }}</h2>
        <p id="ArticleText"
            v-for="p in textParts"
        >
            {{ p!="" ? p+"." : p }}
        </p>
        <Contact v-show=props.about />
    </article>
</template>

<!-- //////////////////////////////////////////////////////////////////////// -->

<style lang="css" scoped>
    #Article {
        border-radius: 5px;
        background-color: var(--darkColor-2);
        color:  var(--baseColor);
        margin: 1rem 0 auto;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
    }
    #ArticleTitle {
        width: 100%;
        text-align: center;
        padding: 0;
        overflow-wrap: break-word;
        margin-bottom: 0;
    }
    #ArticleText {
        width: 100%;
        padding: 0.1rem 0;
        font-size: medium;
        font-weight: 400;
        text-align: justify;
        overflow-wrap: break-word;
        margin-bottom: 0;
    }
</style>
