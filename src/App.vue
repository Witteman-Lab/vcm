<template>
    <div id="app" class="container">
        <!--Instructions -->
        <div id="descriptionTitle" class="column is-centered">
            <h1 id="title" class="title has-text-primary is-size-5-mobile is-size-3-desktop">{{this.labels.title}}</h1>
            <!-- <button v-if="!selectedLanguage" id="selectLanguage" class="button" v-on:click="this.changeLanguage">{{this.labels.language}}</button> -->
            <button id="collapsible" class="button is-primary collapsible"  v-on:click="activeInstruction">{{this.instruction[instructionToggle]}}</button>
            <p id="description" class="notification has-text-left has-background-white">
                {{this.labels.description}}
                <br /><br />
                {{this.labels.dashedSpanTxt[0]}}<span id="editable" class="editableTextStyle ">{{this.labels.dashedSpanTxt[1]}}</span>{{this.labels.dashedSpanTxt[2]}}
            </p>
        </div>
        <!--Sliders scales-->
        <div id="SliderGraphics" class="columns is-centered ">
            <div class="column sliders is-center descriptionAlign">
                <div style="display: flex;justify-content: space-between;">
                    <span id="scaleLeft" class="has-text-left editableText">{{this.labels.leftScaleLabel}}</span>
                    <span id="scaleRight" class="has-text-right editableText">{{this.labels.rightScaleLabel}}</span>
                </div>

                <!--Sliders-->
                <div v-for="(slider, index) in this.numberOfSlider" ref="its" :key="slider">
                    <SliderRange :index="index" :top-slider-label="topSliderLabel + (index + 1)" class="space_between_slider" v-bind:ref="slider" :option="options[index]"></SliderRange>
                </div>

            </div>

            <!--Graphics-->
            <div class="column slider is-centered has-text-centered">
                <div style="display: flex;justify-content: space-evenly">
                    <div v-for="(progress, index) in this.numberOfSlider" :ref="'graph-' + index" :id="'graph-' + index" class="space_between_progress" :key="progress + 'progress'">
                        <VerticalProgressBar id="optionLabel" :text-bold="getTextBold(index)" :border-text="getBorderText(index)" :option-graph-label="optionGraphLabel[index]" v-bind:ref="progress" :value="getProgressValue(index)" :parameters="getParameters(index)" ></VerticalProgressBar>
                    </div>
                </div>
                <div class="results" id="result" style="border: 2px solid">
                    <p id="options" class="options has-text-centered"><b>{{this.message}}</b>{{this.labels.result}}</p>
                </div>
            </div>
        </div>


    </div>
</template>

<script>

