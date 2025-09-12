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
        <v-navigation-drawer
            expand-on-hover
            permanent
            rail
          >
            <v-list>
                <!-- no se porque verga no funcionan los icons -->
                <v-list-item
                    prepend-avatar="src/assets/vue.svg"
                    title="Hola wapo,"
                    subtitle=" soy un sidebar"
                >
                    <!-- <p></p> -->
                </v-list-item>
            </v-list>
    
            <v-divider></v-divider>
    
            <v-list density="compact" nav>
              <v-list-item to="/" title="Inicio" >
              <!-- prepend-icon="mdi-folder" title="My Files" value="myfiles" -->
                    <!-- <FontAwesomeIcon icon="fa-solid fa-house" slot="prependIcon"/> -->
              </v-list-item>

              <v-list-item prepend-icon="mdi-account-multiple" to="/demos/delivery" title="Delivery"></v-list-item>
              <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
            </v-list>
        </v-navigation-drawer>
        <!-- <div class="col">
            <p>Hola, soy un sidebar</p>
        </div>
        <ul class="nav-list">
            <li class="nav-item">
                <router-link to="/"><FontAwesomeIcon icon="fa-solid fa-house" /> Inicio </router-link>
            </li>
            <li class="nav-item"> Proyectos
                <ul class="nav-list">
                    <li class="nav-item">
                        <router-link to="/demos/delivery"><FontAwesomeIcon icon="fa-solid fa-truck" /> Delivery </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/demos/retail"><FontAwesomeIcon icon="fa-solid fa-truck" /> Retail </router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <router-link to="/about"><FontAwesomeIcon icon="fa-solid fa-address-card" /> About </router-link>
            </li>
        </ul> -->
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
    .nav-item a
    /* ,.v-list-item__prepend i */
     {
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
