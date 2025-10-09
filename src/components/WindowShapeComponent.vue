<script lang="ts" setup>

</script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>
    <main id="windowshape">
        <section id="titleBar">
            <v-icon
                id="exit"
                icon="mdi-circle"
                size="medium"
            ></v-icon>
            <v-icon
                id="max"
                icon="mdi-circle"
                size="medium"
            ></v-icon>
            <v-icon
                id="min"
                icon="mdi-circle"
                size="medium"
            ></v-icon>
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
        border: solid 1px var(--baseColor);
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
        padding-right: 0.5rem;
        padding-top: 0.5rem;
    }
    #frame {
        grid-area: frame;
        padding: 0.7rem;
    }
    i {
        font-size: 0.7rem;
        font-weight: 600;
        padding: 10px 5px;
    }
    #exit::before {
        color: red;
    }
    #max::before {
        color: yellow;
    }
    #min::before {
        color: green;
    }
</style>
