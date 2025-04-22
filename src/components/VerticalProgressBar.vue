<template>
  <v-container
    class="d-flex flex-column align-center"
    style="width: fit-content"
  >
    <v-container
      style="width: 250px; height: auto;"
      fluid
      class="vertical-progress-container"
    >
      <div class="d-flex flex-column">
        <div class="mb-12">
          <v-progress-linear
            v-model="value1"
            color="#398064"
            height="80"
            class="progressBar"
          ></v-progress-linear>
        </div>
        <v-spacer class="mb-12"></v-spacer>
        <div>
          <v-progress-linear
            v-model="value2"
            color="#cd9367"
            height="80"
            class="progressBar"
          >
          </v-progress-linear>
        </div>
      </div>
    </v-container>
    <div style="width: 100%; height: auto" class="d-flex justify-space-between mb-2" >
      <div class="font-weight-regular w-50 my-n6 d-flex align-center justify-center">
        <v-textarea
          dense
          hide-details
          class="input1 text-center"
          v-model="option1"
          variant="plain"
          ref="input1"
          @click="selectAllText('input1')"
          @change="emitInput1"
          style="width: auto; text-align: center; padding-right: 10px; padding-left: 10px;"
        ></v-textarea>
      </div>
      <div class="font-weight-regular w-50 my-n6 d-flex align-center justify-center">
        <v-textarea
          dense
          hide-details
          class="input2 text-center"
          v-model="option2"
          variant="plain"
          ref="input2"
          @click="selectAllText('input2')"
          @change="emitInput2"
          style="width: auto; text-align: center; padding-right: 10px; padding-left: 10px;"
        ></v-textarea>
      </div>
    </div>
    <div class="d-flex justify-center" v-if="value1 !== 50">
      <v-chip variant="outlined" :color="value1 > 50 ? '#398064' : '#cd9367'">
        <b>{{ value1 > 50 ? option1 : option2 }}&nbsp;</b>{{ result }}
      </v-chip>
    </div>
    <div class="d-flex justify-center hidden">
      <v-chip variant="outlined" :color="value1 > 50 ? '#398064' : '#cd9367'">
        <b>{{ value1 > 50 ? option1 : option2 }}&nbsp;</b>{{ result }}
      </v-chip>
    </div>
  </v-container>
</template>

<script>
import { ref, watch, getCurrentInstance } from "vue";

export default {
  /**
   * Props:
   * - value1: The first input value (Type: Number, Required: true)
   * - value2: The second input value (Type: Number, Required: true)
   * - result: The result string (Type: String, Required: true)
   */
  props: {
    value1: {
      type: Number,
      required: true,
    },
    value2: {
      type: Number,
      required: true,
    },
    result: {
      type: String,
      required: true,
    },
    leftBarText: {
      type: String,
      required: true,
    },
    rightBarText: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const value1 = ref(props.value1);
    const value2 = ref(props.value2);
    const option1 = ref(props.leftBarText);
    const option2 = ref(props.rightBarText);
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

    watch(
      () => props.leftBarText,
      (newVal) => {
        option1.value = newVal;
      }
    );

    watch(
      () => props.rightBarText,
      (newVal) => {
        option2.value = newVal;
      }
    );


    // Get the current Vue component instance
    const instance = getCurrentInstance();
    // Emit input1 value to the parent component
    const emitInput1 = () => {
      instance.emit("input1", option1.value);
    };
    // Emit input2 value to the parent component
    const emitInput2 = () => {
      instance.emit("input2", option2.value);
    };
    return { value1, value2, option1, option2, emitInput1, emitInput2 };
  },
  methods: {
    /**
     * Method: selectAllText
     * Description: Selects all text in the referenced element.
     * @param {string} refName - The name of the ref referencing the element.
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
.hidden {
  visibility: hidden;
}
.vertical-progress-container {
  transform: rotate(-90deg);
}
.input1:deep(input) {
  color: #398064;
}
.input2:deep(input) {
  color: #cd9367;
}
</style>

