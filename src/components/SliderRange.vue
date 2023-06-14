<template>
  <div class="d-flex flex-column">
    <div>
      <div class="text-caption">Show thumb when using slider</div>
      <v-slider v-model="slider1" thumb-label></v-slider>
    </div>

    <div>
      <div class="text-caption">Show thumb when using slider</div>
      <v-slider v-model="slider2" thumb-label></v-slider>
    </div>
    <vertical-progress-bar
      :choice1="choice1"
      :choice2="choice2"
    ></vertical-progress-bar>
  </div>
</template>

<script>
import VerticalProgressBar from "./VerticalProgressBar.vue";
export default {
  components: {
    VerticalProgressBar,
  },
  data() {
    return {
      slider1: 50,
      slider2: 50,
    };
  },
  computed: {
    choice1() {
      return this.slider1;
    },
    choice2() {
      return this.slider2;
    },
  },
  watch: {
    slider1(newValue) {
      this.slider2 = 100 - newValue;
    },
    slider2(newValue) {
      this.slider1 = 100 - newValue;
    },
  },
};
</script>