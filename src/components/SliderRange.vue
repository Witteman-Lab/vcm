<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col order-sm="first">
        <div class="d-flex flex-column">
          <div class="d-flex justify-space-between">
            <div class="font-weight-regular">Show thumb</div>
            <div class="font-weight-regular">Show thumb</div>
          </div>
          <div class="colored-box1 mb-2">
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
              <div class="font-weight-regular text-center">
                Show thumb when using slider
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
              <div class="font-weight-regular text-center">
                Show thumb when using slider
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

export default {
  components: {
    VerticalProgressBar,
  },
  setup() {
    const slider1 = ref(50);
    const slider2 = ref(50);

    const choice1 = ref(slider1.value);
    const choice2 = ref(slider2.value);

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
    };
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
</style>