<script setup lang="ts">
    import { ref } from 'vue'
    const drawer = ref(true)
    const rail = ref(true)
    const open = ref(['Projects'])
</script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>

    <div class="row" id="main">
        <v-navigation-drawer
            v-model="drawer"
            :rail="rail"
            permanent
            @click="rail = false"
        >
            <v-list>
                <v-list-item
                    prepend-avatar="src/assets/images/avatar/avatar.png"
                    title="Hola wapo,"
                    subtitle="soy un nav bar"
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

            <v-list density="compact" nav
                 v-model:opened="open"
            >
                <v-list-item
                    to="/" title="Inicio"
                    prepend-icon="mdi-home-city"
                    value="home"
                    rounded="xl"
                ></v-list-item>

                <v-list-group>
                    <template v-slot:activator="{ props }">
                        <v-list-item
                            title="Proyectos" value="Projects"
                            prepend-icon="mdi-account"
                            v-bind="props"
                            rounded="xl"
                        ></v-list-item>
                    </template>

                    <v-list-item
                        to="/demos/delivery" title="Delivery"
                        prepend-icon="mdi-account"
                        value="delivery"
                        rounded="xl"
                    ></v-list-item>
                    <v-list-item
                        to="/demos/retail" title="Retail"
                        prepend-icon="mdi-account"
                        value="retail"
                        rounded="xl"
                    ></v-list-item>
                    <v-list-item
                        to="/demos/healthcare" title="Healthcare"
                        prepend-icon="mdi-account"
                        value="healthcare"
                        rounded="xl"
                    ></v-list-item>
                    <v-list-item
                        to="/demos/lottery" title="Lottery"
                        prepend-icon="mdi-account"
                        value="lottery"
                        rounded="xl"
                    ></v-list-item>
                </v-list-group>
                
                <v-list-item
                    prepend-icon="mdi-account-group-outline"
                    title="Users"
                    value="users"
                    rounded="xl"
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

<style lang="css" scoped>
    #main{
        background-color: rgb(25, 37, 146);
        height: 98%;
        padding: 1rem 0 0 0;
    }
 
    .v-list-group__items .v-list-item {
        padding-left: 20px !important;
    }

</style>

