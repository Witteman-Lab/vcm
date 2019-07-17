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

<style scoped lang="scss">
    @import "../scss/mediaQuery.scss";
    .progressBar {
        -webkit-transform: rotate(270deg);
        -moz-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        transform: rotate(270deg);
         -webkit-transform-origin: center;
        -moz-transform-origin: center;
        -ms-transform-origin: center;
        transform-origin: center;
    }

    .progressBar:after {
        content: "";
    }

    .resize-option-label {
        text-align: center;
        padding-top: 12vh;

    }
    .resize-vertical-bar-mobile {
        margin-top: 8vh;
    }
    #space_between_div {
        margin: auto;
        width: 80%;
    }


    @media only screen
    and (max-width: $breakpoint-phone) {
        .resize-vertical-bar-mobile {
            margin-top: 10vh;
        }

        .resize-option-label {
            text-align: center;
            padding-top: 14vh;
        }
    }
    @media only screen
    and (orientation: landscape)
    and (max-width: $breakpoint-tablet){
        .resize-vertical-bar-mobile {
            margin-top: 10vh;
        }

        .resize-option-label {
            padding-top: 24vh;
        }
    }
    @media only screen
    and (min-device-width: $breakpointWidthBugs)
    and (max-device-width: $breakpoint-tablet)
    and (min-device-height: $breakpointHeightBugs)
    and (orientation: landscape) {
        .resize-option-label {
            padding-top: 12vh;
        }
    }

</style>
