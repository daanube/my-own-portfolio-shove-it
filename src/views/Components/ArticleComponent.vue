<script lang="ts" setup>
    const props = defineProps({
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
        <h3 id="ArticleTitle">{{ props.articleText }}</h3>
    </article>
</template>

<!-- //////////////////////////////////////////////////////////////////////// -->


<style lang="css" scoped>
    #Article {
        border-radius: 5px;
        background-color: var(--greyishBlack);
        color: #fff;
        margin: 1rem 0 auto;
        padding: 1rem;
        /* height: 10rem; */
        height: 1024px;
        display: flex;
    }
    #ArticleTitle {
        width: 100%;
        text-align: center;
        padding: 1rem;
    }
</style>
