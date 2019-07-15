<template>
    <div>
        <div>
            <progress-bar class="progressBar resize-vertical-bar-mobile" :options="parameters" :value="value"/>
        </div>
        <div  id="space_between_div" class="resize-option-label"><span v-bind:style="{color: textColor, border: borderText,fontWeight: textBold}">{{optionGraphLabel}}</span></div>
    </div>
</template>

<script>

    export default {
        name: "VerticalProgressBar",
        data() {
            return {
                textColor: String,
            }
        },
        props: {
            value: Number,
            parameters: Object,
            optionGraphLabel: String,
            borderText: String,
            textBold: String


        },
        methods: {



        },
        created() {},
        mounted() {
            // console.log(this.parameters.progress.color);
            this.textColor = this.parameters.progress.color;
            document.addEventListener('DOMContentLoaded', () => {

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
         -webkit-transform-origin: center;
        -moz-transform-origin: center;
        -ms-transform-origin: center;
        transform-origin: center;
        /*padding-right: 0.5vw;*/
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
        margin-top: 8vh;
        /*z-index: 999;*/
    }
    #space_between_div {
        /*!*display: flex;*!*/
        /*justify-content: center;*/
        /*width: 100%;*/
        /*display: inline-block;*/
        margin: auto;
        width: 80%;
    }


    @media screen and (max-width: 420px) {
        .resize-vertical-bar-mobile {
            margin-top: 10vh;
        }

        .resize-option-label {
            text-align: center;
            padding-top: 14vh;
        }
    }
    @media (orientation: landscape) and (max-width: 812px){
        .resize-vertical-bar-mobile {
            margin-top: 10vh;
        }

        .resize-option-label {
            /*text-align: center;*/
            padding-top: 24vh;
        }
    }
</style>