// import mediaQuery from './scss/main.scss'
import SliderRange from './components/SliderRange.vue';
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
            instructionToggle: 0,
            message: "",
            instruction: [],
            options: [],
            parameter: [],
            topSliderLabel: "",
            optionGraphLabel: [],
            borderText: [],
            textBold: []
        };
    },
    props:{
        selectedLanguage: String
    },
    methods: {

        /**
        * ---> This method change language
        * @function {changeLanguage}
        * @param none
        * @return none
        */
        changeLanguage() {
            if (this.isLanguageChanged)
            this.labels = textFr;
            else
            this.labels = textEn;
            this.topSliderLabel = this.labels.topSliderLabel;
            this.optionGraphLabel = this.labels.optionGraphLabel;
            this.instruction = this.labels.instruction;
            this.isLanguageChanged = !this.isLanguageChanged;
            this.$forceUpdate();
        },

        /**
        * This method to set the background color of slider accordingly to their slider color
        *@function {setBackgroundColor}
        * @param none
        * @return none
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
        * ---> This method set-on slider' range depending on parameters on json file
        * @function {setOptions}
        * @param none
        * @return none
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
        * ---> This method change the description to a button instruction on small screen
        * @function {activeInstruction}
        * @param el
        * @return none
        */
        activeInstruction(el) {
            let coll = document.getElementById("collapsible");
            let content = el.target.nextElementSibling;

            if (content.style.display === "block") {
                this.instructionToggle = 0;
                content.style.display = "none";
            } else {
                this.instructionToggle = 1;
                content.style.display = "block";
                coll.style.animation = "";
            }
        },

        /**
        * ---> This method set on progress (graphics)  depending on parameters on json file
        * @function {setOptions}
        * @param none
        * @return none
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
                        type: 'line',
                    }
                };
                this.parameter.push(option);
                this.progressValues.push(option.defaultValue);
            }
        },

        /**
        * ---> This method is for setting results according to the slider actual value
        * ---> Also, set some css style of the output result option
        * @function {setResult}
        * @param none
        * @return none
        */
        setResult() {
            let divElement = document.getElementById("result");
            for (let i = 0; i < this.numberOfSlider; i++) {
                let value = this.$refs[i + 1][0].getSliderValue();
                if (value > 50) {
                    if (divElement.style.visibility !== "hide")
                    divElement.style.visibility = "visible";
                    divElement.style.color = config.processSliderColor[i];
                    divElement.style.border = "2px solid" + config.processSliderColor[i];
                    divElement.style.marginTop = "1vh";

                    // TEMPORARY
                    // We know that the editable options are the 4th and 5th editable texts, so compared to the sliders index, we can simply add 4 the get the correct editable text id
                    let num = i + 4;
                    let option = document.querySelector("#editableTextField" + num);

                    this.message = option.innerText;
                    // this.message = this.labels.optionGraphLabel[i];

                } else if (value === 50) {
                    divElement.style.visibility = 'hidden';
                }
            }
        },

        /**
        * ---> This method  set the text to bold when the slider default value change
        * @function {setBorderOption}
        * @param none
        * @return none
        */
        setBorderOption(){
            for (let i = 0; i < this.numberOfSlider; i++) {
                let value = this.$refs[i + 1][0].getSliderValue();
                if (value > 50 ) {
                    this.textBold[i] = "bolder";
                } else {
                    this.textBold[i] = "";
                }

            }
        },

        /**
        * ---> This method set the current progress value of slider accordingly to it's actual value
        * @param value
        * @param position
        * @param inverseValue
        * @function {setCurrentProgressValue}
        * @return none
        */
        setCurrentProgressValue(value, position, inverseValue) {
            for (let i = 0; i < this.numberOfSlider; i++) {
                if (i === position) {
                    this.progressValues[i] = value;
                } else {
                    this.$refs[i + 1][0].setSlider(inverseValue);
                    this.progressValues[i] = inverseValue;
                }
            }
            this.$forceUpdate();
        },

        /**
        * ---> This methods get the progress current value
        * @function {getProgressValue}
        * @param index
        * @returns {*}
        */
        getProgressValue(index) {
            return this.progressValues[index];
        },
        /**
        * ---> This methods get the border text data
        * @function {getBorderText}
        * @param index
        * @returns {*}
        */
        getBorderText(index) {
            return this.borderText[index];
        },
        /**
        * This methods get the text index
        * @function {getTextBold}
        * @param index
        * @returns {*}
        */
        getTextBold(index) {
            return this.textBold[index];
        },

        /**
        * ---> This methods get parameter of progress
        * @function {getParameters}
        * @param index
        * @returns {*}
        */
        getParameters(index) {
            return this.parameter[index];
        },

    },
    created() {
        let pathname = window.location.pathname;
        let pathnameParts = pathname.split("/");
        let langPosition = pathnameParts.length - 2;
        let lang = pathnameParts[langPosition];
        if (lang === "fr") {
            this.labels = textFr;
        } else {
            this.labels = textEn;
        }
    },
    mounted() {
        this.numberOfSlider = config.numberOfSlider;
        this.topSliderLabel = this.labels.topSliderLabel;
        this.optionGraphLabel = this.labels.optionGraphLabel;
        this.instruction = this.labels.instruction;

        this.setOptions();
        this.setProgressParams();

        let coll = document.getElementById("collapsible");
        coll.style.animation = "collapsible 2s linear infinite";

      this.$refs.slider.stopPaste();
      document.addEventListener('DOMContentLoaded', () => {


      });

    }
}
</script>

