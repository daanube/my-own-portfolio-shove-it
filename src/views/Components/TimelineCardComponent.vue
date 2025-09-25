<script lang="ts" setup>

    const props = defineProps({
        companyInfo: {
            type: Object,
            default: {},
            required: true
        },
        // companyName: {
        //     type: String,
        //     default:"",
        //     required: true
        // }, 
        // companyDuration: {
        //     type: String,
        //     default:"",
        //     required: true
        // },
        // tasksList: {
        //     type: Array,
        //     default: [],
        //     required: true
        // }
    })
</script>

<!-- ////////////////////////////////////////////////////////////////////////////////////// -->

<template>
    <v-card class="jobCard">
        <v-card-title 
        >
        <!-- style="background-color: brown;" -->
            {{ props.companyInfo.companyName }}
            <v-card-subtitle>
                {{props.companyInfo.companyDuration}}
            </v-card-subtitle>
        </v-card-title>
        <v-card-text 
        >
        <!-- style="background-color: aqua;" -->
            <ul>
                <li v-for="t in props.companyInfo.tasksList" class="taskListItem">
                    {{t}}
                </li>
            </ul>
        </v-card-text>
        <v-card-actions 
        >
        <!-- style="background-color: cadetblue;" -->
            <v-btn density="comfortable" variant="outlined" class="demoBtn">ver demo</v-btn>
        </v-card-actions>
    </v-card>  
</template>

<!-- ////////////////////////////////////////////////////////////////////////////////////// -->

<style lang="css" scoped>
    .jobCard {
        padding: 0.5rem;
        border-radius: 25px;
        background-color: var(--darkColor-2);
        border-color: var(--darkColor-1);
        border-width: 0.3rem;
        color: var(--lightColor-1);
        /* background-color: #172030; */
        /* border-color: #12d392; */
        /* color: #12d392; */
    }
    .taskListItem {
        text-align: justify;
    }
    /* .demoBtn:hover {
        color: #12d392 !important;
        border-color: #12d392 !important;
    }
    .demoBtn:hover .v-btn__content {
        color: #172030 !important;
    }
    .demoBtn span.v-btn__overlay,
    .demoBtn span.v-btn__underlay {
        background-color: transparent;
    } */
</style>
