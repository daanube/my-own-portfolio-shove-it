<script setup lang="ts">
    /* add fontawesome core */
    import { library } from '@fortawesome/fontawesome-svg-core'
    /* import all the icons in Free Solid, Free Regular, and Brands styles */
    import { fas } from '@fortawesome/free-solid-svg-icons'
    import { far } from '@fortawesome/free-regular-svg-icons'

    library.add(fas, far)
    /* import font awesome icon component */
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>
    <div class="row" id="main">
        <div class="col">
            <p>Hola, soy un sidebar</p>
        </div>
        <ul class="nav-list">
            <li class="nav-item">
                <router-link to="/"><FontAwesomeIcon icon="fa-solid fa-house" /> Inicio </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/deliverydemo"><FontAwesomeIcon icon="fa-solid fa-truck" /> Delivery </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/about"><FontAwesomeIcon icon="fa-solid fa-address-card" /> About </router-link>
            </li>
        </ul>
    </div>
</template>

<!-- //////////////////////////////////////////////////////////////////////// -->

<style lang="css">
    #main{
        background-color: rgb(25, 37, 146);
        height: 98%;
        padding: 1rem 0 0 0;
    }
    .nav-list {
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        text-align: left;
    }
    .nav-item {
        height: 2rem;
        margin: 6px 5px;
    }
    .nav-item a {
        width: 100%;
        color: #fff;
        display: block;
        height: 2rem;
        padding-top: 5px;
    }
    .nav-item a svg {
        padding-left: 1rem;
    }
    
    .nav-item :hover {
        border-radius: 15px;
        background-color: #e78484;
    }
</style>
