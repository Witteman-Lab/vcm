<template>
    <div>
        <div>
            <progress-bar class="progressBar resize-vertical-bar-mobile" :options="parameters" :value="value"/>
        </div>
        <div class="resize-option-label">{{optionGraphLabel}}</div>
    </div>
</template>

<script>

    export default {
        name: "VerticalProgressBar",
        data() {
            return {}
        },
        props: {
            value: Number,
            parameters: Object,
            optionGraphLabel: String
        }
    }
</script>

<style scoped>
    .progressBar {
        -webkit-transform: rotate(270deg);
        -moz-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        transform: rotate(270deg);
        -webkit-transform-origin: center;
        -moz-transform-origin: center;
        -ms-transform-origin: center;
        transform-origin: center;
        padding-right: 0.5vw;
    }

    .resize-option-label {
        text-align: center;
        padding-top: 10vh;
    }
    .resize-vertical-bar-mobile {
        margin-left: 2vw;
        margin-top: 10vh;
    }


    @media screen and (max-width: 420px) {
        .resize-vertical-bar-mobile {
            margin-left: 2vw;
            margin-top: 10vh;
        }

        .resize-option-label {
            text-align: center;
            padding-top: 14vh;
        }
    }
</style>
