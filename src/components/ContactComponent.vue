<script lang="ts" setup>
    const contactList = [
        {
            text: "CV",
            type: "cv",
            icon: "mdi mdi-file-document",
            link: ""
        },
        {
            text: "daanube@gmail.com",
            type: "mail",
            icon: "mdi mdi-email-outline",
            link: ""
        },
        {
            text: "LinkedIn",
            type: "linkedin",
            icon: "mdi mdi-linkedin",
            link: "https://www.linkedin.com/in/daanube/"
        }        
    ]

    function handleContactAction(contact:any) {
        alert(contact.text)
        // switch(contact.type){
        //     case "cv":
        //          descargar el cv
        //         break;
        //     case "mail":
        //          copiar correo en el portapapeles
        //         break;
        //     case "linkedin":
        //          abrir perfil en una pestania nueva
        //         break;
        // }
    }
</script>

<!-- //////////////////////////////////////////////////////////////////////// -->

<template>
    <article class="contactListArticle">
        <v-chip-group v-for="c in contactList">
            <v-chip class="contactChip" :prepend-icon="c.icon" :link="false" @click="handleContactAction(c)">
              {{c.text}}
            </v-chip>
        </v-chip-group>
    </article>
</template>

<!-- //////////////////////////////////////////////////////////////////////// -->

<style lang="css" scoped>
    .contactListArticle {
        margin: 1rem auto;
        padding: 0 1rem;
        display: flex;
        flex-flow: row;
        color: var(--baseColor);
    }
    .contactChip {
        cursor: pointer;
    }
</style>
