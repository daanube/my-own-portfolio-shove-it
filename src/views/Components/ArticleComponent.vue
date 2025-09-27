<script lang="ts" setup>
    const props = defineProps({
        articleTitle: {
            type: String,
            default: "",
            required: true,
        },
        articleText: {
            type: String,
            default: "",
            required: true,
        },
    });
</script>

<!-- //////////////////////////////////////////////////////////////////////// -->


<template>
    <article id="Article">
        <h2 id="ArticleTitle" :v-if=props.articleTitle>{{ props.articleTitle }}</h2>
        <p id="ArticleText">{{ props.articleText }}</p>
    </article>
</template>

<!-- //////////////////////////////////////////////////////////////////////// -->


<style lang="css" scoped>
    #Article {
        border-radius: 5px;
        background-color: var(--darkColor-2);
        color:  var(--baseColor);
        margin: 1rem 0 auto;
        padding: 1rem;
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
        padding: 1rem 0;
        font-size: large;
        font-weight: 400;
        text-align: justify;
        overflow-wrap: break-word;
    }
</style>
