<template>
    <div >
        <div>
            <div v-bind:style="styleObject1">
                <vue-slider ref="slider1" v-model="value1" v-bind="option" :processStyle="option.processStyle2" @change="this.handlechange" :contained="true" :duration="inDragging ? 0 : 0.5" @drag-start="() => inDragging = true"
                            @drag-end="() => inDragging = false"

                ></vue-slider>

            </div>
            <div v-bind:style="styleObject2">
                <vue-slider ref="slider2" v-model="value2" v-bind="option" :processStyle="option.processStyle1" @change="this.handlechange" :contained="true"  :duration="inDragging ? 0 : 0.5" @drag-start="() => inDragging = true"
                            @drag-end="() => inDragging = false"

                ></vue-slider>
            </div>




            <!--some test to get  value of slider-->
            <!--<div class="btn-group">-->
            <!--<button @click="$refs.slider.setValue(50)">setValue</button>-->
            <!--<button @click="logValue($refs.slider.getValue())">getValue</button>-->
            <!--<button @click="$refs.slider.setIndex(50)">setIndex</button>-->
            <!--<button @click="logIndex($refs.slider.getIndex())">getIndex</button>-->
            <!--</div>-->


        </div>
    </div>

</template>

<script>
    import config from "../assets/json/config.json";
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/antd.css'
    export default {
        components: {VueSlider},
        name: "SliderRange",
        data () {
            return {
                inDragging: false,

                slider: [],

                styleObject1:{
                  backgroundColor: config.computedColor1,
                },
                styleObject2:{
                    backgroundColor: config.computedColor2,
                },

                value1: config.value1,
                value2: config.value2,

                option:{
                    inDragging: false,
                    height: config.lineHeight,
                    processStyle2: {
                        backgroundColor:config.backgroundColor2,
                  },
                    processStyle1: {
                        backgroundColor:config.backgroundColor1,
                  },
                    // processStyle:config.backgroundColor2,
                    dotSize:config.dotSize,
                    min: config.min,
                    max: config.max,
                    interval: config.interval,
                    tooltip: 'none',




                },
            }
        },

        methods: {
            // logValue (v) {
            //     window.alert("Value: "+ v)
            // },
            // logIndex (v) {
            //     window.alert("Index: "+ v)
            // }
            handlechange() {
                // i have to use a for loop here to handle the change properly.
                //i can see change on th slider
                let val1 = this.$refs.slider1.getValue();
                let val2 = this.$refs.slider2.getValue();
                let index1 = this.$refs.slider1.getIndex();
                let index2 = this.$refs.slider2.getIndex();
                if (val1 >this.value1) {
                    console.log("index1", index1);
                }
            }

                // for(let i = 1; i<=this.$refs.slider1.max(); i++){
                //     console.log("i value", i);
                //     let val1 = this.$refs.slider1.getValue();
                //     let val2 = this.$refs.slider2.getValue();
                //
                //     if(val1 > 50){
                //         this.value2 -= i;
                //         // console.log("i value", i);
                //     }
                // }
            // }
            //     // console.log("value1" , val1);
            //     // console.log("value2" , val2);
            //     if(val1 > 50){
            //        // let  indexVal1 = this.$refs.slider1.getValue();
            //        // console.log("index" , indexVal1)
            //         this.value2 --;
            //         // console.log("value" , this.value2);
            //     }else if(val1 < 50){
            //         this.value2 ++;
            //     }else if(val2 > 50){
            //         this.value1--;
            //     }else if(val2<50){
            //         this.value1 ++;
            //     }
            // }

        },
        mounted () {
            document.body.addEventListener('keydown', (e) => {
                let index1 = this.$refs.slider1.getValue();
                let index2 = this.$refs.slider2.getValue();
                // console.log("test", this.value1);
                if (e.keyCode === 39 &&  index1 <= config.max && index2 >= config.min) {
                    this.value1++ && this.value2--;

                    console.log("value1",this.value1);
                }
                if (e.keyCode === 37 && index2 <= config.max && index1 >= config.min) {

                    this.value1-- && this.value2++;
                }
            })
            // let val1 = this.$refs.slider1.getValue();
            // let val2 = this.$refs.slider1.getValue();
            // console.log("value1" , val1);
            // console.log("value2" , val2);
            // if(val1>= 50){
            //     this.value2 --;
            //     console.log("value" , this.value2);
            // }
        },




    }
</script>

<style scoped>

</style>