<style lang="scss" >
@import "./scss/mediaQuery.scss";

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    padding: 10px;

}

@keyframes collapsible {
    0%{opacity:1;}
    50%{opacity:0.25;}
    100%{opacity:1;}
}

.space_between_slider {
    margin-bottom: 10px;
}

.space_between_progress {
    display: flex;
    justify-content: center;
    width: 30%;
}

#result{
    visibility: hidden;
}

h1#title{
    font-size:1.4em;
    margin: 0 0 12px;
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
    width: auto;
    margin: 0 0 10px 10px;
    font-weight: bold;
}

#description {
    display: none;
    overflow: hidden;
    line-height: 1.5;
    padding: 0;
}

p#options {
    padding: 2px;
    border: 1px solid;
}
#descriptionTitle{
    width: 50%;
}

.editableText, .editableTextStyle {
    border: 1px dashed #666;
    padding: 2px;
    pointer: copy;
}

/*for tablet and laptop devices*/
@media only screen
and (min-width: $breakpoint-tablet){
    button#collapsible{
        display: none;

    }
    #description{
        display: block !important;
    }
    #descriptionTitle{
        width: 50%;
    }
}

/*ajuste css media queries for phone and tablets*/
@media  only screen
and (max-width: $breakpoint-tablet)
and (max-height: $breakpoint-tablet){
    #description{
        border: 2px solid #DDDDDD;
        position: absolute;
        z-index: 999;
        padding: 12px;
        margin: 12px;
    }
    .column {
        width: 100%;
        margin: 0 auto;
        padding: 0;
        line-height: 1;
    }
    h1#title{
        font-size:1.4em;
        margin: 0 0 8px;
    }
    div#descriptionTitle{
        padding: 0;
    }
    .space_between_slider {
        margin-bottom: 3px;
    }
    #descriptionTitle{
        width: 100%;
    }

}
/* for a specifie small devices with width as tablet and height greater than desktop or equal*/
@media only screen
and (min-device-width: $breakpoint-tabletIPadDevices)
and (max-device-width: $breakpoint-tabletIPadDevices)
and (orientation: portrait)
and (-webkit-min-device-pixel-ratio: 2) {
    .column {
        display: flex;
    }
    #description {
        border: 2px solid #DDDDDD;
        position: absolute;
        z-index: 999;
        padding: 12px;
    }

}
/* orientation: landscape*/
@media only screen
and (orientation: landscape)
and (max-width: $breakpoint-tablet){
    #description{
        border: 2px solid #DDDDDD;
        position: absolute;
        z-index: 999;
        padding: 12px;
    }

    .slider {
        width: 10%;
    }

    .columns{
        display: flex;

    }

    #result{
        position: relative;
        top: 1vw;
    }

    h1#title{
        font-size:1.4em;
        margin: 0 0 8px;
    }

    #descriptionTitle {
        padding: 0;
    }

    #SliderGraphics .slider{
        padding: 0 0 0 12px;
    }

    .space_between_slider {
        margin-bottom: 3px;
    }
    #app{
        /*padding: 0 0 0 5px;*/
        margin: 0 24px 0 0;
    }
}
/* to resolved the bugs when the device width is 824 and orientation landscape*/
@media only screen
and (orientation: landscape)
and (min-device-width: $breakpoint-tablet)
and (max-device-width: $breakpoint-tablet){
    #description{
        line-height: 1.5;
        padding: 0;
        position: relative;
        width: 50%;
        border: none;
        display: block;
    }
}
</style>
