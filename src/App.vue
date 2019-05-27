<template>
    <div id="app" class="container">
        <div class="column is-half is-center">
            <h1 class="title has-text-primary">{{this.labels.title}}</h1>
            <!--<h1>{{this.labels.title}}</h1>-->
            <a id="selectLanguage" class="button" v-on:click="this.changeLanguage">{{this.labels.language}}</a><br><br/>
            <p id="description">{{this.labels.description1}}
                {{this.labels.description2}}
                {{this.labels.description3}}</p>
            <br/>
        </div>
        <div class="column is-half has-text-centered">
            <span id="scaleLeft">{{this.labels["left scale label"]}}</span>
            <span id="scaleRight">{{this.labels["right scale label"]}}</span>
            <br>
            <!-- <SliderRangeTest></SliderRangeTest> -->
            <!-- <div ref="sliders" v-for="(slider) in this.numberOfSlider" :key="SliderRangeTest.id"> -->
            <div v-for="(slider) in this.numberOfSlider">
                <SliderRange></SliderRange>
            </div>
            <span >{{this.labels["top slider’s label"]}}</span>
        </div>

  </div>
</template>

<script>
    import SliderRangeTest from './components/SliderRange.vue';
    import textEn from "./assets/json/textEn.json";
    import textFr from "./assets/json/textFr.json";
    import config from "./assets/json/config.json";

    export default {
        name: 'app',
        components: {SliderRange},
        data() {
          return {
              isLangauageChanged: true,
              sliderRanges: [],
              numberOfSlider: 0
          };
        },
        props: {

        },
        methods: {
            // METHOD DESCRIPTION
            changeLanguage() {
                if (this.isLanguageChanged)
                    this.labels = textFr;
                else
                    this.labels = textEn;
                this.isLanguageChanged = !this.isLanguageChanged;
                this.$forceUpdate();
            },

            // METHOD DESCRIPTION
            // managerSliderValue(){
            //    let val = this.$refs.slider.getValue();
            //    let setVal =this.$refs.slider.getIndex();
            //     if(val >setVal){
            //         this.$refs.slider.index[1].value++;
            //
            //     }
            // }
        },
        created(){
            this.labels = textEn;

        },
        mounted(){
            this.numberOfSlider = config.numberOfSlider;
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
