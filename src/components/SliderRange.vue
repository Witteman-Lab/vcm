<template>
  <v-container
    fluid
    :class="width > 426 ? 'mx-8 pt-16' : 'mt-n16'"
    style="width: fit-content"
    class="mx-auto"
  >
    <v-row no-gutters>
      <v-col order-sm="first">
        <div class="d-flex flex-column" :style="width < 500 ? 'width: max-content':''">
          <div class="d-flex text-h5 font-weight-bold title">
            {{ title }}
          </div>
          <div
            v-if="width > 675"
            class="d-flex text-body text-justify font-weight-light"
          >
            {{ description1 }} {{ description2 }} <br />{{ description3 }}
          </div>
          <div
            v-if="width < 675"
            class="d-flex text-body text-justify font-weight-light"
          >
            <v-btn color="#00d1b2" class="white-text" @click="dialog = true">{{
              instruction[0]
            }}</v-btn>
            <v-dialog v-model="dialog" width="auto">
              <v-card>
                <v-card-text>
                  {{ description1 }} {{ description2 }} <br />{{ description3 }}
                </v-card-text>
                <v-card-actions>
                  <v-btn color="#00d1b2" block @click="dialog = false">{{
                    instruction[1]
                  }}</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
          <div class="d-flex justify-space-between mb-n9">
            <div class="font-weight-regular mb-2 w-50">
              <v-textarea
                v-model="text1"
                variant="plain"
                rows="1"
                no-resize
                auto-grow
                ref="input1"
                @click="selectAllText('input1')"
                @change="updateText1"
              ></v-textarea>
            </div>
            <div class="font-weight-regular mb-2 w-50">
              <v-textarea
                v-model="text2"
                variant="plain"
                class="right-input"
                rows="1"
                no-resize
                auto-grow
                ref="input2"
                @click="selectAllText('input2')"
                @change="updateText2"
              ></v-textarea>
            </div>
          </div>
          <div class="colored-box1 mb-2" style="z-index: 10">
            <div class="d-flex flex-column pa-4">
              <v-slider
                v-model="slider1"
                thumb-label
                color="#410e73"
                thumb-color="white"
                thumb-size="40"
                track-size="30"
                track-color="white"
                rounded="xl"
                step="1"
                @end="updateData1()"
                @start="startValue1()"
                @click="addData1()"
              ></v-slider>
              <div class="font-weight-regular my-n6">
                <v-textarea
                  class="center-input"
                  v-model="text3"
                  variant="plain"
                  rows="1"
                  no-resize
                  auto-grow
                  ref="input3"
                  @click="selectAllText('input3')"
                  @change="updateText3"
                ></v-textarea>
              </div>
            </div>
          </div>

          <div class="colored-box2">
            <div class="d-flex flex-column pa-4">
              <v-slider
                v-model="slider2"
                thumb-label
                color="#a8a873"
                thumb-color="white"
                thumb-size="40"
                track-size="30"
                track-color="white"
                rounded="xl"
                step="1"
                @end="updateData2()"
                @start="startValue2()"
                style="z-index: 100"
                @click="addData2()"
              ></v-slider>
              <div class="font-weight-regular my-n6">
                <v-textarea
                  class="center-input"
                  v-model="text4"
                  variant="plain"
                  rows="1"
                  no-resize
                  auto-grow
                  ref="input4"
                  @click="selectAllText('input4')"
                  @change="updateText4"
                ></v-textarea>
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col order="first">
        <div>
          <vertical-progress-bar
            :value1="slider1"
            :value2="slider2"
            :result="result"
            @input1="handleInput1"
            @input2="handleInput2"
          ></vertical-progress-bar>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VerticalProgressBar from "./VerticalProgressBar.vue";
import textEn from "../assets/json/textEn.json";
import textFr from "../assets/json/textFr.json";
import { ref, watch, onBeforeUnmount, computed, reactive } from "vue";
import { useWindowSize } from "@vueuse/core";
import { saveAs } from "file-saver";

