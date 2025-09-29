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
        <v-card-title style="display:grid;grid-template-areas: 'left right';">
            <!-- <div style="grid-area: left;">
                {{ props.companyInfo.companyName }}
            </div>
            <div style="grid-area: right; opacity: 0.7;">
                {{props.companyInfo.companyDuration}}
            </div> -->
            <!-- <v-card-subtitle>
            </v-card-subtitle> -->
        </v-card-title>
        <v-card-text>
            <ul>
                <li v-for="t in props.companyInfo.tasksList" class="taskListItem">
                    {{t}}
                </li>
            </ul>
        </v-card-text>
        <v-card-actions>
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
    .v-card-title,
    .v-card-text {
        padding: 0;
    }
    .v-card-actions {
        padding: 0 0.5rem;
        min-height: 40px;
    }
    .v-card-title {
        font-size: 1rem;
    }
    .v-card-subtitle {
        font-size: 0.8rem;
    }
</style>
