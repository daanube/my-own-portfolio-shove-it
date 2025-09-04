<script setup lang="ts"></script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>
    <div class="row" id="main">
        <div class="col">
            <p>Hola, soy un sidebar</p>
        </div>
        <ul class="nav-list">
            <li class="nav-item">
                <i></i><router-link to="/">Inicio </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/deliverydemo">Delivery </router-link>
            </li>
            <li class="nav-item">
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
    .nav-list {
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-direction: column;
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
    .nav-item :hover {
        border-radius: 15px;
        background-color: #e78484;
    }
</style>
