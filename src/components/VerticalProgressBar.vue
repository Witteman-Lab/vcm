<template>
  <v-container class="d-flex flex-column align-center">
    <v-container style="width: 250px" fluid class="vertical-progress-container">
      <div class="d-flex flex-column">
        <div class="mb-12">
          <v-progress-linear
            v-model="value1"
            color="#410e73"
            height="80"
            class="progressBar"
          ></v-progress-linear>
        </div>
        <v-spacer class="mb-12"></v-spacer>
        <div>
          <v-progress-linear
            v-model="value2"
            color="#a8a873"
            height="80"
            class="progressBar"
          >
          </v-progress-linear>
        </div>
      </div>
    </v-container>
    <div style="width: 288px" class="d-flex justify-space-between mb-6 px-6">
      <div class="font-weight-regular w-25 my-n6">
        <v-text-field
          class="input1"
          v-model="option1"
          variant="plain"
          ref="input1"
          @click="selectAll1"
        ></v-text-field>
      </div>
      <div class="font-weight-regular w-25 my-n6">
        <v-text-field
          class="input2"
          v-model="option2"
          variant="plain"
          ref="input2"
          @click="selectAll2"
        ></v-text-field>
      </div>
    </div>
    <div class="d-flex justify-center" v-if="value1 !== 50">
      <v-chip variant="outlined" :color="value1 > 50 ? '#410e73' : '#a8a873'">
        <b>{{ value1 > 50 ? option1 : option2 }}&nbsp;</b>fits best with what
        matters to you
      </v-chip>
    </div>
  </v-container>
</template>
  
<script>
import { ref, watch } from "vue";

export default {
  props: {
    value1: {
      type: Number,
      required: true,
    },
    value2: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const value1 = ref(props.value1);
    const value2 = ref(props.value2);
    const option1 = ref("Option 1");
    const option2 = ref("Option 2");
    // Watch the prop values for changes and update the refs accordingly
    watch(
      () => props.value1,
      (newValue) => {
        value1.value = newValue;
      }
    );

    watch(
      () => props.value2,
      (newValue) => {
        value2.value = newValue;
      }
    );
    return { value1, value2, option1, option2 };
  },
  methods: {
    selectAll1() {
      this.$refs.input1.select();
    },
    selectAll2() {
      this.$refs.input2.select();
    },
  },
};
</script>

<style scoped lang="scss">
.vertical-progress-container {
  transform: rotate(-90deg);
}
.input1:deep(input) {
  color: #410e73;
}
.input2:deep(input) {
  color: #a8a873;
}
</style>

