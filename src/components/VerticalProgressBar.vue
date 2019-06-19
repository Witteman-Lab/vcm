<template>
    <div>
        <div>
            <progress-bar class="progressBar resize-vertical-bar-mobile" :options="parameters" :value="value"/>
        </div>
        <div id="optionLabel" class="resize-option-label">{{optionGraphLabel}}</div>
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
            // moveProgressBars() {
            //     console.log("VerticalProgressBar -> moveProgressBars");
            // },
            setOptionColor(elementcolor){
                var val = document.getElementById("optionLabel");

                val.style.color = elementcolor;
                console.log("la coleur", elementcolor);
                console.log("la valeur", val);
            }
        },
        created() {},
        mounted() {
            // this.setOptionColor();
            document.addEventListener('DOMContentLoaded', () => {
                //this.moveProgressBars();
                // this.setOptionColor();
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
