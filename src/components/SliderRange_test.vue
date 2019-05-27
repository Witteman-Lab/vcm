<template>
    <div class="flex">
        <vue-slider ref="slider"
                    v-model="value"
                    :processStyle="option.processStyle"
                    :height="option.lineHeight"
                    :dotSize="30"
                    :min="0"
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
    </div>
</template>

<script>
    // import config from "../assets/json/config.json";
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/antd.css'
    export default {
        components: {VueSlider},
        name: "SliderRangeTest",
        data () {
            return {
                inDragging: false,
                initialValue: 50,
                option:{
                    inDragging: false,
                    lineHeight: 20,
                    processStyle: {
                        backgroundColor: 'blue'
                    }
                },
                value: 50
            }
        },
        methods: {
            handlechange(){
                // i have to use a for loop here to handle the change properly.
                //i can see change on th slider
                let value = this.$refs.slider.getValue();
                console.log("value" , value);
            }

        },
        mounted () {},
    }
</script>

<style scoped>

</style>
