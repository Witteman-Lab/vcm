<template>
    <div class="has-text-centered" v-on:click="drag(value)">
        <vue-slider ref="slider"
                    v-model="value"
                    v-bind="option"
                    @change="this.handlechange"
                    :contained="true"
                    :duration="inDragging ? 0 : 0"
                    @drag-start="() => inDragging = true"
                    @drag-end="() => inDragging = false"
                    @dragging="drag(value)"

        ></vue-slider>
        <span style="text-align: center">{{topSliderLabel}}</span>
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
            defaultValue: Number,
            topSliderLabel: String
        },
        data () {
            return {
                inDragging: false,
                initialValue: config.value,
                value: 0,
            }
        },
        methods: {
            /**
             *
             */
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
            drag(valeur) {
                // console.log("value", this.$refs.slider.getIndex());
                let curIndex = this.$refs.slider.getIndex();
                let inverseValue  = config.max - curIndex;
                console.log("drag", valeur);
                console.log("valeur opposee", valeur);
                let value = this.$refs.slider.getValue();
                this.$parent.setCurrentProgressValue(value, this.option.position, inverseValue);
                return valeur;
            }

        },
        mounted () {
            this.value = this.option.defaultValue;
        }
    }
</script>

<style scoped>

</style>
