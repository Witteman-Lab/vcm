<template>
    <div id="app" class="container">
        <div class="column is-half is-center">
            <h1 class="title has-text-primary">{{this.labels.title}}</h1>
            <!--<h1>{{this.labels.title}}</h1>-->
            <!-- <a id="selectLanguage" class="button" v-on:click="this.selectCurrentLanguage">{{this.labels.language}}</a><br><br/> -->
            <button id="selectLanguage" class="button" v-on:click="this.changeLanguage">{{this.labels.language}}</button>
            <p id="description">{{this.labels.description1}}
                {{this.labels.description2}}
                {{this.labels.description3}}</p>
            <br/>
        </div>
        <div class="column is-half-desktop  has-text-centered">
            <!--<span id="scaleLeft">{{this.labels.leftScaleLabel}}</span>-->
            <!--<span id="scaleRight">{{this.labels.rightScaleLabel}}</span>-->
            <!--<br>-->
            <span id="scaleLeft">{{this.labels.leftScaleLabel}}</span>
            <span id="scaleRight">{{this.labels.rightScaleLabel}}</span>
            <br>
            <div v-for="(slider) in this.numberOfSlider" ref="its"  :key="slider">
                <SliderRange v-bind:ref="slider" :processStyle="red"></SliderRange>
                <!--<span>{{this.labels.topSliderLabel}}</span>-->
            </div>
            <br/>
            <div id="graphics">
                <Graphics ></Graphics>
             <div>

        </div>
            </div>



        </div>
        <!--<SliderRange v-bind:title="message"></SliderRange>-->

  </div>
</template>

<script>

    import SliderRange from './components/SliderRange.vue';
    import Graphics from './components/Graphics.vue';
    import textEn from "./assets/json/textEn.json";
    import textFr from "./assets/json/textFr.json";
    import config from "./assets/json/config.json";

    export default {
        name: 'app',
        components: {SliderRange, Graphics},
        data() {
          return {
              isLanguageChanged: true,
              currentLanguage: "",
              sliderRanges: [],
              numberOfSlider: 0,
              message: "yes",


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
                this.isLanguageChanged = !this.isLanguageChanged;
                this.$forceUpdate();
            },
            //method for setting background on divq
            setBackgroundColor() {
                for(let i=0; i<=this.$refs["its"].length; i++ ) {
                    for(let j=0; j<=config.backgroundDivColor.length; j++){
                        this.$refs["its"][i].style.backgroundColor = config.backgroundDivColor[j];
                        i++;
                    }

                }



            },
        },
        created(){
            this.labels = textEn;

        },
        mounted(){
            //this.labelSelected = textEn;
            //localStorage.setItem("language", this.labelSelected);
            //this.selectCurrentLanguage(this.labelSelected);
            this.numberOfSlider = config.numberOfSlider;
            document.addEventListener('DOMContentLoaded', () => {
                var src = this.$refs[1][0].handlechange();
                var target = this.$refs[2][0].handlechange();


                var currDrag = this.$refs[1][0].drag();
                // if(src <=50){
                //     console.log(100 - src);
                //     this.$refs[2][0].setSlider(100-src);
                // }
                // console.log("src", src);
                // console.log("target", target);

                this.setBackgroundColor();
                this.refs["slider"][0].style.processStyle.backgroundColor = config.processSliderColor[2];


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
</style>
