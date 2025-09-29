<script setup lang="ts">
    import { ref } from 'vue'
    const drawer = ref(true)
    const rail = ref(true)
    const open = ref(['Projects'])
</script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>

    <div class="row" id="mainNav">
        <v-navigation-drawer
            v-model="drawer"
            :rail="rail"
            permanent
            @click="rail = false"
        >
            <v-list>
                <v-list-item
                    prepend-avatar="/images/avatar/avatar.png"
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

    </div>
</template>

<!-- //////////////////////////////////////////////////////////////////////// -->

<style lang="css" scoped>
    /* #mainNav{
        background-color: rgb(25, 37, 146);
        height: 98%;
        padding: 1rem 0 0 0;
    } */
 
    .v-list-group__items .v-list-item {
        padding-left: 20px !important;
    }

</style>

