<template>
    <div id="app" class="container">
        <!--instructions -->
        <div class="column is-half-desktop is-full-mobile is-centered ">
            <h1 class="title has-text-primary">{{this.labels.title}}</h1>
            <button id="selectLanguage" class="button" v-on:click="this.changeLanguage">{{this.labels.language}}</button>
            <br>
            <br>
            <p id="description">{{this.labels.description1}}
                {{this.labels.description2}}{{this.labels.description3}}</p><button id="collapsible" class="collapsible">Instructions</button>
        </div>
        <!--descriptions on sliders-->

        <div class="columns is-centered">
            <div class="column is-center description-align" >
                <span id="scaleLeft">{{this.labels.leftScaleLabel}}</span>
                <span id="scaleRight">{{this.labels.rightScaleLabel}}</span>
                <br>
                <!--slider-->
                <div v-for="(slider, index) in this.numberOfSlider" ref="its"  :key="slider">
                    <SliderRange :top-slider-label="topSliderLabel + (index + 1)" class="space_between_slider" v-bind:ref="slider" :option="options[index]"></SliderRange>
                </div>

            </div>
            <!--graphics-->
            <div class="column is-centered has-text-centered">
                <div class="is-flex">
                    <div v-for="(progress, index) in this.numberOfSlider" class="space_between_progress" id="graphics" :key="progress + 'progress'">
                        <VerticalProgressBar :option-graph-label="optionGraphLabel[index] " v-bind:ref="progress" :value="getProgressValue(index)"  :parameters="getParameters(index)" ></VerticalProgressBar>
                    </div>
                </div>

                <div class="results" id="result" style="display: none">
                    <p>{{this.message}} {{this.labels.result}}</p>
                </div>
            </div>
        </div>


    </div>
</template>

