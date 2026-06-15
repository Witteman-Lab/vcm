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
        {{ description1 }} <br> {{ description2 }}
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
                @start="activateSlider('slider_1')"
                @end="deactivateSlider()"
                @change="deactivateSlider()"
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
                style="z-index: 100"
                @start="activateSlider('slider_2')"
                @end="deactivateSlider()"
                @change="deactivateSlider()"
                @update:modelValue="snapToClosestSliderTwo"
              >
              <!--<template v-slot:thumb-label="{}">
              <span class="thumb-fill"> Neither matter nor doesn't matter</span>
              </template>-->
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
import {onBeforeUnmount, ref, watch, defineExpose, /*defineEmits*/} from "vue";
import {useWindowSize} from "@vueuse/core";
import { saveAs } from "file-saver";


/**
 * This should apparently be the best way to make the parent component trigger this child component
 * But couldn't make it work. Kept here for further reference.
 */
// Define the event the parent will listen to for navigation
//const emit = defineEmits(['data-saved']);

export default {
  components: {
    VerticalProgressBar
  },

  props: {
    /**
     * This should apparently be the best way to make the parent component trigger this child component
     * But couldn't make it work. Kept here for further reference.
     */
    // saveTrigger: {
    //   type: Boolean,
    //   default: false
    // },

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
    /**
     *
     */
    optionOrder: {
      type: Number,
      default: 0,
    },
    /**
     *
     */
    textData: {
      type: Object,
      required: true,
    }
  },

  /**
   *
   * @param props
   * @returns {{title: Ref, description1: Ref, description2: Ref, mobileDescription11: Ref, mobileDescription12: Ref, expansionPanelsText: Ref, centerScaleLabel: *, leftScaleLabel: *, rightScaleLabel: *, topSliderLabel: *, bottomSliderLabel: *, result: Ref, instruction: Ref, slider1: Ref<UnwrapRef<number>>, slider2: Ref<UnwrapRef<number>>, choice1: Ref<UnwrapRef<number>>, choice2: Ref<UnwrapRef<number>>, text1: *, textCenter: *, text2: *, text3: *, text4: *, width: vue_demi.Ref<number>, height: vue_demi.Ref<number>, dialog: Ref<UnwrapRef<boolean>>, activateSlider: activateSlider, deactivateSlider: deactivateSlider, updateText1: updateText1, updateTextCenter: updateTextCenter, updateText2: updateText2, updateText3: updateText3, updateText4: updateText4, handleInput1: handleInput1, handleInput2: handleInput2, saveDataToFile: ((function(): Promise<void>)|*), leftBarText: ({type: String | StringConstructor, required: boolean}|*), rightBarText: ({type: String | StringConstructor, required: boolean}|*), bottomBarInstruction: ({type: String | StringConstructor, required: boolean}|*), topBarInstruction: ({type: String | StringConstructor, required: boolean}|*), middleBarTextNormal: ({type: String | StringConstructor, required: boolean}|*), middleBarTexBold: ({type: String | StringConstructor, required: boolean}|*)}}
   */
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
    const expansionPanelsText = ref(props.expansionPanelsText);

    /**
     * This should apparently be the best way to make the parent component trigger this child component
     * But couldn't make it work. Kept here for further reference.
     */
    // watch(
    //   () => props.saveTrigger,
    //   (newValue) => {
    //     console.log("watch props.saveTrigger");
    //     if (newValue === true) {
    //       saveDataToFile()
    //     }
    //   }, { immediate: true })

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
      }, {immediate: true}
    );

    const activeSlider = ref(null);
    const graph = ref([]); // Initialize the graph dictionary
    const startTimeApp = ref(new Date());
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
    // Change this value to false before compiling for effective deployment
    const isDevMode = false;

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
      branch: "Breast",
      startTimeApp: startTimeApp.value,
      endTimeApp: new Date(),
      duration_ms: 0,
      slider1_value: slider1.value,
      slider2_value: slider2.value,
      leftScaleLabel: leftScaleLabel.value,
      centerScaleLabel: centerScaleLabel.value,
      rightScaleLabel: rightScaleLabel.value,
      topSliderLabel: topSliderLabel.value,
      bottomSliderLabel: bottomSliderLabel.value,
      option1: leftBarText.value,
      option2: rightBarText.value,
      graph: graph.value
    });

    /**
     * Watch sliders and adjust their values
     */
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
     * @returns {number} The duration in milliseconds (ms)".
     */
    const calculateDuration = (startTime, endTime) => {
      return (endTime - startTime);
    };

    /**
     *
     * @param slider
     */
    const activateSlider = (slider) => {
      activeSlider.value = slider;
    }

    /**
     *
     */
    const deactivateSlider = () => {
      activeSlider.value = null;
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

    /**
     * Lifecycle hook executed before the component is destroyed.
     * Not really fired now, don't know why...
     * Action is also performed in window.onbeforeunload below.
     */
    onBeforeUnmount(() => {
      // Delete the timer interval used to capture the use of the sliders
      clearInterval(timerInterval);
    });

    /**
     * Saves the data to a file on the server.
     * Updates the end time and duration of the VCM session in the data object.
     * Converts the data object to JSON format and saves it as a text file.
     */
    const saveDataToFile = async () => {
      // End of app use
      const endTimeApp = new Date();

      // Update values in the dictionary
      data.value.startTimeApp = startTimeApp.value;
      data.value.endTimeApp = endTimeApp;
      data.value.duration_ms = calculateDuration(startTimeApp.value, endTimeApp);
      data.value.slider1_value = slider1.value;
      data.value.slider2_value = slider2.value;

      // Make the JSON object to send to server
      const jsonData = JSON.stringify(data.value, null, 2);

      // If in dev mode, save to local/client/dev computer (for data validation purpose)
      // MAKE SURE TO MAKE FALSE BEFORE COMPILING/BUILDING !!!!!
      if(isDevMode) {
        const blob = new Blob([jsonData], { type: "application/json" });

        // Save to client-side (for testing)
        saveAs(blob, "data_test.json");

        // Redirect to returnURL
        window.location.href = data.value.returnUrl;
      } else {
        try {
          const response = await fetch('save_data.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: jsonData
            // This limits the JSON files to be 64KB or less, otherwise it stops... so better not use this
            //keepalive: true
          });

          // If request (saving data) succeeded
          if (response.ok) {
            // Redirect to survey
            window.location.href = data.value.returnUrl;
          } else {
            console.error('Server returned an error status');
          }
        } catch (error) {
          console.error('Network error occurred:', error);
        }
      }
    }

    /**
     * Exposes the method saveDataToFile to the App.vue parent
     * Might not be the best approach, but has to do for the time being
     */
    defineExpose({ saveDataToFile });

    // Register the window.onbeforeunload event to clear the timer interval used to capture the use of the sliders
    window.onbeforeunload = () => {
      // Delete the timer interval used to capture the use of the sliders
      clearInterval(timerInterval);
    };

    let interval = 100;
    let currentStep = 0;

    // Set up a timer to check and reset activeSlider every second
    const timerInterval = setInterval(() => {
      currentStep++;

      graph.value.push({
        time_ms: (currentStep * interval),
        active_slider: activeSlider.value,
        slider1_value: slider1.value,
        slider2_value: slider2.value
      });
    }, interval);

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
      activateSlider,
      deactivateSlider,
      updateText1,
      updateTextCenter,
      updateText2,
      updateText3,
      updateText4,
      handleInput1,
      handleInput2,
      saveDataToFile,
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
