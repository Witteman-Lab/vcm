<template>
  <v-container fluid :class="width > 426 ? 'mx-8 pt-16' : 'mt-n16'">
    <v-row no-gutters>
      <v-col order-sm="first">
        <div class="d-flex flex-column">
          <div class="d-flex text-h5 font-weight-bold title">
            What matters to you
          </div>
          <div
            v-if="width > 426"
            class="d-flex text-body text-justify font-weight-light"
          >
            Before you make a choice between the two options, please take a
            moment to consider what matters most to you. Use the sliders below
            while you consider your feelings. Remember that there are no wrong
            answers. <br />Text can be modified by clicking on it.
          </div>
          <div
            v-if="width < 426"
            class="d-flex text-body text-justify font-weight-light"
          >
            <v-btn color="#00d1b2" class="white-text" @click="dialog = true"
              >Show Instructions</v-btn
            >
            <v-dialog v-model="dialog" width="auto">
              <v-card>
                <v-card-text>
                  Before you make a choice between the two options, please take
                  a moment to consider what matters most to you. Use the sliders
                  below while you consider your feelings. Remember that there
                  are no wrong answers. <br />Text can be modified by clicking
                  on it.
                </v-card-text>
                <v-card-actions>
                  <v-btn color="#00d1b2" block @click="dialog = false"
                    >Close Dialog</v-btn
                  >
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
                @click="selectAll1"
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
                @click="selectAll2"
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
                  @click="selectAll3"
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
                  @click="selectAll4"
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
          ></vertical-progress-bar>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VerticalProgressBar from "./VerticalProgressBar.vue";
import { ref, watch } from "vue";
import { useWindowSize } from "@vueuse/core";

export default {
  components: {
    VerticalProgressBar,
  },
  setup() {
    const slider1 = ref(50);
    const slider2 = ref(50);
    const text1 = ref("Doesn’t matter at all");
    const text2 = ref("Matters a lot");
    const text3 = ref("Reason(s) to choose option 1");
    const text4 = ref("Reason(s) to choose option 2");
    const choice1 = ref(slider1.value);
    const choice2 = ref(slider2.value);
    const { width, height } = useWindowSize();
    const dialog = ref(false);

    watch(slider1, (newValue) => {
      slider2.value = 100 - newValue;
    });

    watch(slider2, (newValue) => {
      slider1.value = 100 - newValue;
    });

    return {
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
    };
  },
  methods: {
    selectAll1() {
      this.$refs.input1.select();
    },
    selectAll2() {
      this.$refs.input2.select();
    },
    selectAll3() {
      this.$refs.input3.select();
    },
    selectAll4() {
      this.$refs.input4.select();
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