<template>
    <div id="app" class="container">
        <div class="column is-half-desktop is-center">
            <h1 class="title has-text-primary">{{this.labels.title}}</h1>
            <!--<h1>{{this.labels.title}}</h1>-->
            <!-- <a id="selectLanguage" class="button" v-on:click="this.selectCurrentLanguage">{{this.labels.language}}</a><br><br/> -->
            <button id="selectLanguage" class="button" v-on:click="this.changeLanguage">{{this.labels.language}}</button>
            <p id="description">{{this.labels.description1}}
                {{this.labels.description2}}
                {{this.labels.description3}}</p>
            <br/>
        </div>
        <div class="columns">
            <!--<span id="scaleLeft">{{this.labels.leftScaleLabel}}</span>-->
            <!--<span id="scaleRight">{{this.labels.rightScaleLabel}}</span>-->
            <!--<br>-->
            <div class="column">
                <span id="scaleLeft">{{this.labels.leftScaleLabel}}</span>
                <span id="scaleRight">{{this.labels.rightScaleLabel}}</span>
                <br>
                <div v-for="(slider, index) in this.numberOfSlider" ref="its"  :key="slider">
                    <SliderRange :top-slider-label="topSliderLabel + (index + 1)" class="space_between_slider" v-bind:ref="slider" :option="options[index]"></SliderRange>
                </div>
                <br/>
                <br/>
                <br/>
            </div>

            <div class="column is-centered" style="display: flex;">
                <div v-for="(progress, index) in this.numberOfSlider" class="space_between_progress" id="graphics" :key="progress + 'progress'">
                    <!--                <Graphics></Graphics>-->
                    <VerticalProgressBar  v-bind:ref="progress" :value="getProgressValue(index)"  :parameters="getParameters(index)" ></VerticalProgressBar>
                </div>
            </div>
        </div>
        <!--<SliderRange v-bind:title="message"></SliderRange>-->

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
                topSliderLabel: ""
            };
        },
        props:{},
        methods: {
            /**
             * ---> ------------------ will be completed soon -------------------
             * @param none
             * @return none
             */
            changeLanguage() {
                if (this.isLanguageChanged)
                    this.labels = textFr;
                else
                    this.labels = textEn;
                this.topSliderLabel = this.labels.topSliderLabel;
                this.isLanguageChanged = !this.isLanguageChanged;
                this.$forceUpdate();
            },
            /**
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
                        position: i
                    };
                    this.options.push(option);
                    this.progressValues.push(option.defaultValue);
                }
            },
            setProgressParams() {
                for (let i = 0; i < this.numberOfSlider; i++) {
                    let  option  = {
                        text: {
                            hideText: true
                        },
                        progress: {
                            color: config.processSliderColor[i],
                            backgroundColor: config.backgroundDivColor[i]
                        },
                        layout: {
                            height: 70,
                            width:  220,
                            verticalTextAlign: 61,
                            horizontalTextAlign: 43,
                            zeroOffset: 0,
                            strokeWidth: 30,
                            progressPadding: 0,
                            type: 'line'
                        }
                    };
                    this.parametre.push(option);
                    this.progressValues.push(option.defaultValue);
                }
            },
            /**
             *
             * @param value
             * @param position
             * @param inverseValue
             */
            setCurrentProgressValue(value, position, inverseValue) {
                for (let i = 0; i < this.numberOfSlider; i++) {
                    if (i === position) {
                        console.log("change current : " + i);
                        this.progressValues[i] = value;
                    } else {
                        console.log("change others : " + i);
                        console.log(this.$refs[i + 1]);
                        this.$refs[i + 1][0].setSlider(inverseValue);
                        this.progressValues[i] = inverseValue;
                    }
                }
                this.$forceUpdate();
            },
            /**
             *
             * @param index
             * @returns {*}
             */
            getProgressValue(index) {
                return this.progressValues[index];
            },
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
        margin: 0 auto;
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
    #slidersScale {
        overflow:auto;
    }

    /*@media screen max-width{*/
    /*    */
    /*}*/
</style>