<script>

    import SliderRange from './components/SliderRange.vue';
    // import Graphics from './components/Graphics.vue';
    import textEn from "./assets/json/textEn.json";
    import textFr from "./assets/json/textFr.json";
    import config from "./assets/json/config.json";
    import VerticalProgressBar from "./components/VerticalProgressBar";


    export default {
        name: 'app',
        components: {VerticalProgressBar, SliderRange},
        data() {
            return {
                isLanguageChanged: true,
                currentLanguage: "",
                progressValues: [],
                numberOfSlider: 0,
                message: "yes",
                options : [],
                parametre:[],
                topSliderLabel: "",
                optionGraphLabel: [],
            };
        },
        props:{},
        methods: {
            /**
             * ---> ------------------ will be completed soon -------------------
             * @return none
             */
            changeLanguage() {
                if (this.isLanguageChanged)
                    this.labels = textFr;
                else
                    this.labels = textEn;
                this.topSliderLabel = this.labels.topSliderLabel;
                this.optionGraphLabel = this.labels.optionGraphLabel;
                this.isLanguageChanged = !this.isLanguageChanged;
                this.$forceUpdate();
            },

            /**
             * ---> ------------------ will be completed soon -------------------
             *
             */
            setBackgroundColor() {
                for (let i = 0; i < this.$refs["its"].length; i++) {
                    for (let j = 0; j < this.numberOfSlider; j++) {
                        this.$refs["its"][i].style.backgroundColor = config.backgroundDivColor[j];
                        i++;
                    }
                }
            },

            /**
             * ---> ------------------ will be completed soon -------------------
             *
             */
            setOptions() {
                for (let i = 0; i < this.numberOfSlider; i++) {
                    let option = {
                        inDragging: false,
                        height: config.lineHeight,
                        processStyle: {
                            backgroundColor: config.processSliderColor[i],
                        },
                        dotSize:config.dotSize,
                        min: config.min,
                        max: config.max,
                        interval: config.interval,
                        tooltip: 'none',
                        defaultValue: config.value,
                        position: i,
                    };
                    this.options.push(option);
                    this.progressValues.push(option.defaultValue);
                }
            },

            /**
             * ---> ------------------ will be completed soon -------------------
             *
             */
            activeInstruction(){
                var coll = document.getElementById("collapsible");
                coll.addEventListener("click", function() {
                    this.classList.toggle("active");
                    var content = this.previousElementSibling;
                    if (content.style.display === "block") {
                        content.style.display = "none";
                    } else {
                        content.style.display = "block";
                    }
                });
            },

            /**
             * ---> ------------------ will be completed soon -------------------
             *
             */
            setProgressParams() {
                for (let i = 0; i < this.numberOfSlider; i++) {
                    let  option  = {
                        text: {
                            hideText: true
                        },
                        progress: {
                            color: config.processSliderColor[i],
                            backgroundColor: config.progressColor,
                        },
                        layout: {
                            height: 70,
                            width:  220,
                            verticalTextAlign: 61,
                            horizontalTextAlign: 43,
                            zeroOffset: 0,
                            strokeWidth:100,
                            progressPadding: 0,
                            type: 'line'
                        }
                    };
                    this.parametre.push(option);
                    this.progressValues.push(option.defaultValue);
                }
            },

            /**
             * ---> ------------------ will be completed soon -------------------
             *
             */
            setResult() {
                let divElement = document.getElementById("result");
                console.log("divElement", divElement);
                for (let i = 0; i < this.numberOfSlider; i++){
                    let value = this.$refs[i + 1][0].getSliderValue();
                    if (value > 50) {
                        if (divElement.style.display !== "block")
                            divElement.style.display = "block";
                        divElement.style.color = config.processSliderColor[i];
                        divElement.style.border = "1px solid" + config.processSliderColor[i];
                        divElement.style.marginTop = "3vh";
                        divElement.style.marginLeft = "3vw";
                        divElement.style.marginRight = "2vw";
                        this.message = this.labels.optionGraphLabel[i];
                    } else if (value === 50) {
                        divElement.style.display = 'none';
                    }
                }


            },

            /**
             * ---> ------------------ will be completed soon -------------------
             * @param value
             * @param position
             * @param inverseValue
             */
            setCurrentProgressValue(value, position, inverseValue) {
                for (let i = 0; i < this.numberOfSlider; i++) {
                    if (i === position) {
                        // console.log("change current : " + i);
                        this.progressValues[i] = value;
                        console.log("la valeur du premier slider", value);
                    } else {
                        // console.log("change others : " + i);
                        // console.log(this.$refs[i + 1]);
                        console.log("la valeur du deuxieme slider", inverseValue);
                        this.$refs[i + 1][0].setSlider(inverseValue);
                        this.progressValues[i] = inverseValue;
                    }
                }
                this.$forceUpdate();
            },

            /**
             * ---> ------------------ will be completed soon -------------------
             * @param index
             * @returns {*}
             */
            getProgressValue(index) {
                return this.progressValues[index];
            },

            /**
             * ---> ------------------ will be completed soon -------------------
             * @param index
             * @returns {*}
             */
            getParameters(index) {
                return this.parametre[index];
            },
        },
        created() {
            this.labels = textEn;
        },
        mounted() {
            this.numberOfSlider = config.numberOfSlider;
            this.topSliderLabel = this.labels.topSliderLabel;
            this.optionGraphLabel = this.labels.optionGraphLabel;
            this.activeInstruction();
            this.setOptions();
            this.setProgressParams();
            document.addEventListener('DOMContentLoaded', () => {
                this.setBackgroundColor();
            });
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
    }

    .space_between_slider {
        margin-bottom: 10px;
    }

    .space_between_progress {
        display: flex;
        justify-content: center;
        margin-right: -25%;
        overflow-x: hidden;

    }

    h1 {
        color:#70ada6;
        font-size:1.4em;
    }
    #scaleLeft {
        float: left;
        margin-left: 5px;
        text-align: left;
    }
    #scaleRight {
        float: right;
        margin-right: 5px;
        text-align: right;
    }
    .collapsible {
        color: black;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        border: none;
        text-align: center;
        outline: none;
        font-size: 15px;
    }

    /*.active, .collapsible:hover {*/
    /*!*background-color: #555;*!*/
    /*}*/

    #description {
        display: none;
        overflow: hidden;
    }
    /*on destop*/
    @media screen and (min-width: 600px) {
        .collapsible{
            display: none;
        }
        #description{
            display: block;
        }
    }
    /* on small screen */
    @media screen and (max-width: 600px) {
        #description{
            border: 2px solid #DDDDDD;
        }
        .column {

        }
        .description-align {
            margin-left: 3vw;
            margin-right: 3vw;
        }
    }
</style>
