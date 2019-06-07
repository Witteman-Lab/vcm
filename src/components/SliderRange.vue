<template>
    <div class="has-text-centered" v-on:click="drag()">
        <vue-slider ref="slider"
                    v-model="value"
                    v-bind="option"
                    :contained="true"
                    :duration="inDragging ? 0 : 0"
                    @drag-start="() => inDragging = true"
                    @drag-end="() => inDragging = false"
                    @dragging="drag()"


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
             * @param value
             */
            setSlider(value){
                this.$refs.slider.setValue(value);
            },
            /**
             *
             * @param valeur
             * @returns {*}
             */
            drag() {
                let curIndex = this.$refs.slider.getIndex();
                let inverseValue  = config.max - curIndex;
                let value = this.$refs.slider.getValue();
                this.$parent.setCurrentProgressValue(value, this.option.position, inverseValue);
                this.$parent.setResult();
            },
            getSliderValue(){
              let value =  this.$refs.slider.getValue();
              return value;
            }

        },
        mounted () {
            this.value = this.option.defaultValue;
        }
    }
</script>

<style scoped>

</style>
