<template>
    <div >
        <div class="flex">
            <vue-slider ref="slider"
                        v-model="value"
                        v-bind="option"
                        :processStyle="option.processStyle"
                        @change="this.handlechange "
                        :contained="true"
                        :duration="inDragging ? 0 : 0.5"
                        @drag-start="() => inDragging = true"
                        @drag-end="() => inDragging = false"

            ></vue-slider>


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
                // styleObject1:{
                //   backgroundColor: config.computedColor1,
                // },
                initialValue: config.value,
                option:{
                    inDragging: false,
                    height: config.lineHeight,
                    processStyle: {
                        backgroundColor:"blue",
                  },

                    dotSize:config.dotSize,
                    min: config.min,
                    max: config.max,
                    interval: config.interval,
                    tooltip: 'none',

                },
                value: 50,
            }
        },

        methods: {
            handlechange() {
                // i have to use a for loop here to handle the change properly.
                //i can see change on th slider
                // let value = this.$refs.slider.getValue();
                // console.log("value" , value);
                let value = this.$refs.slider.getValue();
                return value;


            },
            setSlider(value){
                this.$refs.slider.setValue(value);
            },
            getSliderIndex(){
                let index = this.$refs.slider.getIndex();
                return index;

            },
            setSliderProcessColor(process){

                process = this.$refs.slider.processStyle.backgroundColor;
                // console.log("color", process);
            }



        },
        mounted () {


            document.body.addEventListener('keydown', (e) => {
                // console.log("test", this.value1);
                if (e.keyCode === 39) {
                    this.value++
                }
                if (e.keyCode === 37) {

                    this.value--;
                }
            })

        },





    }
</script>

<style scoped>

</style>
