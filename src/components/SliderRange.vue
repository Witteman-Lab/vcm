<template>
    <div class="has-text-centered" v-on:click="drag()">
        <vue-slider class="vueSlider" ref="slider"
        v-model="value"
        v-bind="option"
        :contained="true"
        :duration="inDragging ? 0 : 0"
        @drag-start="() => inDragging = true"
        @drag-end="() => inDragging = false"
        @dragging="drag()">
    </vue-slider>
    <span style="text-align: center" class="editableText">{{topSliderLabel}}</span>
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
        *  ---> This method is to set the slider's value
        * @function { setSlider}
        * @param value
        * @return none
        */
        setSlider(value){
            this.$refs.slider.setValue(value);
        },

        /**
        *  ---> This method is to click and drags the slider's to the corresponding value
        *  ---> Changing the other slider' value when clicking or draging the actual slider
        * @function {drag}
        * @param none
        * @return none
        */
        drag() {
            let curIndex = this.$refs.slider.getIndex();
            let inverseValue  = config.max - curIndex;
            let value = this.$refs.slider.getValue();
            this.$parent.setCurrentProgressValue(value, this.option.position, inverseValue);
            this.$parent.setResult();
            this.$parent.setBorderOption();
        },

        /**
        *  ---> This method gets the corresponding value of slider
        * @function {getSliderValue}
        * @param none
        * @return values
        */
        getSliderValue(){
            return this.$refs.slider.getValue();
        },

        // stopPaste(editableTextFields){
        //   // let editableTextFields = document.querySelectorAll(".editableText");
        //
        //   editableTextFields.forEach((element) => {
        //     element.addEventListener("paste", (e) => {
        //       e.preventDefault()
        //       let text = e.clipboardData.getData('text/plain')
        //       document.execCommand('insertText', false, text)
        //     })
        //
        //   });
        //
        // }

    },
  mounted () {
        this.value = this.option.defaultValue;

        // Getting them here instead of in App.vue (all the editable fields are not rendered in App.vue))
        let editableTextFields = document.querySelectorAll(".editableText");

      // Do this to ensure every field has an id so the code can work
        // Could be optimized, but works for now
        for (let i = 0; i < editableTextFields.length; i++) {
            // If no id, give an id
            if (editableTextFields[i].id === "") {
                editableTextFields[i].setAttribute("id", "editableTextField" + i);
            }
        }

        // Click and blur events on each editable field
        editableTextFields.forEach((e) => {
            e.addEventListener("click", () => {
                e.setAttribute("contentEditable", true);
            });

            e.addEventListener("blur", () => {
                e.setAttribute("contentEditable", false);
                sessionStorage.setItem(e.id, e.innerHTML);
                this.$parent.setResult();
            });
        });


      // If Storage exists in the browser
        if (typeof(Storage) !== "undefined") {
            editableTextFields.forEach((e) => {
                let id = e.id;

                if (sessionStorage.getItem(id) !== null) {
                    // Retrieve the value from sessionStorage
                    document.querySelector("#" + id).innerHTML = sessionStorage.getItem(id);
                } else {
                    // Set the value in sessionStorage
                    sessionStorage.setItem(id, document.querySelector("#" + id).innerHTML);
                }
            });
        }


    }
}
</script>

<style scoped>
.vueSlider{
    padding: 0;
}

</style>
