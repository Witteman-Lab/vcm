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
            <span id="scaleLeft">{{this.labels.leftScaleLabel}}</span>
            <span id="scaleRight">{{this.labels.rightScaleLabel}}</span>
            <br>
            <!-- <SliderRangeTest></SliderRangeTest> -->
            <!-- <div ref="sliders" v-for="(slider) in this.numberOfSlider" :key="SliderRangeTest.id"> -->
            <div  v-for="(slider) in this.numberOfSlider" ref="its"  :key="slider">
                <SliderRange v-bind:ref="slider"></SliderRange>
            </div>
            <span >{{this.labels.topSliderLabel}}</span>

            <button @click="getValueOfId(1)">handle</button>
            <button @click="set">set</button>
        </div>

  </div>
</template>

<script>
    import SliderRange from './components/SliderRange.vue';
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
            getValueOfId(sliderId){

                let valueSlider1 = this.$refs[sliderId][0].handlechange();
                let valueSlider2 = this.$refs[sliderId +1][0].handlechange();

                console.log("la valeur du slider 1", valueSlider1);
                console.log("la valeur du slider 2", valueSlider2);
                // // valueSlider1 == valueSlider2;
                // //
                // this.refs[sliderId][0].setValue(valueSlider1);

                // for(let i = 1; i<= this.$refs[sliderId][0].length;  i++){
                //         if(valueSlider1 > 50){
                //
                //         }
                //
                // }


            },
            /***
             * methode to change the background cplor for each slider in the div
             * started
             */
            set() {
                console.log("helo");
                // this.$refs["its"][1].style.border = "1px solid red";
                var src = this.$refs[1][0].handlechange();
                var target = this.$refs[2][0].handlechange();

                //gettting index to see changes
                // let index1 = this.$refs[1][0].getSliderIndex();
                // let index2 = this.$refs[2][0].getSliderIndex();
                // let  currentIndex = index1 - 49;
                //
                // console.log("current" ,currentIndex);
                //
                // console.log("index 1", index1);

                // this.$refs[2][0].setSlider(20);  //setting value of slider
                if(src ++ || src--){
                    // target -= 100 -src;


                    this.$refs[2][0].setSlider(100 - src);
                    console.log("new src" , src);
                    console.log("new target " , target);
                } else if (target++ || target--) {

                    this.$refs[1][0].setSlider(101 - target);
                }
                // console.log("src" ,src);
                // console.log("target",target);

                for(let i=0; i<=this.$refs["its"].length; i++ ){
                    this.$refs["its"][i].style.backgroundColor = config.computedColor2;
                }


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
        mounted() {
            this.numberOfSlider = config.numberOfSlider;
            // this.$refs.its[0].style.border = "1px solid red";
             //var value = this.$refs.its[1].handlechange();
            // var value2 = this.$refs[2][0].handlechange();
            // console.log("value1", value);
            // console.log("value2", value2);
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
