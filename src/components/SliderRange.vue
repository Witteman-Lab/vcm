<template>
    <div >
        <div class="flex">

            <vue-slider ref="slider"
                        v-model="value"
                        v-bind="option"
                        :max="100"
                        :processStyle="option.processStyle"
                        @change="this.handlechange"
                        :contained="true"
                        :duration="inDragging ? 0 : 0.5"
                        @drag-start="() => inDragging = true"
                        @drag-end="() => inDragging = false"
                        @dragging="drag(value)"

            ></vue-slider>

        </div>
        <!--title is just for test purpose-->
        <div>{{title}}</div>
    </div>

</template>

<script>
    import config from "../assets/json/config.json";
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/antd.css'
    export default {
        components: {VueSlider},
        name: "SliderRange",
        props:{
            title: String,
        },
        data () {
            return {
                inDragging: false,
                initialValue: config.value,
                option:{
                    inDragging: false,
                    height: config.lineHeight,
                    processStyle: {
                        backgroundColor: "blue",

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
                console.log("handlechange", value);
                return value;


            },
            setSlider(value){
                this.$refs.slider.setValue(value);
            },
            getSliderIndex(){
                let index = this.$refs.slider.getIndex();
                return index;

            },
            setProcessStyle(){

            },
            drag(valeur){
                // console.log("value", this.$refs.slider.getIndex());
                console.log("drag", valeur);
                let curIndex = this.$refs.slider.getIndex();
                valeur  = config.max - curIndex;
                console.log("valeur opposee", valeur);
                return valeur;
                // this.$refs.slider.setValue(valeur);

                // return valeur;

            }
            // setSliderProcessColor(process){
            //
            //     process = this.$refs.slider.processStyle.backgroundColor;
            //     // console.log("color", process);
            // }



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
            console.log(this.color);
        },





    }
</script>

<style scoped>

</style>
