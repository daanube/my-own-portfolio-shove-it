<script lang="ts" setup>

</script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>
    <main id="windowshape">
        <section id="titleBar">
            <i>x</i>
            <i>[]</i>
            <i>_</i>
        </section>
        <section id="frame">
            <slot />
        </section>
    </main>
</template>

<!-- //////////////////////////////////////////////////////////////////////// -->

<style lang="css" scoped>
    #windowshape {
        margin: 3rem;
        border: solid 5px #fff;
        display: grid;
        grid-template-areas: "titleBar" "frame";
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
        background-color: var(--darkColor-2);

    }
    #titleBar {
        display: flex;
        flex-direction: row-reverse;
        grid-area: titleBar;
        height: 2rem;
    }
    #frame {
        grid-area: frame;
    }
    i {
        font-size: 0.7rem;
        font-weight: 600;
        border: 1px solid #fff;
        color: #fff;
        padding: 10px;
    }
</style>
