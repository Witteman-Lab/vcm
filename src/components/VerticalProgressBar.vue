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
        },
        methods: {
            moveProgressBars() {
                console.log("VerticalProgressBar -> moveProgressBars");
            }
        },
        created() {},
        mounted() {
            document.addEventListener('DOMContentLoaded', () => {
                //this.moveProgressBars();
            });
        }
    }
</script>

<style scoped>
    .progressBar {
        -webkit-transform: rotate(270deg);
        -moz-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        transform: rotate(270deg);
        /* -webkit-transform-origin: center;
        -moz-transform-origin: center;
        -ms-transform-origin: center;
        transform-origin: center; */
        padding-right: 0.5vw;
    }

    .progressBar:after {
        content: "";
        /* float: left; */
        /* margin-top: 100%; */
    }

    .resize-option-label {
        text-align: center;
        padding-top: 12vh;
    }
    .resize-vertical-bar-mobile {
        margin-left: 2vw;
        margin-top: 8vh;
        /*z-index: 999;*/
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
