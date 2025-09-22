<script lang="ts" setup>
    const props = defineProps({
        headText: {
            type: String,
            default: "",
            required: true,
        },
        imageUrl: {
            type: String,
            default: "",
            required: true,
        }
    });
</script>

<!-- ////////////////////////////////////////////////////////////////////////////////////// -->

<template>
    <div class="row">
        <div class="col-12">
            <div id="HeadImg">
                <div class="Head">
                    {{ props.headText }}
                </div>
            </div>
        </div>
    </div>
</template>

<!-- ////////////////////////////////////////////////////////////////////////////////////// -->

<style lang="css" scoped>
    .Head {
        margin: 0 auto;
        padding: 3rem 0;
        width: 100%;
        color: #fff;
        text-align: center;
        font-size: 140px;
        font-weight: bolder;
    }
    #HeadImg {
        align-content: center;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 45%;
        background-image: v-bind("props.imageUrl");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        filter: saturate(0.5);
        line-height: 8rem;
    }
</style>
