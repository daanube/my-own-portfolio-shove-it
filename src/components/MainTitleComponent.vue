<script lang="ts" setup>
    const props = defineProps({
        mainTitleText: {
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
    <div class="row" style="position: relative;">
        <div class="col-12">
            <div id="mainTitleImg">
                <div class="mainTitle">
                    {{ props.mainTitleText }}
                </div>
            </div>
        </div>
    </div>
</template>

<!-- ////////////////////////////////////////////////////////////////////////////////////// -->

<style lang="css" scoped>
    .mainTitle {
        display: flex;
        flex-basis: 100%;
        padding: 0;
        margin: 0 auto;
        margin-left: 0.7rem;
        padding: 5rem 0 5rem 0;
        color: #fff;
        text-align: center;
        font-size: 120px;
        font-weight: bolder;
        text-transform: uppercase;
        z-index: 1;
    }
    #mainTitleImg {
        align-content: center;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 45%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom;
        background-attachment: fixed;
        line-height: 8rem;
        display: flex;
    }

    #mainTitleImg::before {
        background-image: v-bind("props.imageUrl");
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: cover;
        z-index: 1;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom;
        background-attachment: fixed;
        filter: opacity(0.6);
    }
</style>
