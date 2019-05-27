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
            <SliderRange></SliderRange>
            <!--<div ref="slider" v-for="(SliderRange) in sliderRanger " :key="SliderRange.id">-->
                <!--<SliderRange></SliderRange>-->
            <!--</div>-->
            <span >{{this.labels["top slider’s label"]}}</span>
        </div>

        <!--<div id="slider" class="column is-half is-center has-text-centered">-->
           <!--<div class="column has-text-centered">-->
               <!--<div id="slidersScale">-->
                   <!--<span class="sliderScale editableText" id="scaleLeft"><strong>{{this.labels["left scale label"]}}</strong></span>-->
                   <!--<span class="sliderScale editableText" id="scaleRight"><strong>{{this.labels["right scale label"]}}</strong></span>-->
                   <!--<div >-->
                       <!--<br>-->
                       <!--<SliderRange> </SliderRange>-->
                       <!--<span >{{this.labels["top slider’s label"]}}</span>-->
                   <!--</div>-->
               <!--</div>-->
           <!--</div>-->
            <!--<div class="column has-text-centered">-->
                <!--<div >-->
                    <!--<span class="sliderScale editableText" id="scaleLeft"><strong>{{this.labels["left scale label"]}}</strong></span>-->
                    <!--<span class="sliderScale editableText" id="scaleRight"><strong>{{this.labels["right scale label"]}}</strong></span>-->
                    <!--<div >-->
                        <!--<br>-->
                        <!--<SliderRange> </SliderRange>-->
                        <!--<span >{{this.labels["top slider’s label"]}}</span>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->

        <!--</div>-->

  </div>
</template>

<script>
    import textEn from "./assets/json/textEn.json";
    import textFr from "./assets/json/textFr.json";
    // import slider from "./assets/json/config.json";
    import SliderRange from './components/SliderRange.vue';

    export default {
        name: 'app',
        components: {SliderRange},
            data() {
              return {
                  isLangauageChanged: true,
                  sliderRanger: [],

              };
            },
            props: {},
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
                managerSliderValue(){
                   let val = this.$refs.slider.getValue();
                   let setVal =this.$refs.slider.getIndex();
                    if(val >setVal){
                        this.$refs.slider.index[1].value++;

                    }
                }
            },
            created(){
                this.labels = textEn;

            },
        // mounted(){
        //     let val = this.$refs.slider.getValue();
        //     console.log("value" , val);
        //     // let setVal =this.$refs.slider.getIndex();
        //     // if(val >50){
        //     //     this.$refs.slider.index[1].value++;
        //     //     console.log("value" , val);
        //     //
        //     // }
        // }
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  /*margin-top: 60px;*/
}
/*p {*/
  /*display: flex;*/
  /*justify-content: center;*/
  /*text-align: left;*/
  /*!*text-align: center;*!*/
  /*!*float: center;*!*/
/*}*/
/**, *:before, *:after {*/
  /*-moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;*/
/*}*/

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