export default {
  components: {
    VerticalProgressBar,
  },
  props: {
    language: {
      type: String,
      required: true,
    },
    uid: {
      type: Number,
    },
    returnUrl: {
      type: URL,
    },
  },
  setup(props) {

    const textData = computed(() => {
      return props.language === "en" ? textEn : textFr;
    });

    watch(
      () => props.language,
      () => {
        title.value = textData.value.title;
        description1.value = textData.value.description1;
        description2.value = textData.value.description2;
        description3.value = textData.value.description3;
        leftScaleLabel.value = textData.value.leftScaleLabel;
        rightScaleLabel.value = textData.value.rightScaleLabel;
        topSliderLabel.value = textData.value.topSliderLabel;
        result.value = textData.value.result;
        instruction.value = textData.value.instruction;
        data.value.language = props.language;
      }
    );

    const title = ref(textData.value.title);
    const description1 = ref(textData.value.description1);
    const description2 = ref(textData.value.description2);
    const description3 = ref(textData.value.description3);
    const leftScaleLabel = ref(textData.value.leftScaleLabel);
    const rightScaleLabel = ref(textData.value.rightScaleLabel);
    const topSliderLabel = ref(textData.value.topSliderLabel);
    const bottomSliderLabel = ref(textData.value.topSliderLabel);
    const result = ref(textData.value.result);
    const instruction = ref(textData.value.instruction);

    const startTimeApp  = ref(new Date());
    const startTime = ref(new Date());
    const sliders = ref([]);
    const slider1 = ref(50);
    const slider2 = ref(50);
    const text1 = ref(leftScaleLabel);
    const text2 = ref(rightScaleLabel);
    const text3 = ref(topSliderLabel);
    const text4 = ref(bottomSliderLabel);
    const choice1 = ref(slider1.value);
    const choice2 = ref(slider2.value);
    const { width, height } = useWindowSize();
    const dialog = ref(false);
    const text5 = ref("Option 1");
    const text6 = ref("Option 2");

    let startSlider1 = 50;
    let startSlider2 = 50;

    const handleInput1 = (value) => {
      if (value !== text5.value) {
        text5.value = value;
        data.value.option1.push(text5.value);
      }
    };

    const handleInput2 = (value) => {
      if (value !== text6.value) {
        text6.value = value;
        data.value.option2.push(text6.value);
      }
    };

    const startValue1 = (value) => {
      startSlider1 = slider1.value;
      startTime.value = new Date();
    };

    const startValue2 = (value) => {
      startSlider2 = slider2.value;
      startTime.value = new Date();
    };

    // Create dictionaries to store the arrays
    const data = ref({
      userID: props.uid,
      returnUrl:props.returnUrl,
      duration_m_s: 0,
      EndTimeVCM: new Date(),
      sliders,
      leftScaleLabel: [],
      rightScaleLabel: [],
      topSliderLabel: [],
      bottomSliderLabel: [],
      option1: [],
      option2: [],
      language: props.language,
    });

    function range(start, stop, step) {
      if (typeof stop == "undefined") {
        // one param defined
        stop = start;
        start = 0;
      }

      if (typeof step == "undefined") {
        step = 1;
      }

      if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
      }

      var result = [];
      for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
      }

      return result;
    }

    watch(slider1, (newValue) => {
      slider2.value = 100 - newValue;
    });

    watch(slider2, (newValue) => {
      slider1.value = 100 - newValue;
    });

    const calculateDuration = (startTime, endTime) => {
      const durationInMillis = endTime - startTime;
      const minutes = Math.floor(durationInMillis / (1000 * 60));
      const seconds = Math.floor((durationInMillis / 1000) % 60);
      if (durationInMillis >= 1000) {
        return `${minutes}m ${seconds}s`;
      } else {
        return `${durationInMillis} ms`;
      }
    };

    const updateData1 = () => {
      if (startSlider1 < slider1.value) {
        const values = range(startSlider1, slider1.value + 1);
        const endTime = new Date();
        const duration = calculateDuration(startTime.value, endTime);
        sliders.value.push({
          name: "Slider_1",
          values,
          startTime,
          endTime: endTime,
          duration: duration,
        });
      }
      if (startSlider1 > slider1.value) {
        const values = range(slider1.value, startSlider1 + 1).reverse();
        const endTime = new Date();
        const duration = calculateDuration(startTime.value, endTime);
        sliders.value.push({
          name: "Slider_1",
          values,
          startTime,
          endTime: endTime,
          duration: duration,
        });
      }
      // data.value.topSlider.push(slider1.value);
      // data.value.bottomSlider.push(slider2.value);
    };

    const updateData2 = () => {
      if (startSlider2 < slider2.value) {
        const values = range(startSlider2, slider2.value + 1);
        const endTime = new Date();
        const duration = calculateDuration(startTime.value, endTime);
        sliders.value.push({
          name: "Slider_2",
          values,
          startTime,
          endTime: endTime,
          duration: duration,
        });
      }
      if (startSlider2 > slider2.value) {
        const values = range(slider2.value, startSlider2 + 1).reverse();
        const endTime = new Date();
        const duration = calculateDuration(startTime.value, endTime);
        sliders.value.push({
          name: "Slider_2",
          values,
          startTime,
          endTime: endTime,
          duration: duration,
        });
      }
    };

    const updateText1 = () => {
      data.value.leftScaleLabel.push(text1.value);
    };
    const updateText2 = () => {
      data.value.rightScaleLabel.push(text2.value);
    };
    const updateText3 = () => {
      data.value.topSliderLabel.push(text3.value);
    };
    const updateText4 = () => {
      data.value.bottomSliderLabel.push(text4.value);
    };

    // Save the data to a file when the page is unloaded (refreshed or closed)
    const saveDataToFile = () => {
      const endTimeVCM = new Date()
      data.value.EndTimeVCM = endTimeVCM
      const duration = calculateDuration(startTimeApp.value, endTimeVCM);
      data.value.duration_m_s = duration;
      const jsonData = JSON.stringify(data.value, null, 2);
      const blob = new Blob([jsonData], { type: "text/plain;charset=utf-8" });
      saveAs(blob, "data.txt");
    };

    onBeforeUnmount(() => {
      saveDataToFile();
    });

    // Register the window.onbeforeunload event to save the data when the page is refreshed or closed
    window.onbeforeunload = () => {
      saveDataToFile();
    };

    const addData2 = () => {
      const endTime = new Date();
      const duration = calculateDuration(startTime.value, endTime);
      sliders.value.push({
        name: "Slider_2",
        values: slider2.value,
        startTime,
        endTime: endTime,
        duration: duration,
      });
    };
    const addData1 = () => {
      const endTime = new Date();
      const duration = calculateDuration(startTime.value, endTime);
      sliders.value.push({
        name: "Slider_1",
        values: slider1.value,
        startTime,
        endTime: endTime,
        duration: duration,
      });
    };

    return {
      title,
      description1,
      description2,
      description3,
      leftScaleLabel,
      rightScaleLabel,
      topSliderLabel,
      result,
      instruction,
      slider1,
      slider2,
      choice1,
      choice2,
      text1,
      text2,
      text3,
      text4,
      width,
      height,
      dialog,
      updateData1,
      updateData2,
      updateText1,
      updateText2,
      updateText3,
      updateText4,
      handleInput1,
      handleInput2,
      startValue1,
      startValue2,
      addData2,
      addData1,
    };
  },
  methods: {
    selectAllText(refName) {
      if (this.$refs[refName]) {
        this.$refs[refName].select();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.colored-box1 {
  background-color: #e6e5ff;
}
.colored-box2 {
  background-color: #f1f4b6;
}
.right-input:deep(textarea) {
  text-align: right;
}
.center-input:deep(textarea) {
  text-align: center;
}
.title {
  color: #00d1b2;
}
.white-text:deep() {
  color: white;
}
</style>
