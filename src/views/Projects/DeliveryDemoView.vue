<script setup lang="ts">
    import SideBarLayout from '../../layouts/SideBarLayout.vue';
</script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>

    <SideBarLayout>
        <div class="row" id="delivery">
            <div class="col-12">
                <p>Hola, soy delivery</p>
            </div>
        </div>
    </SideBarLayout>

</template>

<!-- //////////////////////////////////////////////////////////////////////// -->

<style lang="css">
    #delivery{
        display: flex;
        flex-basis: 90%;
        padding: 1rem 2rem;
    }
</style>
