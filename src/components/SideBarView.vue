<script setup lang="ts"></script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>
    <div class="row" id="main">
        <div class="col">
            <p>Hola, soy un sidebar</p>
        </div>
        <ul>
            <li>
                <router-link to="/">Inicio </router-link>
            </li>
            <li>
                <router-link to="/deliverydemo">Delivery </router-link>
            </li>
            <li>
                <router-link to="/about">About </router-link>
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
</style>
