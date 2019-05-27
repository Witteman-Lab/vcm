<template>
    <div class="flex">
        <vue-slider ref="slider1"
                    v-model="value1"
                    :processStyle="option.processStyle"
                    :height="option.lineHeight"
                    :dotSize="30"
                    :min="1"
                    :max="100"
                    :disabled="false"
                    :interval="1"
                    :tooltip="'none'"
                    :contained="true"
                    @change="this.handlechange"
                    :duration="inDragging ? 0 : 0.5"
                    @drag-start="() => inDragging = true"
                    @drag-end="() => inDragging = false"
        ></vue-slider>
        <vue-slider ref="slider2"
                    v-model="value2"
                    :processStyle="option.processStyle"
                    :height="option.lineHeight"
                    :dotSize="30"
                    :min="1"
                    :max="100"
                    :disabled="false"
                    :interval="1"
                    :tooltip="'none'"
                    :contained="true"
                    :duration="inDragging ? 0 : 0.5"
                    @change="this.handlechange"
                    @drag-start="() => inDragging = true"
                    @drag-end="() => inDragging = false"

        ></vue-slider>

        <!--<h1>{{ value }}</h1>-->
        <!--<vue-slider v-model="value"-->
                    <!--:processStyle="option.processStyle"-->
                    <!--:height="option.lineHeight"-->
                    <!--:dotSize="30"-->
                    <!--:min="0"-->
                    <!--:max="100"-->
                    <!--:disabled="false"-->
                    <!--:interval="1"-->
                    <!--:tooltip="'none'"-->
                    <!--:duration="inDragging ? 0 : 0.5"-->
                    <!--@drag-start="() => inDragging = true"-->
                    <!--@drag-end="() => inDragging = false"--><!--&gt;</vue-slider>-->

<!--some test to get  value of slider-->
        <!--<div class="btn-group">-->
            <!--<button @click="$refs.slider.setValue(50)">setValue</button>-->
            <!--<button @click="logValue($refs.slider.getValue())">getValue</button>-->
            <!--<button @click="$refs.slider.setIndex(50)">setIndex</button>-->
            <!--<button @click="logIndex($refs.slider.getIndex())">getIndex</button>-->
        <!--</div>-->


    </div>
</template>

<script>
    // import config from "../assets/json/config.json";
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/antd.css'
    export default {
        components: {VueSlider},
        name: "SliderRange",
        data () {
            return {
                inDragging: false,
                value1: 50,
                value2: 50,
                option:{
                    inDragging: false,
                    lineHeight: 20,
                    processStyle: {
                        backgroundColor: 'blue'
                    }


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
            handlechange(){
                // i have to use a for loop here to handle the change properly.
                //i can see change on th slider
                let val1 = this.$refs.slider1.getValue();
                let val2 = this.$refs.slider1.getValue();
                // console.log("value1" , val1);
                // console.log("value2" , val2);
                if(val1 > 50){
                   // let  indexVal1 = this.$refs.slider1.getValue();
                   // console.log("index" , indexVal1)
                    this.value2 --;
                    // console.log("value" , this.value2);
                }else if(val1 < 50){
                    this.value2 ++;
                }
            }

        },
        mounted () {
            // document.body.addEventListener('keydown', (e) => {
            //     if (e.keyCode === 39) {
            //         this.value++
            //     }
            //     if (e.keyCode === 37) {
            //         this.value--
            //     }
            // })
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
