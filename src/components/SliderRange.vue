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
            option: Object,
            defaultValue: Number
        },
        data () {
            return {
                inDragging: false,
                initialValue: config.value,
                // option:{
                //     inDragging: false,
                //     height: config.lineHeight,
                //     processStyle: {
                //         backgroundColor: "blue",
                //     },
                //     dotSize:config.dotSize,
                //     min: config.min,
                //     max: config.max,
                //     interval: config.interval,
                //     tooltip: 'none',
                // },
                value: 0,
            }
        },
        methods: {
            handlechange() {
                // i have to use a for loop here to handle the change properly.
                //i can see change on th slider
                // let value = this.$refs.slider.getValue();
                // console.log("value" , value);
                // let value = this.$refs.slider.getValue();
                // let inverseValue  = config.max - value;
                // console.log("handlechange", value);
                // this.$parent.setCurrentProgressValue(value, this.option.position, inverseValue);
                // return value;
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
            drag(valeur) {
                // console.log("value", this.$refs.slider.getIndex());
                let curIndex = this.$refs.slider.getIndex();
                let inverseValue  = config.max - curIndex;
                console.log("drag", valeur);
                console.log("valeur opposee", valeur);
                let value = this.$refs.slider.getValue();
                this.$parent.setCurrentProgressValue(value, this.option.position, inverseValue);
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
            this.value = this.option.defaultValue;
        }
    }
</script>

<style scoped>

</style>
