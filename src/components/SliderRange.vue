<template>
  <v-container
    fluid
    :class="width > 426 ? 'mx-8 pt-16' : 'mt-n16'"
    style="width: fit-content"
    class="mx-auto"
  >
    <div class="header">
      <div class="text-h4 font-weight-bold title">
  <!--          Title-->
        {{title}}
      </div>
      <div
        v-if="width > 675"
        class="text-body text-justify"
      >
  <!--      Subtitle for desktop-->
        {{ description1 }} {{ description2 }}
      </div>

      <div
        v-if="width < 675"
        class="text-body text-justify tgl-btn"
      >
  <!--      Subtitle toggle for mobile-->
        <v-btn
          color="#398064"
          class="white-text"
          @click="dialog = true">
          {{instruction[0] }}
        </v-btn>
        <v-dialog v-model="dialog" width="auto">
          <v-card>
            <v-card-text>
              {{ mobileDescription11 }} <br> {{ mobileDescription12 }} <br><br> {{ description2 }}
            </v-card-text>
            <v-card-actions>
              <v-btn color="#398064" block @click="dialog = false">{{
                  instruction[1]
                }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>



    <v-row no-gutters>
      <v-col id="sliders-wrp" order-sm="first" style="">
        <div
          class="d-flex flex-column"
          :style="width < 500 ? 'width: max-content' : ''"
          style="margin-left: auto; margin-right: auto"
        >
          <div class="" style="display: flex; align-items: center; justify-content: space-between; flex-direction: row; height: auto"
               :style="width < 500 ? 'width: 90vw' : ''">
            <div class="font-weight-bold mb-2 w-33;" style="width: 33%;">
              <v-textarea style="overflow-wrap: break-word; word-break: break-word; white-space: normal;"
                          hide-details
                          density="compact"
                v-model="text1"
                variant="plain"
                :rows="width < 500 ? '2' : '1'"
                auto-grow
                ref="input1"
                @click="selectAllText('input1')"
                @change="updateText1"
              ></v-textarea>
            </div>

            <div class="font-weight-bold mb-2" style="width: auto">
              <v-textarea
                hide-details
                density="compact"
                          class="text-center-textarea"
                color="#398064"
                v-model="textCenter"
                variant="plain"
                :rows="width < 500 ? '2' : '1'"
                no-resize
                auto-grow
                ref="input1"
                @click="selectAllText('input1')"
                @change="updateTextCenter"
              ></v-textarea>
            </div>


            <div class="font-weight-bold mb-2" style="width: 33%">
              <v-textarea
                style=""
                hide-details
                density="compact"
                v-model="text2"
                variant="plain"
                class="right-input" :rows="width < 500 ? '2' : '1'"
                no-resize
                auto-grow
                ref="input2"
                @click="selectAllText('input2')"
                @change="updateText2"
              ></v-textarea>
            </div>
          </div>

          <div class="mb-2" style="z-index: 10;">
            <div class="d-flex flex-column pa-4">

              <v-slider
                :ticks="{ 50: '' }"
                tick-size="10"
                show-ticks="always"
                v-model="slider1"
                color="#398064"
                thumb-color="white"
                thumb-size="30"
                track-size="15"
                track-color="#D2D2D2FF"
                rounded="xl"
                step="1"
                @end="updateData1()"
                @start="startValue1()"
                @click="addData1()"
                @update:modelValue="snapToClosestSliderOne"
              >
              </v-slider>
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
          <div class="mb-n9;" style="display: flex; align-items: center; justify-content: space-between;"
               :style="width < 500 ? 'width: 90vw' : ''">
            <div class="font-weight-bold mb-2 w-33;" style="width: 33%">
              <v-textarea style="overflow-wrap: break-word; word-break: break-word; white-space: normal;"
                          hide-details
                          density="compact"
                          v-model="text1"
                          variant="plain"
                          :rows="width < 500 ? '2' : '1'"
                          auto-grow
                          ref="input1"
                          @click="selectAllText('input1')"
                          @change="updateText1"
              ></v-textarea>
            </div>


            <div class="font-weight-bold mb-2" style="width: auto">
              <v-textarea  class="text-center-textarea"
                           hide-details
                           density="compact"
                v-model="textCenter"
                variant="plain"
                :rows="width < 500 ? '2' : '1'"
                no-resize
                auto-grow
                ref="input1"
                @click="selectAllText('input1')"
                @change="updateTextCenter"
              ></v-textarea>
            </div>



            <div class="font-weight-bold mb-2" style="width: 33%">
              <v-textarea style=""
                          hide-details
                          density="compact"
                          v-model="text2"
                          variant="plain"
                          class="right-input" :rows="width < 500 ? '2' : '1'"
                          no-resize
                          auto-grow
                          ref="input2"
                          @click="selectAllText('input2')"
                          @change="updateText2"
              ></v-textarea>
            </div>
          </div>
<!--          <div class="d-flex justify-space-between mb-n9">-->
<!--            <div class="font-weight-bold mb-2 w-50">-->
<!--              <v-textarea-->
<!--                v-model="text1"-->
<!--                variant="plain"-->
<!--                rows="1"-->
<!--                no-resize-->
<!--                auto-grow-->
<!--                ref="input1"-->
<!--                @click="selectAllText('input1')"-->
<!--                @change="updateText1"-->
<!--              ></v-textarea>-->
<!--            </div>-->
<!--            <div class="font-weight-bold mb-2 w-50">-->
<!--              <v-textarea-->
<!--                v-model="text2"-->
<!--                variant="plain"-->
<!--                class="right-input"-->
<!--                rows="1"-->
<!--                no-resize-->
<!--                auto-grow-->
<!--                ref="input2"-->
<!--                @click="selectAllText('input2')"-->
<!--                @change="updateText2"-->
<!--              ></v-textarea>-->
<!--            </div>-->
<!--          </div>-->
          <div>
            <div class="d-flex flex-column pa-4">
              <v-slider
                :ticks="{ 50: '' }"
                tick-size="10"
                show-ticks="always"
                v-model="slider2"
                color="#cd9367"
                thumb-color="white"
                thumb-size="30"
                track-size="15"
                track-color="#D2D2D2FF"
                rounded="xl"
                step="1"
                @end="updateData2()"
                @start="startValue2()"
                style="z-index: 100"
                @click="addData2()"
                @update:modelValue="snapToClosestSliderTwo"
              >
<!--                <template v-slot:thumb-label="{}">-->
<!--                  <span class="thumb-fill"> Neither matter nor doesn't matter</span>-->
<!--                </template>-->
              </v-slider>
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
        <!------------------------>

      </v-col>
      <v-col order="first">
        <div>
          <vertical-progress-bar
            :value1="slider1"
            :value2="slider2"
            :result="result"
            :leftBarText="leftBarText"
            :rightBarText="rightBarText"
            :top-bar-instruction="topBarInstruction"
            :bottom-bar-instruction="bottomBarInstruction"
            :middle-bar-text-normal="middleBarTextNormal"
            :middle-bar-tex-bold="middleBarTexBold"
            @input1="handleInput1"
            @input2="handleInput2"
          ></vertical-progress-bar>
        </div>
      </v-col>
    </v-row>

    <v-expansion-panels accordion focusable >
      <v-expansion-panel style="width: 90vw">
        <template #title>
          <span> <b>{{expansionPanelsText.expansionPanelsTitle}}</b></span>
          <!-- ou <span class="text-white">Title</span> si tu utilises les classes Vuetify -->
        </template>

        <template #text>
          <div style="display: flex; align-items: start; justify-content: space-between; flex-direction: row;">
            <div style="text-align: left;">
              <div style="margin-bottom: 12px">
                <b>{{expansionPanelsText.chancePreventTitle}}</b>
                <ul style="margin-left: 25px;">
                  <li>{{expansionPanelsText.chancePreventText}}
                  </li>
                </ul>
              </div>
              <div>
                <b>{{expansionPanelsText.falsePositiveTitle}}</b>
              </div>
              <div>
                <div>
                  <ul style="margin-left: 25px;">
                    <li>{{expansionPanelsText.falsePositiveDef1}}
                    </li>
                    <li>{{expansionPanelsText.falsePositiveDef2}}
                    </li>
                  </ul>
                </div>
                <div>
                  <b style="font-style: italic;">{{expansionPanelsText.falsePositiveConsequencesTitle}}</b>
                  <ul style="margin-left: 25px;">
                    <li>{{expansionPanelsText.falsePositiveCons1}}</li>
                    <li>{{expansionPanelsText.falsePositiveCons2}}</li>
                    <li>{{expansionPanelsText.falsePositiveCons3}}</li>
                  </ul>
                </div>
                <br>
                <div>
                  <b>{{expansionPanelsText.overdiagnosisTitle}}</b>
                  <div>{{expansionPanelsText.overdiagnosisIntro}}
                  </div>
                  <ul style="margin-left: 25px;">
                    <li>{{expansionPanelsText.overdiagnosisItem1}}</li>
                    <li>{{expansionPanelsText.overdiagnosisItem2}}</li>
                    <li>{{expansionPanelsText.overdiagnosisItem3}}</li>
                  </ul>
                  <div>{{expansionPanelsText.overdiagnosisEnding}}</div>
                </div>
                <div>
                  <b style="font-style: italic;">{{expansionPanelsText.overdiagnosisConsequencesTitle}}</b>
                  <ul style="margin-left: 25px;">
                    <li>{{expansionPanelsText.overdiagnosisConsIntro}}</li>
                    <li>{{expansionPanelsText.overdiagnosisTestsIntro}}
                      <ul style="margin-left: 25px;">
                        <li>{{expansionPanelsText.overdiagnosisTestsItem1}}</li>
                        <li>{{expansionPanelsText.overdiagnosisTestsItem2}}</li>
                        <li>{{expansionPanelsText.overdiagnosisTestsItem3}}</li>
                        <li>{{expansionPanelsText.overdiagnosisTestsItem4}}</li>
                        <li>{{expansionPanelsText.overdiagnosisTestsItem5}}</li>
                        <li>{{expansionPanelsText.overdiagnosisTestsItem6}}</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </template>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>

</template>

<script>
/**
 * This component represents a Vue setup for managing a vertical progress bar and related functionalities.
 * It includes reactive data, computed properties, and methods for handling user input, calculating durations,
 * updating data, and managing the lifecycle of the component.
 */
import VerticalProgressBar from "./VerticalProgressBar.vue";
import {ref, watch, onBeforeUnmount, computed, reactive, } from "vue";
import { useWindowSize } from "@vueuse/core";
import { saveAs } from "file-saver";

export default {
  components: {
    VerticalProgressBar
  },
  props: {
    /**
     * The language of the text data.
     */
    language: {
      type: String,
      required: true,
    },
    /**
     * The unique identifier of the user.
     */
    uid: {
      type: Number,
    },
    returnUrl: {
      type: URL,
    },

    optionOrder: {
      type: Number,
      default: 0,
    },

    textData: {
      type: Object,
      required: true,
    }
  },
  setup: function (props) {

    const title = ref(props.textData.title);
    const description1 = ref(props.textData.description1);
    const description2 = ref(props.textData.description2);
    const leftScaleLabel = ref(props.textData.leftScaleLabel);
    const centerScaleLabel = ref(props.textData.centerScaleLabel);
    const rightScaleLabel = ref(props.textData.rightScaleLabel);
    const topSliderLabel = ref(props.textData.topSliderLabel);
    const bottomSliderLabel = ref(props.textData.bottomSliderLabel);
    const result = ref(props.textData.result);
    const instruction = ref(props.textData.instruction);
    const leftBarText = ref(props.textData.leftBarText);
    const rightBarText = ref(props.textData.rightBarText);
    const topBarInstruction = ref(props.textData.topBarInstruction);
    const bottomBarInstruction = ref(props.textData.bottomBarInstruction);
    const middleBarTextNormal = ref(props.textData.middleBarTextNormal);
    const middleBarTexBold = ref(props.textData.middleBarTexBold);
    const mobileDescription11 = ref(props.textData.mobileDescription11);
    const mobileDescription12 = ref(props.textData.mobileDescription12);
    const expansionPanelsText = ref(props.expansionPanelsText)


    watch(
      () => props.textData,
      (newVal) => {
        title.value = newVal.title;
        description1.value = newVal.description1;
        mobileDescription11.value = newVal.mobileDescription11;
        mobileDescription12.value = newVal.mobileDescription12;
        expansionPanelsText.value = newVal.expansionPanelsText;
        description2.value = newVal.description2;
        leftScaleLabel.value = newVal.leftScaleLabel;
        centerScaleLabel.value = newVal.centerScaleLabel;
        rightScaleLabel.value = newVal.rightScaleLabel;
        topSliderLabel.value = newVal.topSliderLabel;
        bottomSliderLabel.value = newVal.bottomSliderLabel;
        result.value = newVal.result;
        instruction.value = newVal.instruction;
        leftBarText.value = newVal.leftBarText;
        rightBarText.value = newVal.rightBarText;
        topBarInstruction.value = newVal.topBarInstruction;
        bottomBarInstruction.value = newVal.bottomBarInstruction;
        middleBarTextNormal.value = newVal.middleBarTextNormal;
        middleBarTexBold.value = newVal.middleBarTexBold;
      },
      {immediate: true}
    );

    let activeSlider = null;
    let graph = ref({}); // Initialize the graph dictionary
    const startTimeApp = ref(new Date());
    let startTime = ref(new Date());
    const sliders = ref([]);
    const slider1 = ref(50);
    const slider2 = ref(50);
    const text1 = ref(leftScaleLabel);
    const textCenter = ref(centerScaleLabel);
    const text2 = ref(rightScaleLabel);
    const text3 = ref(topSliderLabel);
    const text4 = ref(bottomSliderLabel);
    const choice1 = ref(slider1.value);
    const choice2 = ref(slider2.value);
    const {width, height} = useWindowSize();
    const dialog = ref(true);
    const text5 = ref("Option 1 ");
    const text6 = ref("Option 2");
    let startSlider1 = 50;
    let startSlider2 = 50;


    /**
     * Handles input for text input field 1.
     * If the input value is different from the current value, updates the value and pushes it to option1 array in data.
     * @param {string} value - The new input value.
     */
    const handleInput1 = (value) => {
      if (value !== text5.value) {
        text5.value = value;
      }
    };

    /**
     * Handles input for text input field 2.
     * If the input value is different from the current value, updates the value and pushes it to option2 array in data.
     * @param {string} value - The new input value.
     */
    const handleInput2 = (value) => {
      if (value !== text6.value) {
        text6.value = value;
        data.value.option2.push(text6.value);
      }
    };
    /**
     * Sets the activeSlider to Slider_1 and updates the startSlider1 and startTime values.
     * @param {number} value - The initial value of slider1.
     */
    const startValue1 = (value) => {
      activeSlider = "Slider_1";
      startSlider1 = slider1.value;
      startTime.value = new Date();
    };
    /**
     * Sets the activeSlider to Slider_2 and updates the startSlider2 and startTime values.
     * @param {number} value - The initial value of slider2.
     */
    const startValue2 = (value) => {
      activeSlider = "Slider_2";
      startSlider2 = slider2.value;
      startTime.value = new Date();
    };
    // Create dictionaries to store the arrays
    /**
     * Initializes the data object with the provided props and other default values.
     * @returns {object} The initialized data object.
     */
    const data = ref({
      userID: props.uid,
      returnUrl: props.returnUrl,
      language: props.language,
      optionOrder: props.optionOrder,
      screening: "Prostate",
      startTimeApp: startTimeApp.value,
      endTimeApp: new Date(),
      duration_m_s: 0,
      sliders,
      leftScaleLabel: [],
      centerScaleLabel: [],
      rightScaleLabel: [],
      topSliderLabel: [],
      bottomSliderLabel: [],
      option1: [],
      option2: [],
      graph: graph.value
    });

    /**
     * Generates an array of numbers within a specified range.
     * @param {number} start - The start of the range.
     * @param {number} stop - The end of the range.
     * @param {number} step - The step size between numbers in the range.
     * @returns {number[]} The array of numbers within the specified range.
     */
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
    /**
     * Calculates the duration between two timestamps.
     * @param {Date} startTime - The start timestamp.
     * @param {Date} endTime - The end timestamp.
     //* @returns {string} The duration formatted as "Xm Ys" or "Z ms".
     * @returns {number} The duration in milliseconds (ms)".
     */
    const calculateDuration = (startTime, endTime) => {
      const durationInMillis = endTime - startTime;
      //const minutes = Math.floor(durationInMillis / (1000 * 60));
      //const seconds = Math.floor((durationInMillis / 1000) % 60);
      //if (durationInMillis >= 1000) {
        //return `${minutes}m ${seconds}s`;
      //} else {
        //return `${durationInMillis} ms`;
      return durationInMillis;
      //}
    };

    // Methods to update data and text labels
    const updateData1 = () => {
      activeSlider = null;

      if (startSlider1 < slider1.value) {
        const values = range(startSlider1, slider1.value + 1);
        const endTime = new Date();
        const duration = calculateDuration(startTime.value, endTime);
        sliders.value.push({
          name: "Slider_1",
          values: values,
          startTime: startTime.value,
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
          values: values,
          startTime: startTime.value,
          endTime: endTime,
          duration: duration,
        });
      }
      // data.value.topSlider.push(slider1.value);
      // data.value.bottomSlider.push(slider2.value);
    };

    const updateData2 = () => {
      activeSlider = null;
      if (startSlider2 < slider2.value) {
        const values = range(startSlider2, slider2.value + 1);
        const endTime = new Date();
        const duration = calculateDuration(startTime.value, endTime);
        sliders.value.push({
          name: "Slider_2",
          values: values,
          startTime: startTime.value,
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
          values: values,
          startTime: startTime.value,
          endTime: endTime,
          duration: duration,
        });
      }
    };
    /**
     * Updates the left scale label data with the current value of text1.
     */
    const updateTextCenter = () => {
      data.value.centerScaleLabel.push(textCenter.value);
    };
    /**
     * Updates the left scale label data with the current value of text1.
     */
    const updateText1 = () => {
      data.value.leftScaleLabel.push(text1.value);
    };
    /**
     * Updates the right scale label data with the current value of text2.
     */
    const updateText2 = () => {
      data.value.rightScaleLabel.push(text2.value);
    };
    /**
     * Updates the top slider label data with the current value of text3.
     */
    const updateText3 = () => {
      data.value.topSliderLabel.push(text3.value);
    };
    /**
     * Updates the bottom slider label data with the current value of text4.
     */
    const updateText4 = () => {
      data.value.bottomSliderLabel.push(text4.value);
    };

    // Save the data to a file when the page is unloaded (refreshed or closed)
    /**
     * Saves the data to a file on the server.
     * Updates the end time and duration of the VCM session in the data object.
     * Converts the data object to JSON format and saves it as a text file.
     */
    const saveDataToFile = () => {
      console.log("saveDataToFile");

      const endTimeApp = new Date();
      data.value.startTimeApp = startTimeApp;
      data.value.endTimeApp = endTimeApp;
      const duration = calculateDuration(startTimeApp.value, endTimeApp);
      data.value.duration_m_s = duration;
      const jsonData = JSON.stringify(data.value, null, 2);
      // That would save the file on the client side, we want on the server side (see fetch() below)
      //const blob = new Blob([jsonData], { type: "text/plain;charset=utf-8" });
      //saveAs(blob, "data_test.txt");

      fetch('save_data.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        //body: JSON.stringify(jsonData)
        body: jsonData
      })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.error('Error:', error));
    };

    /**
     * Lifecycle hook executed before the component is destroyed.
     */
    onBeforeUnmount(() => {
      // Save data to file on server
      saveDataToFile();
      // Delete the timer interval used to capture the use of the slidersß
      clearInterval(timerInterval);
    });
    // Register the window.onbeforeunload event to save the data when the page is refreshed or closed
    window.onbeforeunload = () => {
      saveDataToFile();
    };
    /**
     * Adds data for Slider_2 to the sliders array.
     * Sets activeSlider to "Slider_2".
     * Calculates duration based on the start and end time.
     * Pushes a new object containing slider information to the sliders array.
     */
    const addData2 = () => {
      activeSlider = "Slider_2";
      const endTime = new Date();
      const duration = calculateDuration(startTime.value, endTime);
      /*sliders.value.push({
        name: "Slider_2",
        values: slider2.value,
        startTime: startTime.value,
        endTime: endTime,
        duration: duration,
      });*/
    };
    /**
     * Adds data for Slider_1 to the sliders array.
     * Sets activeSlider to "Slider_1".
     * Calculates duration based on the start and end time.
     * Pushes a new object containing slider information to the sliders array.
     */
    const addData1 = () => {
      activeSlider = "Slider_1";
      const endTime = new Date();
      const duration = calculateDuration(startTime.value, endTime);
      /*sliders.value.push({
        name: "Slider_1",
        values: slider1.value,
        startTime: startTime.value,
        endTime: endTime,
        duration: duration,
      });*/
    };
    let currentSecond = 0;
    // Set up a timer to check and reset activeSlider every second
    const timerInterval = setInterval(() => {
      currentSecond++;
      if (activeSlider) {
        graph.value[currentSecond * 500] = {
          slider: activeSlider,
          value: activeSlider === "Slider_1" ? slider1.value : slider2.value,
        };
      } else {
        graph.value[currentSecond * 500] = null
      }
    }, 500);
    // const timerInterval = setInterval(() => {
    //   console.log(activeSlider) // Reset activeSlider to null every second
    // }, 1000);
    return {
      title,
      description1,
      description2,
      mobileDescription11,
      mobileDescription12,
      expansionPanelsText,
      centerScaleLabel,
      leftScaleLabel,
      rightScaleLabel,
      topSliderLabel,
      bottomSliderLabel,
      result,
      instruction,
      slider1,
      slider2,
      choice1,
      choice2,
      text1,
      textCenter,
      text2,
      text3,
      text4,
      width,
      height,
      dialog,
      updateData1,
      updateData2,
      updateText1,
      updateTextCenter,
      updateText2,
      updateText3,
      updateText4,
      handleInput1,
      handleInput2,
      startValue1,
      startValue2,
      addData2,
      addData1,
      leftBarText,
      rightBarText,
      bottomBarInstruction,
      topBarInstruction,
      middleBarTextNormal,
      middleBarTexBold
    };
  },
  methods: {
    snapToClosestSliderOne(val) {
      // Si la valeur est dans la plage 47-53 inclusivement, on force à 50
      if (val >= 47 && val <= 53) {
        this.slider1 = 50
      } else {
        // Sinon, garder exactement la valeur saisie sans magnétisme
        this.slider1 = val
      }
    },
    snapToClosestSliderTwo(val) {
      // Si la valeur est dans la plage 47-53 inclusivement, on force à 50
      if (val >= 47 && val <= 53) {
        this.slider2 = 50
      } else {
        // Sinon, garder exactement la valeur saisie sans magnétisme
        this.slider2 = val
      }
    },

    // MTB : Not sure what that was supposed to be doing, but it is not used at the moment, so I commented it
    /*customLabel(value) {
      if (value < 30) return "Bas";
      if (value < 70) return "Moyen";
      return "Élevé";
    },*/

    /**
     * Selects all text within the specified reference.
     * @param {string} refName - The name of the reference.
     */
    selectAllText(refName) {
      if (this.$refs[refName]) {
        this.$refs[refName].select();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.header{
  margin-bottom: 15px;
  margin-top: -30px;
  font-weight: normal
}
.right-input:deep(textarea) {
  text-align: right;
}
.center-input:deep(textarea) {
  text-align: center;
}
.title {
  margin: 20px;
}
.white-text:deep() {
  color: white;
}
.tgl-btn{
  display: flex;
  justify-content: center;
}
#sliders-wrp{
  align-content: center;
}

//:deep(.v-slider-thumb__label){
//  //width: var(--v-slider-thumb-size);
//  //height: var(--v-slider-thumb-size);
//  min-width: 140px !important;  /* augmente ici */
//  width: 140px !important;       /* force la largeur */
//  height: var(--v-slider-thumb-size);
//  padding: 20px !important;
//  border-radius: 1px;
//  display: flex;              /* utile si le slot est vide parfois */
//  align-items: center;
//  justify-content: center;   /* masque tout débordement */
//}
//:deep(.slider-a .v-slider-thumb__label){
//  background: #398064;  /* bulle verte */
//}
//:deep(.slider-b .v-slider-thumb__label){
//  background: #cd9367;  /* bulle verte */
//}
//.thumb-fill{
//  display: flex;
//  width: 100%;
//  height: 100%;
//  align-items: center;
//  justify-content: center;
//  text-align: center;
//  padding: 2px;               /* un léger padding pour éviter que ça colle aux bords */
//  line-height: 1.1;
//  white-space: normal;        /* autorise les retours à la ligne */
//  word-break: break-word;     /* coupe les mots longs */
//  overflow: hidden;
//  text-overflow: ellipsis;
//  /* Taille du texte proportionnelle au thumb */
//  font-size: calc(var(--v-slider-thumb-size) * 0.28);
//}
.text-center-textarea ::v-deep textarea {
  text-align: center !important;
}
</style>
