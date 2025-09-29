<script setup lang="ts">
    const currentYear = new Date().getFullYear()
</script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>
    <div class="row" id="footer">
        <div class="col-12">
            <span>Hola, soy un footer <v-icon>mdi-copyright</v-icon>{{ currentYear }}</span>
        </div>
    </div>
</template>

<!-- //////////////////////////////////////////////////////////////////////// -->

<style lang="css" scoped>
    
</style>
