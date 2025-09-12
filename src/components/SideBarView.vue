<script setup lang="ts">
    import { ref } from 'vue'
    const drawer = ref(true)
    const rail = ref(true)
</script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>

    
    <div class="row" id="main">
        <v-icon icon="$vuetify"></v-icon>
        <v-icon icon="mdi-home" />
        <v-navigation-drawer
            v-model="drawer"
            :rail="rail"
            permanent
            @click="rail = false"
        >
            <v-list>
                <v-list-item
                    prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
                    title="John Leider"
                >
                    <template v-slot:append>
                        <v-btn
                            icon="mdi-chevron-left"
                            variant="text"
                            @click.stop="rail = !rail"
                        ></v-btn>
                    </template>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list density="compact" nav>
                <v-list-item
                    to="/" title="Inicio"
                    prepend-icon="mdi-home-city"
                    value="home"
                ></v-list-item>
                <v-list-item
                    to="/demos/delivery" title="Delivery"
                    prepend-icon="mdi-account"
                    value="delivery"
                ></v-list-item>
                <v-list-item
                    prepend-icon="mdi-account-group-outline"
                    title="Users"
                    value="users"
                ></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <!-- <v-navigation-drawer
            expand-on-hover
            permanent
            rail
          >
            <v-list>
                <v-list-item
                    prepend-avatar="src/assets/vue.svg"
                    title="Hola wapo,"
                    subtitle=" soy un sidebar"
                >
                </v-list-item>
            </v-list>
    
            <v-divider></v-divider>
    
            <v-list density="compact" nav>
              <v-list-item to="/" title="Inicio" 
                prepend-icon="mdi-twitter" value="inicio"
              >
                <template v-slot:prepend>
                    <v-icon size="x-large"></v-icon>
                </template>
              </v-list-item>

              <v-list-item prepend-icon="mdi-account-multiple" to="/demos/delivery" title="Delivery"></v-list-item>
              <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
            </v-list>
        </v-navigation-drawer> -->
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
